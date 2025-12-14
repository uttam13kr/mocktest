/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 1
   QUESTIONS: 25
   TIME: 30 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
  question: "Child development refers to the study of changes from birth to",
  options: ["Adulthood", "Old age", "Adolescence", "Middle age"],
e
  ],
  correctAnswer: 2,
  explanation: "Child development studies growth and changes from birth till adolescence."
},

{
  question: "Which statement best explains that every child is different?",
  options: ["Uniform pattern of development", "Principle of individuality", "Cephalocaudal principle", "Proximodistal principle"],
  correctAnswer: 1,
  explanation: "Principle of individuality states that every child is unique in growth and development."
},

{
  question: "Development from head to toe is known as",
  options: ["Proximodistal principle", "General to specific", "Cephalocaudal principle", "Continuity principle"],
  correctAnswer: 2,
  explanation: "Cephalocaudal principle means development proceeds from head to toe."
},

{
  question: "Development from centre of the body to extremities is called",
  options: ["Cephalocaudal principle", "Proximodistal principle", "Sequential development", "Predictable development"],
  correctAnswer: 1,
  explanation: "Proximodistal principle means development moves from the centre outward."
},

{
  question: "Which principle states that development does not stop?",
  options: ["Continuity principle", "Predictability principle", "Individuality principle", "Uniformity principle"],
  correctAnswer: 0,
  explanation: "Development is a continuous process from birth to maturity."
},

{
  question: "Development from simple movements to complex skills shows",
  options: ["General to specific principle", "Individuality", "Maturation", "Heredity"],
  correctAnswer: 0,
  explanation: "Children first show general responses and later specific actions."
},

{
  question: "Which area of development affects all other areas?",
  options: ["Only physical", "Only emotional", "All areas are interrelated", "Only social"],
  correctAnswer: 2,
  explanation: "Physical, mental, emotional and social development are interconnected."
},

{
  question: "Which stage of life is considered most important for development?",
  options: ["Adulthood", "Old age", "Early childhood", "Late adolescence"],
  correctAnswer: 2,
  explanation: "Early childhood experiences strongly influence future development."
},

{
  question: "Development measured in terms of thinking and behaviour is",
  options: ["Quantitative", "Qualitative", "Numerical", "Physical"],
  correctAnswer: 1,
  explanation: "Mental and behavioural changes are qualitative in nature."
},

{
  question: "Who proposed the maturation theory of development?",
  options: ["Piaget", "Skinner", "Gesell", "Vygotsky"],
  correctAnswer: 2,
  explanation: "Gesell proposed that development depends mainly on maturation."
},

{
  question: "According to maturation theory, children differ because",
  options: ["Environment only", "Learning only", "Rate of maturation", "Punishment"],
  correctAnswer: 2,
  explanation: "Children pass through stages at different rates of maturation."
},

{
  question: "Learning by observing others is explained by",
  options: ["Trial and error", "Social learning theory", "Maturation theory", "Insight learning"],
  correctAnswer: 1,
  explanation: "Social learning theory explains learning through observation and imitation."
},

{
  question: "Which factor is an internal factor of development?",
  options: ["Family", "School", "Heredity", "Neighbourhood"],
  correctAnswer: 2,
  explanation: "Heredity is an internal factor influencing development."
},

{
  question: "Balanced emotions in children help in",
  options: ["Poor adjustment", "Better social behaviour", "Low confidence", "Slow learning"],
  correctAnswer: 1,
  explanation: "Balanced emotional development supports healthy social behaviour."
},

{
  question: "Which factor includes pollution and housing conditions?",
  options: ["Heredity", "Physical environment", "Intelligence", "Emotion"],
  correctAnswer: 1,
  explanation: "Physical environment includes pollution, noise, and housing."
},

{
  question: "Socio-economic condition mainly affects",
  options: ["Learning opportunities", "Genes", "Reflexes", "Instincts"],
  correctAnswer: 0,
  explanation: "Economic status influences education, nutrition and opportunities."
},

{
  question: "Child psychology mainly studies",
  options: ["Adult behaviour", "Mental and emotional development of children", "Teaching methods", "School management"],
  correctAnswer: 1,
  explanation: "Child psychology focuses on mental, emotional and behavioural development."
},

{
  question: "Knowledge of child psychology helps teachers to",
  options: ["Punish children", "Ignore differences", "Understand learners better", "Teach faster"],
  correctAnswer: 2,
  explanation: "Understanding psychology helps teachers deal with learners effectively."
},

{
  question: "Which principle explains individual differences among children?",
  options: ["Continuity", "Uniformity", "Individuality", "Predictability"],
  correctAnswer: 2,
  explanation: "Each child develops in a unique way."
},

{
  question: "Growth of different body parts at different speeds shows",
  options: ["Uniform development", "Different rate principle", "Discontinuous growth", "Random growth"],
  correctAnswer: 1,
  explanation: "Different body parts grow at different rates."
},

{
  question: "Which development can be predicted easily?",
  options: ["Emotional", "Mental", "Physical", "Social"],
  correctAnswer: 2,
  explanation: "Physical development is more predictable than mental development."
},

{
  question: "Which factor directly affects language development?",
  options: ["Emotional balance", "Height", "Weight", "Reflexes"],
  correctAnswer: 0,
  explanation: "Emotional stability supports language and communication."
},

{
  question: "Family plays an important role mainly in",
  options: ["Moral and emotional development", "Genetic transfer", "Physical reflexes", "Biological growth only"],
  correctAnswer: 0,
  explanation: "Family environment shapes emotional and moral development."
},

{
  question: "Which principle states development happens stage by stage?",
  options: ["Continuity", "Sequential development", "Predictability", "Uniformity"],
  correctAnswer: 1,
  explanation: "Children pass through stages like infancy, childhood and adolescence."
},

{
  question: "The main aim of understanding child development is to",
  options: ["Control children", "Compare children", "Guide and educate children properly", "Increase syllabus"],
  correctAnswer: 2,
  explanation: "Understanding development helps in proper guidance and education."
}

];

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
