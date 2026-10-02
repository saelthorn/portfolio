// ---------------------------------------------------------------
// Project data — edit this array to add/update projects. Each
// project renders both its row in the Projects list and its
// case-study modal from this single source.
//   slug      – used for the shareable #project= URL, keep unique
//   cat       – 'uxui' | 'level' | 'game' | 'graphic'
//   catLabel  – text shown for the category
//   status    – 'ready' | 'draft' | 'in-dev'
//   summary   – one-line description shown in the list + modal
//   overview  – short case-study paragraph
//   role      – your role on the project
//   tools     – tools/stack used
//   image     – optional path e.g. "assets/mithrim.png"; falls
//               back to a generated placeholder if omitted
//   sections  – optional extra case-study sections:
//               { title, body, image | images, video | videos, caption }
//               body and media are each optional. Images and videos can
//               be mixed freely; video type is auto-detected from the
//               file extension (.mp4/.webm/.ogg/.mov), or set explicitly
//               with { src, type: 'video' }.
// ---------------------------------------------------------------
const PROJECTS = [
  {
    slug: 'mithrim', name: 'MITHRIM', cat: 'game', catLabel: 'GAME DEV', status: 'in-dev',
    summary: 'DnD 5e-inspired roguelike, solo-built in Python/Pygame',
    overview: 'A solo-developed roguelike drawing on DnD 5e mechanics, built from the ground up in Python and Pygame. Covers a substantial codebase of entities, combat, and systems.',
    role: 'Game Developer,\n\n Gameplay Programmer, \n\n Assets Designer, \n\n UX/UI Designer', tools: 'Python, Pygame, Figma',
    image: 'assets/game/mith.png',
    sections: [
      {
        video: 'assets/game/mithrim_gameplay.mp4',
        title: 'The Challenge',
        body: 'The main challenge was creating a game that felt like a cohesive RPG rather than simply a collection of mechanics. \n\nEarly versions focused heavily on combat and item-based progression. As development continued, the project expanded toward deeper character progression, environmental interaction, AI behaviors, exploration, and a more reactive world.'
      },
      {
        title: 'Design & Development',
        body: 'I designed and implemented the game\'s core systems, including: \n\n -Turn-based combat with attacks, critical hits, status effects, saving throws, and special abilities.\n\n -D&D-inspired progression with classes, equipment, abilities, and character development.\n\n -Procedural generation for dungeons and overworld environments.\n\n -Monster AI with pathfinding, detection, ranged attacks, and different behavioral patterns.\n\n -Environmental systems including traps, hazards, lighting, line-of-sight, hunger, resting, and exploration.\n\n -Pixel-art assets created specifically for the project.\n\n The game grew to include 80+ entities, covering player options, monsters, NPCs, and other interactive elements.'
      },
      {
        title: 'Level Design',
        image: 'assets/game/mithrim_screenshot1.png', caption: 'Combat Encounter in Mithrim, showing a player character and his companions being ambushed by Giant Spiders.',
        body: 'A major focus of Mithrim became the relationship between environment and gameplay. \n\n Rather than treating levels as simple spaces for combat, environments were designed to create tactical situations through: \n\n Terrain → Positioning → Visibility → Enemy Behavior → Player Decisions \n\n Narrow corridors, open rooms, environmental hazards, lighting, enemy placement, and points of interest all influence how encounters unfold.'
      },
      {
        title: 'Result',
        body: 'Mithrim evolved from a small roguelike experiment into a larger RPG-focused project combining gameplay programming, procedural generation, level design, AI, UI, and environmental design. \n\n The project continues to serve as a practical demonstration of designing and implementing interconnected game systems from the ground up.'
      }
    ]
  },
  {
    slug: 'ukayed', name: 'UKAYED', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'Secondhand clothing e-commerce concept — full user flows',
    overview: 'A culturally grounded secondhand clothing e-commerce concept, covering wireframes, prototypes, and full user flows for both app and web.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/ukayed.png',
  },
  {
    slug: 'bikeplace', name: 'BIKEPLACE', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'An e-commerce bikeshop website concept with full user flows',
    overview: 'A concept for a bikeshop e-commerce website, covering wireframes, prototypes, and full user flows.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/bikeplace.png'
  },
  {
    slug: 'skyline', name: 'SKYLINE', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'A single page blog concept for GTR skyline enthusiasts — full user flows.',
    overview: 'A single-page blog concept designed for Nissan Skyline GT-R enthusiasts, focusing on automotive culture, builds, history, and community. The project explores the experience from initial wireframes to interactive prototypes, with complete user flows showing how users discover, read, and navigate content.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/skyline.png'
  },
  {
    slug: 'learnease', name: 'LEARN EASE', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'An AI-powered to-do app concept for students — full user flows.',
    overview: 'An AI-powered to-do app concept designed for students to organize tasks, manage their workload, and improve learning. The project explores the experience from initial wireframes to interactive prototypes, with full user flows showing how students create, prioritize, and complete tasks.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/learn.png'
  },
  {
    slug: 'adventurers guild', name: 'ADVENTURERS GUILD', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'A concept for a fantasy guild management app — full user flows.',
    overview: 'A fantasy guild management app concept designed to help adventurers manage quests, parties, members, and guild activities. The project covers the design process from initial wireframes to interactive prototypes, with full user flows demonstrating how users navigate and manage their guild.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/advent.png'
  },
  {
    slug: 'antho b.', name: 'ANTHO B.', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'A e-commerce concept for a flowershop — full user flows.',
    overview: 'An e-commerce concept for a flower shop, designed to make browsing, selecting, and ordering floral arrangements simple and intuitive. The project covers the design process from initial wireframes to interactive prototypes, with full user flows demonstrating the shopping and checkout experience.',
    role: 'UX/UI Designer', tools: 'Figma',
    image: 'assets/uxui/antho.png'
  },
  {
    slug: 'shedungent', name: 'SHEDUNGENT', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A solo work for castle/dungeon in the Wrothgarian Mts. in TESII:Daggerfall',
    overview: 'A castle and dungeon environment set in the Wrothgarian Mountains of The Elder Scrolls II: Daggerfall, designed with a focus on environmental storytelling, level design, and atmospheric world-building. The project explores the use of architecture, clutter, layout, and visual details to create a believable and immersive fantasy location.',
    role: 'Level Designer', tools: 'Unity',
    image: 'assets/level/shed.png'
  },
  {
    slug: 'orsinium', name: 'ORSINIUM', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A team project of revamping Orsinium City in TESII:Daggerfall',
    overview: 'A collaborative project to recreate the city of Orsinium in The Elder Scrolls II: Daggerfall, focusing on level design, environmental storytelling, and historical accuracy. The project involved designing the city layout, buildings, and interiors to reflect the culture and history of the Orcs in Tamriel.',
    role: 'Level Designer', tools: 'Unity',
    image: 'assets/level/orsinium.png'
  },
  {
    slug: 'horn', name: 'KNIGHTS OF THE HORN', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A team project of revamping Knights of the Horn Faction in TESII:Daggerfall',
    overview: 'A collaborative project to redesign the Knights of the Horn faction in The Elder Scrolls II: Daggerfall, focusing on level design and faction lore. The project involved creating new interiors, layouts, and environmental storytelling elements to enhance the player experience.',
    role: 'Level Designer', tools: 'Unity',
    image: 'assets/level/knightshorn.png'
  },
  {
    slug: 'dbrotherhood', name: 'DARK BROTHERHOOD', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A team project of revamping Dark Brotherhood Guild in TESII:Daggerfall',
    overview: 'A collaborative project to redesign the Dark Brotherhood Guild in The Elder Scrolls II: Daggerfall, focusing on level design and faction lore. The project involved creating new interiors, layouts, and environmental storytelling elements to enhance the player experience.',
    role: 'Level Designer', tools: 'Unity',
    image: 'assets/level/dbrotherhood.png'
  },
  {
    slug: 'ida', name: 'IDA CITY', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/level/ida.png'
  },
  {
    slug: 'panama', name: 'PANAMA', cat: 'graphic', catLabel: 'GRAPHIC DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/graphic/panama.png'
  },
  {
    slug: 'rekindle', name: 'REKINDLE', cat: 'graphic', catLabel: 'GRAPHIC DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/graphic/rekindle.png'
  },
  {
    slug: 'house', name: 'RENOVATE', cat: 'graphic', catLabel: 'GRAPHIC DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/graphic/house.png'
  },
  {
    slug: 'invaders', name: 'UNWELCOME INVADERS', cat: 'graphic', catLabel: 'GRAPHIC DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/graphic/invaders.png'
  },
  {
    slug: 'cdo', name: 'HISTORY OF CDO', cat: 'graphic', catLabel: 'GRAPHIC DESIGN', status: 'ready',
    summary: 'A solo work level design for Bad Business a shooter game in Roblox',
    overview: 'A solo project to design a level for the game "Bad Business" in Roblox, focusing on creating an engaging and balanced environment for players. The project involved designing the layout, cover points, and flow of the level to enhance gameplay and player experience.',
    role: 'Level Designer', tools: 'Roblox Studio',
    image: 'assets/graphic/cdoc.png'
  },
];

// Placeholder projects — swap in real details as they're ready.
const CATEGORY_COUNTS = { uxui: 6, level: 5, graphic: 5 };
const CATEGORY_LABELS = { uxui: 'UX/UI', level: 'LEVEL DESIGN', graphic: 'GRAPHIC DESIGN' };
Object.entries(CATEGORY_COUNTS).forEach(([cat, count]) => {
  const already = PROJECTS.filter(p => p.cat === cat).length;
  for (let i = already + 1; i <= count; i++) {
    PROJECTS.push({
      slug: `${cat}-${i}`, name: `${CATEGORY_LABELS[cat]} PROJECT ${String(i).padStart(2, '0')}`,
      cat, catLabel: CATEGORY_LABELS[cat], status: 'draft',
      summary: 'Add title + description', overview: 'Add case-study overview, role, and outcome here.',
      role: '—', tools: '—'
    });
  }
});

function placeholderFor(name, cat) {
  const colors = { uxui: '#33ff77', level: '#4de8ff', game: '#ffffff', graphic: '#ffe066' };
  const c = colors[cat] || '#ffffff';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'>
    <rect width='100%' height='100%' fill='#0000AA'/>
    <rect x='4' y='4' width='312' height='192' fill='none' stroke='${c}' stroke-width='2'/>
    <text x='50%' y='46%' fill='${c}' font-family='monospace' font-size='18' text-anchor='middle'>${name}</text>
    <text x='50%' y='60%' fill='${c}' font-family='monospace' font-size='11' text-anchor='middle' opacity='0.75'>${cat.toUpperCase()}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// ---------------------------------------------------------------
// Render the project list from PROJECTS
// ---------------------------------------------------------------
const projectList = document.getElementById('projectList');
PROJECTS.forEach(p => {
  const row = document.createElement('div');
  row.className = 'proj-row';
  row.dataset.cat = p.cat;
  row.dataset.slug = p.slug;
  row.tabIndex = 0;
  row.innerHTML = `
    <div class="leader">
      <span class="label">${p.name}</span><span class="fill"></span>
      <span class="val ${p.status === 'ready' ? 'status-ready' : p.status === 'in-dev' ? 'status-in-dev' : 'status-draft'}">${p.catLabel}</span>
    </div>
    <p class="desc-line">${p.summary}</p>`;
  projectList.appendChild(row);
});
const projRows = document.querySelectorAll('.proj-row');

// ---------------------------------------------------------------
// Boot loader
// ---------------------------------------------------------------
(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { loader.remove(); return; }
  document.body.style.overflow = 'hidden';
  const lines = loader.querySelectorAll('.loader-line');
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  let i = 0;
  const timer = setInterval(() => {
    if (i < lines.length) {
      lines[i].classList.add('show');
      i++;
      const p = Math.round((i / lines.length) * 100);
      fill.style.width = p + '%';
      pct.textContent = p + '%';
    } else {
      clearInterval(timer);
      setTimeout(() => {
        loader.classList.add('hide');
        document.body.style.overflow = '';
        setTimeout(() => loader.remove(), 450);
      }, 300);
    }
  }, 180);
})();

// ---------------------------------------------------------------
// Mail form
// ---------------------------------------------------------------
document.getElementById('sendBtn').addEventListener('click', () => {
  const val = document.getElementById('visitorEmail').value.trim();
  const subject = encodeURIComponent('Hello from your portfolio');
  const body = encodeURIComponent(val ? `Reply to: ${val}` : '');
  window.location.href = `mailto:ladanan.jeromehal@gmail.com?subject=${subject}&body=${body}`;
});

// ---------------------------------------------------------------
// Hover / focus image preview
// ---------------------------------------------------------------
const preview = document.getElementById('imgPreview');
const previewImg = document.getElementById('previewImg');

function projectFor(row) {
  return PROJECTS.find(p => p.slug === row.dataset.slug);
}

projRows.forEach(row => {
  const p = projectFor(row);
  const src = p.image || placeholderFor(p.name, p.cat);

  const position = (x, y) => {
    let left = x + 20, top = y + 20;
    if (left + 250 > window.innerWidth) left = x - 260;
    if (top + 180 > window.innerHeight) top = y - 190;
    preview.style.left = left + 'px';
    preview.style.top = top + 'px';
  };

  const fallback = placeholderFor(p.name, p.cat);
  const setSrc = () => {
    previewImg.onerror = () => { previewImg.onerror = null; previewImg.src = fallback; };
    previewImg.src = src;
  };

  row.addEventListener('mouseenter', (e) => {
    setSrc();
    preview.classList.add('show');
    position(e.clientX, e.clientY);
  });
  row.addEventListener('mousemove', (e) => position(e.clientX, e.clientY));
  row.addEventListener('mouseleave', () => preview.classList.remove('show'));
  row.addEventListener('focus', () => {
    const r = row.getBoundingClientRect();
    setSrc();
    preview.classList.add('show');
    position(r.right, r.top);
  });
  row.addEventListener('blur', () => preview.classList.remove('show'));
});

// ---------------------------------------------------------------
// Case-study modal
// ---------------------------------------------------------------
(function () {
  const modal = document.getElementById('projectModal');
  const modalImgWrap = document.getElementById('modalImgWrap');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalSummary = document.getElementById('modalSummary');
  const modalCat = document.getElementById('modalCat');
  const modalStatus = document.getElementById('modalStatus');
  const modalRole = document.getElementById('modalRole');
  const modalTools = document.getElementById('modalTools');
  const modalOverview = document.getElementById('modalOverview');
  const modalExtra = document.getElementById('modalExtra');
  const modalClose = document.getElementById('modalClose');

  // A section can include images and/or videos in any of these ways:
  //   image: 'assets/x.png'                       (+ optional caption: '...')
  //   images: ['assets/a.png', 'assets/b.png']
  //   images: [{ src: 'assets/a.png', caption: '...', alt: '...' }, ...]
  //   video: 'assets/x.mp4'                        (+ optional caption)
  //   videos: ['assets/a.mp4', { src: 'assets/b.mp4', caption: '...' }]
  // Media renders after the section text, images and videos mixed in the
  // order given; a missing file is skipped quietly.
  const VIDEO_EXT = /\.(mp4|webm|ogg|ogv|mov)(\?.*)?$/i;
  function mediaType(item) {
    return item.type || (VIDEO_EXT.test(item.src) ? 'video' : 'image');
  }
  function sectionMedia(sec) {
    const list = [];
    if (sec.image) list.push({ src: sec.image, caption: sec.caption });
    (sec.images || []).forEach(item => {
      list.push(typeof item === 'string' ? { src: item } : item);
    });
    if (sec.video) list.push({ src: sec.video, caption: sec.caption, type: 'video' });
    (sec.videos || []).forEach(item => {
      list.push(typeof item === 'string' ? { src: item, type: 'video' } : { type: 'video', ...item });
    });
    return list.map(item => ({ ...item, type: mediaType(item) }));
  }

  function renderExtraSections(project) {
    modalExtra.innerHTML = '';
    (project.sections || []).forEach(sec => {
      const wrap = document.createElement('div');
      wrap.className = 'modal-section';
      const h = document.createElement('h3');
      h.textContent = sec.title;
      wrap.appendChild(h);

      (sec.body ? sec.body.split('\n\n') : []).forEach(para => {
        const p = document.createElement('p');
        p.textContent = para;
        wrap.appendChild(p);
      });

      const media = sectionMedia(sec);
      if (media.length) {
        const gallery = document.createElement('div');
        gallery.className = 'section-gallery' + (media.length === 1 ? ' single' : '');
        media.forEach(item => {
          const fig = document.createElement('figure');
          fig.className = 'section-fig';
          let el;
          if (item.type === 'video') {
            el = document.createElement('video');
            el.src = item.src;
            el.controls = true;
            el.playsInline = true;
            el.preload = 'metadata';
            if (item.poster) el.poster = item.poster;
            el.addEventListener('error', () => {
              fig.remove();
              if (!gallery.children.length) gallery.remove();
            });
          } else {
            el = document.createElement('img');
            el.src = item.src;
            el.alt = item.alt || (project.name + ' \u2014 ' + sec.title);
            el.loading = 'lazy';
            el.onerror = () => {
              fig.remove();
              if (!gallery.children.length) gallery.remove();
            };
          }
          fig.appendChild(el);
          if (item.caption) {
            const cap = document.createElement('figcaption');
            cap.textContent = item.caption;
            fig.appendChild(cap);
          }
          gallery.appendChild(fig);
        });
        wrap.appendChild(gallery);
      }

      modalExtra.appendChild(wrap);
    });
  }
  let lastTrigger = null;

  function openModal(row, animate) {
    lastTrigger = row;
    const p = projectFor(row);
    const src = p.image || placeholderFor(p.name, p.cat);

    modalTitle.textContent = p.name;
    modalSummary.textContent = p.summary;
    modalCat.textContent = p.catLabel;
    modalStatus.textContent = p.status === 'ready' ? 'READY' : p.status === 'in-dev' ? 'IN-DEVELOPMENT' : 'DRAFT';
    modalStatus.className = 'mv ' + (p.status === 'ready' ? 'status-ready' : p.status === 'in-dev' ? 'status-in-dev' : 'status-draft');
    modalRole.textContent = p.role;
    modalTools.textContent = p.tools;
    modalOverview.textContent = p.overview;
    renderExtraSections(p);
    const fallback = placeholderFor(p.name, p.cat);
    modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = fallback; };
    modalImg.src = src;

    const firstRect = preview.classList.contains('show')
      ? preview.getBoundingClientRect()
      : row.getBoundingClientRect();

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    preview.classList.remove('show');

    if (animate !== false) {
      requestAnimationFrame(() => {
        const lastRect = modalImgWrap.getBoundingClientRect();
        const dx = firstRect.left - lastRect.left;
        const dy = firstRect.top - lastRect.top;
        const sx = firstRect.width / lastRect.width;
        const sy = firstRect.height / lastRect.height;
        modalImgWrap.style.transformOrigin = 'top left';
        modalImgWrap.style.transition = 'none';
        modalImgWrap.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
        requestAnimationFrame(() => {
          modalImgWrap.style.transition = 'transform .35s cubic-bezier(.2,.8,.2,1)';
          modalImgWrap.style.transform = 'none';
        });
      });
    }

    history.replaceState(null, '', '#project=' + p.slug);
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (location.hash.startsWith('#project=')) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    if (lastTrigger) lastTrigger.focus();
  }

  projRows.forEach(row => {
    row.addEventListener('click', () => openModal(row, true));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(row, true); }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  if (location.hash.startsWith('#project=')) {
    const slug = location.hash.replace('#project=', '');
    const match = Array.from(projRows).find(r => r.dataset.slug === slug);
    if (match) openModal(match, false);
  }
})();

// ---------------------------------------------------------------
// Category filters
// ---------------------------------------------------------------
const filterButtons = document.querySelectorAll('#filters button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projRows.forEach(r => r.classList.toggle('hidden', !(f === 'all' || r.dataset.cat === f)));
  });
});


// ---------------------------------------------------------------
// Hours indicator (Philippines time)
// ---------------------------------------------------------------
(function () {
  const el = document.getElementById('hoursVal');
  if (!el) return;

  const SCHEDULE = {
    Mon: [9, 18], Tue: [9, 18], Wed: [9, 18], Thu: [9, 18], Fri: [8, 17],
    Sat: [14, 18],  Sun: [14, 18]
  };
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    weekday: 'short',
    hour: 'numeric', minute: '2-digit', second: '2-digit',
    hour12: false
  });

  function phNow() {
    const p = {};
    fmt.formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
    return {
      day: p.weekday,
      hour: parseInt(p.hour, 10) % 24,
      minute: p.minute,
      second: p.second
    };
  }

  function isOn(day, hour) {
    const [start, end] = SCHEDULE[day];
    if (start <= end) return hour >= start && hour <= end;   // same-day window
    if (hour >= start) return true;                           // tonight's overnight window
    const prev = DAYS[(DAYS.indexOf(day) + 6) % 7];           // spillover from yesterday
    const [ps, pe] = SCHEDULE[prev];
    return ps > pe && hour <= pe;
  }

  function update() {
    const { day, hour, minute, second } = phNow();
    const h12 = hour % 12 || 12;
    const ampm = hour < 12 ? 'AM' : 'PM';
    el.textContent = `${h12}:${minute}:${second} ${ampm} PST`;

    const on = isOn(day, hour);
    el.classList.toggle('hours-on', on);
    el.classList.toggle('hours-off', !on);
  }

  el.title = 'Mon–Fri 10PM–8AM · Sat–Sun 2AM–8AM (PH time)';
  update();
  setInterval(update, 1000);
})();