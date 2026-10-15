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
    summary: 'A Filipino secondhand fashion marketplace built around discovery and affordability.',
    overview: 'A secondhand clothing marketplace concept inspired by Filipino ukay-ukay culture. The platform connects buyers and sellers through curated collections, accessible pricing, and a shopping experience built around discovering unique pre-loved fashion.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/ukayed.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Create a digital shopping experience that captures the discovery-driven nature of ukay-ukay while making secondhand fashion easier to browse and purchase.'
      },
      {
        title: 'Design Approach',
        body: 'I explored a marketplace experience centered on curated collections, product discovery, and accessible pricing. The concept also incorporates a gradual price-reduction model, allowing listed items to decrease in price over time until reaching a seller-defined minimum.'
      },
      {
        title: 'Visual Direction',
        body: 'The design celebrates the variety of secondhand fashion through distinct collections, including sustainable fashion, Japanese punk, Filipino brands, and gorpcore. The goal is to make browsing feel like discovering a personal style rather than searching through a generic catalog.'
      },
      {
        title: 'Outcome',
        body: 'UKAYED explores how a familiar local shopping culture can be translated into a digital marketplace through curated discovery, flexible pricing, and a distinct visual identity.'
      }
    ]
  },
  {
    slug: 'bikeplace', name: 'BIKEPLACE', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'An e-commerce website concept for browsing and purchasing bicycles.',
    overview: 'A bicycle retail website concept designed to bring product discovery and online shopping into one cohesive experience.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/bikeplace.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Design an online bicycle shopping experience that helps customers navigate products, compare their options, and move through the purchasing journey without unnecessary friction.'
      },
      {
        title: 'Design Approach',
        body: 'I explored the structure of an e-commerce experience, focusing on product discovery, category navigation, product presentation, and the transition from browsing to checkout. The interface aims to make important product information easy to find.'
      },
      {
        title: 'User Flow',
        body: 'The proposed journey follows a straightforward path from entering the store and browsing bicycles to viewing a product and proceeding through the purchase flow. Wireframes and prototypes were used to explore the relationship between page structure and navigation.'
      },
      {
        title: 'Outcome',
        body: 'BikePlace serves as an exploration of e-commerce information architecture and interface design for a specialized retail category.'
      }
    ]
  },
  {
    slug: 'skyline',
    name: 'SKYLINE',
    cat: 'uxui',
    catLabel: 'UX/UI',
    status: 'ready',
    summary: 'A single-page automotive blog for Nissan Skyline GT-R enthusiasts.',
    overview: 'A single-page blog concept celebrating Nissan Skyline GT-R culture through automotive history, builds, and enthusiast-focused content.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/skyline.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Create an engaging editorial experience for automotive enthusiasts while presenting different types of content in a clear, visually cohesive layout.'
      },
      {
        title: 'Design Approach',
        body: 'I explored a single-page structure that organizes automotive content into a clear reading experience. Typography, imagery, spacing, and visual hierarchy help distinguish content sections while maintaining a consistent identity inspired by car culture.'
      },
      {
        title: 'Navigation & Content',
        body: 'The proposed layout guides readers through the page using a structured content hierarchy, making it easier to discover articles and explore different aspects of Skyline GT-R culture.'
      },
      {
        title: 'Outcome',
        body: 'Skyline demonstrates an editorial approach to web design, combining automotive visual identity with structured content presentation and a focused browsing experience.'
      }
    ]
  },
  {
    slug: 'learnease', name: 'LEARN EASE', cat: 'uxui', catLabel: 'UX/UI', status: 'draft',
    summary: 'An AI-powered task management concept for students.',
    overview: 'A student-focused productivity app concept exploring how task management and AI-assisted organization could help students structure their workload.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/learn.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Students often need to manage multiple assignments, deadlines, and responsibilities at once. The design challenge is to present these tasks in a way that feels organized and manageable.'
      },
      {
        title: 'Design Approach',
        body: 'I explored a task-management interface centered on creating tasks, organizing priorities, and tracking completion. AI-assisted functionality forms part of the concept for helping students organize their workload.'
      },
      {
        title: 'User Flow',
        body: 'The proposed flow follows the process of adding tasks, reviewing upcoming work, prioritizing responsibilities, and marking tasks as complete. Wireframes and prototypes help communicate how these actions fit together.'
      },
      {
        title: 'Outcome',
        body: 'Learn Ease explores how a focused task-management experience could support students in organizing their academic responsibilities.'
      }
    ]
  },
  {
    slug: 'adventurers-guild', name: 'ADVENTURERS GUILD', cat: 'uxui', catLabel: 'UX/UI', status: 'ready',
    summary: 'A fantasy-inspired guild management app concept.',
    overview: 'A fantasy-themed management app concept that brings the structure of an adventurers guild into a digital interface, focusing on quests, parties, members, and guild activities.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/advent.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Translate the familiar idea of a fantasy adventurers guild into a usable digital product, organizing multiple activities without losing the atmosphere of the setting.'
      },
      {
        title: 'Design Approach',
        body: 'I explored a themed interface for organizing quests, managing parties, viewing guild members, and navigating guild activities. The design balances fantasy-inspired presentation with clear navigation and recognizable interface patterns.'
      },
      {
        title: 'Information Architecture',
        body: 'The proposed structure groups related guild functions into distinct areas, helping users understand where to find quests, party information, and member details.'
      },
      {
        title: 'Outcome',
        body: 'Adventurers Guild explores how thematic visual design and structured information architecture can work together to create a cohesive fantasy-inspired product experience.'
      }
    ]
  },
  {
    slug: 'antho-b', name: 'ANTHO B.', cat: 'uxui', catLabel: 'UX/UI', status: 'draft',
    summary: 'An online flower shop concept for browsing and ordering floral arrangements.',
    overview: 'An e-commerce website concept for a flower shop, designed around presenting floral arrangements and guiding customers through the online ordering experience.',
    role: 'UX/UI Designer',
    tools: 'Figma',
    image: 'assets/uxui/antho.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Create an online storefront that presents floral arrangements attractively while making it straightforward for customers to browse products and place an order.'
      },
      {
        title: 'Design Approach',
        body: 'I explored a product-focused interface using imagery, typography, and visual hierarchy to communicate the character of the brand and help customers navigate the available arrangements.'
      },
      {
        title: 'Shopping Experience',
        body: 'The proposed user flow connects product discovery with product selection and checkout, aiming to keep the shopping journey clear and easy to follow.'
      },
      {
        title: 'Outcome',
        body: 'Antho B. explores the intersection of visual branding and e-commerce UX for a product category where presentation plays an important role in the buying experience.'
      }
    ]
  },
  {
    slug: 'shedungent', name: 'SHEDUNGENT', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A solo-designed castle and dungeon environment in the Wrothgarian Mountains.',
    overview: 'A fantasy environment inspired by The Elder Scrolls II: Daggerfall, set in the Wrothgarian Mountains. The project focuses on architectural composition, environmental storytelling, and the use of clutter and spatial layout to create an immersive location.',
    role: 'Level Designer, Environment Designer',
    tools: 'Unity',
    image: 'assets/level/shed.png',
    sections: [
      {
        title: 'Design Intent',
        body: 'The goal was to create a believable fantasy location that feels integrated into its mountainous setting. Rather than relying on architecture alone, the environment uses spatial composition, props, and environmental details to establish its identity.'
      },
      {
        title: 'Environment Design',
        body: 'I focused on arranging architectural elements, clutter, and environmental details to give the location a lived-in quality. The placement and density of objects help communicate the purpose of different spaces while reinforcing the atmosphere of an older fantasy world.'
      },
      {
        title: 'Spatial Composition',
        body: 'The layout and arrangement of spaces were approached with attention to navigation, visual interest, and transitions between areas. The goal was to make the environment feel cohesive while giving each space its own character.'
      },
      {
        title: 'Outcome',
        body: 'Shedungent serves as a personal exploration of fantasy environment design, combining architectural composition, spatial layout, and environmental storytelling within the Daggerfall setting.'
      }
    ]
  },
  {
    slug: 'orsinium', name: 'ORSINIUM', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A collaborative overhaul of Orsinium in The Elder Scrolls II: Daggerfall.',
    overview: 'A team project focused on revamping Orsinium, the Orcish city in The Elder Scrolls universe. The work explores city layout, architecture, and environmental design to create a more cohesive representation of the settlement.',
    role: 'Level Designer, Environment Designer',
    tools: 'Unity',
    image: 'assets/level/orsinium.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Reimagine an established fantasy location while respecting its identity and lore. The environment needed to feel like a cohesive settlement rather than a collection of disconnected buildings and spaces.'
      },
      {
        title: 'World & Environment Design',
        body: 'The project focuses on the arrangement of city spaces, buildings, and architectural elements to establish a recognizable identity. The design considers how the built environment communicates the character and culture of its inhabitants.'
      },
      {
        title: 'Collaboration',
        body: 'Working as part of a modding team, I contributed to the broader environmental overhaul, focusing on level design while coordinating with the shared direction of the project.'
      },
      {
        title: 'Outcome',
        body: 'Orsinium represents a collaborative environment-design effort that combines worldbuilding, architectural composition, and level design within an established game world.'
      }
    ]
  },
  {
    slug: 'horn', name: 'KNIGHTS OF THE HORN', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A team-based environmental overhaul of a Daggerfall faction.',
    overview: 'A collaborative modding project focused on revamping the Knights of the Horn faction in The Elder Scrolls II: Daggerfall through redesigned interiors, spatial layouts, and environmental details.',
    role: 'Level Designer, Environment Designer',
    tools: 'Unity',
    image: 'assets/level/knightshorn.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Develop environments that communicate the identity of an established faction while remaining consistent with Daggerfall’s fantasy setting and visual language.'
      },
      {
        title: 'Interior Design',
        body: 'I contributed to the redesign of faction-related spaces, considering room arrangement, architectural details, and environmental composition to give the interiors a stronger sense of purpose and identity.'
      },
      {
        title: 'Environmental Storytelling',
        body: 'The project explores how the arrangement of spaces and environmental details can reinforce a faction’s identity without relying entirely on written exposition.'
      },
      {
        title: 'Outcome',
        body: 'The project demonstrates my experience contributing to a shared level-design vision within an existing game and working within established worldbuilding constraints.'
      }
    ]
  },
  {
    slug: 'dbrotherhood', name: 'DARK BROTHERHOOD', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A collaborative redesign of the Dark Brotherhood guild in Daggerfall.',
    overview: 'A team-based overhaul project focused on redesigning Dark Brotherhood spaces in The Elder Scrolls II: Daggerfall, with an emphasis on interior layouts, atmosphere, and environmental storytelling.',
    role: 'Level Designer, Environment Designer',
    tools: 'Unity',
    image: 'assets/level/dbrotherhood.png',
    sections: [
      {
        title: 'Design Intent',
        body: 'Create environments that reflect the secretive identity of the Dark Brotherhood while remaining consistent with the atmosphere and visual language of Daggerfall.'
      },
      {
        title: 'Atmosphere & Layout',
        body: 'The design focuses on spatial arrangement, environmental details, and the relationship between rooms to establish a distinct atmosphere. Each space should feel connected to the broader identity of the organization.'
      },
      {
        title: 'Team Workflow',
        body: 'As part of a collaborative modding project, I contributed level-design work within a shared environment overhaul, balancing individual design decisions with the direction of the wider team.'
      },
      {
        title: 'Outcome',
        body: 'The project demonstrates my approach to atmospheric environment design and adapting level layouts to support the identity of an established fictional faction.'
      }
    ]
  },
  {
    slug: 'ida', name: 'IDA CITY', cat: 'level', catLabel: 'LEVEL DESIGN', status: 'ready',
    summary: 'A custom multiplayer shooter map created in Roblox Studio for Bad Business.',
    overview: 'A solo level-design project for Bad Business, a multiplayer first-person shooter on Roblox. The map was designed with attention to spatial layout, player navigation, cover placement, and the flow of combat encounters.',
    role: 'Level Designer',
    tools: 'Roblox Studio',
    image: 'assets/level/ida.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Design a multiplayer shooter environment that provides engaging routes through the map while supporting encounters between opposing players.'
      },
      {
        title: 'Layout & Player Flow',
        body: 'I approached the map through the arrangement of spaces, routes, and combat areas. The layout considers how players move between locations, where encounters are likely to occur, and how cover influences movement and positioning.'
      },
      {
        title: 'Combat Space',
        body: 'Cover placement and sightlines were important considerations when shaping the playable space. The aim was to create opportunities for tactical decisions without making navigation or combat flow unnecessarily confusing.'
      },
      {
        title: 'Outcome',
        body: 'IDA City demonstrates my experience designing a custom map for a multiplayer shooter, applying level-design principles within Roblox Studio.'
      }
    ]
  },
  {
    slug: 'panama',
    name: 'PANAMA',
    cat: 'graphic',
    catLabel: 'GRAPHIC DESIGN',
    status: 'ready',
    summary: 'A visual design project focused on composition and communication.',
    overview: 'A graphic design project exploring visual hierarchy, composition, and the presentation of information through a cohesive visual direction.',
    role: 'Graphic Designer',
    tools: 'Figma, Canva',
    image: 'assets/graphic/panama.png',
    sections: [
      {
        title: 'Design Brief',
        body: 'This project explores how visual composition and design choices can communicate an idea clearly while establishing a recognizable visual identity.'
      },
      {
        title: 'Visual Development',
        body: 'The design process focuses on the relationship between typography, imagery, color, and layout. Each element contributes to the overall composition and helps guide the viewer’s attention.'
      },
      {
        title: 'Outcome',
        body: 'The finished work demonstrates an application of visual hierarchy and composition to create a cohesive graphic design piece.'
      }
    ]
  },
  {
    slug: 'rekindle',
    name: 'REKINDLE',
    cat: 'graphic',
    catLabel: 'GRAPHIC DESIGN',
    status: 'ready',
    summary: 'A graphic design project exploring visual identity and storytelling.',
    overview: 'A visual design project focused on communicating a central concept through considered composition, typography, and imagery.',
    role: 'Graphic Designer',
    tools: 'Figma, Canva',
    image: 'assets/graphic/rekindle.png',
    sections: [
      {
        title: 'Design Intent',
        body: 'The goal was to translate the project’s central idea into a clear visual direction, using design choices to establish tone and communicate the intended message.'
      },
      {
        title: 'Visual Direction',
        body: 'Composition, typography, color, and imagery work together to create a consistent visual experience. The design emphasizes clarity while allowing the visual elements to reinforce the concept.'
      },
      {
        title: 'Outcome',
        body: 'Rekindle demonstrates the use of visual design principles to develop a cohesive presentation around a central idea.'
      }
    ]
  },
  {
    slug: 'house',
    name: 'RENOVATE',
    cat: 'graphic',
    catLabel: 'GRAPHIC DESIGN',
    status: 'ready',
    summary: 'A graphic design project focused on presenting a concept through visual communication.',
    overview: 'A design project exploring how layout, imagery, and typography can be used to communicate a concept through a clear and cohesive visual presentation.',
    role: 'Graphic Designer',
    tools: 'Figma, Canva',
    image: 'assets/graphic/house.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Present the project’s concept in a way that is visually engaging, easy to understand, and consistent across the composition.'
      },
      {
        title: 'Design Approach',
        body: 'I focused on visual hierarchy, spacing, typography, and image placement to create a clear reading order and maintain consistency throughout the design.'
      },
      {
        title: 'Outcome',
        body: 'Renovate demonstrates an approach to visual communication that balances presentation, clarity, and composition.'
      }
    ]
  },
  {
    slug: 'invaders',
    name: 'UNWELCOME INVADERS',
    cat: 'graphic',
    catLabel: 'GRAPHIC DESIGN',
    status: 'ready',
    summary: 'A graphic design project centered on visual storytelling.',
    overview: 'A visual design piece exploring the use of composition, typography, and imagery to communicate a central theme and establish a distinctive visual tone.',
    role: 'Graphic Designer',
    tools: 'Figma, Canva',
    image: 'assets/graphic/invaders.png',
    sections: [
      {
        title: 'Concept',
        body: 'The project explores how a central theme can be translated into a visual composition that communicates its message and establishes an identifiable tone.'
      },
      {
        title: 'Composition & Hierarchy',
        body: 'The arrangement of visual elements guides attention through the design. Typography, imagery, and spacing contribute to the relationship between the main message and its supporting details.'
      },
      {
        title: 'Outcome',
        body: 'Unwelcome Invaders demonstrates the use of composition and visual storytelling to communicate a concept through graphic design.'
      }
    ]
  },
  {
    slug: 'cdo',
    name: 'HISTORY OF CDO',
    cat: 'graphic',
    catLabel: 'GRAPHIC DESIGN',
    status: 'ready',
    summary: 'A visual communication project exploring the history of Cagayan de Oro.',
    overview: 'A graphic design project focused on presenting the history of Cagayan de Oro through an organized and visually engaging presentation of historical information.',
    role: 'Graphic Designer',
    tools: 'Figma, Canva',
    image: 'assets/graphic/cdoc.png',
    sections: [
      {
        title: 'The Challenge',
        body: 'Present historical information in a format that is approachable and easy to follow, balancing the need to communicate information with the need to maintain visual engagement.'
      },
      {
        title: 'Information & Visual Hierarchy',
        body: 'The design uses composition, typography, and visual organization to structure historical content and establish a clear reading order.'
      },
      {
        title: 'Outcome',
        body: 'History of CDO explores the role of graphic design in making historical information more accessible through visual organization and presentation.'
      }
    ]
  }
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