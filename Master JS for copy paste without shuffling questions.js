/* ============================================================
        MASTER JS TEMPLATE — NO SHUFFLE VERSION
===============================================================
    ⚠️ VERY IMPORTANT — READ BEFORE EDITING ⚠️

    ✔ You are allowed to change ONLY:
       1) TEST_TITLE
       2) SUBTITLE_TEXT
       3) TOPIC_NAME
       4) TIME_LIMIT_MINUTES
       5) quizData (questions)

    ❌ Do NOT change anything outside ALLOWED SECTION.
    ❌ Do NOT rename variables.
    ❌ Do NOT modify the quiz engine.

===============================================================
   START OF ALLOWED SECTION — YOU MAY EDIT BELOW THIS LINE
============================================================ */

// Test Title
const TEST_TITLE = "Sample Test Title";

// Subtitle
const SUBTITLE_TEXT = "Topic / Description goes here";

// Topic name (shows above questions)
const TOPIC_NAME = "Main Topic Name";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS (Do not break structure)
const quizData = [

  {
    q: "1. Sample question?",
    a: ["Option A", "Option B", "Option C", "Option D"],
    correct: 2,
    explanation: "Write explanation here."
  },

  {
    q: "2. Second sample question?",
    a: ["A", "B", "C", "D"],
    correct: 0,
    explanation: "Explanation goes here."
  }

  // Add more questions below
];

/* ============================================================
      END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
===============================================================
    ⛔ STOP! DO NOT CHANGE ANY CODE BELOW THIS POINT ⛔
    ⛔ COPY EVERYTHING EXACTLY AS IT IS ⛔
    ⛔ THIS IS THE QUIZ ENGINE ⛔

    If you modify anything below, the test WILL BREAK.
===============================================================
   COPY EVERYTHING FROM HERE ONWARD WITHOUT CHANGING ANYTHING
============================================================ */

// Apply title and subtitles to HTML
document.getElementById("title").innerText = TEST_TITLE;
document.getElementById("subtitle").innerText = SUBTITLE_TEXT;
document.getElementById("topicName").innerText = TOPIC_NAME;

let current = 0;
const total = quizData.length;
let answers = new Array(total).fill(null);

let totalSeconds = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

// UI elements
const qEl = document.getElementById('question');
const optsEl = document.getElementById('options');
const qProgress = document.getElementById('qProgress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const timerDisplay = document.getElementById('timer');
const resultArea = document.getElementById('resultArea');
const reviewArea = document.getElementById('reviewArea');

// Render question
function renderQuestion(index){
  current = index;
  const item = quizData[index];

  qProgress.textContent = `Question ${index + 1} of ${total}`;
  qEl.textContent = item.q;

  optsEl.innerHTML = "";

  item.a.forEach((text,i)=>{
    const id = `opt-${index}-${i}`;
    const wrap = document.createElement("label");
    wrap.className = "opt";

    wrap.innerHTML = `
      <input type="radio" name="option" id="${id}" value="${i}"
      ${answers[index] === i ? "checked" : ""}>
      <div style="flex:1">
        <strong>${String.fromCharCode(65+i)}.</strong>
        <span>${text}</span>
      </div>
    `;

    wrap.addEventListener("click",()=>{
      answers[index] = i;
      if(index < total - 1) renderQuestion(index + 1);
      else showEndPrompt();
    });

    optsEl.appendChild(wrap);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === total - 1;
  submitBtn.style.display = index === total - 1 ? "inline-block" : "none";
}

prevBtn.addEventListener("click",()=> current > 0 && renderQuestion(current - 1));
nextBtn.addEventListener("click",()=> current < total - 1 && renderQuestion(current + 1));
submitBtn.addEventListener("click", submitQuiz);

// Last question notice
function showEndPrompt(){
  resultArea.innerHTML = `
    <div class="result">
      <strong>You reached the last question.</strong><br>
      <button id="finishNow">Submit Test</button>
    </div>
  `;
  document.getElementById("finishNow").addEventListener("click", submitQuiz);
}

// Timer logic
function startTimer(){
  updateTimer();
  timerInterval = setInterval(()=>{
    totalSeconds--;
    if(totalSeconds < 0){
      clearInterval(timerInterval);
      submitQuiz(true);
    }
    updateTimer();
  },1000);
}

function updateTimer(){
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  timerDisplay.textContent = 
    `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// Submit test
function submitQuiz(auto=false){
  if(timerInterval) clearInterval(timerInterval);

  let correctCount = 0;
  quizData.forEach((q,i)=>{
    if(answers[i] === q.correct) correctCount++;
  });

  const incorrect = total - correctCount;
  const percent = ((correctCount / total) * 100).toFixed(2);

  resultArea.innerHTML = `
    <div class="result">
      <h3>${auto ? "⏳ Time Up — Auto Submitted" : "Test Submitted"}</h3>
      <p>Correct: ${correctCount}</p>
      <p>Incorrect: ${incorrect}</p>
      <p><strong>Score: ${percent}%</strong></p>
      <button id="showReviewBtn">Show Detailed Review</button>
    </div>
  `;

  document.getElementById("showReviewBtn").addEventListener("click", showReview);
}

// Review panel
function showReview(){
  reviewArea.innerHTML = `<h3>Detailed Review</h3>`;

  quizData.forEach((item,i)=>{
    const user = answers[i];
    const div = document.createElement("div");

    div.className = "item";
    div.style.background = 
      user === item.correct ? "var(--correct)" : "var(--incorrect)";

    div.innerHTML = `
      <strong>Q${i+1}:</strong> ${item.q}<br>
      Your answer: ${user !== null ? item.a[user] : "Not answered"}<br>
      Correct answer: <strong>${item.a[item.correct]}</strong><br>
      <em>Explanation:</em> ${item.explanation}<br><br>
    `;

    reviewArea.appendChild(div);
  });
}

renderQuestion(0);
startTimer();
