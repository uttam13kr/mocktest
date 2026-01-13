/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 5 (Assertion–Reason)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Assertion (A): Socialisation is a lifelong process. Reason (R): Individuals continue to learn new roles and behaviours throughout life.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Socialisation continues as society and roles change, which explains its lifelong nature."
},

{
q: "Assertion (A): Family is the primary agent of socialisation. Reason (R): A child first learns social behaviour within the family.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Family is the first social environment where basic behaviour is learned."
},

{
q: "Assertion (A): School is an important agent of socialisation. Reason (R): School provides only academic knowledge.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 2,
explanation: "School teaches social skills also, not only academics."
},

{
q: "Assertion (A): Peer groups strongly influence behaviour during adolescence. Reason (R): Adolescents seek acceptance and identity among peers.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Identity formation increases peer influence during adolescence."
},

{
q: "Assertion (A): Language plays a major role in socialisation. Reason (R): Language helps in the transmission of culture and values.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Culture and values are passed through language."
},

{
q: "Assertion (A): Socialisation helps maintain social order. Reason (R): It teaches norms and acceptable behaviour.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Norms guide behaviour and maintain order."
},

{
q: "Assertion (A): Children learn many social skills through play. Reason (R): Play encourages cooperation and interaction.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Play situations promote cooperation and social learning."
},

{
q: "Assertion (A): Socialisation does not include genetic transmission. Reason (R): Genetic traits are biological, not social.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Socialisation is learned, while genetics is inherited."
},

{
q: "Assertion (A): Secondary socialisation occurs mainly outside the family. Reason (R): It takes place through institutions like school and workplace.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Secondary socialisation happens in wider society."
},

{
q: "Assertion (A): Mass media is an agent of socialisation. Reason (R): It influences attitudes, beliefs and behaviour.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Media shapes ideas and behaviour patterns."
},

{
q: "Assertion (A): Early childhood is crucial for socialisation. Reason (R): Basic habits and values are formed during this period.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Foundational habits are learned in early childhood."
},

{
q: "Assertion (A): Socialisation transforms a biological being into a social being. Reason (R): It enables individuals to function in society.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Social learning makes social living possible."
},

{
q: "Assertion (A): Cooperative play supports social development. Reason (R): Children learn roles and interdependence in cooperative play.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Roles and cooperation enhance social skills."
},

{
q: "Assertion (A): School is a secondary agent of socialisation. Reason (R): Primary socialisation takes place in the family.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Family precedes school in social learning."
},

{
q: "Assertion (A): Socialisation is a planned and linear process. Reason (R): It follows a fixed sequence in all individuals.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 3,
explanation: "Socialisation is complex and differs among individuals."
},

{
q: "Assertion (A): Identification helps a child become social. Reason (R): The child associates with people or objects they like.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Identification supports social bonding."
},

{
q: "Assertion (A): Adolescence is a critical stage of socialisation. Reason (R): Identity formation occurs during this stage.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Identity formation makes adolescence crucial."
},

{
q: "Assertion (A): Hidden curriculum plays a role in socialisation. Reason (R): It conveys informal norms and expectations.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Hidden curriculum teaches unspoken social rules."
},

{
q: "Assertion (A): Socialisation helps preserve culture. Reason (R): Cultural values are transmitted across generations.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Culture survives through social learning."
},

{
q: "Assertion (A): Poor socialisation may lead to maladjustment. Reason (R): Individuals fail to learn social norms properly.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Lack of norms leads to adjustment problems."
},

{
q: "Assertion (A): Play is not important for socialisation. Reason (R): Social skills develop only through formal education.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 3,
explanation: "Play is a major source of social skill development."
},

{
q: "Assertion (A): Socialisation differs from person to person. Reason (R): Individuals experience different social environments.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Different environments shape different experiences."
},

{
q: "Assertion (A): Teachers act as role models for students. Reason (R): Students often imitate the behaviour of teachers.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Imitation makes teachers influential."
},

{
q: "Assertion (A): Socialisation ends in childhood. Reason (R): Adults do not learn new social roles.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 3,
explanation: "Socialisation continues into adulthood."
},

{
q: "Assertion (A): Successful socialisation results in social harmony. Reason (R): Individuals learn cooperation and mutual respect.",
a: [
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation of A",
"A is true but R is false",
"Both A and R are false"
],
correct: 0,
explanation: "Cooperation and respect ensure harmony."
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
