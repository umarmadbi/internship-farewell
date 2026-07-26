/* ============================================================
   EDIT ME: your farewell messages.
   The first message always doubles as the "Hi {name}" greeting,
   so start your list from message #2 onward.
   ============================================================ */
const MESSAGES = [
  "7 months really flew past, and it's honestly thanks to you! You helped me so much in settling into this new environment. I still remember the first convo we had when you brought me around the rooftop garden in our old office, and that's when I knew I could be comfortable talking to you.",
  "From us always trying to have lunch by ourselves because we were both introverts, to now laughing and joking about the most random things (suiii 😂), it's crazy how so much has changed. Some of my favourite memories from this internship weren't just the work itself, but all the conversations, jokes and random moments in between.",
  "Thank you for always being so patient with my endless questions. Whether it was about Power BI, trying to understand the supply chain processes or just needing someone to bounce ideas off, you never made me feel like I was asking too much. You were always willing to help and I honestly learned so much because of you.",
  "More than all the technical knowledge, though, I'm most grateful for your friendship. Looking back, I honestly don't think my internship would have been the same without you. I'm really thankful that I got to work alongside you, someone who makes work feel so comfortable and enjoyable.",
  "I'm sure this isn't goodbye since we'll definitely keep in touch 😆, but I just wanted to say thank you for all the guidance, patience, laughs, lunches and for simply making these past 7 months so memorable. I couldn't have asked for a better colleague and friend.",
  "Wishing you nothing but the very best, and I'll see you again soon. Thanks for everything, Alastair 🙆🏽‍♂️"
];

/* ============================================================
   STATE
   ============================================================ */
let name = "";
let msgIndex = -1; // -1 = greeting not shown yet

const gate = document.getElementById('name-gate');
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const stage = document.getElementById('stage');
const character = document.getElementById('character');
const armWave = document.getElementById('arm-wave');
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
   NAME RESOLUTION — via ?name=Sarah in the URL, else ask
   ============================================================ */
function getNameFromURL(){
  const params = new URLSearchParams(window.location.search);
  const n = params.get('name');
  return n ? n.trim() : "";
}

function startExperience(chosenName){
  name = chosenName || "there";
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
   SEQUENCE: walk in -> stop -> wave -> greet -> (button) -> messages
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
  // stop waving after a friendly moment, keep the button ready
  setTimeout(() => {
    armWave.classList.remove('waving');
  }, 2200);
}

function sizeBubble(text){
  bubble.classList.remove('len-short', 'len-medium', 'len-long', 'len-xlong');
  const len = text.length;
  if (len < 40) bubble.classList.add('len-short');
  else if (len < 100) bubble.classList.add('len-medium');
  else if (len < 220) bubble.classList.add('len-long');
  else bubble.classList.add('len-xlong');
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
  armWave.classList.add('waving');
  launchConfetti();
  setTimeout(() => {
    replayBtn.classList.add('show');
    cardBtn.classList.add('show');
    armWave.classList.remove('waving');
  }, 1600);
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
