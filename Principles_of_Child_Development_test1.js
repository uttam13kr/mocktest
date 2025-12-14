/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 1
   QUESTIONS: 25
   TIME: 30 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test 1";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
  q: "Child development refers to the study of changes from birth to",
  a: ["Adulthood", "Old age", "Adolescence", "Middle age"],
  correct: 2,
  explanation: "Child development studies growth and changes from birth till adolescence."
},

{
  q: "Which statement best explains that every child is different?",
  a: ["Uniform pattern of development", "Principle of individuality", "Cephalocaudal principle", "Proximodistal principle"],
  correct: 1,
  explanation: "Principle of individuality states that every child is unique in growth and development."
},

{
  q: "Development from head to toe is known as",
  a: ["Proximodistal principle", "General to specific", "Cephalocaudal principle", "Continuity principle"],
  correct: 2,
  explanation: "Cephalocaudal principle means development proceeds from head to toe."
},

{
  q: "Development from centre of the body to extremities is called",
  a: ["Cephalocaudal principle", "Proximodistal principle", "Sequential development", "Predictable development"],
  correct: 1,
  explanation: "Proximodistal principle means development moves from the centre outward."
},

{
  q: "Which principle states that development does not stop?",
  a: ["Continuity principle", "Predictability principle", "Individuality principle", "Uniformity principle"],
  correct: 0,
  explanation: "Development is a continuous process from birth to maturity."
},

{
  q: "Development from simple movements to complex skills shows",
  a: ["General to specific principle", "Individuality", "Maturation", "Heredity"],
  correct: 0,
  explanation: "Children first show general responses and later specific actions."
},

{
  q: "Which area of development affects all other areas?",
  a: ["Only physical", "Only emotional", "All areas are interrelated", "Only social"],
  correct: 2,
  explanation: "Physical, mental, emotional and social development are interconnected."
},

{
  q: "Which stage of life is considered most important for development?",
  a: ["Adulthood", "Old age", "Early childhood", "Late adolescence"],
  correct: 2,
  explanation: "Early childhood experiences strongly influence future development."
},

{
  q: "Development measured in terms of thinking and behaviour is",
  a: ["Quantitative", "Qualitative", "Numerical", "Physical"],
  correct: 1,
  explanation: "Mental and behavioural changes are qualitative in nature."
},

{
  q: "Who proposed the maturation theory of development?",
  a: ["Piaget", "Skinner", "Gesell", "Vygotsky"],
  correct: 2,
  explanation: "Gesell proposed that development depends mainly on maturation."
},

{
  q: "According to maturation theory, children differ because",
  a: ["Environment only", "Learning only", "Rate of maturation", "Punishment"],
  correct: 2,
  explanation: "Children pass through stages at different rates of maturation."
},

{
  q: "Learning by observing others is explained by",
  a: ["Trial and error", "Social learning theory", "Maturation theory", "Insight learning"],
  correct: 1,
  explanation: "Social learning theory explains learning through observation and imitation."
},

{
  q: "Which factor is an internal factor of development?",
  a: ["Family", "School", "Heredity", "Neighbourhood"],
  correct: 2,
  explanation: "Heredity is an internal factor influencing development."
},

{
  q: "Balanced emotions in children help in",
  a: ["Poor adjustment", "Better social behaviour", "Low confidence", "Slow learning"],
  correct: 1,
  explanation: "Balanced emotional development supports healthy social behaviour."
},

{
  q: "Which factor includes pollution and housing conditions?",
  a: ["Heredity", "Physical environment", "Intelligence", "Emotion"],
  correct: 1,
  explanation: "Physical environment includes pollution, noise, and housing."
},

{
  q: "Socio-economic condition mainly affects",
  a: ["Learning opportunities", "Genes", "Reflexes", "Instincts"],
  correct: 0,
  explanation: "Economic status influences education, nutrition and opportunities."
},

{
  q: "Child psychology mainly studies",
  a: ["Adult behaviour", "Mental and emotional development of children", "Teaching methods", "School management"],
  correct: 1,
  explanation: "Child psychology focuses on mental, emotional and behavioural development."
},

{
  q: "Knowledge of child psychology helps teachers to",
  a: ["Punish children", "Ignore differences", "Understand learners better", "Teach faster"],
  correct: 2,
  explanation: "Understanding psychology helps teachers deal with learners effectively."
},

{
  q: "Which principle explains individual differences among children?",
  a: ["Continuity", "Uniformity", "Individuality", "Predictability"],
  correct: 2,
  explanation: "Each child develops in a unique way."
},

{
  q: "Growth of different body parts at different speeds shows",
  a: ["Uniform development", "Different rate principle", "Discontinuous growth", "Random growth"],
  correct: 1,
  explanation: "Different body parts grow at different rates."
},

{
  q: "Which development can be predicted easily?",
  a: ["Emotional", "Mental", "Physical", "Social"],
  correct: 2,
  explanation: "Physical development is more predictable than mental development."
},

{
  q: "Which factor directly affects language development?",
  a: ["Emotional balance", "Height", "Weight", "Reflexes"],
  correct: 0,
  explanation: "Emotional stability supports language and communication."
},

{
  q: "Family plays an important role mainly in",
  a: ["Moral and emotional development", "Genetic transfer", "Physical reflexes", "Biological growth only"],
  correct: 0,
  explanation: "Family environment shapes emotional and moral development."
},

{
  q: "Which principle states development happens stage by stage?",
  a: ["Continuity", "Sequential development", "Predictability", "Uniformity"],
  correct: 1,
  explanation: "Children pass through stages like infancy, childhood and adolescence."
},

{
  q: "The main aim of understanding child development is to",
  a: ["Control children", "Compare children", "Guide and educate children properly", "Increase syllabus"],
  correct: 2,
  explanation: "Understanding development helps in proper guidance and education."
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
