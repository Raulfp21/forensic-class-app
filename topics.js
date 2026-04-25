<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Chain Relay – ML Autopsy</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0f;
    --surface: #13131a;
    --surface2: #1c1c28;
    --accent: #e8ff47;
    --accent2: #ff6b35;
    --danger: #ff4444;
    --success: #47ffb0;
    --text: #f0f0f0;
    --muted: #6b6b80;
    --border: rgba(255,255,255,0.08);
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-body); min-height: 100vh; overflow-x: hidden; }

  /* noise texture overlay */
  body::before { content:''; position:fixed; inset:0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events:none; z-index:0; opacity:0.4; }

  .screen { display:none; min-height:100vh; padding:24px 20px; position:relative; z-index:1; flex-direction:column; align-items:center; }
  .screen.active { display:flex; }

  /* ── TEACHER SCREEN ── */
  #teacher-screen { justify-content:flex-start; }
  .logo { font-family:var(--font-head); font-size:13px; letter-spacing:0.2em; color:var(--accent); text-transform:uppercase; margin-bottom:32px; }
  .big-title { font-family:var(--font-head); font-size:36px; font-weight:800; line-height:1.1; margin-bottom:8px; }
  .subtitle { color:var(--muted); font-size:15px; margin-bottom:40px; }

  .room-card { background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:28px; width:100%; max-width:420px; margin-bottom:24px; }
  .room-code { font-family:var(--font-head); font-size:52px; font-weight:800; color:var(--accent); letter-spacing:0.08em; text-align:center; }
  .room-label { text-align:center; color:var(--muted); font-size:13px; margin-top:6px; }

  .player-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; width:100%; max-width:420px; margin-bottom:24px; }
  .player-chip { background:var(--surface2); border:1px solid var(--border); border-radius:12px; padding:12px 16px; font-size:14px; font-weight:500; display:flex; align-items:center; gap:8px; }
  .player-dot { width:8px; height:8px; border-radius:50%; background:var(--success); flex-shrink:0; }
  .player-dot.hot { background:var(--accent); animation:pulse 0.8s ease-in-out infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

  .btn { font-family:var(--font-body); font-size:16px; font-weight:600; border:none; cursor:pointer; border-radius:14px; padding:16px 32px; transition:all 0.18s; width:100%; max-width:420px; }
  .btn-primary { background:var(--accent); color:#0a0a0f; }
  .btn-primary:active { transform:scale(0.97); }
  .btn-secondary { background:var(--surface2); color:var(--text); border:1px solid var(--border); }
  .btn-danger { background:var(--danger); color:#fff; }

  /* live scoreboard */
  .scoreboard { width:100%; max-width:420px; margin-bottom:24px; }
  .score-row { display:flex; align-items:center; justify-content:space-between; padding:10px 16px; background:var(--surface); border-radius:12px; margin-bottom:8px; border:1px solid var(--border); }
  .score-row.hot-seat { border-color:var(--accent); background:rgba(232,255,71,0.06); }
  .score-name { font-weight:500; font-size:14px; }
  .score-pts { font-family:var(--font-head); font-size:18px; color:var(--accent); }
  .streak-badge { background:var(--accent2); color:#fff; font-size:11px; font-weight:600; border-radius:20px; padding:2px 8px; margin-left:8px; }

  /* current question display for teacher */
  .q-display { background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:24px; width:100%; max-width:420px; margin-bottom:16px; }
  .q-num { color:var(--muted); font-size:12px; margin-bottom:8px; letter-spacing:0.1em; }
  .q-text { font-size:17px; font-weight:500; line-height:1.5; margin-bottom:16px; }
  .q-answer { background:rgba(71,255,176,0.08); border:1px solid rgba(71,255,176,0.2); border-radius:10px; padding:12px; font-size:14px; color:var(--success); }
  .q-answer-label { font-size:11px; color:var(--muted); margin-bottom:4px; letter-spacing:0.1em; }

  /* ── STUDENT SETUP ── */
  #student-setup { justify-content:center; gap:16px; }
  .input-group { width:100%; max-width:380px; }
  .input-label { font-size:13px; color:var(--muted); margin-bottom:8px; display:block; }
  input[type=text] { width:100%; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:16px; color:var(--text); font-family:var(--font-body); font-size:16px; outline:none; transition:border-color 0.2s; }
  input[type=text]:focus { border-color:var(--accent); }
  input[type=text]::placeholder { color:var(--muted); }

  /* ── STUDENT WAITING ── */
  #student-wait { justify-content:center; gap:20px; text-align:center; }
  .wait-icon { font-size:48px; animation:bounce 1.5s ease-in-out infinite; }
  @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

  /* ── STUDENT HOT SEAT ── */
  #student-question { justify-content:flex-start; gap:16px; }
  .hot-label { font-family:var(--font-head); font-size:11px; letter-spacing:0.2em; color:var(--accent2); text-transform:uppercase; }
  .q-card { background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:24px; width:100%; max-width:420px; }
  .q-card .q-text { font-size:18px; }
  .timer-bar-wrap { width:100%; max-width:420px; height:6px; background:var(--surface2); border-radius:3px; overflow:hidden; }
  .timer-bar { height:100%; background:var(--accent); border-radius:3px; transition:width 1s linear, background 0.5s; }
  .timer-bar.warn { background:var(--accent2); }
  .timer-bar.danger { background:var(--danger); }

  .options { width:100%; max-width:420px; display:flex; flex-direction:column; gap:10px; }
  .opt-btn { background:var(--surface); border:1.5px solid var(--border); border-radius:14px; padding:16px 20px; font-family:var(--font-body); font-size:15px; font-weight:500; color:var(--text); cursor:pointer; text-align:left; transition:all 0.15s; }
  .opt-btn:active { transform:scale(0.98); }
  .opt-btn.correct { border-color:var(--success); background:rgba(71,255,176,0.1); color:var(--success); }
  .opt-btn.wrong { border-color:var(--danger); background:rgba(255,68,68,0.1); color:var(--danger); }
  .opt-btn.reveal { border-color:var(--success); background:rgba(71,255,176,0.06); color:var(--success); }

  /* nominate panel */
  .nominate-panel { width:100%; max-width:420px; background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:20px; }
  .nominate-title { font-family:var(--font-head); font-size:16px; margin-bottom:14px; }
  .nom-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; }
  .nom-btn { background:var(--surface2); border:1px solid var(--border); border-radius:12px; padding:12px; font-family:var(--font-body); font-size:14px; font-weight:500; color:var(--text); cursor:pointer; transition:all 0.15s; }
  .nom-btn:active { background:var(--accent); color:#0a0a0f; transform:scale(0.96); }

  /* result flash */
  .result-flash { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:100; pointer-events:none; opacity:0; transition:opacity 0.3s; }
  .result-flash.show { opacity:1; }
  .result-inner { font-family:var(--font-head); font-size:64px; font-weight:800; text-align:center; animation:pop 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  @keyframes pop { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }

  /* streak banner */
  .streak-banner { position:fixed; top:20px; left:50%; transform:translateX(-50%); background:var(--accent2); color:#fff; font-family:var(--font-head); font-size:14px; font-weight:700; letter-spacing:0.1em; border-radius:30px; padding:10px 24px; z-index:99; opacity:0; transition:opacity 0.4s; white-space:nowrap; }
  .streak-banner.show { opacity:1; }

  /* pass badge */
  .pass-used { font-size:13px; color:var(--muted); text-align:center; }
  .pass-used span { color:var(--danger); }

  .divider { width:100%; max-width:420px; height:1px; background:var(--border); }
  .mini-scores { width:100%; max-width:420px; }
  .mini-row { display:flex; justify-content:space-between; padding:6px 0; font-size:13px; color:var(--muted); border-bottom:1px solid var(--border); }
  .mini-row.me { color:var(--text); font-weight:600; }

  /* end screen */
  #end-screen { justify-content:center; text-align:center; gap:20px; }
  .winner-crown { font-size:56px; margin-bottom:8px; }
  .podium { width:100%; max-width:380px; }
  .podium-item { display:flex; align-items:center; gap:12px; padding:14px 18px; background:var(--surface); border-radius:14px; margin-bottom:8px; border:1px solid var(--border); }
  .podium-rank { font-family:var(--font-head); font-size:22px; width:32px; }
  .podium-name { font-weight:600; flex:1; text-align:left; }
  .podium-score { font-family:var(--font-head); font-size:20px; color:var(--accent); }
  .podium-item:first-child { border-color:var(--accent); background:rgba(232,255,71,0.06); }

  /* mode selector */
  #mode-screen { justify-content:center; gap:20px; text-align:center; }
  .mode-card { background:var(--surface); border:1px solid var(--border); border-radius:20px; padding:28px 24px; width:100%; max-width:380px; cursor:pointer; transition:all 0.2s; }
  .mode-card:active { border-color:var(--accent); transform:scale(0.98); }
  .mode-icon { font-size:40px; margin-bottom:12px; }
  .mode-title { font-family:var(--font-head); font-size:20px; margin-bottom:6px; }
  .mode-desc { color:var(--muted); font-size:14px; }
</style>
</head>
<body>

<!-- MODE SELECT -->
<div id="mode-screen" class="screen active">
  <div class="logo">Chain Relay</div>
  <div class="big-title" style="text-align:center;font-size:28px;">Who are you?</div>
  <div class="mode-card" onclick="startTeacher()">
    <div class="mode-icon">🎓</div>
    <div class="mode-title">Teacher</div>
    <div class="mode-desc">Host the relay, manage players, reveal answers</div>
  </div>
  <div class="mode-card" onclick="showStudentSetup()">
    <div class="mode-icon">📱</div>
    <div class="mode-title">Student</div>
    <div class="mode-desc">Join the relay with a room code</div>
  </div>
</div>

<!-- TEACHER SCREEN -->
<div id="teacher-screen" class="screen">
  <div class="logo">Chain Relay – Teacher</div>
  <div id="t-lobby">
    <div class="room-card">
      <div class="room-code" id="room-code-display">----</div>
      <div class="room-label">Share this code with students</div>
    </div>
    <div class="player-grid" id="player-grid"></div>
    <button class="btn btn-primary" onclick="startGame()" id="start-btn" style="margin-bottom:12px;display:none;">Start Relay →</button>
    <p style="color:var(--muted);font-size:13px;text-align:center;" id="waiting-hint">Waiting for students to join…</p>
  </div>

  <div id="t-game" style="display:none;width:100%;max-width:420px;">
    <div class="q-display" id="t-q-display">
      <div class="q-num" id="t-q-num">QUESTION 1 / 15</div>
      <div class="q-text" id="t-q-text"></div>
      <div class="q-answer-label">CORRECT ANSWER</div>
      <div class="q-answer" id="t-q-answer"></div>
    </div>
    <div style="margin-bottom:12px;display:flex;gap:8px;width:100%;max-width:420px;">
      <button class="btn btn-secondary" style="flex:1;padding:12px;" onclick="markCorrect()">✓ Correct</button>
      <button class="btn btn-danger" style="flex:1;padding:12px;" onclick="markWrong()">✗ Wrong</button>
    </div>
    <div class="scoreboard" id="t-scoreboard"></div>
    <button class="btn btn-secondary" onclick="endGame()" style="margin-top:8px;">End Game</button>
  </div>
</div>

<!-- STUDENT SETUP -->
<div id="student-setup" class="screen">
  <div class="logo">Chain Relay</div>
  <div class="big-title" style="text-align:center;font-size:28px;">Join the Relay</div>
  <div class="input-group">
    <label class="input-label">Room Code</label>
    <input type="text" id="s-room" placeholder="e.g. 4829" maxlength="4" style="font-size:28px;text-align:center;letter-spacing:0.2em;" oninput="this.value=this.value.replace(/\D/g,'')">
  </div>
  <div class="input-group">
    <label class="input-label">Your Name</label>
    <input type="text" id="s-name" placeholder="e.g. Arun" maxlength="20">
  </div>
  <button class="btn btn-primary" onclick="joinGame()">Join →</button>
  <button class="btn btn-secondary" onclick="showScreen('mode-screen')" style="margin-top:8px;">← Back</button>
</div>

<!-- STUDENT WAITING -->
<div id="student-wait" class="screen">
  <div class="wait-icon">⏳</div>
  <div class="big-title" style="font-size:26px;text-align:center;">Waiting for teacher<br>to start…</div>
  <div id="sw-name" style="color:var(--accent);font-family:var(--font-head);font-size:20px;"></div>
  <div id="sw-room" style="color:var(--muted);font-size:14px;"></div>
  <div class="mini-scores" id="sw-players"></div>
</div>

<!-- STUDENT QUESTION (HOT SEAT) -->
<div id="student-question" class="screen">
  <div class="hot-label">🔥 Your turn!</div>
  <div class="timer-bar-wrap"><div class="timer-bar" id="s-timer-bar"></div></div>
  <div class="q-card">
    <div class="q-num" id="s-q-num">Q 1 / 15</div>
    <div class="q-text" id="s-q-text"></div>
  </div>
  <div class="options" id="s-options"></div>
  <div class="pass-used" id="s-pass-status"></div>
  <div id="s-nominate-panel" style="display:none;" class="nominate-panel">
    <div class="nominate-title">⚡ Pass the relay to…</div>
    <div class="nom-grid" id="nom-grid"></div>
  </div>
  <div class="mini-scores" id="sq-scores"></div>
</div>

<!-- STUDENT SPECTATING -->
<div id="student-watch" class="screen" style="justify-content:center;gap:16px;text-align:center;">
  <div class="big-title" style="font-size:22px;">👀 Watching</div>
  <div id="sw-hotseat" style="color:var(--accent);font-family:var(--font-head);font-size:18px;"></div>
  <div class="mini-scores" id="swatch-scores"></div>
</div>

<!-- END SCREEN -->
<div id="end-screen" class="screen">
  <div class="winner-crown">🏆</div>
  <div class="big-title" style="font-size:28px;">Relay Complete!</div>
  <div class="podium" id="podium"></div>
  <button class="btn btn-primary" onclick="location.reload()" style="margin-top:16px;">Play Again</button>
</div>

<!-- Result flash overlay -->
<div class="result-flash" id="result-flash"><div class="result-inner" id="result-inner"></div></div>
<div class="streak-banner" id="streak-banner"></div>

<script>
// ─── DATA ───────────────────────────────────────────────────
const QUESTIONS = [
  // Step 1: Pre-autopsy
  { q:"Who receives requests for PM examination when the Professor of FM is absent in a Govt Medical College?", opts:["Associate Professor","CMO","Police Inspector","Dean"], ans:0, step:1 },
  { q:"What is the last time a requisition for PM examination can be received in any medical establishment?", opts:["2 PM","4 PM","6 PM","Any time"], ans:1, step:1 },
  { q:"Cases received before 4 PM can be carried out till which time?", opts:["5 PM","6 PM","7 PM","8 PM"], ans:1, step:1 },
  { q:"Which type of officer in a Police Station can give the requisition letter for routine PM cases (not requiring Magistrate inquest)?", opts:["Head Constable","Sub Inspector","Inspector","DSP"], ans:1, step:1 },
  { q:"Which of these cases REQUIRES a Magistrate to hold inquest and give the PM letter?", opts:["Road traffic accident","Custodial death","Railway death","Snake bite death"], ans:1, step:1 },
  { q:"What should be done with all pages of documents submitted with the PM requisition?", opts:["Filed separately","Numbered and attached to PM booklet","Sent to Magistrate","Kept by Police"], ans:1, step:1 },
  { q:"Who can perform PM examination legally in India?", opts:["Any registered doctor","Only forensic specialists","Only Govt Medical Officers (or those directed by Govt)","Private practitioners with police permission"], ans:2, step:1 },
  // Step 2: Conduct
  { q:"Who is NOT authorised to be present inside the mortuary during conduct of autopsy?", opts:["Mortuary attendant","Body in-charge constable","Lawyer","Conducting Medical Officer"], ans:2, step:2 },
  { q:"For what duration is the dissection hall sealed daily after work?", opts:["Until next morning","Until next case arrives","Until Police collect the body","Until Magistrate orders reopening"], ans:0, step:2 },
  { q:"In which Government-issued booklet are notes taken during autopsy entered?", opts:["Medl. I-29","Medl. I-28","Medl. I-30","Form 86"], ans:1, step:2 },
  { q:"Which of the following is TRUE about videography of a routine autopsy?", opts:["Mandatory for all cases","Allowed on written request from relative/friend of deceased","Allowed at IO's verbal request","Never permitted"], ans:1, step:2 },
  { q:"After autopsy, the sealed video recording is sent to:", opts:["Superintendent of Police","Investigating Officer","Concerned Magistrate","Head of Institution"], ans:2, step:2 },
  // Step 3: Special situations
  { q:"For custodial death autopsy, the minimum team size is:", opts:["1 doctor","2 doctors with MD Forensic Medicine","3 doctors","Any 2 Govt doctors"], ans:1, step:3 },
  { q:"How many coloured photographs must be taken during a custodial death autopsy?", opts:["10","15","20-25","30"], ans:2, step:3 },
  { q:"In HIV-positive cases, for how many days should the body be wrapped in plastic before dissection to allow viral viability to reduce?", opts:["1 day","3 days","7 days","No waiting needed"], ans:1, step:3 },
];

// ─── STATE ───────────────────────────────────────────────────
const STATE = {
  roomCode: '',
  players: [],      // {id, name, score, passed, isHotSeat}
  myId: '',
  myName: '',
  currentQ: 0,
  hotSeatId: '',
  streak: 0,
  answered: false,
  timerInterval: null,
  timeLeft: 30,
  passUsed: {},     // playerId -> bool
  isTeacher: false,
  gameStarted: false,
  pendingNominate: false,
};

// Simulate shared state via localStorage (same device demo) + BroadcastChannel for multi-device
let BC;
try { BC = new BroadcastChannel('chain_relay'); } catch(e) { BC = null; }

function broadcast(msg) {
  try { localStorage.setItem('cr_msg', JSON.stringify({...msg, _t: Date.now()})); } catch(e){}
  if(BC) BC.postMessage(msg);
}

function listenBroadcast(cb) {
  if(BC) BC.onmessage = e => cb(e.data);
  window.addEventListener('storage', e => {
    if(e.key === 'cr_msg' && e.newValue) { try { cb(JSON.parse(e.newValue)); } catch(x){} }
  });
}

// ─── HELPERS ─────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function saveState() {
  try { localStorage.setItem('cr_state', JSON.stringify(STATE)); } catch(e){}
}

function renderTeacherScoreboard() {
  const sb = document.getElementById('t-scoreboard');
  const sorted = [...STATE.players].sort((a,b)=>b.score-a.score);
  sb.innerHTML = sorted.map(p=>`
    <div class="score-row ${p.id===STATE.hotSeatId?'hot-seat':''}">
      <span class="score-name">${p.id===STATE.hotSeatId?'🎯 ':''} ${p.name}</span>
      <span><span class="score-pts">${p.score}</span>${STATE.streak>=3?'<span class="streak-badge">🔥'+STATE.streak+'</span>':''}</span>
    </div>`).join('');
}

function showQuestion() {
  const q = QUESTIONS[STATE.currentQ];
  document.getElementById('t-q-num').textContent = `QUESTION ${STATE.currentQ+1} / ${QUESTIONS.length}  •  STEP ${q.step}`;
  document.getElementById('t-q-text').textContent = q.q;
  document.getElementById('t-q-answer').textContent = q.opts[q.ans];
  renderTeacherScoreboard();

  // broadcast to students
  broadcast({ type:'question', qIndex: STATE.currentQ, hotSeatId: STATE.hotSeatId, players: STATE.players, streak: STATE.streak });
}

function markCorrect() {
  const p = STATE.players.find(x=>x.id===STATE.hotSeatId);
  if(!p) return;
  const bonus = STATE.streak >= 3 ? 5 : STATE.streak >= 2 ? 3 : 2;
  p.score += bonus;
  STATE.streak++;
  broadcast({ type:'result', correct:true, hotSeatId:STATE.hotSeatId, players:STATE.players, streak:STATE.streak, bonus });
  showStreakBanner();
  renderTeacherScoreboard();
  setTimeout(()=>broadcastNominate(), 1200);
}

function markWrong() {
  STATE.streak = 0;
  broadcast({ type:'result', correct:false, hotSeatId:STATE.hotSeatId, players:STATE.players, streak:0, bonus:0 });
  renderTeacherScoreboard();
  // If pass available, let them pass; else move to next after 2s
  const p = STATE.players.find(x=>x.id===STATE.hotSeatId);
  if(!p) return;
  if(!STATE.passUsed[STATE.hotSeatId]) {
    broadcast({ type:'allow_pass', hotSeatId:STATE.hotSeatId });
  } else {
    setTimeout(()=>broadcastNominate(), 1500);
  }
}

function broadcastNominate() {
  if(STATE.currentQ >= QUESTIONS.length - 1) { endGame(); return; }
  STATE.currentQ++;
  broadcast({ type:'nominate', hotSeatId:STATE.hotSeatId, players:STATE.players });
}

function endGame() {
  broadcast({ type:'end', players:STATE.players });
  showEndScreen();
}

function showEndScreen() {
  const sorted = [...STATE.players].sort((a,b)=>b.score-a.score);
  const medals = ['🥇','🥈','🥉'];
  document.getElementById('podium').innerHTML = sorted.slice(0,5).map((p,i)=>`
    <div class="podium-item">
      <span class="podium-rank">${medals[i]||i+1}</span>
      <span class="podium-name">${p.name}</span>
      <span class="podium-score">${p.score} pts</span>
    </div>`).join('');
  showScreen('end-screen');
}

function showStreakBanner() {
  if(STATE.streak < 2) return;
  const b = document.getElementById('streak-banner');
  b.textContent = STATE.streak >= 5 ? `🔥 ${STATE.streak} STREAK — UNSTOPPABLE!` : STATE.streak >= 3 ? `⚡ ${STATE.streak} IN A ROW — BONUS PTS!` : '';
  if(!b.textContent) return;
  b.classList.add('show');
  setTimeout(()=>b.classList.remove('show'),2000);
}

function flashResult(text, color) {
  const f = document.getElementById('result-flash');
  const inner = document.getElementById('result-inner');
  inner.textContent = text;
  inner.style.color = color;
  f.classList.add('show');
  setTimeout(()=>f.classList.remove('show'),900);
}

// ─── TEACHER FLOW ──────────────────────────────────────────
function startTeacher() {
  STATE.isTeacher = true;
  STATE.roomCode = Math.floor(1000+Math.random()*9000).toString();
  try { localStorage.setItem('cr_room', STATE.roomCode); localStorage.setItem('cr_players', JSON.stringify([])); } catch(e){}
  document.getElementById('room-code-display').textContent = STATE.roomCode;
  showScreen('teacher-screen');

  // Poll for new players
  setInterval(()=>{
    try {
      const ps = JSON.parse(localStorage.getItem('cr_players')||'[]');
      const newOnes = ps.filter(p=>!STATE.players.find(x=>x.id===p.id));
      if(newOnes.length) {
        STATE.players.push(...newOnes.map(p=>({...p,score:0})));
        renderPlayerGrid();
        if(STATE.players.length>=1) { document.getElementById('start-btn').style.display='block'; document.getElementById('waiting-hint').style.display='none'; }
      }
    } catch(e){}
  }, 800);
}

function renderPlayerGrid() {
  document.getElementById('player-grid').innerHTML = STATE.players.map(p=>`
    <div class="player-chip"><span class="player-dot ${p.id===STATE.hotSeatId?'hot':''}"></span>${p.name}</div>`).join('');
}

function startGame() {
  STATE.gameStarted = true;
  STATE.currentQ = 0;
  STATE.hotSeatId = STATE.players[0]?.id || '';
  document.getElementById('t-lobby').style.display='none';
  document.getElementById('t-game').style.display='block';
  broadcast({ type:'game_start', players:STATE.players });
  setTimeout(showQuestion, 500);
}

// ─── STUDENT FLOW ─────────────────────────────────────────
function showStudentSetup() { showScreen('student-setup'); }

function joinGame() {
  const room = document.getElementById('s-room').value.trim();
  const name = document.getElementById('s-name').value.trim();
  if(!room||!name) { alert('Enter room code and your name'); return; }
  STATE.myName = name;
  STATE.roomCode = room;
  STATE.myId = name + '_' + Date.now();

  try {
    const stored = JSON.parse(localStorage.getItem('cr_players')||'[]');
    stored.push({id:STATE.myId, name});
    localStorage.setItem('cr_players', JSON.stringify(stored));
  } catch(e){}

  document.getElementById('sw-name').textContent = name;
  document.getElementById('sw-room').textContent = `Room: ${room}`;
  showScreen('student-wait');
  listenBroadcast(handleBroadcast);
}

function handleBroadcast(msg) {
  if(!msg||!msg.type) return;
  switch(msg.type) {
    case 'game_start':
      STATE.players = msg.players;
      renderWatchScores();
      break;
    case 'question':
      STATE.players = msg.players;
      STATE.currentQ = msg.qIndex;
      STATE.hotSeatId = msg.hotSeatId;
      STATE.streak = msg.streak;
      STATE.answered = false;
      if(STATE.hotSeatId === STATE.myId) {
        showStudentQuestion();
      } else {
        showStudentWatch();
      }
      break;
    case 'result':
      STATE.players = msg.players;
      if(msg.hotSeatId===STATE.myId) {
        flashResult(msg.correct?'✓ Correct! +'+msg.bonus:'✗ Wrong', msg.correct?'#47ffb0':'#ff4444');
      }
      break;
    case 'allow_pass':
      if(msg.hotSeatId===STATE.myId) {
        document.getElementById('s-pass-status').innerHTML = '<span style="color:var(--accent2)">Wrong — use your Pass or wait…</span>';
        document.getElementById('s-options').innerHTML += `<button class="opt-btn" onclick="usePass()" style="border-color:var(--accent2);color:var(--accent2);">🛡️ Use Pass (send back later)</button>`;
      }
      break;
    case 'nominate':
      STATE.players = msg.players;
      if(msg.hotSeatId===STATE.myId) {
        showNominatePanel();
      } else {
        renderWatchScores();
      }
      break;
    case 'end':
      STATE.players = msg.players;
      showEndScreen();
      break;
  }
}

function showStudentQuestion() {
  clearInterval(STATE.timerInterval);
  STATE.timeLeft = 30;
  showScreen('student-question');
  const q = QUESTIONS[STATE.currentQ];
  document.getElementById('s-q-num').textContent = `Q ${STATE.currentQ+1} / ${QUESTIONS.length}`;
  document.getElementById('s-q-text').textContent = q.q;
  document.getElementById('s-pass-status').textContent = STATE.passUsed[STATE.myId] ? 'Pass already used' : '';
  document.getElementById('s-nominate-panel').style.display='none';

  const opts = document.getElementById('s-options');
  opts.innerHTML = q.opts.map((o,i)=>`<button class="opt-btn" onclick="selectAnswer(${i})">${o}</button>`).join('');

  renderStudentScores();
  startTimer();
}

function startTimer() {
  const bar = document.getElementById('s-timer-bar');
  bar.style.width='100%'; bar.className='timer-bar';
  STATE.timerInterval = setInterval(()=>{
    STATE.timeLeft--;
    const pct = (STATE.timeLeft/30)*100;
    bar.style.width = pct+'%';
    if(pct<40) bar.className='timer-bar warn';
    if(pct<20) bar.className='timer-bar danger';
    if(STATE.timeLeft<=0) { clearInterval(STATE.timerInterval); if(!STATE.answered) autoFail(); }
  },1000);
}

function selectAnswer(idx) {
  if(STATE.answered) return;
  STATE.answered = true;
  clearInterval(STATE.timerInterval);
  const q = QUESTIONS[STATE.currentQ];
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach((b,i)=>{
    b.disabled=true;
    if(i===q.ans) b.classList.add('correct');
    else if(i===idx&&idx!==q.ans) b.classList.add('wrong');
  });
  // Teacher marks correct/wrong via their screen — student just waits for nominate
  document.getElementById('s-nominate-panel').style.display='none';
}

function autoFail() {
  STATE.answered = true;
  const q = QUESTIONS[STATE.currentQ];
  document.querySelectorAll('.opt-btn').forEach((b,i)=>{
    b.disabled=true;
    if(i===q.ans) b.classList.add('reveal');
  });
  flashResult('⏱ Time!','#ff6b35');
}

function usePass() {
  STATE.passUsed[STATE.myId] = true;
  document.getElementById('s-pass-status').innerHTML = '<span>Pass used — question returns to you later</span>';
  broadcast({ type:'pass_used', playerId:STATE.myId });
  showNominatePanel();
}

function showNominatePanel() {
  document.getElementById('s-nominate-panel').style.display='block';
  const grid = document.getElementById('nom-grid');
  const others = STATE.players.filter(p=>p.id!==STATE.myId);
  grid.innerHTML = others.map(p=>`<button class="nom-btn" onclick="nominatePlayer('${p.id}')">${p.name}</button>`).join('');
}

function nominatePlayer(id) {
  STATE.hotSeatId = id;
  broadcast({ type:'nominated', newHotSeat:id, fromId:STATE.myId });
  document.getElementById('s-nominate-panel').style.display='none';
  showStudentWatch();
  // Teacher picks up 'nominated' and advances question
  try {
    const room = localStorage.getItem('cr_room');
    // Notify teacher via local storage flag
    localStorage.setItem('cr_nominated', JSON.stringify({newHotSeat:id, qIndex:STATE.currentQ+1<QUESTIONS.length?STATE.currentQ+1:STATE.currentQ}));
  } catch(e){}
}

function showStudentWatch() {
  showScreen('student-watch');
  const hot = STATE.players.find(p=>p.id===STATE.hotSeatId);
  document.getElementById('sw-hotseat').textContent = hot ? `🎯 ${hot.name} is up!` : '';
  renderWatchScores();
}

function renderWatchScores() {
  const sorted = [...STATE.players].sort((a,b)=>b.score-a.score);
  document.getElementById('swatch-scores').innerHTML = sorted.map(p=>`
    <div class="mini-row ${p.id===STATE.myId?'me':''}">${p.name}<span>${p.score} pts</span></div>`).join('');
}

function renderStudentScores() {
  const sorted = [...STATE.players].sort((a,b)=>b.score-a.score);
  document.getElementById('sq-scores').innerHTML = sorted.map(p=>`
    <div class="mini-row ${p.id===STATE.myId?'me':''}">${p.name}<span>${p.score} pts</span></div>`).join('');
  renderWatchScores();
}

function renderWaitPlayers() {
  try {
    const ps = JSON.parse(localStorage.getItem('cr_players')||'[]');
    document.getElementById('sw-players').innerHTML = ps.map(p=>`
      <div class="mini-row">${p.name}<span style="color:var(--success)">joined</span></div>`).join('');
  } catch(e){}
}

setInterval(()=>{ if(document.getElementById('student-wait').classList.contains('active')) renderWaitPlayers(); },1500);

// Teacher listens for nominations
setInterval(()=>{
  if(!STATE.isTeacher||!STATE.gameStarted) return;
  try {
    const nom = JSON.parse(localStorage.getItem('cr_nominated')||'null');
    if(nom && nom._handled!==true) {
      nom._handled = true;
      localStorage.setItem('cr_nominated', JSON.stringify(nom));
      STATE.hotSeatId = nom.newHotSeat;
      if(STATE.currentQ < QUESTIONS.length-1) { STATE.currentQ++; showQuestion(); }
      else endGame();
    }
  } catch(e){}
},600);
</script>
</body>
</html>
  
