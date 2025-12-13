/* ============================================================
        MASTER JS TEMPLATE — CREATE ALL FUTURE TESTS USING THIS
===============================================================
    ⚠️ VERY IMPORTANT — READ BEFORE EDITING ⚠️

    ✔ You are allowed to change ONLY the following:
      1) TEST_TITLE
      2) SUBTITLE_TEXT
      3) TOPIC_NAME
      4) TIME_LIMIT_MINUTES
      5) quizData (all questions)

    ❌ DO NOT change anything outside the ALLOWED SECTION.
    ❌ DO NOT rename variables.
    ❌ DO NOT change array structure.

===============================================================
   START OF ALLOWED SECTION — YOU MAY EDIT BELOW THIS LINE
============================================================ */

// Test Title
const TEST_TITLE = "Growth & Development + Learning Concept — Test 3";

// Subtitle
const SUBTITLE_TEXT = "CTET-style MCQ Test (25 Questions)";

// Topic name (appears above questions)
const TOPIC_NAME = "Growth & Development and Learning Concept";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS (no numbering inside questions)
const quizData = [

  {
    q: "The principle of continuity explains that development continues throughout life.",
    a: ["Development stops in childhood", "Development lasts until adolescence", "Development continues across the lifespan", "Development stops after adulthood"],
    correct: 2,
    explanation: "Development occurs from conception to death, not limited to any period."
  },

  {
    q: "An improvement in problem-solving ability is an example of qualitative development.",
    a: ["Quantitative change", "Qualitative change", "Physical growth", "Genetic change"],
    correct: 1,
    explanation: "Qualitative changes refer to improvements in behaviour or abilities."
  },

  {
    q: "Development progressing from the centre of the body outwards follows the proximodistal principle.",
    a: ["Cephalocaudal principle", "Proximodistal principle", "General-to-specific principle", "Discontinuous development"],
    correct: 1,
    explanation: "Proximodistal development moves from the centre to the extremities."
  },

  {
    q: "Learning is best described as a permanent behavioural change due to experience.",
    a: ["Change due to fatigue", "Inherited behaviour", "Permanent change from experience", "Sudden behavioural reaction"],
    correct: 2,
    explanation: "Learning involves practice and experience that lead to lasting changes."
  },

  {
    q: "Children learning motor skills like walking in a predictable order reflects sequential development.",
    a: ["Random development", "Reversible development", "Sequential development", "Inconsistent development"],
    correct: 2,
    explanation: "Development follows an orderly and predictable sequence."
  },

  {
    q: "Reading ability develops mainly through repeated practice, showing the role of learning.",
    a: ["Maturation alone", "Learning process", "Heredity only", "Physical growth"],
    correct: 1,
    explanation: "Reading requires experience, training and practice."
  },

  {
    q: "The principle of individual differences means that every child develops at a different rate.",
    a: ["All children develop the same", "Differences are not natural", "Rates of development vary among children", "Development occurs identically"],
    correct: 2,
    explanation: "Individual differences influence developmental pace and pattern."
  },

  {
    q: "Inherited characteristics like height and skin colour are determined by heredity.",
    a: ["Environment", "Schooling", "Heredity", "Peer group"],
    correct: 2,
    explanation: "Heredity passes genetic traits from parents to children."
  },

  {
    q: "Showing empathy towards peers indicates socio-emotional development.",
    a: ["Physical growth", "Cognitive growth", "Socio-emotional development", "Language development"],
    correct: 2,
    explanation: "Empathy is a social-emotional behaviour."
  },

  {
    q: "Learning through observation and imitation is explained by social learning theory.",
    a: ["Constructivist theory", "Behaviourist theory", "Social learning theory", "Maturation theory"],
    correct: 2,
    explanation: "Bandura emphasised learning by observing models."
  },

  {
    q: "Readiness means a learner must be physically and mentally prepared to learn a skill.",
    a: ["Only physical readiness matters", "Only memory matters", "Readiness involves mental and physical preparedness", "Readiness is unimportant"],
    correct: 2,
    explanation: "Readiness decides how well a child can learn a new skill."
  },

  {
    q: "Development is slow, orderly, and continuous in nature.",
    a: ["Sudden", "Chaotic", "Continuous and gradual", "Instant"],
    correct: 2,
    explanation: "Development follows gradual, predictable patterns."
  },

  {
    q: "Tying shoelaces after repeated practice is an example of learning.",
    a: ["Reflex action", "Inherited behaviour", "Learned skill", "Random behaviour"],
    correct: 2,
    explanation: "Practice-based skills reflect learning."
  },

  {
    q: "Growth refers to measurable physical changes such as height and weight.",
    a: ["Moral changes", "Social changes", "Quantitative physical changes", "Cognitive improvements"],
    correct: 2,
    explanation: "Growth indicates an increase in size."
  },

  {
    q: "Children first learn broad movements and then refine them, showing the principle of integration.",
    a: ["Regression", "General-to-specific", "Integration", "Specialisation"],
    correct: 2,
    explanation: "Development integrates general skills into precise ones."
  },

  {
    q: "Helping a child initially and then gradually reducing support illustrates scaffolding.",
    a: ["Punishment", "Scaffolding", "Drill method", "Rigid learning"],
    correct: 1,
    explanation: "Scaffolding assists learners within their ZPD."
  },

  {
    q: "Learning is not permanent if it disappears immediately after practice.",
    a: ["Learning is temporary", "Learning is permanent", "Learning is based on genes", "Learning is inborn"],
    correct: 0,
    explanation: "Temporary changes do not count as true learning."
  },

  {
    q: "Development is influenced by interaction between heredity and environment.",
    a: ["Heredity only", "Environment only", "Heredity and environment together", "Neither influences development"],
    correct: 2,
    explanation: "Both nature and nurture shape development."
  },

  {
    q: "Children in the concrete operational stage can think logically about real situations.",
    a: ["Cannot think logically", "Can think abstractly only", "Think logically about concrete events", "Have no reasoning ability"],
    correct: 2,
    explanation: "Piaget’s stage emphasises concrete logical thinking."
  },

  {
    q: "Managing anger calmly during conflict indicates emotional development.",
    a: ["Physical strength", "Math skill", "Emotional development", "Cognitive decline"],
    correct: 2,
    explanation: "How children manage emotions reflects emotional development."
  },

  {
    q: "Behaviourist learning focuses mainly on reinforcement.",
    a: ["Trial and error", "Punishment only", "Reinforcement", "Memory"],
    correct: 2,
    explanation: "Reinforcement strengthens behaviour."
  },

  {
    q: "When new information does not fit existing knowledge, the child modifies schema through accommodation.",
    a: ["Assimilation", "Accommodation", "Retention", "Generalisation"],
    correct: 1,
    explanation: "Accommodation changes existing schema."
  },

  {
    q: "Learning becomes meaningful when connected to the child’s real-life experiences.",
    a: ["Teacher-centred teaching", "Irrelevant examples", "Contextual learning", "Memorisation"],
    correct: 2,
    explanation: "Learning improves when relatable."
  },

  {
    q: "Values and attitudes belong to the affective domain of development.",
    a: ["Cognitive domain", "Psychomotor domain", "Affective domain", "Motor domain"],
    correct: 2,
    explanation: "Affective domain includes emotions, values and attitudes."
  },

  {
    q: "Providing small hints to help a child solve a problem independently is an example of scaffolding.",
    a: ["Punishment", "Scaffolding", "Imitation", "Habit formation"],
    correct: 1,
    explanation: "Scaffolding supports independent learning."
  }

];

/* ============================================================
      END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
===============================================================
    ⛔ STOP! DO NOT CHANGE ANY CODE BELOW THIS POINT ⛔
===============================================================
   COPY EVERYTHING FROM HERE ONWARD WITHOUT CHANGING ANYTHING
============================================================ */

// Shuffle helper function
function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Set header text
document.getElementById("title").innerText = TEST_TITLE;
document.getElementById("subtitle").innerText = SUBTITLE_TEXT;
document.getElementById("topicName").innerText = TOPIC_NAME;

// Shuffle questions
shuffleArray(quizData);

// Shuffle options
quizData.forEach(q=>{
  const map = q.a.map((t,i)=>({t,i}));
  shuffleArray(map);
  q.a = map.map(o=>o.t);
  q.correct = map.findIndex(o=>o.i === q.correct);
});

// Engine variables
let current = 0;
const total = quizData.length;
let answers = new Array(total).fill(null);
let totalSeconds = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

// UI elements
const qEl = document.getElementById("question");
const optsEl = document.getElementById("options");
const qProgress = document.getElementById("qProgress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const timerDisplay = document.getElementById("timer");
const resultArea = document.getElementById("resultArea");
const reviewArea = document.getElementById("reviewArea");

// Render question
function renderQuestion(i){
  current = i;
  const item = quizData[i];

  qProgress.textContent = `Question ${i+1} of ${total}`;
  qEl.textContent = item.q;
  optsEl.innerHTML = "";

  item.a.forEach((text,idx)=>{
    const id = `opt-${i}-${idx}`;
    const wrap = document.createElement("label");
    wrap.className = "opt";
    wrap.innerHTML = `
      <input type="radio" name="option" id="${id}" value="${idx}"
      ${answers[i] === idx ? "checked" : ""}>
      <div style="flex:1"><strong>${String.fromCharCode(65+idx)}.</strong> ${text}</div>
    `;
    wrap.addEventListener("click",()=>{
      answers[i] = idx;
      if(i < total - 1) renderQuestion(i + 1);
      else showEndPrompt();
    });
    optsEl.appendChild(wrap);
  });

  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === total - 1;
  submitBtn.style.display = i === total - 1 ? "inline-block" : "none";
}

prevBtn.addEventListener("click",()=>current>0 && renderQuestion(current-1));
nextBtn.addEventListener("click",()=>current<total-1 && renderQuestion(current+1));
submitBtn.addEventListener("click", submitQuiz);

// End prompt
function showEndPrompt(){
  resultArea.innerHTML = `
    <div class="result"><strong>You reached the last question.</strong><br>
    <button id="finishNow">Submit Test</button></div>`;
  document.getElementById("finishNow").addEventListener("click", submitQuiz);
}

// Timer
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

// Submit quiz
function submitQuiz(auto=false){
  if(timerInterval) clearInterval(timerInterval);

  let correct = 0;
  for(let i=0;i<total;i++) if(answers[i] === quizData[i].correct) correct++;

  const percent = ((correct / total) * 100).toFixed(2);

  resultArea.innerHTML = `
    <div class="result">
      <h3>${auto ? "⏳ Time Up — Auto Submitted" : "Test Submitted"}</h3>
      <p>Correct: ${correct}</p>
      <p>Incorrect: ${total - correct}</p>
      <p><strong>Score: ${percent}%</strong></p>
      <button id="showReviewBtn">Show Detailed Review</button>
    </div>`;

  document.getElementById("showReviewBtn").addEventListener("click", showReview);
}

// Review
function showReview(){
  reviewArea.innerHTML = "<h3>Detailed Review</h3>";

  quizData.forEach((item,i)=>{
    const user = answers[i];
    const div = document.createElement("div");
    div.className = "item";
    div.style.background = user === item.correct ? "var(--correct)" : "var(--incorrect)";
    div.innerHTML = `
      <strong>Q${i+1}:</strong> ${item.q}<br>
      Your answer: ${user !== null ? item.a[user] : "Not answered"}<br>
      Correct answer: <strong>${item.a[item.correct]}</strong><br>
      <em>Explanation:</em> ${item.explanation}<br><br>
    `;
    reviewArea.appendChild(div);
  });
}

// Start
renderQuestion(0);
startTimer();
