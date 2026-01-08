/* ============================================================
   TEST 1 : INFLUENCE OF HEREDITY AND ENVIRONMENT
   Subject: Child Development & Pedagogy (CTET)
   Time: 20 Minutes | Questions: 25
   NOTE: DO NOT ADD QUESTION NUMBERS
============================================================ */

// ✔ TEST TITLE
const TEST_TITLE = "Influence of Heredity and Environment – Test 1";

// ✔ TIME LIMIT
const TIME_LIMIT_MINUTES = 20;

// ✔ QUIZ QUESTIONS
const quizData = [

{
  question: "Heredity refers to the transmission of traits from",
  options: [
    "Teachers to students",
    "Parents to children",
    "Society to individual",
    "School to child"
  ],
  answer: "Parents to children",
  explanation: "Heredity means the transfer of genetic traits from parents to their children."
},

{
  question: "Which of the following is mainly determined by heredity?",
  options: [
    "Language spoken",
    "Religious belief",
    "Colour of eyes",
    "Moral values"
  ],
  answer: "Colour of eyes",
  explanation: "Eye colour is a physical trait inherited through genes."
},

{
  question: "Variation among individuals occurs mainly because",
  options: [
    "All children get same genes",
    "Environment is same for all",
    "Combination of genes differs",
    "Education is same"
  ],
  answer: "Combination of genes differs",
  explanation: "Each child receives a unique combination of genes, causing variation."
},

{
  question: "According to HH Goddard, intelligence is",
  options: [
    "Entirely environmental",
    "Entirely learned",
    "Inherited from parents",
    "Independent of heredity"
  ],
  answer: "Inherited from parents",
  explanation: "HH Goddard believed intelligence is largely inherited."
},

{
  question: "Temperament of a child is mainly influenced by",
  options: [
    "School environment",
    "Peer group",
    "Heredity",
    "Curriculum"
  ],
  answer: "Heredity",
  explanation: "Temperament is mostly inborn and seen from birth."
},

{
  question: "Which development is most affected by environment?",
  options: [
    "Height",
    "Eye colour",
    "Personality",
    "Blood group"
  ],
  answer: "Personality",
  explanation: "Personality develops largely due to environmental influences."
},

{
  question: "Environment refers to",
  options: [
    "Only physical surroundings",
    "Only social factors",
    "Everything surrounding the individual",
    "Only school atmosphere"
  ],
  answer: "Everything surrounding the individual",
  explanation: "Environment includes physical, social and cultural surroundings."
},

{
  question: "Who defined environment as anything immediately surrounding an object?",
  options: [
    "Ann Nastase",
    "Gisbert",
    "John Locke",
    "Plato"
  ],
  answer: "Gisbert",
  explanation: "Gisbert defined environment as immediate surroundings influencing an object."
},

{
  question: "Which trait is least influenced by heredity?",
  options: [
    "Height",
    "Intelligence potential",
    "Language spoken",
    "Eye colour"
  ],
  answer: "Language spoken",
  explanation: "Language is learned from environment, not inherited."
},

{
  question: "Heredity mainly provides",
  options: [
    "Final behaviour",
    "Learning experiences",
    "Potential abilities",
    "Social skills"
  ],
  answer: "Potential abilities",
  explanation: "Heredity provides potential which environment helps to develop."
},

{
  question: "Which of the following best explains maturation?",
  options: [
    "Learning through practice",
    "Development due to experience",
    "Biological readiness",
    "Social interaction"
  ],
  answer: "Biological readiness",
  explanation: "Maturation refers to development guided by heredity."
},

{
  question: "Children raised in deprived environments may show",
  options: [
    "Better intelligence",
    "Delayed mental growth",
    "Faster maturation",
    "No effect at all"
  ],
  answer: "Delayed mental growth",
  explanation: "Poor environment hampers mental development."
},

{
  question: "Which example supports the role of environment?",
  options: [
    "Eye colour of child",
    "Blood group",
    "Feral child unable to speak",
    "Fingerprint pattern"
  ],
  answer: "Feral child unable to speak",
  explanation: "Lack of human environment affected language development."
},

{
  question: "Nature refers to",
  options: [
    "Upbringing",
    "Schooling",
    "Genetic inheritance",
    "Culture"
  ],
  answer: "Genetic inheritance",
  explanation: "Nature means traits inherited from parents."
},

{
  question: "Nurture refers to",
  options: [
    "Genes only",
    "Inherited traits",
    "Environment and upbringing",
    "Blood group"
  ],
  answer: "Environment and upbringing",
  explanation: "Nurture includes environment, education and experiences."
},

{
  question: "John Locke believed that the child’s mind is",
  options: [
    "Genetically fixed",
    "A blank slate",
    "Fully developed at birth",
    "Unaffected by experience"
  ],
  answer: "A blank slate",
  explanation: "John Locke believed knowledge comes from experience."
},

{
  question: "Which statement is correct?",
  options: [
    "Only heredity affects development",
    "Only environment affects development",
    "Both heredity and environment influence development",
    "Neither heredity nor environment matter"
  ],
  answer: "Both heredity and environment influence development",
  explanation: "Development is a result of interaction between heredity and environment."
},

{
  question: "Physical development like walking depends mainly on",
  options: [
    "Teaching",
    "Maturation",
    "Peer group",
    "Discipline"
  ],
  answer: "Maturation",
  explanation: "Walking develops when the child is biologically ready."
},

{
  question: "Which factor is hereditary?",
  options: [
    "Attitude",
    "Interest",
    "Blood group",
    "Language"
  ],
  answer: "Blood group",
  explanation: "Blood group is determined genetically."
},

{
  question: "Personality can be improved mainly through",
  options: [
    "Genes",
    "Environment",
    "Chromosomes",
    "Hormones"
  ],
  answer: "Environment",
  explanation: "Environment plays a major role in shaping personality."
},

{
  question: "Why do siblings differ from each other?",
  options: [
    "Same genes",
    "Different environments only",
    "Different gene combinations",
    "Same upbringing"
  ],
  answer: "Different gene combinations",
  explanation: "Each child inherits a unique combination of genes."
},

{
  question: "Which is an environmental factor?",
  options: [
    "Eye colour",
    "Blood type",
    "Family atmosphere",
    "Height potential"
  ],
  answer: "Family atmosphere",
  explanation: "Family atmosphere is part of environment."
},

{
  question: "Intelligence develops best when",
  options: [
    "Only heredity is strong",
    "Only environment is rich",
    "Both heredity and environment support",
    "Neither heredity nor environment matter"
  ],
  answer: "Both heredity and environment support",
  explanation: "Heredity provides potential and environment develops it."
},

{
  question: "Which statement about heredity is incorrect?",
  options: [
    "It determines potential",
    "It affects maturation",
    "It alone decides personality",
    "It influences temperament"
  ],
  answer: "It alone decides personality",
  explanation: "Personality is influenced more by environment."
},

{
  question: "The correct view about human development is",
  options: [
    "Nature dominates nurture",
    "Nurture dominates nature",
    "Both interact in development",
    "Neither plays a role"
  ],
  answer: "Both interact in development",
  explanation: "Human development results from interaction of nature and nurture."
}

];

/* ============================================================
   END OF ALLOWED SECTION — QUIZ ENGINE CODE IS SKIPPED
============================================================ */



/* ============================================================
   END OF ALLOWED SECTION — ENGINE CODE IS SKIPPED AS REQUESTED
============================================================ 


      END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
===============================================================
    ⛔ STOP! DO NOT CHANGE ANY CODE BELOW THIS POINT ⛔
    ⛔ COPY EVERYTHING EXACTLY AS IT IS ⛔
    ⛔ THIS IS THE QUIZ ENGINE + SHUFFLING SYSTEM ⛔

    If you modify anything below, the test WILL BREAK.
    For all future tests: KEEP THIS SECTION EXACTLY SAME.
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
