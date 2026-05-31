import { questions, timelines, achievements } from './questions.js';
import { sounds } from './sounds.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Listen for auth state changes
onAuthStateChanged(auth, user => {
  updateConnectionBadge(user);
});

// Connection badge updater
function updateConnectionBadge(user) {
  const badge = DOM.connStatus;
  if (!badge) return;
  if (user) {
    badge.classList.remove('offline');
    badge.classList.add('online');
    const email = user.email || `User ${user.uid.slice(0,6)}`;
    badge.querySelector('.badge-text').textContent = `Online (${email})`;
  } else {
    badge.classList.remove('online');
    badge.classList.add('offline');
    badge.querySelector('.badge-text').textContent = 'Offline';
  }
}

// ==========================================
// CORE APP STATE
// ==========================================
const state = {
  // Navigation
  currentScreen: 'screen-splash',
  
  // Game Configuration
  gameMode: 'classic', // classic, survival, chronology
  category: 'mix',     // pre-colonial, spanish, american-japanese, modern, mix
  
  // Quiz Session State
  gameQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  lives: 3,
  inputLocked: false,
  timerValue: 15,
  timerInterval: null,
  
  // Chronology Session State
  activeTimeline: null,
  userTimelineOrder: [], // holds the event IDs in current order
  selectedChronoCardIndex: null, // for click-to-swap mechanics
  
  // Progression & Persistence
  xp: 0,
  level: 1,
  totalGamesPlayed: 0,
  totalAnswersCorrect: 0,
  totalAnswersGiven: 0,
  highScores: {
    classic: 0,
    survival: 0,
    chronology: 0
  }
};

// ==========================================
// DOM ELEMENT CACHE
// ==========================================
const DOM = {
  screens: document.querySelectorAll('.screen'),
  splashFill: document.querySelector('.splash-loader-fill'),
  splashText: document.querySelector('.splash-loading-text'),
  
  // HUD Elements
  hudLevel: document.getElementById('hud-level'),
  hudRank: document.getElementById('hud-rank'),
  hudXpFill: document.getElementById('hud-xp-fill'),
  hudXpText: document.getElementById('hud-xp-text'),
  
  // Buttons
  btnToggleSound: document.getElementById('btn-toggle-sound'),
  btnShowAchievements: document.getElementById('btn-show-achievements'),
  btnStartJourney: document.getElementById('btn-start-journey'),
  btnQuitGame: document.getElementById('btn-quit-game'),
  btnQuitChrono: document.getElementById('btn-quit-chrono'),
  btnShowStats: document.getElementById('btn-show-stats'),
  btnToggleTheme: document.getElementById('btn-toggle-theme'),
  btnBackToHome: document.getElementById('btn-back-to-home'),
  btnVerifyChrono: document.getElementById('btn-verify-chronology'),
  btnContinueFact: document.getElementById('btn-continue-fact'),
  btnReplay: document.getElementById('btn-replay'),
  btnChangeMode: document.getElementById('btn-change-mode'),
  btnGoHome: document.getElementById('btn-go-home'),
  btnResetStats: document.getElementById('btn-reset-stats'),
  btnCloseStats: document.getElementById('btn-close-stats'),
  // Connection badge
  connStatus: document.getElementById('conn-status'),
  
  // Screens & Popups
  screenSplash: document.getElementById('screen-splash'),
  screenHome: document.getElementById('screen-home'),
  screenCategories: document.getElementById('screen-categories'),
  screenGame: document.getElementById('screen-game'),
  screenChronology: document.getElementById('screen-chronology'),
  screenSummary: document.getElementById('screen-summary'),
  drawerStats: document.getElementById('drawer-stats'),
  modalFact: document.getElementById('modal-fact'),
  
  // Game Arena HUD
  gameScore: document.getElementById('game-score'),
  gameProgress: document.getElementById('game-progress'),
  arenaProgressFill: document.getElementById('arena-progress-fill'),
  arenaCategoryBadge: document.getElementById('arena-category-badge'),
  questionText: document.getElementById('question-text'),
  optionsGrid: document.getElementById('options-grid'),
  
  // Circular Timer
  classicTimerWidget: document.getElementById('classic-timer-widget'),
  timerRingProgress: document.getElementById('timer-ring-progress'),
  timerNumber: document.getElementById('timer-number'),
  
  // Lives Heart Container
  survivalLivesWidget: document.getElementById('survival-lives-widget'),
  
  // Chronology HUD & Deck
  chronoRoundTitle: document.getElementById('chrono-round-title'),
  chronoScore: document.getElementById('chrono-score'),
  chronoDeck: document.getElementById('chrono-deck-container'),
  
  // Fact Sheet Modal Elements
  factCardIndicator: document.getElementById('fact-card-indicator'),
  factResultIcon: document.getElementById('fact-result-icon'),
  factResultTitle: document.getElementById('fact-result-title'),
  factExplanationText: document.getElementById('fact-explanation-text'),
  
  // Summary Screen Elements
  sumScore: document.getElementById('sum-score'),
  sumAccuracy: document.getElementById('sum-accuracy'),
  sumCorrect: document.getElementById('sum-correct'),
  sumXp: document.getElementById('sum-xp'),
  sumLevelBefore: document.getElementById('sum-level-before'),
  sumXpFill: document.getElementById('sum-xp-fill'),
  sumXpText: document.getElementById('sum-xp-text'),
  sumHeadline: document.getElementById('summary-headline'),
  sumSubhead: document.getElementById('summary-subhead'),
  sumLevelUpBanner: document.getElementById('summary-level-up-banner'),
  levelUpText: document.getElementById('level-up-text'),
  confettiContainer: document.getElementById('confetti-canvas-container'),
  
  // Drawer Stats
  statLvl: document.getElementById('stat-lvl'),
  statXp: document.getElementById('stat-xp'),
  statPlayed: document.getElementById('stat-played'),
  statAccuracy: document.getElementById('stat-accuracy'),
  scoreClassic: document.getElementById('score-classic'),
  scoreSurvival: document.getElementById('score-survival'),
  scoreChronology: document.getElementById('score-chronology'),
  badgesContainer: document.getElementById('badges-container')
};

// ==========================================
// PERSISTENCE & DATA MANAGEMENT
// ==========================================
function loadUserData() {
  try {
    const xp = localStorage.getItem('kasaysayan_xp');
    if (xp !== null) state.xp = parseInt(xp);

    const level = localStorage.getItem('kasaysayan_level');
    if (level !== null) state.level = parseInt(level);

    const played = localStorage.getItem('kasaysayan_total_played');
    if (played !== null) state.totalGamesPlayed = parseInt(played);

    const correct = localStorage.getItem('kasaysayan_total_correct');
    if (correct !== null) state.totalAnswersCorrect = parseInt(correct);

    const given = localStorage.getItem('kasaysayan_total_given');
    if (given !== null) state.totalAnswersGiven = parseInt(given);

    const scores = localStorage.getItem('kasaysayan_high_scores');
    if (scores !== null) {
      state.highScores = JSON.parse(scores);
    }
  } catch (e) {
    console.error("Failed to load user progress.", e);
  }
}

function saveUserData() {
  try {
    localStorage.setItem('kasaysayan_xp', state.xp);
    localStorage.setItem('kasaysayan_level', state.level);
    localStorage.setItem('kasaysayan_total_played', state.totalGamesPlayed);
    localStorage.setItem('kasaysayan_total_correct', state.totalAnswersCorrect);
    localStorage.setItem('kasaysayan_total_given', state.totalAnswersGiven);
    localStorage.setItem('kasaysayan_high_scores', JSON.stringify(state.highScores));
  } catch (e) {
    console.error("Failed to save user progress.", e);
  }
}

// ==========================================
// LEVEL PROGRESSION & RANKS
// ==========================================
function getRankTitle(level) {
  if (level >= 6) return 'Bayani (National Hero)';
  if (level === 5) return 'Heneral (General)';
  if (level === 4) return 'Ilustrado (Scholar)';
  if (level === 3) return 'Katipunero (Soldier)';
  if (level === 2) return 'Kawani (Officer)';
  return 'Lakbay-Lahi (Explorer)';
}

function getXpThreshold(lvl) {
  if (lvl === 1) return 200;
  if (lvl === 2) return 500;
  if (lvl === 3) return 1000;
  if (lvl === 4) return 2000;
  if (lvl === 5) return 3500;
  return Infinity; // Max level
}

function getLevelProgressPercent(xp, lvl) {
  const prevThreshold = lvl === 1 ? 0 : getXpThreshold(lvl - 1);
  const currentThreshold = getXpThreshold(lvl);
  if (currentThreshold === Infinity) return 100;
  
  const xpInLevel = xp - prevThreshold;
  const levelRange = currentThreshold - prevThreshold;
  return Math.min(100, Math.max(0, (xpInLevel / levelRange) * 100));
}

// Update state XP and calculate level ups
function addXp(amount) {
  const previousLevel = state.level;
  state.xp += amount;
  
  // Calculate level up loops
  while (state.xp >= getXpThreshold(state.level) && state.level < 6) {
    state.level++;
  }
  
  saveUserData();
  updateHUD();
  
  return {
    leveledUp: state.level > previousLevel,
    newLevel: state.level,
    newRank: getRankTitle(state.level)
  };
}

// ==========================================
// UI HUD SYNCHRONIZATION
// ==========================================
function updateHUD() {
  // Update levels
  DOM.hudLevel.textContent = state.level;
  DOM.hudRank.textContent = getRankTitle(state.level).split(' ')[0]; // short title
  
  // Update XP fill
  const progressPercent = getLevelProgressPercent(state.xp, state.level);
  DOM.hudXpFill.style.width = `${progressPercent}%`;
  
  const nextThreshold = getXpThreshold(state.level);
  if (nextThreshold === Infinity) {
    DOM.hudXpText.textContent = `${state.xp} XP (MAX RANK)`;
  } else {
    DOM.hudXpText.textContent = `${state.xp} / ${nextThreshold} XP`;
  }
  
  // Sync audio toggle visual button
  if (sounds.isMuted()) {
    DOM.btnToggleSound.classList.add('muted');
    DOM.btnToggleSound.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
    `;
  } else {
    DOM.btnToggleSound.classList.remove('muted');
    DOM.btnToggleSound.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    `;
  }
}

// ==========================================
// SCREEN TRANSITIONS
// ==========================================
function showScreen(screenId) {
  sounds.playClick();
  DOM.screens.forEach(screen => {
    if (screen.id === screenId) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  });
  state.currentScreen = screenId;
}

// ==========================================
// GAMEPLAY MECHANICS (QUIZ Arena)
// ==========================================
function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function startQuizGame() {
  state.score = 0;
  state.currentQuestionIndex = 0;
  state.lives = 3;
  state.inputLocked = false;
  state.userAnswers = [];
  
  // Filter questions based on selected category
  let filtered = [];
  if (state.category === 'mix') {
    filtered = [...questions];
  } else {
    filtered = questions.filter(q => q.category === state.category);
  }
  
  // Shuffle and set questions
  if (state.gameMode === 'classic') {
    // Exactly 10 shuffled questions for a quick standard game
    state.gameQuestions = shuffleArray(filtered).slice(0, 10);
  } else {
    // Survival is a gauntlet - shuffle all of them to make an ongoing chain
    state.gameQuestions = shuffleArray(filtered);
  }

  // Setup HUD widgets based on mode
  if (state.gameMode === 'classic') {
    DOM.classicTimerWidget.classList.remove('hide');
    DOM.survivalLivesWidget.classList.add('hide');
  } else {
    DOM.classicTimerWidget.classList.add('hide');
    DOM.survivalLivesWidget.classList.remove('hide');
    updateSurvivalLivesHUD();
  }
  
  DOM.gameScore.textContent = String(state.score).padStart(4, '0');
  
  showScreen('screen-game');
  renderQuestion();
}

function updateSurvivalLivesHUD() {
  const hearts = DOM.survivalLivesWidget.querySelectorAll('.heart');
  hearts.forEach((heart, idx) => {
    if (idx < state.lives) {
      heart.classList.remove('lost-heart');
    } else {
      heart.classList.add('lost-heart');
    }
  });
}

function renderQuestion() {
  clearInterval(state.timerInterval);
  state.inputLocked = false;
  
  const q = state.gameQuestions[state.currentQuestionIndex];
  
  // Render details
  DOM.gameProgress.textContent = `${state.currentQuestionIndex + 1} / ${state.gameQuestions.length}`;
  const progressPercent = ((state.currentQuestionIndex) / state.gameQuestions.length) * 100;
  DOM.arenaProgressFill.style.width = `${progressPercent}%`;
  
  // Category badge name
  let badgeName = '';
  switch (q.category) {
    case 'pre-colonial': badgeName = '📜 Ancient Pre-Colonial'; break;
    case 'spanish': badgeName = '⚔️ Spanish Era & Revolution'; break;
    case 'american-japanese': badgeName = '🎖️ Imperial Wars'; break;
    case 'modern': badgeName = '🏙️ Post-War & Modern'; break;
  }
  DOM.arenaCategoryBadge.textContent = badgeName;
  DOM.questionText.textContent = q.question;
  
  // Populate options grid
  DOM.optionsGrid.innerHTML = '';
  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optText;
    btn.addEventListener('click', () => handleOptionClick(idx));
    DOM.optionsGrid.appendChild(btn);
  });
  
  // Setup countdown timers for Classic Mode
  if (state.gameMode === 'classic') {
    state.timerValue = 15;
    DOM.timerNumber.textContent = state.timerValue;
    DOM.classicTimerWidget.classList.remove('warning');
    
    // reset timer ring stroke dasharray (100% full)
    DOM.timerRingProgress.style.strokeDasharray = '100, 100';
    
    state.timerInterval = setInterval(() => {
      state.timerValue--;
      DOM.timerNumber.textContent = state.timerValue;
      sounds.playTick();
      
      // Update circular SVG timer stroke
      const dash = (state.timerValue / 15) * 100;
      DOM.timerRingProgress.style.strokeDasharray = `${dash}, 100`;
      
      if (state.timerValue <= 4) {
        DOM.classicTimerWidget.classList.add('warning');
      }
      
      if (state.timerValue <= 0) {
        clearInterval(state.timerInterval);
        handleTimeout();
      }
    }, 1000);
  }
}

function handleOptionClick(selectedIdx) {
  if (state.inputLocked) return;
  state.inputLocked = true;
  clearInterval(state.timerInterval);
  
  const q = state.gameQuestions[state.currentQuestionIndex];
  const isCorrect = (selectedIdx === q.answer);
  
  const optionBtns = DOM.optionsGrid.querySelectorAll('.option-btn');
  state.totalAnswersGiven++;
  
  if (isCorrect) {
    sounds.playCorrect();
    state.totalAnswersCorrect++;
    state.userAnswers.push(true);
    
    optionBtns[selectedIdx].classList.add('selected-correct');
    
    // Calculate score & speed bonus
    let questionScore = 100;
    let speedBonus = 0;
    if (state.gameMode === 'classic') {
      speedBonus = Math.round(state.timerValue * 6.5); // speed points
      questionScore += speedBonus;
    }
    state.score += questionScore;
    DOM.gameScore.textContent = String(state.score).padStart(4, '0');
    
    // Award XP
    const xpReward = 15 + Math.round(speedBonus / 10);
    const xpResult = addXp(xpReward);
    
    // Transition to Fact Sheet
    setTimeout(() => {
      showFactSheetModal(true, q.explanation, xpReward, xpResult.leveledUp ? xpResult.newRank : null);
    }, 1100);
    
  } else {
    sounds.playIncorrect();
    state.userAnswers.push(false);
    
    optionBtns[selectedIdx].classList.add('selected-wrong');
    // shake selected button
    optionBtns[selectedIdx].classList.add('shake');
    // reveal correct
    optionBtns[q.answer].classList.add('reveal-correct');
    
    if (state.gameMode === 'survival') {
      state.lives--;
      updateSurvivalLivesHUD();
      // Shake screen-game container for dramatic touch feedback
      DOM.screenGame.classList.add('shake');
      setTimeout(() => DOM.screenGame.classList.remove('shake'), 400);
    }
    
    setTimeout(() => {
      showFactSheetModal(false, q.explanation, 0, null);
    }, 1800);
  }
}

function handleTimeout() {
  if (state.inputLocked) return;
  state.inputLocked = true;
  
  sounds.playIncorrect();
  state.userAnswers.push(false);
  
  const q = state.gameQuestions[state.currentQuestionIndex];
  const optionBtns = DOM.optionsGrid.querySelectorAll('.option-btn');
  
  // disable options and reveal correct
  optionBtns.forEach(btn => btn.disabled = true);
  optionBtns[q.answer].classList.add('reveal-correct');
  
  setTimeout(() => {
    showFactSheetModal(false, `Timeout! ${q.explanation}`, 0, null);
  }, 1800);
}

// ==========================================
// CHRONOLOGY TIMELINE GAMEPLAY
// ==========================================
function startChronologyGame() {
  state.score = 0;
  state.inputLocked = false;
  
  // Pick a random timeline
  state.chronoIndex = Math.floor(Math.random() * timelines.length);
  state.activeTimeline = timelines[state.chronoIndex];
  
  DOM.chronoRoundTitle.textContent = `Round Topic: ${state.activeTimeline.title}`;
  DOM.chronoScore.textContent = String(state.score).padStart(4, '0');
  
  // Set up shuffle array of event cards
  const events = [...state.activeTimeline.events];
  // Shuffle them
  const shuffled = shuffleArray(events);
  state.userTimelineOrder = shuffled.map(e => e.text);
  
  renderChronologyDeck();
  showScreen('screen-chronology');
}

function renderChronologyDeck() {
  DOM.chronoDeck.innerHTML = '';
  state.selectedChronoCardIndex = null;
  
  state.userTimelineOrder.forEach((eventText, idx) => {
    const slot = document.createElement('div');
    slot.className = 'chrono-slot';
    slot.setAttribute('data-index', idx);
    
    slot.innerHTML = `
      <span class="slot-num">${idx + 1}</span>
      <div class="chrono-card" draggable="true" id="chrono-card-${idx}">
        <span class="chrono-text">${eventText}</span>
        <span class="chrono-icon-grip">☰</span>
      </div>
    `;
    
    const card = slot.querySelector('.chrono-card');
    
    // Tap-to-Swap tactile interaction (Highly accessible on iOS and Android)
    card.addEventListener('click', () => {
      sounds.playClick();
      if (state.selectedChronoCardIndex === null) {
        state.selectedChronoCardIndex = idx;
        card.style.borderColor = 'var(--color-gold)';
        card.style.backgroundColor = 'var(--color-gold-glow)';
      } else {
        const prevIdx = state.selectedChronoCardIndex;
        // Swap values in array
        const temp = state.userTimelineOrder[prevIdx];
        state.userTimelineOrder[prevIdx] = state.userTimelineOrder[idx];
        state.userTimelineOrder[idx] = temp;
        
        renderChronologyDeck();
      }
    });

    // Desktop Drag-and-Drop
    card.addEventListener('dragstart', (e) => {
      state.selectedChronoCardIndex = idx;
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });

    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      card.classList.add('drag-over');
    });

    slot.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const draggedIdx = state.selectedChronoCardIndex;
      if (draggedIdx !== null && draggedIdx !== idx) {
        const temp = state.userTimelineOrder[draggedIdx];
        state.userTimelineOrder[draggedIdx] = state.userTimelineOrder[idx];
        state.userTimelineOrder[idx] = temp;
        renderChronologyDeck();
      }
    });
    
    DOM.chronoDeck.appendChild(slot);
  });
}

function verifyChronology() {
  if (state.inputLocked) return;
  state.inputLocked = true;
  
  // Arrange events by real chronology (real chronological order)
  const realOrderedEvents = [...state.activeTimeline.events].sort((a, b) => a.year - b.year);
  
  const cards = DOM.chronoDeck.querySelectorAll('.chrono-card');
  let correctCount = 0;
  
  // Validate card order
  state.userTimelineOrder.forEach((eventText, idx) => {
    const card = cards[idx];
    const isCorrectPos = (realOrderedEvents[idx].text === eventText);
    
    // Add real year details in text card
    const yearSpan = document.createElement('span');
    yearSpan.className = 'chrono-year-reveal';
    const originalEvent = state.activeTimeline.events.find(e => e.text === eventText);
    
    // Display BCE/CE style
    const displayYear = originalEvent.year < 1000 ? `${originalEvent.year} AD` : originalEvent.year;
    yearSpan.textContent = ` (${displayYear})`;
    yearSpan.style.color = 'var(--color-gold)';
    yearSpan.style.fontWeight = 'bold';
    yearSpan.style.marginLeft = '5px';
    card.querySelector('.chrono-text').appendChild(yearSpan);
    
    if (isCorrectPos) {
      correctCount++;
      card.classList.add('correct-slot');
    } else {
      card.classList.add('wrong-slot');
      card.classList.add('shake');
    }
  });
  
  const totalSlots = 4;
  const earnedMultiplier = correctCount / totalSlots;
  const roundScore = Math.round(earnedMultiplier * 400);
  state.score = roundScore;
  DOM.chronoScore.textContent = String(state.score).padStart(4, '0');
  
  if (correctCount === totalSlots) {
    sounds.playCorrect();
  } else {
    sounds.playIncorrect();
  }
  
  // Update overall progress XP
  const earnedXp = Math.round(earnedMultiplier * 100);
  const xpResult = addXp(earnedXp);
  
  setTimeout(() => {
    // Generate explanation for historical chronology order
    let listSummary = `<p style="text-align: left; font-size: 0.78rem; line-height:1.5;"><strong>Chronological Progression:</strong><br>`;
    realOrderedEvents.forEach((ev, i) => {
      const displayYear = ev.year < 1000 ? `${ev.year} AD` : ev.year;
      listSummary += `${i+1}. <strong>${displayYear}</strong>: ${ev.text}<br><span style="opacity:0.8; font-style:italic; font-size:0.7rem; padding-left:15px; display:inline-block;">• Clue: ${ev.clue}</span><br>`;
    });
    listSummary += `</p>`;
    
    showFactSheetModal(
      correctCount === totalSlots, 
      `Topic timeline: ${state.activeTimeline.hint}<br><br>${listSummary}`, 
      earnedXp, 
      xpResult.leveledUp ? xpResult.newRank : null
    );
  }, 3200);
}

// ==========================================
// FACT SHEET & CONTINUATION
// ==========================================
function showFactSheetModal(isCorrect, text, xpEarned, rankAdvancedTitle) {
  // Update indicator style
  if (isCorrect) {
    DOM.factCardIndicator.className = 'fact-header success-header';
    DOM.factResultIcon.textContent = '✓';
    DOM.factResultTitle.textContent = isCorrect ? 'TAMÁ! (Correct)' : 'TIMELINE CORRECT';
  } else {
    DOM.factCardIndicator.className = 'fact-header wrong-header';
    DOM.factResultIcon.textContent = '✗';
    DOM.factResultTitle.textContent = 'MALI! (Incorrect)';
  }
  
  let formattedExpText = text;
  if (xpEarned > 0) {
    formattedExpText += `<br><br><span style="color:var(--color-green); font-weight:800;">+${xpEarned} XP Gained!</span>`;
  }
  if (rankAdvancedTitle) {
    formattedExpText += `<br><span style="color:var(--color-gold); font-weight:800; font-size:0.85rem;">★ Rank Promoted to ${rankAdvancedTitle.split(' ')[0]}! ★</span>`;
  }
  
  DOM.factExplanationText.innerHTML = formattedExpText;
  DOM.modalFact.classList.add('active');
}

function handleContinueFromFact() {
  DOM.modalFact.classList.remove('active');
  sounds.playClick();
  
  if (state.gameMode === 'chronology') {
    // Chronology ends in exactly 1 round per run for maximum score review
    endGameSession();
  } else {
    state.currentQuestionIndex++;
    
    // Condition to check if session complete
    const isGameOverSurvival = (state.gameMode === 'survival' && state.lives <= 0);
    const isClassicFinished = (state.gameMode === 'classic' && state.currentQuestionIndex >= state.gameQuestions.length);
    const isSurvivalFinished = (state.gameMode === 'survival' && state.currentQuestionIndex >= state.gameQuestions.length); // out of all questions!
    
    if (isGameOverSurvival || isClassicFinished || isSurvivalFinished) {
      endGameSession();
    } else {
      renderQuestion();
    }
  }
}

// ==========================================
// END GAME SUMMARY & CELEBRATION
// ==========================================
function endGameSession() {
  state.totalGamesPlayed++;
  
  // Calculate accuracy
  let accuracy = 100;
  if (state.gameMode !== 'chronology' && state.userAnswers.length > 0) {
    const correctAnswers = state.userAnswers.filter(x => x).length;
    accuracy = Math.round((correctAnswers / state.userAnswers.length) * 100);
  } else if (state.gameMode === 'chronology') {
    // accuracy is relative based on sorting correctness
    accuracy = Math.round((state.score / 400) * 100);
  }
  
  // End session statistics calculations
  const bonusXp = (accuracy === 100) ? 50 : 20; // flawless bonus
  const xpResult = addXp(bonusXp);
  
  // High Scores processing
  let isNewHighScore = false;
  if (state.gameMode === 'classic' && state.score > state.highScores.classic) {
    state.highScores.classic = state.score;
    isNewHighScore = true;
  } else if (state.gameMode === 'survival' && state.score > state.highScores.survival) {
    state.highScores.survival = state.score;
    isNewHighScore = true;
  } else if (state.gameMode === 'chronology' && state.score > state.highScores.chronology) {
    state.highScores.chronology = state.score;
    isNewHighScore = true;
  }
  
  saveUserData();
  
  // Setup elements in Summary screen
  DOM.sumScore.textContent = String(state.score).padStart(4, '0');
  DOM.sumAccuracy.textContent = `${accuracy}%`;
  
  if (state.gameMode === 'chronology') {
    DOM.sumCorrect.textContent = accuracy === 100 ? '4 / 4 Events' : 'Sorted Timeline';
  } else {
    const corrects = state.userAnswers.filter(x => x).length;
    DOM.sumCorrect.textContent = `${corrects} / ${state.userAnswers.length}`;
  }
  
  DOM.sumXp.textContent = `+${bonusXp} XP (Bonus)`;
  
  // Fill Summary level details
  DOM.sumLevelBefore.textContent = state.level;
  const progressPercent = getLevelProgressPercent(state.xp, state.level);
  DOM.sumXpFill.style.width = `${progressPercent}%`;
  
  const nextThreshold = getXpThreshold(state.level);
  DOM.sumXpText.textContent = nextThreshold === Infinity ? 'MAX XP' : `${state.xp} / ${nextThreshold} XP`;
  
  // Headlines and details based on score
  if (accuracy === 100) {
    sounds.playVictory();
    DOM.sumHeadline.textContent = 'Mabuhay! (Flawless)';
    DOM.sumSubhead.textContent = 'You have mastered this historical era with absolute perfection. The Ilustrados applaud you!';
    triggerConfetti();
  } else if (accuracy >= 70) {
    sounds.playVictory();
    DOM.sumHeadline.textContent = 'Dakila! (Superb)';
    DOM.sumSubhead.textContent = 'A highly honorable performance! You possess massive knowledge of the national historical path.';
    triggerConfetti();
  } else if (accuracy >= 40) {
    sounds.playGameOver();
    DOM.sumHeadline.textContent = 'Kawani Status';
    DOM.sumSubhead.textContent = 'A respectable effort. Review the "Did You Know?" fact sheets to hone your wisdom further.';
  } else {
    sounds.playGameOver();
    DOM.sumHeadline.textContent = 'Sublime Battle';
    DOM.sumSubhead.textContent = 'The chronicles are long and complex. Failures are merely stepping stones to knowledge. Try again!';
  }
  
  // If rank advanced overall
  if (xpResult.leveledUp) {
    sounds.playLevelUp();
    DOM.sumLevelUpBanner.classList.remove('hide');
    DOM.levelUpText.textContent = `RANK ADVANCED TO ${xpResult.newRank.toUpperCase()}!`;
  } else {
    DOM.sumLevelUpBanner.classList.add('hide');
  }
  
  showScreen('screen-summary');
}

// ==========================================
// CONFETTI ANIMATION SYSTEM
// ==========================================
function triggerConfetti() {
  DOM.confettiContainer.innerHTML = '';
  const colors = ['#FFC72C', '#0038A8', '#CE1126', '#FFFFFF', '#FF8C00'];
  const particleCount = 100;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    
    // Randomized specifications
    const size = Math.random() * 8 + 6;
    const xPos = Math.random() * 100; // in percent
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${xPos}%`;
    particle.style.backgroundColor = color;
    particle.style.transform = `rotate(${rotation}deg)`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    DOM.confettiContainer.appendChild(particle);
  }
}

// ==========================================
// MODALS & DRAWERS RENDERING
// ==========================================
function showStatsDrawer() {
  DOM.statLvl.textContent = state.level;
  DOM.statXp.textContent = state.xp;
  DOM.statPlayed.textContent = state.totalGamesPlayed;
  
  let avgAccuracy = 0;
  if (state.totalAnswersGiven > 0) {
    avgAccuracy = Math.round((state.totalAnswersCorrect / state.totalAnswersGiven) * 100);
  }
  DOM.statAccuracy.textContent = `${avgAccuracy}%`;
  
  DOM.scoreClassic.textContent = `${state.highScores.classic} pts`;
  DOM.scoreSurvival.textContent = `${state.highScores.survival} pts`;
  DOM.scoreChronology.textContent = `${state.highScores.chronology} pts`;
  
  // Render Achievements
  renderAchievements();
  
  DOM.drawerStats.classList.add('active');
}

function renderAchievements() {
  DOM.badgesContainer.innerHTML = '';
  
  achievements.forEach(ach => {
    const isUnlocked = (state.xp >= ach.xpRequired);
    const item = document.createElement('div');
    item.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    // SVG and icons definitions based on unlocked state
    item.innerHTML = `
      <div class="badge-icon-box">
        ${isUnlocked ? '★' : '🔒'}
      </div>
      <div class="badge-info">
        <h4>${ach.title}</h4>
        <p>${ach.description} • <span class="badge-status">${isUnlocked ? 'Unlocked' : `Requires ${ach.xpRequired} XP`}</span></p>
      </div>
    `;
    
    DOM.badgesContainer.appendChild(item);
  });
}

function resetStatsData() {
  if (confirm("MABUHAY: Are you absolutely sure you want to reset all your historical progress? This will delete your levels, XP, rank titles, and personal high scores!")) {
    sounds.playIncorrect();
    localStorage.clear();
    
    state.xp = 0;
    state.level = 1;
    state.totalGamesPlayed = 0;
    state.totalAnswersCorrect = 0;
    state.totalAnswersGiven = 0;
    state.highScores = {
      classic: 0,
      survival: 0,
      chronology: 0
    };
    
    saveUserData();
    updateHUD();
    renderAchievements();
    showStatsDrawer();
    alert("Chronicles reset. Start your historical journey fresh!");
  }
}

// UI EVENT LISTENERS (Login Modal)
const loginBtn = document.getElementById('btn-login');
const modalLogin = document.getElementById('modal-login');
const closeLoginBtn = document.getElementById('btn-close-login');
const loginSubmitBtn = document.getElementById('btn-login-submit');
const signupSubmitBtn = document.getElementById('btn-signup-submit');

loginBtn?.addEventListener('click', () => {
  modalLogin.classList.add('active');
  document.getElementById('login-email')?.focus();
});

closeLoginBtn?.addEventListener('click', () => {
  modalLogin.classList.remove('active');
});

loginSubmitBtn?.addEventListener('click', async () => {
  const email = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
    modalLogin.classList.remove('active');
  } catch (e) {
    console.error('Login error', e);
    alert('Login failed: ' + e.message);
  }
});

signupSubmitBtn?.addEventListener('click', async () => {
  const email = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    modalLogin.classList.remove('active');
  } catch (e) {
    console.error('Sign‑up error', e);
    alert('Sign‑up failed: ' + e.message);
  }
});

// Close modal on overlay click (optional)
modalLogin?.addEventListener('click', (e) => {
  if (e.target === modalLogin) {
    modalLogin.classList.remove('active');
  }
});

// ==========================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================
function init() {
  loadUserData();
  updateHUD();
  
  // 1. SPLASH SCREEN SEQUENCE
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress > 100) progress = 100;
    
    DOM.splashFill.style.width = `${progress}%`;
    
    if (progress === 100) {
      clearInterval(progressInterval);
      DOM.splashText.textContent = "Chronicles Synced. Ready!";
      setTimeout(() => {
        showScreen('screen-home');
      }, 500);
    }
  }, 150);
  
  // 2. REGULAR BINDINGS
  
  // Audio toggle
  DOM.btnToggleSound.addEventListener('click', () => {
    const isMuted = sounds.toggleMute();
    updateHUD();
    if (!isMuted) sounds.playClick();
  });
  
  // Theme toggle (Dark/Light Mode)
  DOM.btnToggleTheme.addEventListener('click', () => {
    sounds.playClick();
    document.body.classList.toggle('light-mode');
    
    // Save theme selection in local storage
    const activeTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    try {
      localStorage.setItem('kasaysayan_theme', activeTheme);
    } catch (e) {}
  });
  
  // Load saved theme on boot
  try {
    const savedTheme = localStorage.getItem('kasaysayan_theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    }
  } catch (e) {}
  
  // Modes selector highlights
  const modeCards = document.querySelectorAll('.mode-card');
  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      sounds.playClick();
      modeCards.forEach(c => c.classList.remove('active-mode'));
      card.classList.add('active-mode');
      state.gameMode = card.getAttribute('data-mode');
    });
  });
  
  // Journey triggers
  DOM.btnStartJourney.addEventListener('click', () => {
    if (state.gameMode === 'chronology') {
      startChronologyGame();
    } else {
      showScreen('screen-categories');
    }
  });
  
  // Category items selectors
  const catCards = document.querySelectorAll('.category-item-card');
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      state.category = card.getAttribute('data-category');
      sounds.playClick();
      startQuizGame();
    });
  });
  
  // Back & Quit Buttons bindings
  DOM.btnBackToHome.addEventListener('click', () => showScreen('screen-home'));
  DOM.btnQuitGame.addEventListener('click', () => {
    if (confirm("Are you sure you want to quit the current battle? Any current score or points will not be recorded.")) {
      clearInterval(state.timerInterval);
      showScreen('screen-home');
    }
  });
  DOM.btnQuitChrono.addEventListener('click', () => {
    if (confirm("Are you sure you want to quit this Timeline Chronology run?")) {
      showScreen('screen-home');
    }
  });
  
  // Timeline sorting verifier
  DOM.btnVerifyChrono.addEventListener('click', () => {
    verifyChronology();
  });
  
  // Modals & drawers controls
  DOM.btnShowAchievements.addEventListener('click', showStatsDrawer);
  DOM.btnShowStats.addEventListener('click', showStatsDrawer);
  DOM.btnCloseStats.addEventListener('click', () => {
    sounds.playClick();
    DOM.drawerStats.classList.remove('active');
  });
  
  DOM.btnResetStats.addEventListener('click', resetStatsData);
  
  // Fact overlay continues
  DOM.btnContinueFact.addEventListener('click', handleContinueFromFact);
  
  // Summary outcomes actions
  DOM.btnReplay.addEventListener('click', () => {
    if (state.gameMode === 'chronology') {
      startChronologyGame();
    } else {
      startQuizGame();
    }
  });
  DOM.btnChangeMode.addEventListener('click', () => showScreen('screen-home'));
  DOM.btnGoHome.addEventListener('click', () => showScreen('screen-home'));
  
  // Register Service Worker for PWA (Offline)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Kasaysayan Service Worker registered!', reg.scope))
        .catch(err => console.warn('Service Worker registration failed:', err));
    });
  }
}

// Kick off initialization
document.addEventListener('DOMContentLoaded', init);
