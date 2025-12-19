/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 6 (CASE STUDY UPDATED)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Principles of Child Development – Test 6 (Case Study)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Case: A teacher observes that Riya first crawls, then stands with support, then walks independently and later starts running.\n\nWhat principle does this case show?",
a: [
"Development is random",
"Development follows a sequential pattern",
"Development is unpredictable",
"Development depends only on teaching"
],
correct: 1,
explanation: "Riya’s milestones are in a fixed, natural sequence."
},

{
q: "Case: Riya first learned to hold her head, then gained control over arms and legs, and later started walking.\n\nWhich development principle is shown here?",
a: [
"General to specific",
"Proximodistal",
"Cephalocaudal",
"Uniform development"
],
correct: 2,
explanation: "Cephalocaudal means development from head to toe."
},

{
q: "Case: Arjun is physically strong but emotionally weak. He cries easily and cannot handle peer pressure.\n\nWhat does this situation show?",
a: [
"Development in all areas is equal",
"Development happens only physically",
"Different areas of development develop at different rates but are interrelated",
"Development stops in childhood"
],
correct: 2,
explanation: "Different areas develop at different speeds."
},

{
q: "Case: Arjun is physically strong but emotionally weak and gets upset easily.\n\nWhich area of development requires support?",
a: [
"Mental development",
"Emotional development",
"Physical development",
"Language development"
],
correct: 1,
explanation: "Arjun is emotionally weak, so he needs emotional support."
},

{
q: "Case: Meena belongs to a poor family but lives in a loving and supportive home. Her parents encourage her learning. She performs well in studies.\n\nWhat does this indicate?",
a: [
"Economic condition is the only factor",
"Environment and emotional support strongly influence development",
"Poor children cannot succeed",
"Development is purely genetic"
],
correct: 1,
explanation: "Supportive environment promotes healthy development."
},

{
q: "Case: Meena lives in poverty but her parents support her emotionally and motivate her.\n\nWhich factor influenced her development most?",
a: [
"Only heredity",
"Only nutrition",
"Positive family environment",
"Punishment"
],
correct: 2,
explanation: "A loving family environment boosts development."
},

{
q: "Case: A teacher notices some students learn quickly while others take time but eventually learn.\n\nWhat does this situation reflect?",
a: [
"Development is same for all",
"Development happens at different rates for different children",
"Development cannot be measured",
"Development is accidental"
],
correct: 1,
explanation: "Children learn at different speeds."
},

{
q: "Case: A teacher observes different learning speeds in her class.\n\nWhat should she do?",
a: [
"Compare slow learners with fast learners",
"Punish slow learners",
"Provide individual attention and support",
"Ignore differences"
],
correct: 2,
explanation: "Teachers must respect individual differences."
},

{
q: "Case: Rahul copies his elder brother’s way of speaking, behaving, eating and dressing.\n\nThis indicates which learning principle?",
a: [
"Trial and error learning",
"Observational or social learning",
"Random learning",
"Mechanical learning"
],
correct: 1,
explanation: "Rahul learns by observing and imitating."
},

{
q: "Case: Rahul imitates everything his elder brother does.\n\nWhich psychologist explains this behaviour best?",
a: [
"Gesell",
"Piaget",
"Bandura",
"Freud"
],
correct: 2,
explanation: "Bandura gave social learning theory."
},

{
q: "Case: Kavya can hold a big ball easily but struggles to grip a pencil.\n\nWhich principle explains this?",
a: [
"Cephalocaudal development",
"General to specific development",
"Uniform development",
"Emotional development"
],
correct: 1,
explanation: "General skills develop before fine skills."
},

{
q: "Case: Kavya controls big muscles but not fine muscles like pencil grip yet.\n\nWhat does this show?",
a: [
"Development happens suddenly",
"Development moves from complex to simple",
"Development moves from simple to complex",
"Development has no rule"
],
correct: 2,
explanation: "Complex skills develop later."
},

{
q: "Case: Two children of same age—Rohan learns fast, Mohan takes time but answers correctly later.\n\nWhat does this indicate?",
a: [
"Only intelligent students learn",
"Slow learners cannot learn",
"There are individual differences",
"Both are weak"
],
correct: 2,
explanation: "Each child has a unique development pace."
},

{
q: "Case: Rohan learns fast, Mohan learns slowly but correctly.\n\nWhat should teacher do?",
a: [
"Force same speed learning",
"Label Mohan weak",
"Support both according to need",
"Ignore Mohan"
],
correct: 2,
explanation: "Teaching must match child needs."
},

{
q: "Case: A child lives in a polluted and crowded area. He remains tired, irritated and cannot focus in class.\n\nWhich factor affects his development?",
a: [
"Heredity",
"Physical environment",
"Intelligence",
"Only emotions"
],
correct: 1,
explanation: "Physical surroundings affect growth."
},

{
q: "Case: A child’s health and attention are affected because of poor living conditions.\n\nThis highlights importance of",
a: [
"Only school",
"Punishment",
"Healthy supportive environment",
"Strict discipline"
],
correct: 2,
explanation: "Healthy environment supports development."
},

{
q: "Case: Anika is emotionally secure, confident, friendly and performs well academically.\n\nWhat does this show?",
a: [
"Emotions have no role in learning",
"Only parents shape development",
"Emotional stability supports social and academic development",
"Development is random"
],
correct: 2,
explanation: "Emotions influence learning."
},

{
q: "Case: Anika is emotionally secure and socially confident which improves learning.\n\nThis reflects which principle?",
a: [
"Development areas are independent",
"Development areas are interrelated",
"Development stops after childhood",
"Development is only physical"
],
correct: 1,
explanation: "All domains influence each other."
},

{
q: "Case: A teacher allows students to learn through play and activities instead of rote learning.\n\nWhat principle is followed?",
a: [
"Learning should be forced",
"Children learn best under fear",
"Children learn better through meaningful experiences",
"Learning must be mechanical"
],
correct: 2,
explanation: "Play-based learning supports natural development."
},

{
q: "Case: A teacher promotes play learning and free exploration.\n\nThis mainly supports",
a: [
"Only physical development",
"Holistic development",
"Only emotional development",
"Only language development"
],
correct: 1,
explanation: "It supports all development areas."
},

{
q: "Case: A child fails in abstract math because he is still at a lower cognitive stage.\n\nLearning here is limited by",
a: [
"Punishment",
"Maturation and readiness",
"Age only",
"Environment only"
],
correct: 1,
explanation: "Learning needs developmental readiness."
},

{
q: "Case: A child cannot understand higher concepts because of cognitive immaturity.\n\nWhat should teacher do?",
a: [
"Force abstract learning",
"Punish",
"Use simple concrete examples",
"Ignore"
],
correct: 2,
explanation: "Teaching should match development stage."
},

{
q: "Case: A malnourished child is weak, tired and unable to concentrate in class.\n\nWhat does this show?",
a: [
"Physical health does not matter",
"Nutrition affects only height",
"Physical health affects learning and behaviour",
"Learning depends only on IQ"
],
correct: 2,
explanation: "Nutrition directly impacts learning."
},

{
q: "Case: A weak child struggles in class due to poor nutrition.\n\nTeachers must ensure",
a: [
"Punishment",
"Comparison",
"Supportive and caring environment",
"Ignoring the child"
],
correct: 2,
explanation: "Care and support improve development."
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
