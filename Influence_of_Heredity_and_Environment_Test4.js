/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 4
   ASSERTION–REASON TYPE
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Influence of Heredity and Environment – Test 4 (Assertion–Reason)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Influence of Heredity and Environment";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Assertion (A): Heredity provides the basic potential for a child’s development.\nReason (R): Genes determine the maximum limits of physical and mental abilities.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Heredity gives basic potential and genes set limits, so R explains A."
},

{
q: "Assertion (A): Environment plays no role in intelligence development.\nReason (R): Intelligence is completely fixed at birth.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is false"
],
correct: 3,
explanation: "Environment influences intelligence and intelligence is not completely fixed."
},

{
q: "Assertion (A): Children with similar heredity may show different development.\nReason (R): They grow in different environments.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Different environments cause different development despite similar heredity."
},

{
q: "Assertion (A): Language development depends mainly on environment.\nReason (R): Language is learned through social interaction.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Language is acquired socially, so environment plays major role."
},

{
q: "Assertion (A): Blood group of a child can be changed by environment.\nReason (R): Blood group is genetically determined.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Blood group is genetic and cannot be changed by environment."
},

{
q: "Assertion (A): Personality development is influenced by family environment.\nReason (R): Family provides emotional and social experiences.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Family experiences shape personality, so R explains A."
},

{
q: "Assertion (A): Heredity alone decides the final behaviour of a child.\nReason (R): Behaviour is influenced by learning and experiences.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Behaviour is shaped by environment and learning, not heredity alone."
},

{
q: "Assertion (A): Environmental deprivation affects mental development.\nReason (R): Mental growth needs stimulation and experiences.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Lack of stimulation hampers mental growth."
},

{
q: "Assertion (A): Intelligence can develop best in a supportive environment.\nReason (R): Environment helps in developing inherited potential.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Supportive environment develops inherited intelligence."
},

{
q: "Assertion (A): Eye colour is influenced by environmental factors.\nReason (R): Eye colour is inherited through genes.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Eye colour is hereditary and not influenced by environment."
},

{
q: "Assertion (A): Emotional security supports better learning.\nReason (R): Emotions influence attention and motivation.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Emotional stability improves attention and motivation."
},

{
q: "Assertion (A): Heredity affects maturation.\nReason (R): Maturation follows a biological timetable.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Maturation is biologically controlled."
},

{
q: "Assertion (A): Environment begins influencing development after schooling.\nReason (R): Home environment affects child from birth.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Environment influences development from birth, not only after schooling."
},

{
q: "Assertion (A): Moral development is shaped by social environment.\nReason (R): Values are learned through interaction with family and society.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Social interaction teaches values."
},

{
q: "Assertion (A): A child’s height is partly influenced by nutrition.\nReason (R): Nutrition is an environmental factor.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Nutrition supports physical growth."
},

{
q: "Assertion (A): Language acquisition is impossible without environment.\nReason (R): Language requires social exposure.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Language needs social interaction."
},

{
q: "Assertion (A): Genetic disorders highlight the role of heredity.\nReason (R): Such disorders are passed from parents to children.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Genetic disorders are inherited."
},

{
q: "Assertion (A): Teaching quality influences learning outcomes.\nReason (R): Learning is an environmental process.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Learning depends on environmental conditions like teaching."
},

{
q: "Assertion (A): Heredity fixes final intelligence level.\nReason (R): Environment has no effect on intelligence.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is false"
],
correct: 3,
explanation: "Environment influences intelligence; it is not fixed."
},

{
q: "Assertion (A): Peer group affects social development.\nReason (R): Children learn social behaviour through interaction.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Peers provide social learning experiences."
},

{
q: "Assertion (A): Fingerprints are influenced by environment.\nReason (R): Fingerprints are genetically determined.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Fingerprints are hereditary."
},

{
q: "Assertion (A): Balanced development needs both heredity and environment.\nReason (R): One factor alone cannot ensure full development.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Both factors are essential."
},

{
q: "Assertion (A): A stimulating environment supports creativity.\nReason (R): Creativity develops through exposure and practice.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 0,
explanation: "Exposure and practice enhance creativity."
},

{
q: "Assertion (A): Heredity works independently of environment.\nReason (R): Development is a result of interaction of many factors.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"A is false but R is true"
],
correct: 3,
explanation: "Heredity does not work alone; development is interactive."
}

];

/* ============================================================
   END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
============================================================ */

/* ============================================================
   END OF ALLOWED SECTION — ENGINE CODE IS SKIPPED AS REQUESTED
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
