/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 5 (BOOK EXERCISE)
   QUESTIONS: 29
   TIME: 30 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test 5 (Book Exercise)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
q: "Understanding the principles of development of a child helps a teacher in",
a: [
"Identifying the economic background of the learner",
"Rationalizing why the learner ought to be taught",
"Effectively catering to the different learning styles of learners",
"Identifying the social status of the learner"
],
correct: 2,
explanation: "Principles of development help teachers deal with individual learning styles."
},

{
q: "Development of concepts is primarily a part of",
a: [
"Intellectual development",
"Physical development",
"Social development",
"Emotional development"
],
correct: 0,
explanation: "Concept formation belongs mainly to intellectual development."
},

{
q: "The Social Learning theory proposed by Miller and Dollard said that",
a: [
"People learn by watching what others do",
"Human thought processes are central to understanding personality",
"Both",
"Neither"
],
correct: 2,
explanation: "Social learning theory emphasizes learning by observation and imitation."
},

{
q: "Which of the following highlights the principle of development?",
a: [
"It does not proceed at the same pace for all",
"It is a discontinuous process",
"All processes of development are not inter-connected",
"Development is always linear"
],
correct: 0,
explanation: "Development does not proceed at the same pace in all children."
},

{
q: "Naresh and Mukesh are in the same age group. They show differences in social and mental development. It is due to which of the following?",
a: [
"Principle of Modifiability",
"Principle of Definite and Predictable Pattern",
"Principle of Individuality",
"Principle of Uniform Pattern"
],
correct: 2,
explanation: "Children differ individually in development."
},

{
q: "Which of the following statements about principles of development is incorrect?",
a: [
"Development takes place due to a constant interaction between heredity and environment",
"Development depends on maturation and learning",
"Every child goes through stages of development, yet there are wide individual differences among children",
"Development is always linear"
],
correct: 3,
explanation: "Development is not always linear."
},

{
q: "Scope of study of child development is",
a: [
"Study of different stages of child development",
"Study of effects of environment on child development",
"Study of individual differences",
"All of the above"
],
correct: 3,
explanation: "Child development includes stages, environment influence and individual differences."
},

{
q: "Which of the following is an internal factor of child development?",
a: [
"Intelligence",
"Physical ability",
"Heredity factor",
"All of these"
],
correct: 3,
explanation: "Internal factors include heredity, intelligence and physical traits."
},

{
q: "Which one of the following is a true statement corresponding to Cephalocaudal Principle of child’s development?",
a: [
"Development is from head to foot",
"Development is from foot to head",
"Development is from middle to periphery",
"None of the above"
],
correct: 0,
explanation: "Cephalocaudal means head-to-toe development."
},

{
q: "Child psychologists focus on which aspect of children?",
a: [
"Understanding their mental abilities",
"Understanding their behaviour",
"Understanding their language development",
"All of these"
],
correct: 3,
explanation: "Child psychology studies mental, behavioural and language aspects."
},

{
q: "Which of the following is an external factor of development?",
a: [
"Economic conditions",
"Social condition",
"Life experiences",
"All of the above"
],
correct: 3,
explanation: "External environment includes economy, society and experiences."
},

{
q: "Gesell’s Theory of Maturation says that",
a: [
"Maturity of a child depends on the environment",
"Maturity of a child depends on his heredity and the environment",
"All children mature at similar rates",
"All of the above"
],
correct: 3,
explanation: "Gesell emphasized heredity and environment in maturation."
},

{
q: "Development is a never ending process is associated with which principle?",
a: [
"Development is correlated",
"Development is continuous",
"Development follows a pattern",
"Development involves change"
],
correct: 1,
explanation: "Development never stops; it is continuous."
},

{
q: "Development is a sequential and slow process is associated with which thinker?",
a: [
"Maslow",
"Skinner",
"Aristotle",
"Lovosky"
],
correct: 0,
explanation: "Maslow emphasized gradual development."
},

{
q: "Sita has learned to eat rice and dal with her hand by seeing another girl doing the same. Which principle of development is it associated with?",
a: [
"Development takes place by learning",
"Early development is more important than later development",
"Development follows a pattern",
"Development of individuality"
],
correct: 0,
explanation: "This represents learning through observation."
},

{
q: "A mother observes that one of her twins has learnt to walk faster than the other. This difference is related to which principle?",
a: [
"Development proceeds from head to foot",
"Development proceeds stage by stage",
"Development proceeds at different pace for different people",
"Development proceeds from general to specific"
],
correct: 2,
explanation: "Children develop at different rates."
},

{
q: "Why is it important for the teachers to know about the various stages of child development?",
a: [
"To produce a comfortable environment for teaching and learning process",
"To know and understand the problems faced by a child",
"To establish an effective communication with the child",
"All of these"
],
correct: 3,
explanation: "Teacher must understand development for effective teaching."
},

{
q: "Which one of the following is not a reason for the importance of studying child psychology?",
a: [
"It helps us in giving direction to the child to develop life skills",
"It makes us understand the causes for particular behaviour of the child",
"It helps in understanding why children become deformed after birth",
"It helps teachers in creating an effective learning environment"
],
correct: 2,
explanation: "Child psychology does not relate to deformity after birth."
},

{
q: "The statement: An important precondition for the proper development of a child is ensuring his healthy physical development is",
a: [
"May be incorrect as development varies",
"True because physical development occupies topmost place",
"True because physical development is interrelated with other domains",
"Is untrue as physical development does not affect others"
],
correct: 1,
explanation: "Physical development is essential foundation of development."
},

{
q: "Systematic presentation of concepts may be related with which principle?",
a: [
"Development leads to growth",
"Development proceeds from heteronomy to autonomy",
"Students develop at different rates",
"Development is relatively orderly"
],
correct: 1,
explanation: "Development goes from dependence to independence."
},

{
q: "A teacher finds that a student is facing difficulty in drawing a square. He assumes the child will also find it difficult to draw a diamond. This applies which principle?",
a: [
"Development is gradual",
"Development is different for different people",
"Development tends to follow an orderly sequence",
"Development is saltatory"
],
correct: 2,
explanation: "Skills follow a predictable sequence."
},

{
q: "Which one of these is a principle of child development?",
a: [
"Development occurs due to interaction between maturation and experience",
"Development can accurately predict pace of each child",
"Experience is the sole determinant",
"Development is determined only by reinforcement"
],
correct: 0,
explanation: "Development depends on maturation + experience."
},

{
q: "Match principles correctly",
a: [
"Codes (1) 2 4 3 1",
"Codes (2) 4 2 3 1",
"Codes (3) 4 2 1 5",
"Codes (4) 2 1 5"
],
correct: 3,
explanation: "Correct matching is provided in given code."
},

{
q: "The development from central part of the body towards peripheries denotes",
a: [
"Principles of decentralised development",
"Principles of proximodistal development",
"Principles of cascade development",
"Principles of radiated development"
],
correct: 1,
explanation: "Proximodistal refers centre to extremities."
},

{
q: "Which of the following statements denotes relationship between development and learning correctly?",
a: [
"Development and learning are inter-related and inter-dependent",
"Development and learning are not related",
"Learning takes place irrespective of development",
"Rate of learning far exceeds development"
],
correct: 0,
explanation: "Learning and development influence each other."
},

{
q: "Proximodistal principle is illustrated in which example?",
a: [
"Infants develop vision before arm use",
"Infants develop cognitive ability before language",
"Infants first learn torso then arms and legs",
"Infants learn cooing before babbling"
],
correct: 2,
explanation: "Movement develops from centre to outward."
},

{
q: "A child learns to stand before walking and babbling before talking. Which principle is this?",
a: [
"Development is sequential",
"Development proceeds from head to toe",
"Development is disorderly",
"Development progresses from centre to extremities"
],
correct: 0,
explanation: "Development follows sequential order."
},

{
q: "Which principle suggests different body systems grow at different rates?",
a: [
"Cephalocaudal principle",
"Proximodistal principle",
"Hierarchical integration",
"Independence of systems"
],
correct: 0,
explanation: "Different organs grow differently."
},

{
q: "Developmental changes",
a: [
"Are highly unpredictable",
"Occur very fast until childhood then stop",
"Occur at varying rates in individuals",
"Are independent of socio-cultural context"
],
correct: 2,
explanation: "Rate of development varies person to person."
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
