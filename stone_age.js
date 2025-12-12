/* ============================================================
   STONE AGE TEST — CTET 2026
============================================================ */

// ✔ CHANGE TEST TITLE
const TEST_TITLE = "The Earliest People – Stone Age (CTET 2026)";

// ✔ CHANGE SUBTITLE / TOPIC NAME
const SUBTITLE_TEXT = "Stone Age – CTET CDP 2026 Topic";
const TOPIC_NAME = "The Earliest People – Stone Age";

// ✔ CHANGE TIME LIMIT
const TIME_LIMIT_MINUTES = 30;

/*  
===============================================================
   SET TITLES IN HTML
===============================================================
*/
document.getElementById("title").innerText = TEST_TITLE;
document.getElementById("subtitle").innerText = SUBTITLE_TEXT;
document.getElementById("topicName").innerText = TOPIC_NAME;

/*  
===============================================================
   QUESTIONS START HERE
===============================================================
*/
const quizData = [
  { q: "1. The earliest phase of human history is called:",
    a: ["Mesolithic Age", "Neolithic Age", "Paleolithic Age", "Copper Age"],
    correct: 2,
    explanation: "Paleolithic Age is the oldest and longest Stone Age period."
  },

  { q: "2. Paleolithic people mainly lived in:",
    a: ["Brick houses", "Caves and rock shelters", "Mud houses", "Pit houses"],
    correct: 1,
    explanation: "Paleolithic humans lived in caves such as Bhimbetka."
  },

  { q: "3. The most important source of food during Paleolithic Age was:",
    a: ["Agriculture", "Fishing only", "Hunting and gathering", "Animal herding"],
    correct: 2,
    explanation: "They survived by hunting animals and gathering plants."
  },

  { q: "4. Which site is famous for rock paintings?",
    a: ["Daojali Hading", "Bhimbetka", "Mehrgarh", "Burzahom"],
    correct: 1,
    explanation: "Bhimbetka contains early rock paintings."
  },

  { q: "5. The biggest discovery of Paleolithic Age was:",
    a: ["Wheel", "Fire", "Metal tools", "Pottery"],
    correct: 1,
    explanation: "Control of fire changed human life."
  },

  { q: "6. Which type of tools belong to Paleolithic Age?",
    a: ["Microliths", "Hand axes and choppers", "Polished tools", "Iron weapons"],
    correct: 1,
    explanation: "These tools were large and crude."
  },

  { q: "7. Mesolithic Age is also known as:",
    a: ["New Stone Age", "Middle Stone Age", "Old Stone Age", "Metal Age"],
    correct: 1,
    explanation: "It lies between Paleolithic and Neolithic."
  },

  { q: "8. The characteristic tools of Mesolithic Age are:",
    a: ["Copper tools", "Microliths", "Iron tools", "Heavy stone axes"],
    correct: 1,
    explanation: "Microliths are tiny sharp tools."
  },

  { q: "9. The Mesolithic Age began due to:",
    a: ["Heavy rainfall", "Warming after Ice Age", "Invention of fire", "Metal tools"],
    correct: 1,
    explanation: "Warmer climate created new fauna and flora."
  },

  { q: "10. In Mesolithic Age, humans began:",
    a: ["Pure farming", "Animal domestication", "Metal forging", "City building"],
    correct: 1,
    explanation: "Early domestication began in this era."
  },

  // (Your remaining questions 11–35 unchanged)
];

/* ============================================================
   DO NOT MODIFY ANY CODE BELOW THIS LINE
============================================================ */

let current = 0;
const total = quizData.length;
let answers = new Array(total).fill(null);
let totalSeconds = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

const qEl = document.getElementById("question");
const optsEl = document.getElementById("options");
const qProgress = document.getElementById("qProgress");
const subtitle = document.getElementById("subtitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const timerDisplay = document.getElementById("timer");
const resultArea = document.getElementById("resultArea");
const reviewArea = document.getElementById("reviewArea");

function renderQuestion(index) {
  current = index;
  const item = quizData[index];
  qProgress.textContent = `Question ${index + 1} of ${total}`;
  subtitle.textContent = SUBTITLE_TEXT;
  qEl.textContent = item.q;

  optsEl.innerHTML = "";
  item.a.forEach((text, i) => {
    const id = `opt-${index}-${i}`;
    const wrap = document.createElement("label");
    wrap.className = "opt";
    wrap.innerHTML = `
      <input type="radio" name="option" id="${id}" value="${i}" ${answers[index] === i ? "checked" : ""}>
      <div style="flex:1"><strong>${String.fromCharCode(65 + i)}.</strong>
      <span style="margin-left:8px">${text}</span></div>
    `;

    wrap.addEventListener("click", () => {
      answers[index] = i;
      if (index < total - 1) renderQuestion(index + 1);
      else showEndPrompt();
    });

    optsEl.appendChild(wrap);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === total - 1;
  submitBtn.style.display = index === total - 1 ? "inline-block" : "none";
}

prevBtn.addEventListener("click", () => current > 0 && renderQuestion(current - 1));
nextBtn.addEventListener("click", () => current < total - 1 && renderQuestion(current + 1));
submitBtn.addEventListener("click", submitQuiz);

function showEndPrompt() {
  resultArea.innerHTML = `
    <div class="result">
      <strong>You are at the last question.</strong><br>
      <button id="finishNow">Submit Test</button>
    </div>`;
  document.getElementById("finishNow").addEventListener("click", submitQuiz);
}

function startTimer() {
  updateTimer();
  timerInterval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) {
      clearInterval(timerInterval);
      submitQuiz(true);
    }
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function submitQuiz(auto = false) {
  if (timerInterval) clearInterval(timerInterval);

  let correctAns = 0;
  for (let i = 0; i < total; i++) {
    if (answers[i] === quizData[i].correct) correctAns++;
  }

  const incorrect = total - correctAns;
  const percent = ((correctAns / total) * 100).toFixed(2);

  resultArea.innerHTML = `
    <div class="result">
      <h3>${auto ? "Time Up — Auto Submitted" : "Test Submitted"}</h3>
      <p>Correct: ${correctAns}</p>
      <p>Incorrect: ${incorrect}</p>
      <p><strong>Score: ${percent}%</strong></p>
      <button id="showReviewBtn">Show Detailed Review</button>
    </div>`;

  document.getElementById("showReviewBtn").addEventListener("click", showReview);
}

function showReview() {
  reviewArea.innerHTML = "<h3>Detailed Review</h3>";

  quizData.forEach((item, i) => {
    const user = answers[i];
    const correct = item.correct;

    const div = document.createElement("div");
    div.className = "item";
    div.style.background = user === correct ? "var(--correct)" : "var(--incorrect)";

    div.innerHTML = `
      <strong>Q${i + 1}:</strong> ${item.q}<br>
      Your answer: ${user !== null ? item.a[user] : "Not answered"}<br>
      Correct answer: <strong>${item.a[correct]}</strong><br>
      <em>Explanation:</em> ${item.explanation}<br><br>
    `;
    reviewArea.appendChild(div);
  });
}

renderQuestion(0);
startTimer();
