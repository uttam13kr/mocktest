/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 2
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test 2";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
  q: "Development refers to",
  a: ["Sudden changes in behaviour", "Overall and continuous changes in an individual", "Only physical growth", "Only mental ability"],
  correct: 1,
  explanation: "Development includes overall and continuous changes in physical, mental, social and emotional areas."
},

{
  q: "Growth and development are related because",
  a: ["Both are identical", "Growth is quantitative and development is qualitative", "Development happens first", "Growth depends only on learning"],
  correct: 1,
  explanation: "Growth refers to physical increase, while development refers to qualitative changes."
},

{
  q: "Which principle states that development follows a fixed order?",
  a: ["Continuity principle", "Sequential principle", "Individuality principle", "Uniformity principle"],
  correct: 1,
  explanation: "Development follows a definite and predictable sequence."
},

{
  q: "The principle that explains control over large muscles before small muscles is",
  a: ["Cephalocaudal principle", "Proximodistal principle", "General to specific principle", "Continuity principle"],
  correct: 2,
  explanation: "Children gain control over large muscles before fine muscles."
},

{
  q: "Individual differences in development are mainly due to",
  a: ["Only heredity", "Only environment", "Interaction of heredity and environment", "School curriculum"],
  correct: 2,
  explanation: "Both heredity and environment together influence development."
},

{
  q: "Which area of development is closely related to peer interaction?",
  a: ["Physical", "Social", "Moral", "Language"],
  correct: 1,
  explanation: "Social development is influenced by interaction with peers."
},

{
  q: "Development of self-control and emotional balance is related to",
  a: ["Cognitive development", "Physical development", "Emotional development", "Language development"],
  correct: 2,
  explanation: "Emotional development helps in controlling emotions and behaviour."
},

{
  q: "Which statement is true about development?",
  a: ["It stops in adulthood", "It is random", "It is continuous", "It occurs suddenly"],
  correct: 2,
  explanation: "Development is a lifelong and continuous process."
},

{
  q: "A child learning values and morals is related to",
  a: ["Physical development", "Moral development", "Language development", "Cognitive development"],
  correct: 1,
  explanation: "Moral development involves understanding right and wrong."
},

{
  q: "Which factor has the strongest influence during early childhood?",
  a: ["School syllabus", "Teachers only", "Home environment", "Peer pressure"],
  correct: 2,
  explanation: "Home and family environment play a major role in early childhood."
},

{
  q: "Learning readiness in children mainly depends on",
  a: ["Age only", "Maturation level", "Punishment", "Competition"],
  correct: 1,
  explanation: "Children learn effectively when they are mature enough."
},

{
  q: "Which principle supports child-centred education?",
  a: ["Uniformity of development", "Individual differences", "Random development", "Mechanical learning"],
  correct: 1,
  explanation: "Child-centred education respects individual differences."
},

{
  q: "Motor development mainly helps a child in",
  a: ["Thinking skills", "Body coordination", "Language use", "Moral judgement"],
  correct: 1,
  explanation: "Motor development improves coordination and physical skills."
},

{
  q: "Which type of development is most affected by nutrition?",
  a: ["Moral", "Social", "Physical", "Language"],
  correct: 2,
  explanation: "Proper nutrition is essential for physical growth."
},

{
  q: "Learning through imitation is best explained by",
  a: ["Trial and error theory", "Social learning theory", "Maturation theory", "Insight theory"],
  correct: 1,
  explanation: "Children learn many behaviours by observing and imitating others."
},

{
  q: "Which factor is an external factor influencing development?",
  a: ["Intelligence", "Heredity", "Family", "Maturation"],
  correct: 2,
  explanation: "Family is an important external environmental factor."
},

{
  q: "Which stage is marked by rapid physical growth?",
  a: ["Infancy", "Adolescence", "Adulthood", "Old age"],
  correct: 1,
  explanation: "Adolescence shows rapid physical and hormonal changes."
},

{
  q: "Language development is closely linked with",
  a: ["Social interaction", "Height", "Weight", "Reflex actions"],
  correct: 0,
  explanation: "Interaction with others helps in developing language skills."
},

{
  q: "Which development helps a child to think logically?",
  a: ["Emotional", "Social", "Cognitive", "Physical"],
  correct: 2,
  explanation: "Cognitive development includes thinking, reasoning and problem solving."
},

{
  q: "A supportive classroom environment mainly helps in",
  a: ["Fear development", "Healthy emotional development", "Physical weakness", "Isolation"],
  correct: 1,
  explanation: "Positive environment supports emotional and social growth."
},

{
  q: "Which principle explains that early experiences shape later life?",
  a: ["Continuity principle", "Early foundation principle", "Uniformity principle", "Random principle"],
  correct: 1,
  explanation: "Early childhood experiences form the base of future development."
},

{
  q: "Which development enables a child to adjust with society?",
  a: ["Physical", "Emotional", "Social", "Intellectual"],
  correct: 2,
  explanation: "Social development helps a child adjust and cooperate with others."
},

{
  q: "Development of values and attitudes is part of",
  a: ["Physical development", "Moral development", "Language development", "Motor development"],
  correct: 1,
  explanation: "Moral development includes values, attitudes and ethical behaviour."
},

{
  q: "Which statement best reflects holistic development?",
  a: ["Only academic growth is important", "Only physical growth matters", "All areas of development are important", "Development is exam-oriented"],
  correct: 2,
  explanation: "Holistic development includes physical, mental, social and emotional growth."
},

{
  q: "The main purpose of studying child development for teachers is to",
  a: ["Compare students", "Punish students", "Plan effective teaching", "Increase workload"],
  correct: 2,
  explanation: "Knowledge of child development helps teachers plan effective teaching strategies."
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


