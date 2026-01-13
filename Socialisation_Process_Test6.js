/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 6 (Case-Based)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Case: Rohan learns to greet elders politely by watching his parents every day.\nWhich process of socialisation is shown here?",
a: [
"Maturation",
"Imitation",
"Conditioning",
"Genetic transmission"
],
correct: 1,
explanation: "Rohan copies the behaviour of elders, which is imitation."
},

{
q: "Case: A child starts following school rules like standing in line and raising hand to speak.\nThis situation reflects which type of socialisation?",
a: [
"Primary socialisation",
"Secondary socialisation",
"Biological maturation",
"Genetic learning"
],
correct: 1,
explanation: "Learning school rules happens outside family, so it is secondary socialisation."
},

{
q: "Case: A child raised without human contact fails to develop language.\nThis shows the importance of",
a: [
"Heredity",
"Environment",
"Maturation",
"Chromosomes"
],
correct: 1,
explanation: "Language develops through social environment and interaction."
},

{
q: "Case: Children playing ‘house-house’ assign roles like mother, father and child.\nWhich type of play is this?",
a: [
"Solitary play",
"Parallel play",
"Associative play",
"Cooperative play"
],
correct: 3,
explanation: "Role-based play with cooperation is cooperative play."
},

{
q: "Case: A teacher encourages group discussion and teamwork in class.\nThis practice mainly promotes",
a: [
"Competition",
"Socialisation",
"Maturation",
"Genetic growth"
],
correct: 1,
explanation: "Group interaction helps develop social skills."
},

{
q: "Case: A child learns table manners at home.\nThis learning belongs to",
a: [
"Secondary socialisation",
"Primary socialisation",
"Formal learning",
"Institutional learning"
],
correct: 1,
explanation: "Family-based learning is primary socialisation."
},

{
q: "Case: Adolescents prefer dressing like their friends.\nWhich agent of socialisation is influencing them most?",
a: [
"Family",
"School",
"Peer group",
"Mass media"
],
correct: 2,
explanation: "Peers strongly influence behaviour during adolescence."
},

{
q: "Case: A child is rewarded for sharing toys with classmates.\nWhich method of socialisation is used?",
a: [
"Punishment",
"Reinforcement",
"Isolation",
"Maturation"
],
correct: 1,
explanation: "Reward strengthens socially acceptable behaviour."
},

{
q: "Case: Parents scold a child for misbehaving in public.\nThis shows socialisation through",
a: [
"Imitation",
"Suggestion",
"Reward and punishment",
"Maturation"
],
correct: 2,
explanation: "Correcting behaviour through scolding is punishment."
},

{
q: "Case: A child learns cultural traditions through stories and language.\nWhich factor plays a major role here?",
a: [
"Language",
"Heredity",
"Maturation",
"Reflex action"
],
correct: 0,
explanation: "Language transmits culture and values."
},

{
q: "Case: A student copies the disciplined behaviour of a teacher.\nThis learning occurs through",
a: [
"Conditioning",
"Imitation",
"Genetic influence",
"Maturation"
],
correct: 1,
explanation: "Children often learn by copying role models."
},

{
q: "Case: A child becomes confident after receiving care and affection in infancy.\nAccording to Erikson, this reflects",
a: [
"Autonomy",
"Trust",
"Initiative",
"Identity"
],
correct: 1,
explanation: "Proper care in infancy develops trust."
},

{
q: "Case: A school teaches punctuality, discipline and cooperation beyond textbooks.\nThis represents",
a: [
"Formal curriculum",
"Hidden curriculum",
"Genetic learning",
"Maturation"
],
correct: 1,
explanation: "Hidden curriculum teaches informal social values."
},

{
q: "Case: A child prefers playing alone without interacting with others.\nThis type of play is called",
a: [
"Solitary play",
"Parallel play",
"Cooperative play",
"Associative play"
],
correct: 0,
explanation: "Solitary play involves playing alone."
},

{
q: "Case: A child imitates cartoon characters seen on television.\nWhich agent of socialisation is responsible?",
a: [
"School",
"Peer group",
"Mass media",
"Family"
],
correct: 2,
explanation: "Television is part of mass media."
},

{
q: "Case: A teenager questions social rules and searches for self-identity.\nThis stage is",
a: [
"Early childhood",
"Middle childhood",
"Adolescence",
"Adulthood"
],
correct: 2,
explanation: "Identity formation occurs in adolescence."
},

{
q: "Case: A working adult learns office culture and professional behaviour.\nThis is an example of",
a: [
"Primary socialisation",
"Secondary socialisation",
"Biological maturation",
"Genetic influence"
],
correct: 1,
explanation: "Workplace learning is secondary socialisation."
},

{
q: "Case: A child shows aggressive behaviour due to violent media exposure.\nThis shows that socialisation can be",
a: [
"Always positive",
"Neutral",
"Negative",
"Unimportant"
],
correct: 2,
explanation: "Media can negatively influence behaviour."
},

{
q: "Case: Children learn cooperation while playing team games.\nWhich developmental area is strengthened most?",
a: [
"Physical development",
"Social development",
"Biological growth",
"Genetic traits"
],
correct: 1,
explanation: "Team games improve social skills."
},

{
q: "Case: A child learns gender roles by observing family members.\nThis learning occurs through",
a: [
"Identification",
"Punishment",
"Maturation",
"Reflex action"
],
correct: 0,
explanation: "Identification helps children adopt social roles."
},

{
q: "Case: A child raised in a supportive environment develops positive social behaviour.\nThis shows development depends on",
a: [
"Heredity only",
"Environment only",
"Both heredity and environment",
"Neither heredity nor environment"
],
correct: 2,
explanation: "Development is influenced by both nature and nurture."
},

{
q: "Case: A child learns moral values by listening to elders.\nWhich agent is mainly responsible?",
a: [
"School",
"Peer group",
"Family",
"Mass media"
],
correct: 2,
explanation: "Family is the first source of moral learning."
},

{
q: "Case: A child learns social norms differently from siblings.\nThe reason is",
a: [
"Same heredity",
"Different social experiences",
"Same environment",
"Same culture"
],
correct: 1,
explanation: "Different experiences lead to different social learning."
},

{
q: "Case: A child refuses to cooperate due to lack of early interaction.\nThis indicates failure of",
a: [
"Maturation",
"Socialisation",
"Genetic growth",
"Physical development"
],
correct: 1,
explanation: "Poor early interaction affects socialisation."
},

{
q: "Case: Adults continue to adapt to new social roles like parent or employee.\nThis shows socialisation is",
a: [
"Limited to childhood",
"Biological only",
"Life-long",
"School-based only"
],
correct: 2,
explanation: "Socialisation continues throughout life."
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
