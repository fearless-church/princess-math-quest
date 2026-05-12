/* ============================================================
   DRESS-UP UNICORN
   ============================================================ */
// Each item: id, slot, name, emoji, cost (0 = free starter)
const WARDROBE = [
  // ----- BODY (coat) color -----
  { id:'body_white',    slot:'body', name:'Snow White',     emoji:'🤍', cost:0,   color:'#fff7fc', shade:'#f0d6e6' },
  { id:'body_pink',     slot:'body', name:'Bubblegum Pink', emoji:'🌸', cost:60,  color:'#ffd1ea', shade:'#ffa3cf' },
  { id:'body_lavender', slot:'body', name:'Lavender Dream', emoji:'💜', cost:80,  color:'#e3d6ff', shade:'#bfa6ff' },
  { id:'body_mint',     slot:'body', name:'Minty Fresh',    emoji:'🌿', cost:100, color:'#c9f5dc', shade:'#88dcaa' },
  { id:'body_blue',     slot:'body', name:'Sky Blue',       emoji:'☁️', cost:100, color:'#cce8ff', shade:'#8fc8ff' },
  { id:'body_yellow',   slot:'body', name:'Sunny',          emoji:'☀️', cost:120, color:'#fff0a8', shade:'#f5d352' },
  { id:'body_gold',     slot:'body', name:'Golden',         emoji:'✨', cost:300, color:'#ffe278', shade:'#e0a800' },
  { id:'body_rainbow',  slot:'body', name:'Rainbow Coat',   emoji:'🌈', cost:500, color:'rainbow', shade:'#ff7ec0' },
  { id:'body_galaxy',   slot:'body', name:'Galaxy',         emoji:'🌌', cost:450, color:'galaxy',  shade:'#3a1f6a' },

  // ----- MANE -----
  { id:'mane_pink',     slot:'mane', name:'Pink Waves',     emoji:'🎀', cost:0,   color:'#ff6fbb', accent:'#ff9ed3' },
  { id:'mane_rainbow',  slot:'mane', name:'Rainbow Mane',   emoji:'🌈', cost:200, color:'rainbow', accent:'#fff' },
  { id:'mane_blue',     slot:'mane', name:'Ice Blue',       emoji:'❄️', cost:120, color:'#5fc3f5', accent:'#cfe7ff' },
  { id:'mane_purple',   slot:'mane', name:'Royal Purple',   emoji:'💜', cost:140, color:'#9a5cf0', accent:'#c084fc' },
  { id:'mane_fire',     slot:'mane', name:'Fire Mane',      emoji:'🔥', cost:160, color:'#ff6a3a', accent:'#ffd766' },
  { id:'mane_silver',   slot:'mane', name:'Sparkle Silver', emoji:'✨', cost:180, color:'#d6dfee', accent:'#fff' },
  { id:'mane_galaxy',   slot:'mane', name:'Galaxy Mane',    emoji:'🌌', cost:260, color:'galaxy',  accent:'#ffd766' },
  { id:'mane_candy',    slot:'mane', name:'Cotton Candy',   emoji:'🍭', cost:140, color:'cotton',  accent:'#9ee0ff' },

  // ----- TAIL -----
  { id:'tail_pink',     slot:'tail', name:'Pink Tail',      emoji:'🎀', cost:0,   color:'#ff6fbb', accent:'#ff9ed3' },
  { id:'tail_rainbow',  slot:'tail', name:'Rainbow Tail',   emoji:'🌈', cost:160, color:'rainbow', accent:'#fff' },
  { id:'tail_blue',     slot:'tail', name:'Ice Tail',       emoji:'❄️', cost:90,  color:'#5fc3f5', accent:'#cfe7ff' },
  { id:'tail_purple',   slot:'tail', name:'Purple Tail',    emoji:'💜', cost:110, color:'#9a5cf0', accent:'#c084fc' },
  { id:'tail_fire',     slot:'tail', name:'Fire Tail',      emoji:'🔥', cost:130, color:'#ff6a3a', accent:'#ffd766' },
  { id:'tail_silver',   slot:'tail', name:'Silver Tail',    emoji:'✨', cost:150, color:'#d6dfee', accent:'#fff' },
  { id:'tail_galaxy',   slot:'tail', name:'Galaxy Tail',    emoji:'🌌', cost:220, color:'galaxy',  accent:'#ffd766' },
  { id:'tail_candy',    slot:'tail', name:'Candy Tail',     emoji:'🍭', cost:120, color:'cotton',  accent:'#9ee0ff' },

  // ----- HORN -----
  { id:'horn_gold',     slot:'horn', name:'Gold Horn',      emoji:'✨', cost:0,   color:'#ffd766', accent:'#c79900' },
  { id:'horn_silver',   slot:'horn', name:'Silver Horn',    emoji:'💎', cost:80,  color:'#dfe7f3', accent:'#9aa6b8' },
  { id:'horn_pink',     slot:'horn', name:'Pink Crystal',   emoji:'🌸', cost:100, color:'#ffb6dc', accent:'#ff5fb5' },
  { id:'horn_rainbow',  slot:'horn', name:'Rainbow Swirl',  emoji:'🌈', cost:250, color:'rainbow', accent:'#fff' },
  { id:'horn_candycane',slot:'horn', name:'Candy Cane',     emoji:'🍬', cost:160, color:'candycane', accent:'#ff5fb5' },
  { id:'horn_diamond',  slot:'horn', name:'Diamond',        emoji:'💎', cost:300, color:'diamond', accent:'#fff' },
  { id:'horn_blue',     slot:'horn', name:'Ice Horn',       emoji:'❄️', cost:110, color:'#9ee0ff', accent:'#5fc3f5' },

  // ----- WINGS -----
  { id:'wings_none',    slot:'wings', name:'No Wings',      emoji:'❌', cost:0,   _none:true },
  { id:'wings_pink',    slot:'wings', name:'Pink Feathers', emoji:'🪶', cost:160, color:'#ffb0d8', accent:'#fff' },
  { id:'wings_white',   slot:'wings', name:'Angel Wings',   emoji:'😇', cost:140, color:'#ffffff', accent:'#ffd766' },
  { id:'wings_butterfly',slot:'wings',name:'Butterfly',     emoji:'🦋', cost:220, color:'#ff7ec0', accent:'#9ee0ff' },
  { id:'wings_rainbow', slot:'wings', name:'Rainbow Wings', emoji:'🌈', cost:350, color:'rainbow', accent:'#fff' },
  { id:'wings_fairy',   slot:'wings', name:'Fairy Wings',   emoji:'🧚', cost:260, color:'#d4ffe5', accent:'#ffd766' },
  { id:'wings_bat',     slot:'wings', name:'Bat Wings',     emoji:'🦇', cost:200, color:'#5d3aa3', accent:'#ff5fb5' },

  // ----- HOOVES -----
  { id:'hooves_pink',   slot:'hooves', name:'Pink Hooves',  emoji:'👠', cost:0,   color:'#ff6fbb', accent:'#fff' },
  { id:'hooves_gold',   slot:'hooves', name:'Gold Hooves',  emoji:'✨', cost:80,  color:'#ffd766', accent:'#c79900' },
  { id:'hooves_glitter',slot:'hooves', name:'Glitter',      emoji:'💖', cost:100, color:'#ff9ed3', accent:'#fff' },
  { id:'hooves_boots',  slot:'hooves', name:'Rainbow Boots',emoji:'👢', cost:150, color:'rainbow', accent:'#fff' },
  { id:'hooves_socks',  slot:'hooves', name:'Striped Socks',emoji:'🧦', cost:80,  color:'#fff', accent:'#ff6fbb' },
  { id:'hooves_galaxy', slot:'hooves', name:'Galaxy',       emoji:'🌌', cost:160, color:'galaxy', accent:'#ffd766' },

  // ----- ACCESSORY (face / head extras) -----
  { id:'acc_none',      slot:'acc', name:'None',            emoji:'❌', cost:0,   _none:true },
  { id:'acc_flower',    slot:'acc', name:'Flower Crown',    emoji:'🌸', cost:50,  color:'#ff7ec0' },
  { id:'acc_bow',       slot:'acc', name:'Pink Bow',        emoji:'🎀', cost:60,  color:'#ff5fb5' },
  { id:'acc_glasses',   slot:'acc', name:'Heart Glasses',   emoji:'😎', cost:80,  color:'#ff6fbb' },
  { id:'acc_starpatch', slot:'acc', name:'Star Patch',      emoji:'⭐', cost:60,  color:'#ffd766' },
  { id:'acc_heart',     slot:'acc', name:'Heart on Cheek',  emoji:'💖', cost:70,  color:'#ff5fb5' },
  { id:'acc_eyepatch',  slot:'acc', name:'Pirate Patch',    emoji:'🏴‍☠️', cost:90,  color:'#2d2230' },
  { id:'acc_party_hat', slot:'acc', name:'Party Hat',       emoji:'🎉', cost:100, color:'#c084fc' },
  { id:'acc_unicorn_braces', slot:'acc', name:'Bling Braces', emoji:'💎', cost:120, color:'#fff' },

  // ----- SADDLE (back ornament) -----
  { id:'saddle_none',   slot:'saddle', name:'No Saddle',    emoji:'❌', cost:0,   _none:true },
  { id:'saddle_pink',   slot:'saddle', name:'Pink Saddle',  emoji:'💗', cost:80,  color:'#ff6fbb', accent:'#fff' },
  { id:'saddle_purple', slot:'saddle', name:'Purple Saddle',emoji:'💜', cost:100, color:'#9a5cf0', accent:'#ffd766' },
  { id:'saddle_gold',   slot:'saddle', name:'Gold Saddle',  emoji:'✨', cost:160, color:'#ffd766', accent:'#c79900' },
  { id:'saddle_jeweled',slot:'saddle', name:'Jeweled',      emoji:'💎', cost:240, color:'#c084fc', accent:'#fff' },
  { id:'saddle_rainbow',slot:'saddle', name:'Rainbow',      emoji:'🌈', cost:200, color:'rainbow', accent:'#fff' },

  // ----- COMPANION (little pal next to unicorn) -----
  { id:'pal_none',      slot:'pal', name:'No Friend',       emoji:'❌', cost:0,   _none:true },
  { id:'pal_bunny',     slot:'pal', name:'Bunny Friend',    emoji:'🐰', cost:120, color:'#fff' },
  { id:'pal_cat',       slot:'pal', name:'Kitty Friend',    emoji:'🐱', cost:140, color:'#ffd766' },
  { id:'pal_star',      slot:'pal', name:'Star Buddy',      emoji:'⭐', cost:90,  color:'#ffd766' },
  { id:'pal_cupcake',   slot:'pal', name:'Cupcake',         emoji:'🧁', cost:80,  color:'#ff6fbb' },
  { id:'pal_butterfly', slot:'pal', name:'Butterfly',       emoji:'🦋', cost:100, color:'#9ee0ff' },
  { id:'pal_heart',     slot:'pal', name:'Floating Heart',  emoji:'💖', cost:60,  color:'#ff5fb5' }
];
const SLOTS = [
  { id:'body',   label:'Body',     emoji:'🦄' },
  { id:'mane',   label:'Mane',     emoji:'💇' },
  { id:'tail',   label:'Tail',     emoji:'🎀' },
  { id:'horn',   label:'Horn',     emoji:'✨' },
  { id:'wings',  label:'Wings',    emoji:'🪶' },
  { id:'hooves', label:'Hooves',   emoji:'👠' },
  { id:'saddle', label:'Saddle',   emoji:'💎' },
  { id:'acc',    label:'Face',     emoji:'😎' },
  { id:'pal',    label:'Friend',   emoji:'🐰' }
];
function wardrobeItem(id) { return WARDROBE.find(x => x.id === id); }

// Resolve a "color token" (rainbow, galaxy, cotton, candycane, diamond, or a hex)
function resolveFill(token, gradId) {
  if (token === 'rainbow')    return `url(#${gradId||'gradRainbow'})`;
  if (token === 'galaxy')     return `url(#${gradId||'gradGalaxy'})`;
  if (token === 'cotton')     return `url(#${gradId||'gradCotton'})`;
  if (token === 'candycane')  return `url(#${gradId||'gradCandy'})`;
  if (token === 'diamond')    return `url(#${gradId||'gradDiamond'})`;
  return token;
}

// Build a cute side-view unicorn from the equipped outfit
function unicornSVG(outfit, opts) {
  opts = opts || {};
  const size = opts.size || 280;
  const get = (slot, fallback) => wardrobeItem(outfit[slot]) || wardrobeItem(fallback);
  const body   = get('body',   'body_white');
  const mane   = get('mane',   'mane_pink');
  const tail   = get('tail',   'tail_pink');
  const horn   = get('horn',   'horn_gold');
  const wings  = wardrobeItem(outfit.wings);
  const hooves = get('hooves', 'hooves_pink');
  const saddle = wardrobeItem(outfit.saddle);
  const acc    = wardrobeItem(outfit.acc);
  const pal    = wardrobeItem(outfit.pal);

  const bodyFill  = resolveFill(body.color);
  const bodyShade = body.shade || '#f0d6e6';
  const maneFill  = resolveFill(mane.color);
  const maneAcc   = mane.accent || '#fff';
  const tailFill  = resolveFill(tail.color);
  const hornFill  = resolveFill(horn.color);
  const hornAcc   = horn.accent || '#fff';
  const hoofFill  = resolveFill(hooves.color);
  const hoofAcc   = hooves.accent || '#fff';

  // --- Wings (behind body) ---
  let wingsSVG = '';
  if (wings && !wings._none) {
    const wf = resolveFill(wings.color);
    if (wings.id === 'wings_pink' || wings.id === 'wings_white' || wings.id === 'wings_rainbow' || wings.id === 'wings_fairy') {
      wingsSVG = `<g transform="translate(170 175)">
        <path d="M 0 0 Q -50 -45 -90 -20 Q -60 -5 -55 10 Q -70 20 -55 35 Q -25 25 0 25 Z" fill="${wf}" stroke="${wings.accent}" stroke-width="1.5" opacity="0.95"/>
        <path d="M -50 -25 Q -45 -5 -40 5 M -65 10 Q -60 18 -55 25" stroke="${wings.accent}" stroke-width="1.2" fill="none" opacity="0.7"/>
      </g>`;
    } else if (wings.id === 'wings_butterfly') {
      wingsSVG = `<g transform="translate(170 175)">
        <ellipse cx="-40" cy="-15" rx="36" ry="22" fill="${wf}" opacity="0.9"/>
        <ellipse cx="-40" cy="20" rx="28" ry="18" fill="${wings.accent}" opacity="0.9"/>
        <circle cx="-50" cy="-15" r="4" fill="${wings.accent}"/><circle cx="-50" cy="20" r="3" fill="${wf}"/>
      </g>`;
    } else if (wings.id === 'wings_bat') {
      wingsSVG = `<g transform="translate(170 175)">
        <path d="M 0 0 L -40 -20 L -55 -5 L -45 0 L -60 15 L -40 20 L -25 30 L 0 25 Z" fill="${wf}" stroke="${wings.accent}" stroke-width="1.5"/>
      </g>`;
    }
  }

  // --- Tail (behind body, on the right) ---
  let tailSVG = '';
  {
    const tf = tailFill;
    tailSVG = `<g transform="translate(245 215)">
      <path d="M 0 0 C 30 -15 45 10 35 40 C 25 65 50 70 35 90 C 25 100 5 95 -5 75 C -15 55 -15 25 0 0 Z" fill="${tf}" stroke="${tail.accent||'#fff'}" stroke-width="1.5"/>
      <path d="M 8 10 C 22 5 28 25 22 45" stroke="${tail.accent||'#fff'}" stroke-width="1.5" fill="none" opacity="0.7"/>
    </g>`;
  }

  // --- Body (round chibi) ---
  const bodySVG = `
    <!-- body -->
    <ellipse cx="170" cy="245" rx="85" ry="60" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <!-- belly highlight -->
    <ellipse cx="170" cy="265" rx="60" ry="30" fill="#ffffff" opacity="0.35"/>
    <!-- legs (4) -->
    <rect x="115" y="290" width="22" height="55" rx="8" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <rect x="148" y="295" width="22" height="50" rx="8" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <rect x="180" y="295" width="22" height="50" rx="8" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <rect x="210" y="290" width="22" height="55" rx="8" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <!-- hooves -->
    <ellipse cx="126" cy="350" rx="14" ry="7" fill="${hoofFill}" stroke="${hoofAcc}" stroke-width="1.5"/>
    <ellipse cx="159" cy="350" rx="14" ry="7" fill="${hoofFill}" stroke="${hoofAcc}" stroke-width="1.5"/>
    <ellipse cx="191" cy="350" rx="14" ry="7" fill="${hoofFill}" stroke="${hoofAcc}" stroke-width="1.5"/>
    <ellipse cx="221" cy="350" rx="14" ry="7" fill="${hoofFill}" stroke="${hoofAcc}" stroke-width="1.5"/>
  `;

  // --- Saddle ---
  let saddleSVG = '';
  if (saddle && !saddle._none) {
    const sf = resolveFill(saddle.color);
    saddleSVG = `<g>
      <path d="M 130 215 Q 170 200 215 215 L 210 240 Q 170 230 135 240 Z" fill="${sf}" stroke="${saddle.accent||'#fff'}" stroke-width="2"/>
      <circle cx="170" cy="225" r="5" fill="${saddle.accent||'#fff'}"/>
    </g>`;
  }

  // --- Head (left side, with neck connecting to body) ---
  // neck
  const headSVG = `
    <!-- neck -->
    <path d="M 110 220 Q 90 180 95 145 L 130 145 Q 130 195 135 230 Z" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <!-- head -->
    <ellipse cx="90" cy="135" rx="55" ry="48" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <!-- snout -->
    <ellipse cx="55" cy="155" rx="28" ry="22" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <!-- nostril -->
    <ellipse cx="45" cy="158" rx="2" ry="3" fill="#a06080"/>
    <!-- mouth -->
    <path d="M 38 168 Q 48 174 58 168" stroke="#a06080" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- ear -->
    <path d="M 110 95 Q 122 75 130 100 Q 128 110 115 110 Z" fill="${bodyFill}" stroke="${bodyShade}" stroke-width="2"/>
    <path d="M 116 100 Q 121 92 125 102" stroke="${maneFill}" stroke-width="2" fill="none"/>
    <!-- eye -->
    <g>
      <ellipse cx="92" cy="130" rx="9" ry="11" fill="#2d2230"/>
      <ellipse cx="89" cy="125" rx="3" ry="4" fill="#fff"/>
      <ellipse cx="94" cy="133" rx="1.5" ry="2" fill="#fff"/>
      <!-- lashes -->
      <path d="M 84 120 L 80 115 M 90 118 L 88 113 M 96 118 L 98 113" stroke="#2d2230" stroke-width="1.5" stroke-linecap="round"/>
    </g>
    <!-- cheek blush -->
    <circle cx="68" cy="150" r="6" fill="#ff9ec7" opacity="0.6"/>
  `;

  // --- Mane (over top of head + flowing down neck) ---
  const manePath = `
    <path d="M 75 95 Q 65 70 80 60 Q 100 55 115 70 Q 135 60 145 80 Q 150 100 140 115 Q 155 130 145 150 Q 150 175 135 195 Q 130 215 115 220 Q 110 200 115 175 Q 100 165 105 145 Q 85 135 90 115 Q 70 110 75 95 Z" fill="${maneFill}" stroke="${maneAcc}" stroke-width="1.5"/>
    <!-- mane highlights -->
    <path d="M 95 75 Q 105 85 100 100 M 120 90 Q 130 105 122 120 M 110 145 Q 120 160 115 180" stroke="${maneAcc}" stroke-width="1.5" fill="none" opacity="0.6"/>
    <!-- forelock -->
    <path d="M 95 105 Q 80 115 90 130 Q 105 125 100 110 Z" fill="${maneFill}" stroke="${maneAcc}" stroke-width="1"/>
  `;

  // --- Horn ---
  let hornSVG = '';
  if (horn.id === 'horn_candycane') {
    hornSVG = `<g transform="translate(108 50) rotate(-10)">
      <path d="M 0 0 L -8 38 L 8 38 Z" fill="#ffffff" stroke="${horn.accent}" stroke-width="1.5"/>
      <path d="M -7 5 L 6 6 M -7 14 L 6 15 M -7 23 L 6 24 M -6 32 L 5 33" stroke="${horn.accent}" stroke-width="3" stroke-linecap="round"/>
    </g>`;
  } else {
    hornSVG = `<g transform="translate(108 50) rotate(-10)">
      <path d="M 0 0 L -8 38 L 8 38 Z" fill="${hornFill}" stroke="${hornAcc}" stroke-width="1.5"/>
      <path d="M -6 10 L 6 11 M -6 22 L 6 23" stroke="${hornAcc}" stroke-width="1" opacity="0.7"/>
      <circle cx="0" cy="6" r="2" fill="${hornAcc}" opacity="0.9"/>
    </g>`;
  }

  // --- Face accessory ---
  let accSVG = '';
  if (acc && !acc._none) {
    if (acc.id === 'acc_flower') {
      accSVG = `<g transform="translate(90 80)">
        <circle cx="0" cy="0" r="9" fill="${acc.color}"/><circle cx="0" cy="0" r="3" fill="#fff"/>
        <circle cx="22" cy="-6" r="7" fill="#ffd766"/><circle cx="22" cy="-6" r="2.5" fill="#fff"/>
        <circle cx="-22" cy="-6" r="7" fill="#c084fc"/><circle cx="-22" cy="-6" r="2.5" fill="#fff"/>
        <circle cx="42" cy="2" r="6" fill="${acc.color}"/>
      </g>`;
    } else if (acc.id === 'acc_bow') {
      accSVG = `<g transform="translate(118 70) rotate(15)">
        <path d="M -18 0 Q -22 -12 -6 -8 L 0 -2 L 6 -8 Q 22 -12 18 0 Q 22 10 6 6 L 0 0 L -6 6 Q -22 10 -18 0 Z" fill="${acc.color}"/>
        <circle cx="0" cy="0" r="3.5" fill="#c40070"/>
      </g>`;
    } else if (acc.id === 'acc_glasses') {
      accSVG = `<g stroke="${acc.color}" stroke-width="2.5" fill="none">
        <!-- heart-shape lenses -->
        <path d="M 78 122 q -6 -8 -12 -2 q -6 6 0 12 q 4 4 12 8 q 8 -4 12 -8 q 6 -6 0 -12 q -6 -6 -12 2 Z" fill="rgba(255,182,217,0.4)"/>
        <path d="M 110 122 q -6 -8 -12 -2 q -6 6 0 12 q 4 4 12 8 q 8 -4 12 -8 q 6 -6 0 -12 q -6 -6 -12 2 Z" fill="rgba(255,182,217,0.4)"/>
        <line x1="91" y1="130" x2="103" y2="130" stroke-width="2"/>
      </g>`;
    } else if (acc.id === 'acc_starpatch') {
      accSVG = `<g transform="translate(70 105)"><polygon points="0,-9 3,-3 9,-3 4,2 6,9 0,5 -6,9 -4,2 -9,-3 -3,-3" fill="${acc.color}" stroke="#c79900" stroke-width="0.8"/></g>`;
    } else if (acc.id === 'acc_heart') {
      accSVG = `<g transform="translate(68 152)"><path d="M 0 0 C -6 -7 -14 -1 -7 6 L 0 12 L 7 6 C 14 -1 6 -7 0 0 Z" fill="${acc.color}"/></g>`;
    } else if (acc.id === 'acc_eyepatch') {
      accSVG = `<g><ellipse cx="92" cy="130" rx="13" ry="14" fill="${acc.color}"/><line x1="80" y1="120" x2="65" y2="100" stroke="${acc.color}" stroke-width="2.5"/><line x1="105" y1="118" x2="120" y2="100" stroke="${acc.color}" stroke-width="2.5"/></g>`;
    } else if (acc.id === 'acc_party_hat') {
      accSVG = `<g transform="translate(140 65) rotate(20)">
        <polygon points="0,0 22,55 -22,55" fill="${acc.color}" stroke="#7a3a9f" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="5" fill="#ffd766"/>
        <circle cx="-12" cy="30" r="3" fill="#fff"/><circle cx="10" cy="40" r="3" fill="#fff"/>
      </g>`;
    } else if (acc.id === 'acc_unicorn_braces') {
      accSVG = `<g><rect x="40" y="166" width="20" height="3" fill="${acc.color}" stroke="#aaa" stroke-width="0.5"/></g>`;
    }
  }

  // --- Companion (little pal floating beside the unicorn) ---
  let palSVG = '';
  if (pal && !pal._none) {
    if (pal.id === 'pal_bunny') {
      palSVG = `<g transform="translate(310 280)">
        <ellipse cx="0" cy="10" rx="20" ry="18" fill="${pal.color}" stroke="#e0c4d0" stroke-width="1.5"/>
        <ellipse cx="-7" cy="-12" rx="5" ry="14" fill="${pal.color}" stroke="#e0c4d0" stroke-width="1.5"/>
        <ellipse cx="7" cy="-12" rx="5" ry="14" fill="${pal.color}" stroke="#e0c4d0" stroke-width="1.5"/>
        <ellipse cx="-7" cy="-12" rx="2.5" ry="8" fill="#ffb0d8"/>
        <ellipse cx="7" cy="-12" rx="2.5" ry="8" fill="#ffb0d8"/>
        <circle cx="-6" cy="8" r="2" fill="#2d2230"/>
        <circle cx="6" cy="8" r="2" fill="#2d2230"/>
        <ellipse cx="0" cy="14" rx="3" ry="2" fill="#ff9ec7"/>
      </g>`;
    } else if (pal.id === 'pal_cat') {
      palSVG = `<g transform="translate(310 280)">
        <ellipse cx="0" cy="8" rx="20" ry="17" fill="${pal.color}" stroke="#c79900" stroke-width="1.5"/>
        <polygon points="-14,-4 -20,-18 -6,-8" fill="${pal.color}" stroke="#c79900" stroke-width="1.5"/>
        <polygon points="14,-4 20,-18 6,-8" fill="${pal.color}" stroke="#c79900" stroke-width="1.5"/>
        <circle cx="-6" cy="6" r="2" fill="#2d2230"/>
        <circle cx="6" cy="6" r="2" fill="#2d2230"/>
        <path d="M -3 12 Q 0 15 3 12" stroke="#2d2230" stroke-width="1.5" fill="none"/>
      </g>`;
    } else if (pal.id === 'pal_star') {
      palSVG = `<g transform="translate(310 280)">
        <polygon points="0,-18 5,-6 18,-6 8,2 12,15 0,8 -12,15 -8,2 -18,-6 -5,-6" fill="${pal.color}" stroke="#c79900" stroke-width="1.5"/>
        <circle cx="-4" cy="-2" r="1.5" fill="#2d2230"/><circle cx="4" cy="-2" r="1.5" fill="#2d2230"/>
        <path d="M -3 3 Q 0 6 3 3" stroke="#2d2230" stroke-width="1.2" fill="none"/>
      </g>`;
    } else if (pal.id === 'pal_cupcake') {
      palSVG = `<g transform="translate(310 280)">
        <path d="M -16 5 L -12 22 L 12 22 L 16 5 Z" fill="#f5b97a" stroke="#a06030" stroke-width="1.5"/>
        <path d="M -14 5 L -18 -3 Q 0 -22 18 -3 L 14 5 Z" fill="${pal.color}" stroke="#c40070" stroke-width="1.5"/>
        <circle cx="0" cy="-12" r="4" fill="#ffd766"/>
        <circle cx="-6" cy="-10" r="1.5" fill="#fff"/><circle cx="6" cy="-9" r="1.5" fill="#fff"/>
      </g>`;
    } else if (pal.id === 'pal_butterfly') {
      palSVG = `<g transform="translate(310 270)">
        <ellipse cx="-10" cy="-6" rx="11" ry="9" fill="${pal.color}"/>
        <ellipse cx="10" cy="-6" rx="11" ry="9" fill="${pal.color}"/>
        <ellipse cx="-9" cy="6" rx="8" ry="7" fill="#ff7ec0"/>
        <ellipse cx="9" cy="6" rx="8" ry="7" fill="#ff7ec0"/>
        <line x1="0" y1="-12" x2="0" y2="12" stroke="#2d2230" stroke-width="2"/>
      </g>`;
    } else if (pal.id === 'pal_heart') {
      palSVG = `<g transform="translate(305 270)">
        <path d="M 0 0 C -12 -16 -28 0 -14 14 L 0 26 L 14 14 C 28 0 12 -16 0 0 Z" fill="${pal.color}"/>
      </g>`;
    }
  }

  return `<svg viewBox="0 0 360 400" width="${size}" xmlns="http://www.w3.org/2000/svg" aria-label="Your unicorn">
    <defs>
      <linearGradient id="gradRainbow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ff6fbb"/><stop offset="0.25" stop-color="#ffb84a"/>
        <stop offset="0.5" stop-color="#ffe066"/><stop offset="0.75" stop-color="#6cf0c0"/>
        <stop offset="1" stop-color="#9ee0ff"/>
      </linearGradient>
      <linearGradient id="gradGalaxy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1a0b3a"/><stop offset="0.5" stop-color="#6033b8"/>
        <stop offset="1" stop-color="#ff5fb5"/>
      </linearGradient>
      <linearGradient id="gradCotton" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ff9ed3"/><stop offset="0.5" stop-color="#9ee0ff"/>
        <stop offset="1" stop-color="#ffd766"/>
      </linearGradient>
      <linearGradient id="gradCandy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff"/><stop offset="0.5" stop-color="#ff5fb5"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="gradDiamond" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#cfe7ff"/>
        <stop offset="1" stop-color="#ffffff"/>
      </linearGradient>
      <radialGradient id="sparkleBg" cx="0.5" cy="0.4" r="0.7">
        <stop offset="0" stop-color="#fff7fc"/><stop offset="1" stop-color="#fde4f4"/>
      </radialGradient>
    </defs>
    ${opts.bg !== false ? `<rect width="360" height="400" rx="20" fill="url(#sparkleBg)"/>
      <g opacity="0.6" font-size="16">
        <text x="20" y="40">✨</text><text x="320" y="50">✨</text>
        <text x="30" y="370">✨</text><text x="310" y="360">✨</text>
        <text x="180" y="35">⭐</text>
      </g>` : ''}
    ${wingsSVG}
    ${tailSVG}
    ${bodySVG}
    ${saddleSVG}
    ${headSVG}
    ${manePath}
    ${hornSVG}
    ${accSVG}
    ${palSVG}
  </svg>`;
}

function renderPrincessTab() {
  const ownedCount = state.wardrobe.size;
  const totalCount = WARDROBE.length;
  const tabs = SLOTS.map(s => `<button class="closet-tab" data-slot="${s.id}">${s.emoji} ${s.label}</button>`).join('');
  return `
    <h1 class="title" style="font-size:30px;margin-bottom:6px;">🦄 My Unicorn</h1>
    <p class="tagline">Earn coins, then dress her up.</p>
    <div class="princess-stage">
      <div class="princess-avatar" id="princess-avatar">${unicornSVG(state.outfit, {size: 300})}</div>
      <div class="princess-meta">
        <div><strong>${ownedCount}</strong> of <strong>${totalCount}</strong> items unlocked</div>
        <div style="font-size:13px;color:#7a3a60;margin-top:4px;">Tap a category, then tap an outfit to wear or buy it.</div>
      </div>
    </div>
    <div class="closet-tabs" id="closet-tabs">${tabs}</div>
    <div class="closet-grid" id="closet-grid"></div>
  `;
}
let _closetSlot = 'body';
function wirePrincessTab() {
  const tabsEl = document.getElementById('closet-tabs');
  // If saved slot doesn't exist in new SLOTS, reset to first
  if (!SLOTS.some(s => s.id === _closetSlot)) _closetSlot = SLOTS[0].id;
  function setSlot(slot) {
    _closetSlot = slot;
    tabsEl.querySelectorAll('.closet-tab').forEach(b => b.classList.toggle('active', b.dataset.slot === slot));
    renderCloset(slot);
  }
  tabsEl.querySelectorAll('.closet-tab').forEach(b => {
    b.addEventListener('click', () => setSlot(b.dataset.slot));
  });
  setSlot(_closetSlot);
}
function renderCloset(slot) {
  const grid = document.getElementById('closet-grid');
  if (!grid) return;
  const items = WARDROBE.filter(i => i.slot === slot);
  grid.innerHTML = items.map(it => {
    const owned = state.wardrobe.has(it.id);
    const equipped = state.outfit[it.slot] === it.id;
    const previewOutfit = Object.assign({}, state.outfit, { [it.slot]: it.id });
    const preview = unicornSVG(previewOutfit, {size: 130, bg:false});
    const action = owned
      ? (equipped ? `<div class="closet-status equipped">✨ Wearing</div>` : `<button class="btn small wear-btn" data-wear="${it.id}">Wear it</button>`)
      : `<button class="btn gold small buy-item-btn" data-buyitem="${it.id}" data-cost="${it.cost}">🪙 ${it.cost}</button>`;
    return `<div class="closet-card ${equipped?'is-equipped':''} ${owned?'is-owned':''}">
      <div class="closet-thumb">${preview}</div>
      <div class="closet-name">${it.emoji} ${it.name}</div>
      ${action}
    </div>`;
  }).join('');
  grid.querySelectorAll('[data-wear]').forEach(b => {
    b.addEventListener('click', () => {
      const it = wardrobeItem(b.dataset.wear);
      state.outfit[it.slot] = it.id;
      saveState && saveState();
      renderHome('princess');
    });
  });
  grid.querySelectorAll('[data-buyitem]').forEach(b => {
    b.addEventListener('click', () => {
      const it = wardrobeItem(b.dataset.buyitem);
      const cost = it.cost;
      if (state.coins < cost) { showFlash('Not enough 🪙', 900); return; }
      state.coins -= cost;
      state.wardrobe.add(it.id);
      state.outfit[it.slot] = it.id;
      bumpStat('coin'); updateHUD();
      const r = b.getBoundingClientRect();
      spawnFloater('✨ New ' + it.name, '#ff6fbb', r.left + r.width/2, r.top);
      saveState && saveState();
      renderHome('princess');
    });
  });
}
