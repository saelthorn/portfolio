// ---------------------------------------------------------------
// Project data — edit this array to add/update projects. Each
// project renders both its row in the Projects list and its
// case-study modal from this single source.
//   slug      – used for the shareable #project= URL, keep unique
//   cat       – 'uxui' | 'level' | 'game' | 'graphic'
//   catLabel  – text shown for the category
//   status    – 'ready' | 'draft'
//   summary   – one-line description shown in the list + modal
//   overview  – short case-study paragraph
//   role      – your role on the project
//   tools     – tools/stack used
//   image     – optional path e.g. "images/mithrim.jpg"; falls
//               back to a generated placeholder if omitted
// ---------------------------------------------------------------
const PROJECTS = [
  {
    slug: 'mithrim', name: 'MITHRIM', cat: 'game', catLabel: 'GAME DEV', status: 'ready',
    summary: 'DnD 5e-inspired roguelike, solo-built in Python/Pygame',
    overview: 'A solo-developed roguelike drawing on DnD 5e mechanics, built from the ground up in Python and Pygame. Covers a substantial codebase of entities, combat, and systems.',
    role: 'Solo developer', tools: 'Python, Pygame'
  },
  {
    slug: 'ukayed', name: 'UKAYED', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'Secondhand clothing e-commerce concept — full user flows',
    overview: 'A culturally grounded secondhand clothing e-commerce concept, covering wireframes, prototypes, and full user flows for both app and web.',
    role: 'UX/UI designer', tools: 'Figma'
  },
  {
    slug: 'envmod-unity', name: 'ENVIRONMENT MOD, UNITY', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'Collaborative Unity mod — multiple environments, on Nexus Mods',
    overview: 'Collaborative game mod work built with a small team in Unity. Multiple environments shipped, with notable downloads on Nexus Mods.',
    role: 'Level designer', tools: 'Unity'
  },
];

// Placeholder projects — swap in real details as they're ready.
const CATEGORY_COUNTS = { uxui: 6, level: 5, graphic: 5 };
const CATEGORY_LABELS = { uxui: 'UX/UI', level: 'LEVEL DESIGN', graphic: 'GRAPHIC' };
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
    <text x='50%' y='46%' fill='${c}' font-family='monospace' font-size='16' text-anchor='middle'>${name}</text>
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
      <span class="val ${p.status === 'ready' ? 'status-ready' : 'status-draft'}">${p.catLabel}</span>
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

  row.addEventListener('mouseenter', (e) => {
    previewImg.src = src;
    preview.classList.add('show');
    position(e.clientX, e.clientY);
  });
  row.addEventListener('mousemove', (e) => position(e.clientX, e.clientY));
  row.addEventListener('mouseleave', () => preview.classList.remove('show'));
  row.addEventListener('focus', () => {
    const r = row.getBoundingClientRect();
    previewImg.src = src;
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
  const modalClose = document.getElementById('modalClose');
  let lastTrigger = null;

  function openModal(row, animate) {
    lastTrigger = row;
    const p = projectFor(row);
    const src = p.image || placeholderFor(p.name, p.cat);

    modalTitle.textContent = p.name;
    modalSummary.textContent = p.summary;
    modalCat.textContent = p.catLabel;
    modalStatus.textContent = p.status === 'ready' ? 'READY' : 'DRAFT';
    modalStatus.className = 'mv ' + (p.status === 'ready' ? 'status-ready' : 'status-draft');
    modalRole.textContent = p.role;
    modalTools.textContent = p.tools;
    modalOverview.textContent = p.overview;
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