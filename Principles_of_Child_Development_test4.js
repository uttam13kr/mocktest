/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 4 (ASSERTION–REASON)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test 4 (Assertion–Reason)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
  q: "Assertion (A): Child development is a continuous process.\nReason (R): Development stops once a child enters adolescence.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Development continues throughout life; it does not stop in adolescence."
},

{
  q: "Assertion (A): Every child develops at a different rate.\nReason (R): Individual differences exist among children.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Individual differences explain why development rates differ among children."
},

{
  q: "Assertion (A): Development follows a fixed sequence.\nReason (R): Children first develop control over their head before their legs.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Cephalocaudal principle supports sequential and predictable development."
},

{
  q: "Assertion (A): Emotional development affects social development.\nReason (R): Emotionally balanced children interact better with others.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Balanced emotions help children adjust and interact socially."
},

{
  q: "Assertion (A): Development is qualitative as well as quantitative.\nReason (R): It includes change in behaviour, thinking, height and weight.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Development includes both measurable growth and psychological changes."
},

{
  q: "Assertion (A): Early childhood experiences influence later personality.\nReason (R): Early years form the foundation of emotional and social development.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Early foundations strongly shape later behaviour and personality."
},

{
  q: "Assertion (A): All areas of development are interrelated.\nReason (R): Physical health can influence learning ability and emotions.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Physical, emotional, cognitive and social development affect each other."
},

{
  q: "Assertion (A): Children learn many behaviours by observing others.\nReason (R): Social learning theory explains learning through imitation and modeling.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Social learning theory clearly supports observational learning."
},

{
  q: "Assertion (A): Growth refers only to physical change.\nReason (R): Growth is measured in terms of height, weight and size.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Growth is purely quantitative and physical in nature."
},

{
  q: "Assertion (A): Development happens stage by stage.\nReason (R): Each developmental stage has unique characteristics and needs.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Each stage like infancy, childhood and adolescence is distinct."
},

{
  q: "Assertion (A): Maturation plays an important role in learning.\nReason (R): A child can learn only when he is developmentally ready.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Learning becomes effective when maturation level supports it."
},

{
  q: "Assertion (A): All children reach developmental milestones at the same age.\nReason (R): Development pace is equal for everyone.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Children develop at different rates; milestones vary."
},

{
  q: "Assertion (A): Environment influences child development.\nReason (R): Family, school and society shape behaviour and learning.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "External environment strongly affects development."
},

{
  q: "Assertion (A): Nutrition affects cognitive development.\nReason (R): Poor nutrition may reduce brain efficiency and concentration.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Nutrition plays a crucial role in brain development."
},

{
  q: "Assertion (A): Social interaction helps in language development.\nReason (R): Children learn language through communication and exposure.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Language develops through interaction and practice."
},

{
  q: "Assertion (A): Moral development occurs automatically with age.\nReason (R): Children learn right and wrong only through biological growth.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Moral development depends on experience, guidance and environment."
},

{
  q: "Assertion (A): Physical growth supports other areas of development.\nReason (R): A healthy child participates better in learning and activities.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Better health improves emotional, social and cognitive development."
},

{
  q: "Assertion (A): Development is predictable.\nReason (R): Children generally follow similar stages across cultures.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Predictable sequences make development measurable."
},

{
  q: "Assertion (A): Play is essential for child development.\nReason (R): Play helps in social interaction, creativity and emotional release.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Play contributes to holistic development."
},

{
  q: "Assertion (A): Teachers should not compare students frequently.\nReason (R): Comparison can harm self-esteem and emotional balance.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Comparison negatively affects emotional development."
},

{
  q: "Assertion (A): Social development helps children adjust in society.\nReason (R): Social skills enable cooperation and positive relationships.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Social skills are important for adjustment and participation."
},

{
  q: "Assertion (A): Development is affected only by heredity.\nReason (R): Environment has no role in development.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 3,
  explanation: "Development depends on both heredity and environment."
},

{
  q: "Assertion (A): Emotional security helps children learn better.\nReason (R): When children feel safe, they can focus more on learning tasks.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Emotional safety improves concentration and learning."
},

{
  q: "Assertion (A): Development is a lifelong process.\nReason (R): Changes continue to occur throughout different life stages.",
  a: [
    "Both A and R are true and R is the correct explanation",
    "Both A and R are true but R is not the correct explanation",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Development continues from birth to old age."
}

];

/* ============================================================
   END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
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
