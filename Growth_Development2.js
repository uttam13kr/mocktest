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
const TEST_TITLE = "Growth & Development + Learning Concept — Test 2";

// Subtitle
const SUBTITLE_TEXT = "CTET-style MCQ Test (25 Questions)";

// Topic name (appears above questions)
const TOPIC_NAME = "Growth & Development and Learning Concept";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS (No numbering inside questions)
const quizData = [

  {
    q: "Development in humans can be best described as a process of progressive change in behaviour and abilities.",
    a: ["Only physical growth", "Only emotional growth", "Progressive change in overall abilities", "Only motor development"],
    correct: 2,
    explanation: "Development includes physical, emotional, social, and cognitive changes."
  },

  {
    q: "Growth focuses mainly on measurable aspects of an individual.",
    a: ["Qualitative aspects", "Quantitative aspects", "Spiritual change", "Moral behaviours"],
    correct: 1,
    explanation: "Growth refers to measurable changes like height and weight."
  },

  {
    q: "Development never stops because learning and experiences continue throughout life.",
    a: ["Development ends in adolescence", "Development ends in adulthood", "Development is lifelong", "Development is random"],
    correct: 2,
    explanation: "Human development continues from conception to death."
  },

  {
    q: "The physical increase in height, weight, and size is called growth.",
    a: ["Maturation", "Development", "Growth", "Learning"],
    correct: 2,
    explanation: "Growth is strictly physical and measurable."
  },

  {
    q: "Development includes physical, mental, emotional and social changes.",
    a: ["It includes only physical change", "It is purely mental", "It is only emotional", "It covers multiple domains of change"],
    correct: 3,
    explanation: "Development is multidimensional."
  },

  {
    q: "Cognitive development refers to the ability to think, reason, and understand.",
    a: ["Emotional expression", "Language pronunciation", "Motor coordination", "Thinking and reasoning"],
    correct: 3,
    explanation: "Cognitive development relates to mental abilities."
  },

  {
    q: "Emotional maturity means the ability to express and manage emotions appropriately.",
    a: ["Suppress feelings", "Avoid emotions", "Control and express emotions properly", "React aggressively"],
    correct: 2,
    explanation: "Emotional development helps individuals manage feelings effectively."
  },

  {
    q: "Social development mainly depends on interaction and cooperation with others.",
    a: ["Isolation", "Academic performance only", "Peer interaction and cooperation", "Physical strength"],
    correct: 2,
    explanation: "Social development is related to relationships and social behaviour."
  },

  {
    q: "Maturation refers to the natural unfolding of inherited abilities.",
    a: ["Effects of training", "Natural biological growth", "Rewards and punishment", "Environmental pressure"],
    correct: 1,
    explanation: "Maturation is biological readiness."
  },

  {
    q: "Both growth and development are influenced by heredity and environment.",
    a: ["Heredity only", "Environment only", "Both heredity and environment", "Neither of these"],
    correct: 2,
    explanation: "Both nature and nurture contribute to development."
  },

  {
    q: "Learning is a relatively permanent change in behaviour due to experience.",
    a: ["Temporary behavioural change", "Change due to illness", "Permanent change due to practice or experience", "Change due to reflexes"],
    correct: 2,
    explanation: "Learning involves experience-based changes."
  },

  {
    q: "Growth is part of development but development is much broader.",
    a: ["Growth and development are the same", "Growth includes development", "Development includes growth", "Neither is related"],
    correct: 2,
    explanation: "Development includes physical, emotional, social and cognitive aspects."
  },

  {
    q: "Development occurs from conception and continues until death.",
    a: ["Starts at birth only", "Ends at childhood", "Starts at conception and continues lifelong", "Stops after adolescence"],
    correct: 2,
    explanation: "Development is lifelong."
  },

  {
    q: "Heredity sets limits for growth, but environment determines its fulfilment.",
    a: ["Environment is not related", "Heredity alone decides everything", "Only nutrition matters", "Heredity and environment work together"],
    correct: 3,
    explanation: "Nature and nurture interact in development."
  },

  {
    q: "Development includes both quantitative and qualitative changes.",
    a: ["Only measurable changes", "Only behavioural changes", "Both measurable and behavioural changes", "Neither of these"],
    correct: 2,
    explanation: "Development is multidimensional."
  },

  {
    q: "Infancy generally covers the period from birth to two years.",
    a: ["2–6 years", "6–12 years", "Birth to 2 years", "12–18 years"],
    correct: 2,
    explanation: "This stage involves rapid physical and mental growth."
  },

  {
    q: "Late childhood is often called the latency stage by Freud.",
    a: ["Play stage", "Sensitive stage", "Latency stage", "Identity stage"],
    correct: 2,
    explanation: "From 6 to 12 years, children show stable behaviour."
  },

  {
    q: "Adolescence is the transitional period between childhood and adulthood.",
    a: ["Old age", "Infancy", "Retirement stage", "Transition from childhood to adulthood"],
    correct: 3,
    explanation: "Adolescence includes rapid physical and emotional changes."
  },

  {
    q: "Early stimulation helps in the development of hereditary potentials.",
    a: ["Prevents learning", "Weakens heredity", "Enhances inherited abilities", "Slows development"],
    correct: 2,
    explanation: "Right stimulation helps full development."
  },

  {
    q: "Social, cultural and environmental factors significantly influence development.",
    a: ["Only temperature matters", "Only heredity matters", "Environment has no effect", "Environment plays a major role"],
    correct: 3,
    explanation: "Environment shapes personality, values and behaviour."
  },

  {
    q: "A child’s language develops rapidly during early childhood.",
    a: ["During old age", "During adolescence only", "Between 2–6 years", "After maturity"],
    correct: 2,
    explanation: "Early childhood is a sensitive period for language development."
  },

  {
    q: "Moral development involves learning values, right and wrong.",
    a: ["Physical abilities", "Emotional reactions only", "Understanding social rules", "Motor skills"],
    correct: 2,
    explanation: "Moral development shapes ethical behaviour."
  },

  {
    q: "A teacher adapting a task to a child's ability demonstrates effective teaching–learning interaction.",
    a: ["Punishment", "Rigid teaching", "Adaptive teaching", "Ignoring learner needs"],
    correct: 2,
    explanation: "Learning improves when instruction matches readiness."
  },

  {
    q: "Learning is most effective when the child is actively involved.",
    a: ["Passive listening", "Punishment", "Active engagement", "Memorizing only"],
    correct: 2,
    explanation: "Active learning supports better understanding."
  },

  {
    q: "Development across domains (physical, cognitive, emotional) is interconnected.",
    a: ["Domains develop separately", "Domains do not influence each other", "Domains are interrelated", "Domains are random"],
    correct: 2,
    explanation: "Development in one area affects other areas."
  }

];

/* ============================================================
      END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
===============================================================
    ⛔ STOP! DO NOT CHANGE ANY CODE BELOW THIS POINT ⛔
    Copy everything EXACTLY as it is below.
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

// Shuffle options inside each question
quizData.forEach(q => {
  const mapped = q.a.map((text, index) => ({ text, index }));
  shuffleArray(mapped);
  q.a = mapped.map(o => o.text);
  q.correct = mapped.findIndex(o => o.index === q.correct);
});

// Engine variables
let current = 0;
const total = quizData.length;
let answers = new Array(total).fill(null);
let totalSeconds = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

// UI elements
const qEl = document.getElementById('question');
const optsEl = document.getElementById('options');
const qProgress = document.getElementById('qProgress');
const subtle = document.getElementById('subtitle');
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
      <div style="flex:1"><strong>${String.fromCharCode(65+i)}.</strong>
      <span>${text}</span></div>
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

prevBtn.addEventListener("click",()=>current>0 && renderQuestion(current-1));
nextBtn.addEventListener("click",()=>current<total-1 && renderQuestion(current+1));
submitBtn.addEventListener("click", submitQuiz);

// Last question prompt
function showEndPrompt(){
  resultArea.innerHTML = `
    <div class="result">
      <strong>You reached the last question.</strong>
      <br><button id="finishNow">Submit Test</button>
    </div>`;
  document.getElementById("finishNow").addEventListener("click", submitQuiz);
}

// Timer functions
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
    </div>`;
  
  document.getElementById("showReviewBtn").addEventListener("click", showReview);
}

// Review section
function showReview(){
  reviewArea.innerHTML = `<h3>Detailed Review</h3>`;

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

// Start system
renderQuestion(0);
startTimer();
