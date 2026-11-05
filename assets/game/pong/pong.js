(function () {
  'use strict';

  // ---- tuning (logical units; the canvas is always 800x450 internally) ----
  const W = 800, H = 450;
  const PADDLE_W = 12, PADDLE_H = 76, PADDLE_X = 28;
  const CPU_X = W - PADDLE_X - PADDLE_W;
  const BALL = 12;
  const WIN_SCORE = 7;
  const PLAYER_SPEED = 520;      // keyboard paddle speed (px/s)
  const PLAYER_FOLLOW = 1100;    // max speed when following mouse / finger
  const CPU_SPEED = 330;         // slower than the player on purpose
  const BALL_START = 340;        // px/s
  const BALL_MAX = 760;
  const BALL_GAIN = 1.06;        // speed-up per paddle hit
  const MAX_BOUNCE = Math.PI / 3.2;
  const SERVE_DELAY = 0.9;       // seconds
  const MAX_STEP = 1 / 120;      // physics sub-step so the ball can't tunnel

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  let canvas = null, ctx = null, sndBtn = null;
  let bound = false, running = false, raf = 0, lastT = 0;
  let scale = 1, ro = null;
  let C = {};

  let state = 'menu';            // menu | serve | play | paused | over
  let winner = '';
  const score = { p: 0, c: 0 };
  const player = { y: 0, flash: 0 };
  const cpu = { y: 0, aim: 0, flash: 0 };
  const ball = { x: 0, y: 0, vx: 0, vy: 0, speed: BALL_START };
  let serveTimer = 0, serveDir = 1;
  const keys = { up: false, down: false };
  let pointerY = null;
  let muted = true, actx = null;

  // landscape (touch devices): the game moves to a full-screen layer and, if the
  // phone is held in portrait, is rotated 90deg so it always plays landscape.
  let holder = null, home = null, exitBtn = null;
  let landscapeMode = false, rotated = false, fsTried = false;
  const isTouch = () => !!(window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches);

  // ---------------------------------------------------------------
  // Sound (off by default, toggle with M)
  // ---------------------------------------------------------------
  function beep(freq, dur) {
    if (muted) return;
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      const o = actx.createOscillator();
      const g = actx.createGain();
      const t = actx.currentTime;
      o.type = 'square';
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.04, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + dur);
    } catch (e) { /* audio is optional */ }
  }
  function renderSndLabel() {
    if (sndBtn) sndBtn.textContent = '[ M ] SOUND: ' + (muted ? 'OFF' : 'ON');
  }
  function setMuted(m) {
    muted = m;
    renderSndLabel();
    if (!muted) beep(660, 0.08);
  }

  // ---------------------------------------------------------------
  // Game state
  // ---------------------------------------------------------------
  function startServe() {
    ball.x = W / 2 - BALL / 2;
    ball.y = H / 2 - BALL / 2;
    ball.vx = ball.vy = 0;
    ball.speed = BALL_START;
    serveTimer = SERVE_DELAY;
    state = 'serve';
  }
  function launch() {
    const a = (Math.random() * 2 - 1) * (Math.PI / 7);
    ball.vx = Math.cos(a) * ball.speed * serveDir;
    ball.vy = Math.sin(a) * ball.speed;
    state = 'play';
  }
  function resetMatch() {
    score.p = score.c = 0;
    winner = '';
    player.y = cpu.y = (H - PADDLE_H) / 2;
    cpu.aim = 0;
    serveDir = Math.random() < 0.5 ? 1 : -1;
    startServe();
  }
  function pause() { if (state === 'play' || state === 'serve') state = 'paused'; }
  function resume() {
    if (state !== 'paused') return;
    state = (ball.vx === 0 && ball.vy === 0) ? 'serve' : 'play';
  }
  function toggle() {
    if (state === 'menu' || state === 'over') resetMatch();
    else if (state === 'paused') resume();
    else pause();
  }

  function point(who) {
    score[who]++;
    if (score[who] >= WIN_SCORE) {
      winner = who;
      state = 'over';
      ball.vx = ball.vy = 0;
      ball.x = W / 2 - BALL / 2;
      ball.y = H / 2 - BALL / 2;
      beep(who === 'p' ? 880 : 196, 0.35);
      return;
    }
    serveDir = who === 'p' ? 1 : -1;   // serve to whoever just lost the point
    beep(who === 'p' ? 740 : 220, 0.2);
    startServe();
  }

  function hits(px, py) {
    return ball.x < px + PADDLE_W && ball.x + BALL > px &&
           ball.y < py + PADDLE_H && ball.y + BALL > py;
  }
  function bounce(paddle, newX, dir) {
    const rel = clamp(((ball.y + BALL / 2) - (paddle.y + PADDLE_H / 2)) / (PADDLE_H / 2 + BALL / 2), -1, 1);
    ball.speed = Math.min(BALL_MAX, ball.speed * BALL_GAIN);
    const a = rel * MAX_BOUNCE;
    ball.vx = Math.cos(a) * ball.speed * dir;
    ball.vy = Math.sin(a) * ball.speed;
    ball.x = newX;
    paddle.flash = 0.08;
  }

  function stepBall(h) {
    ball.x += ball.vx * h;
    ball.y += ball.vy * h;

    if (ball.y <= 0) { ball.y = 0; ball.vy = Math.abs(ball.vy); beep(300, 0.04); }
    else if (ball.y + BALL >= H) { ball.y = H - BALL; ball.vy = -Math.abs(ball.vy); beep(300, 0.04); }

    if (ball.vx < 0 && hits(PADDLE_X, player.y)) {
      bounce(player, PADDLE_X + PADDLE_W, 1);
      cpu.aim = (Math.random() * 2 - 1) * PADDLE_H * 0.38;   // CPU aims slightly off each rally
      beep(520, 0.05);
    } else if (ball.vx > 0 && hits(CPU_X, cpu.y)) {
      bounce(cpu, CPU_X - BALL, -1);
      beep(420, 0.05);
    }

    if (ball.x + BALL < 0) point('c');
    else if (ball.x > W) point('p');
  }

  function moveCpu(dt) {
    let target;
    if (state === 'play' && ball.vx > 0) target = ball.y + BALL / 2 + cpu.aim - PADDLE_H / 2;
    else target = (H - PADDLE_H) / 2;
    const d = target - cpu.y;
    const m = CPU_SPEED * dt;
    if (Math.abs(d) > 4) cpu.y += clamp(d, -m, m);
    cpu.y = clamp(cpu.y, 0, H - PADDLE_H);
  }

  function update(dt) {
    if (state === 'paused') return;
    player.flash = Math.max(0, player.flash - dt);
    cpu.flash = Math.max(0, cpu.flash - dt);

    const dir = (keys.down ? 1 : 0) - (keys.up ? 1 : 0);
    if (dir) {
      player.y += dir * PLAYER_SPEED * dt;
    } else if (pointerY !== null) {
      const d = (pointerY - PADDLE_H / 2) - player.y;
      const m = PLAYER_FOLLOW * dt;
      player.y += clamp(d, -m, m);
    }
    player.y = clamp(player.y, 0, H - PADDLE_H);

    if (state === 'serve') {
      serveTimer -= dt;
      if (serveTimer <= 0) launch();
    } else if (state === 'play') {
      const n = Math.max(1, Math.ceil(dt / MAX_STEP));
      const h = dt / n;
      for (let i = 0; i < n && state === 'play'; i++) stepBall(h);
    }
    moveCpu(dt);
  }

  // ---------------------------------------------------------------
  // Drawing
  // ---------------------------------------------------------------
  function txt(s, x, y, size, color, doto) {
    ctx.font = '700 ' + size + 'px ' + (doto ? '"Doto", monospace' : '"JetBrains Mono", monospace');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = color;
    ctx.fillText(s, x, y);
  }
  function paddle(x, y, color, flash) {
    ctx.fillStyle = flash > 0 ? C.white : color;
    ctx.fillRect(x, Math.round(y), PADDLE_W, PADDLE_H);
  }
  function overlay(now) {
    ctx.globalAlpha = 0.88; ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
    const bw = 480, bh = 190, bx = (W - bw) / 2, by = (H - bh) / 2;
    ctx.fillStyle = C.bg; ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = C.white; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, bh);

    let title, tColor, l1, l2, blink = true;
    if (state === 'menu') {
      title = 'PONG.EXE'; tColor = C.green;
      l1 = 'FIRST TO ' + WIN_SCORE + ' WINS'; l2 = 'CLICK, TAP OR PRESS SPACE';
    } else if (state === 'paused') {
      title = 'PAUSED'; tColor = C.yellow;
      l1 = 'SPACE / CLICK: RESUME'; l2 = 'R: RESTART'; blink = false;
    } else {
      title = winner === 'p' ? 'YOU WIN' : 'CPU WINS';
      tColor = winner === 'p' ? C.green : C.red;
      l1 = 'FINAL SCORE  ' + score.p + ' : ' + score.c; l2 = 'CLICK OR SPACE: PLAY AGAIN';
    }
    txt(title, W / 2, by + 70, 46, tColor, true);
    txt(l1, W / 2, by + 112, 15, C.white);
    if (!blink || Math.floor(now / 500) % 2 === 0) txt(l2, W / 2, by + 150, 13, C.green);
  }
  function draw() {
    const now = performance.now();
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);

    // net
    ctx.globalAlpha = 0.6; ctx.fillStyle = C.dim;
    for (let y = 14; y < H - 14; y += 26) ctx.fillRect(W / 2 - 2, y, 4, 14);
    ctx.globalAlpha = 1;

    // scores
    txt(String(score.p), W / 2 - 90, 84, 64, C.green, true);
    txt(String(score.c), W / 2 + 90, 84, 64, C.cyan, true);
    txt('YOU', W / 2 - 90, 110, 12, C.dim);
    txt('CPU', W / 2 + 90, 110, 12, C.dim);

    paddle(PADDLE_X, player.y, C.green, player.flash);
    paddle(CPU_X, cpu.y, C.cyan, cpu.flash);

    const hidden = state === 'serve' && Math.floor(now / 140) % 2 === 0;
    if (!hidden) { ctx.fillStyle = C.white; ctx.fillRect(Math.round(ball.x), Math.round(ball.y), BALL, BALL); }

    if (state === 'menu' || state === 'paused' || state === 'over') overlay(now);
  }

  function frame(t) {
    if (!running) return;
    const dt = Math.min((t - lastT) / 1000, 1 / 30);
    lastT = t;
    update(dt);
    draw();
    raf = requestAnimationFrame(frame);
  }

  function resize() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.round(w * H / W);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    scale = canvas.width / W;
  }

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n, d) => cs.getPropertyValue(n).trim() || d;
    C = {
      bg: v('--bg', '#0000AA'), white: v('--white', '#ffffff'), green: v('--green', '#33ff77'),
      cyan: v('--cyan', '#4de8ff'), yellow: v('--yellow', '#ffe066'), red: v('--red', '#ff3333'),
      dim: v('--dim', '#a4aee4')
    };
  }

  // ---------------------------------------------------------------
  // Input
  // ---------------------------------------------------------------
  function onKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    if (document.activeElement !== canvas) return;   // only react while the game has focus

    const k = e.key;
    if (k === 'ArrowUp' || k === 'w' || k === 'W') { keys.up = true; pointerY = null; e.preventDefault(); }
    else if (k === 'ArrowDown' || k === 's' || k === 'S') { keys.down = true; pointerY = null; e.preventDefault(); }
    else if (k === ' ' || k === 'Spacebar' || k === 'Enter') { e.preventDefault(); if (!e.repeat) toggle(); }
    else if (k === 'p' || k === 'P') { if (!e.repeat && state !== 'menu' && state !== 'over') toggle(); }
    else if (k === 'r' || k === 'R') { if (!e.repeat) resetMatch(); }
    else if (k === 'm' || k === 'M') { if (!e.repeat) setMuted(!muted); }
  }
  function onKeyUp(e) {
    const k = e.key;
    if (k === 'ArrowUp' || k === 'w' || k === 'W') keys.up = false;
    else if (k === 'ArrowDown' || k === 's' || k === 'S') keys.down = false;
  }
  function onVisibility() { if (document.hidden) pause(); }

  function pointerToY(e) {
    if (landscapeMode && rotated) {
      // container is rotated 90deg clockwise with its origin at screen (innerWidth, 0)
      const ly = window.innerWidth - e.clientX;
      return (ly - canvas.offsetTop) * (H / canvas.offsetHeight);
    }
    const r = canvas.getBoundingClientRect();
    return (e.clientY - r.top) * (H / r.height);
  }
  function bindCanvas() {
    holder.addEventListener('pointerdown', (e) => {
      if (e.target.closest && e.target.closest('button')) return;
      if (!landscapeMode && e.target !== canvas) return;
      tryFullscreen();
      canvas.focus({ preventScroll: true });
      pointerY = pointerToY(e);
      if (e.pointerType !== 'mouse') { try { canvas.setPointerCapture(e.pointerId); } catch (_) {} }
      if (state === 'menu' || state === 'over') resetMatch();
      else if (state === 'paused') resume();
    });
    holder.addEventListener('pointermove', (e) => {
      if (e.target.closest && e.target.closest('button')) return;
      if (!landscapeMode && e.target !== canvas) return;
      pointerY = pointerToY(e);
    });
    canvas.addEventListener('blur', () => { keys.up = keys.down = false; pause(); });
    if (sndBtn) {
      sndBtn.addEventListener('mousedown', (e) => e.preventDefault());   // keep focus on the game
      sndBtn.addEventListener('click', () => setMuted(!muted));
    }
  }

  // ---------------------------------------------------------------
  // Landscape layout (touch devices)
  // ---------------------------------------------------------------
  function layout() {
    if (!landscapeMode || !holder) return;
    const vw = window.innerWidth, vh = window.innerHeight;
    rotated = vh > vw;                       // portrait phone -> rotate the game
    const cw = rotated ? vh : vw, ch = rotated ? vw : vh;
    const st = holder.style;
    st.width = cw + 'px'; st.height = ch + 'px'; st.top = '0';
    if (rotated) { st.left = vw + 'px'; st.transformOrigin = '0 0'; st.transform = 'rotate(90deg)'; }
    else { st.left = '0'; st.transform = 'none'; }
    const w = Math.min(cw, ch * W / H);
    canvas.style.width = w + 'px';
    canvas.style.height = (w * H / W) + 'px';
  }
  function onWinResize() { layout(); resize(); }

  function enterLandscape() {
    home = { parent: holder.parentNode, next: holder.nextSibling };
    document.body.appendChild(holder);       // escape any transformed ancestors
    holder.classList.add('landscape');
    exitBtn = document.createElement('button');
    exitBtn.type = 'button';
    exitBtn.className = 'game-exit';
    exitBtn.textContent = '[ X ] EXIT';
    exitBtn.addEventListener('click', () => {
      const mc = document.getElementById('modalClose');
      if (mc) mc.click();
    });
    holder.appendChild(exitBtn);
    landscapeMode = true;
    layout();
  }
  function leaveLandscape() {
    if (!landscapeMode) return;
    landscapeMode = false; rotated = false;
    if (exitBtn) { exitBtn.remove(); exitBtn = null; }
    holder.classList.remove('landscape');
    holder.removeAttribute('style');
    canvas.removeAttribute('style');
    if (home && home.parent) home.parent.insertBefore(holder, home.next);
    home = null;
    try {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      }
      if (window.screen && screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
    } catch (_) {}
  }
  // First tap: ask for real fullscreen + landscape lock (Android Chrome etc.).
  // iOS Safari refuses, which is fine: the CSS rotation above still works.
  function tryFullscreen() {
    if (!landscapeMode || fsTried) return;
    fsTried = true;
    try {
      const el = document.documentElement;
      const req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (!req) return;
      const p = req.call(el);
      Promise.resolve(p)
        .then(() => (screen.orientation && screen.orientation.lock) ? screen.orientation.lock('landscape') : null)
        .catch(() => {});
    } catch (_) {}
  }

  // ---------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------
  function close() {
    running = false;
    cancelAnimationFrame(raf);
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('resize', onWinResize);
    window.removeEventListener('orientationchange', onWinResize);
    if (ro) { ro.disconnect(); ro = null; }
    leaveLandscape();
    keys.up = keys.down = false;
    pointerY = null;
  }

  function open(container) {
    close();
    canvas = container.querySelector('canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    holder = container;
    sndBtn = container.querySelector('[data-pong-sound]');
    if (!bound) { bindCanvas(); bound = true; }
    fsTried = false;
    if (isTouch()) enterLandscape();

    readColors();
    if (document.fonts && document.fonts.load) {
      document.fonts.load('700 20px "JetBrains Mono"');
      document.fonts.load('700 64px "Doto"');
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('visibilitychange', onVisibility);
    if (window.ResizeObserver) { ro = new ResizeObserver(resize); ro.observe(canvas); }
    window.addEventListener('resize', onWinResize);
    window.addEventListener('orientationchange', onWinResize);

    resize();
    renderSndLabel();
    resetMatch();
    state = 'menu';
    running = true;
    lastT = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function focus() { if (canvas) canvas.focus({ preventScroll: true }); }

  window.halPong = { open, close, focus };
})();