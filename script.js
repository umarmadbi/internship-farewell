/* ============================================================
   BACKGROUND FIT
   Keeps the scene's floor line, plant and logo fully visible on
   every screen shape (phone portrait, wide desktop, etc.) by
   scaling to fill the viewport height exactly, then windowing
   into the world horizontally around a fixed anchor point —
   capped at a max width so ultra-wide windows don't reveal the
   far-left background instead of just showing more empty floor.
   ============================================================ */
const WORLD_HEIGHT = 620;
const WORLD_ANCHOR_X = 560;   // world x-coordinate that always sits at viewport center
const MAX_WORLD_WIDTH = 760;  // caps how much horizontal scene is ever shown

function fitScene(){
  const svg = document.getElementById('scene-svg');
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scale = vh / WORLD_HEIGHT;
  const worldWidth = Math.min(vw / scale, MAX_WORLD_WIDTH);
  const minX = WORLD_ANCHOR_X - worldWidth / 2;

  svg.setAttribute('viewBox', `${minX} 0 ${worldWidth} ${WORLD_HEIGHT}`);
  svg.setAttribute('preserveAspectRatio', 'none');

  const renderedWidth = worldWidth * scale;
  svg.style.width = renderedWidth + 'px';
  svg.style.height = vh + 'px';
  svg.style.left = ((vw - renderedWidth) / 2) + 'px';
  svg.style.top = '0px';
}
window.addEventListener('resize', fitScene);
window.addEventListener('orientationchange', fitScene);
fitScene();

/* ============================================================
   STATE
   ============================================================ */
let name = "";
let MESSAGES = [];
let msgIndex = -1; // -1 = greeting not shown yet

const gate = document.getElementById('name-gate');
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const stage = document.getElementById('stage');
const character = document.getElementById('character');
const armWave = document.getElementById('wave-hand');
const bubble = document.getElementById('bubble');
const bubbleText = document.getElementById('bubble-text');
const nextBtn = document.getElementById('next-btn');
const dotsEl = document.getElementById('dots');
const replayBtn = document.getElementById('replay-btn');
const cardBtn = document.getElementById('card-btn');
const cardOverlay = document.getElementById('card-overlay');
const letterEyebrow = document.getElementById('letter-eyebrow');
const letterBody = document.getElementById('letter-body');
const downloadCardBtn = document.getElementById('download-card-btn');
const closeCardBtn = document.getElementById('close-card-btn');

/* ============================================================
   NAME RESOLUTION — via ?name=Sarah in the URL, else ask.
   Looks up that name (case-insensitive) in PEOPLE from messages.js.
   ============================================================ */
function getNameFromURL(){
  const params = new URLSearchParams(window.location.search);
  const n = params.get('name');
  return n ? n.trim() : "";
}

function resolveMessages(chosenName){
  const key = chosenName.toLowerCase();
  if (typeof PEOPLE !== 'undefined' && PEOPLE[key]){
    return PEOPLE[key].messages;
  }
  return (typeof DEFAULT_MESSAGES !== 'undefined') ? DEFAULT_MESSAGES : [];
}

function startExperience(chosenName){
  name = chosenName || "there";
  MESSAGES = resolveMessages(name);
  gate.style.display = 'none';
  stage.removeAttribute('aria-hidden');
  buildDots();
  requestAnimationFrame(() => requestAnimationFrame(walkIn));
}

const urlName = getNameFromURL();
if (urlName){
  startExperience(urlName);
} else {
  nameInput.focus();
  nameSubmit.addEventListener('click', submitName);
  nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitName(); });
}
function submitName(){
  const v = nameInput.value.trim();
  startExperience(v);
}

/* ============================================================
   SEQUENCE: walk in -> stop -> wave -> greet -> (button) -> messages -> wave + walk away
   ============================================================ */
function walkIn(){
  character.classList.add('walking');
  character.classList.add('arrived'); // triggers the `left` transition
  character.addEventListener('transitionend', onArrive, { once:true });
}

function onArrive(){
  character.classList.remove('walking');
  armWave.classList.add('waving');
  showGreeting();
  setTimeout(() => {
    armWave.classList.remove('waving');
  }, 2200);
}

function showGreeting(){
  msgIndex = 0;
  const greeting = `Hi ${name}!!! 👋`;
  bubbleText.textContent = greeting;
  sizeBubble(greeting);
  bubble.classList.add('show');
  setTimeout(() => {
    nextBtn.classList.add('show', 'pulse');
    dotsEl.classList.add('show');
    updateDots();
  }, 900);
}

nextBtn.addEventListener('click', () => {
  nextBtn.classList.remove('pulse');
  advanceMessage();
});

function advanceMessage(){
  if (msgIndex < MESSAGES.length){
    swapBubble(MESSAGES[msgIndex]);
    msgIndex++;
    updateDots();
    if (msgIndex >= MESSAGES.length){
      nextBtn.textContent = '🎉';
    }
  } else {
    finish();
  }
}

function sizeBubble(text){
  bubble.classList.remove('len-short', 'len-medium', 'len-long', 'len-xlong');
  const len = text.length;
  if (len < 40) bubble.classList.add('len-short');
  else if (len < 100) bubble.classList.add('len-medium');
  else if (len < 220) bubble.classList.add('len-long');
  else bubble.classList.add('len-xlong');
}

function swapBubble(text){
  bubble.classList.add('swap');
  setTimeout(() => {
    bubbleText.textContent = text;
    sizeBubble(text);
    bubble.classList.remove('swap');
  }, 180);
}

function finish(){
  nextBtn.classList.remove('show');
  bubble.classList.remove('show');
  armWave.classList.add('waving');
  launchConfetti();

  // wave for a moment, then turn and walk off screen
  setTimeout(() => {
    armWave.classList.remove('waving');
    character.classList.add('walking', 'leaving');
    character.addEventListener('transitionend', onLeave, { once:true });
  }, 1500);
}

function onLeave(){
  character.classList.remove('walking');
  character.style.visibility = 'hidden';
  replayBtn.classList.add('show');
  cardBtn.classList.add('show');
}

replayBtn.addEventListener('click', () => window.location.reload());

/* ============================================================
   LETTER CARD — compiles the greeting + every message into
   one scrollable / downloadable card
   ============================================================ */
function buildLetter(){
  letterEyebrow.textContent = `A note for ${name}`;
  letterBody.innerHTML = "";

  const greetingP = document.createElement('p');
  greetingP.className = 'letter-greeting';
  greetingP.textContent = `Hi ${name}!!! 👋`;
  letterBody.appendChild(greetingP);

  MESSAGES.forEach(msg => {
    const p = document.createElement('p');
    p.textContent = msg;
    letterBody.appendChild(p);
  });
}

cardBtn.addEventListener('click', () => {
  buildLetter();
  cardOverlay.classList.add('show');
});

closeCardBtn.addEventListener('click', () => {
  cardOverlay.classList.remove('show');
});

downloadCardBtn.addEventListener('click', () => {
  if (typeof html2canvas === 'undefined'){
    alert("Couldn't load the image tool — check your internet connection and try again.");
    return;
  }
  downloadCardBtn.textContent = 'Preparing…';
  html2canvas(document.getElementById('letter-card'), {
    backgroundColor: '#FBF8F1',
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `farewell-note-for-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    downloadCardBtn.textContent = '⬇ Download image';
  }).catch(() => {
    downloadCardBtn.textContent = '⬇ Download image';
    alert("Something went wrong saving the image — you can also just screenshot the card.");
  });
});

/* ============================================================
   PROGRESS DOTS  (greeting + each message = one dot)
   ============================================================ */
function buildDots(){
  const total = MESSAGES.length + 1;
  dotsEl.innerHTML = "";
  for (let i = 0; i < total; i++){
    const d = document.createElement('span');
    dotsEl.appendChild(d);
  }
}
function updateDots(){
  [...dotsEl.children].forEach((d, i) => {
    d.classList.toggle('active', i === Math.min(msgIndex, MESSAGES.length));
  });
}

/* ============================================================
   CONFETTI — lightweight canvas burst, no dependencies
   ============================================================ */
function launchConfetti(){
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#2F6F6B', '#E2704F', '#E7B84B', '#6FA3C7', '#FFFFFF'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.5,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 3,
    drift: (Math.random() - 0.5) * 2,
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 10
  }));

  let frame = 0;
  const maxFrames = 260;

  function tick(){
    frame++;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    pieces.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rotation += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (frame < maxFrames){
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }
  tick();
}

window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
  canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
});
