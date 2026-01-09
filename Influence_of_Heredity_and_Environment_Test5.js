/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 5
   SOURCE: CHAPTER EXERCISE + PREVIOUS YEAR QUESTIONS
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Influence of Heredity and Environment – Test 5 (Book + PYQs)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Influence of Heredity and Environment";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Heredity is considered as a ______ social structure.",
a: [
"Secondary",
"Dynamic",
"Static",
"Primary"
],
correct: 2,
explanation: "Heredity is fixed and does not change, hence it is static."
},

{
q: "Who said that heredity is what one gets from his ancestral stock through his parents?",
a: [
"Jean Piaget",
"Pavlov",
"Bandura",
"Peterson"
],
correct: 3,
explanation: "Peterson defined heredity as ancestral traits received through parents."
},

{
q: "Which one of the following is correctly matched?",
a: [
"Physical attributes – Environment",
"Development of personality – Heredity",
"Intellectual superiority of a particular race – Environment",
"Mental growth of children – Heredity"
],
correct: 3,
explanation: "Mental growth has a strong hereditary base."
},

{
q: "Which of the following refers to the questions related to a child, abilities and its proper development?",
a: [
"Heredity factors",
"Environmental factors",
"Both of the above",
"None of the above"
],
correct: 2,
explanation: "Both heredity and environment influence child development."
},

{
q: "Which of the following is not the law of heredity?",
a: [
"Similarity",
"Variation",
"Regression",
"Motivation"
],
correct: 3,
explanation: "Motivation is not a law of heredity."
},

{
q: "Who said that intelligent parents will have intelligent children while dull parents will have dull children?",
a: [
"Bandura",
"Pavlov",
"H.H. Goddard",
"Peterson"
],
correct: 2,
explanation: "This statement was given by H.H. Goddard."
},

{
q: "Which thinker defined environment as anything immediately surrounding an object and exerting a direct influence on it?",
a: [
"Ann Nastase",
"Holland and Douglas",
"P. Gisbert",
"E.J. Ross"
],
correct: 2,
explanation: "Gisbert defined environment as immediate surroundings."
},

{
q: "To which of the following statements can the role of heredity and environment be linked?",
a: [
"Role of environment is static while heredity changes",
"Behavioural theories are related to heredity",
"Comparative effects of heredity and environment differ in many areas of human development",
"None of the above"
],
correct: 2,
explanation: "Both heredity and environment influence development differently."
},

{
q: "Which among the following forms of development is influenced by heredity and environment?",
a: [
"Social development",
"Emotional development",
"Mental development",
"All of the above"
],
correct: 3,
explanation: "All areas of development are influenced by both."
},

{
q: "Rita has got a nose similar to her father. It is due to",
a: [
"Biological heredity",
"Societal heredity",
"Behavioural heredity",
"Educational heredity"
],
correct: 0,
explanation: "Physical traits are inherited biologically."
},

{
q: "Heredity determines which of the following?",
a: [
"Maturation",
"Growth",
"Skill development",
"None of the above"
],
correct: 0,
explanation: "Maturation is biologically determined."
},

{
q: "Which of the following is an environmental factor?",
a: [
"Family",
"Pre-disposition to certain diseases like diabetes",
"Colour of eyes",
"Blood type"
],
correct: 0,
explanation: "Family is part of environment."
},

{
q: "Which of the following is predominantly a heredity related factor?",
a: [
"Participation in social activities",
"Attitude towards peer group",
"Thinking pattern",
"Colour of the eyes"
],
correct: 3,
explanation: "Eye colour is genetically inherited."
},

{
q: "Which of the following is incorrect regarding heredity?",
a: [
"Two siblings will have identical physical characteristics due to heredity",
"Heredity determines maturation which affects learning",
"Heredity determines temperament",
"Inborn talents are strongly related to heredity"
],
correct: 0,
explanation: "Siblings are similar but not identical."
},

{
q: "The physical characteristics of a child is influenced by",
a: [
"Father's DNA",
"Mother's DNA",
"DNA of both mother and father",
"Environment"
],
correct: 2,
explanation: "Both parents contribute genetically."
},

{
q: "Which of the following thinkers believed that the mind starts like a blank slate and knowledge is determined by experiences?",
a: [
"Socrates",
"Locke",
"Plato",
"None of the above"
],
correct: 1,
explanation: "John Locke proposed the tabula rasa theory."
},

{
q: "One boy out of identical orphan twin brothers is adopted by a socio-economically rich family while the other by a poor family. After one year, which of the following may be most likely observed?",
a: [
"The boy adopted by the poor family will score better in academics",
"The boy adopted by the rich family will have a much higher IQ",
"The boy adopted by the rich family will be more healthy",
"Both the boys will develop equally"
],
correct: 2,
explanation: "Better environment supports health and development."
},

{
q: "A child learns properly in an environment which",
a: [
"Gives due weightage to emotions and experiences of a child",
"Gives ample space to play",
"Promotes strict discipline",
"Gives opportunities to make friends"
],
correct: 0,
explanation: "Emotional needs are essential for learning."
},

{
q: "Environmental factors that shape development include all of the following except",
a: [
"Quality of nutrition",
"Culture",
"Quality of education",
"Physique"
],
correct: 3,
explanation: "Physique is mainly hereditary."
},

{
q: "Which of the following statements supports the role of environments in the development of a child?",
a: [
"Some students quickly process information while others do not",
"There has been a steady increase in students’ average performance on IQ tests",
"Environmental influences have little value",
"Heredity and environment are inseparably interwoven"
],
correct: 3,
explanation: "Development is shaped by interaction of heredity and environment."
},

{
q: "Which one of the following statements is true regarding role of heredity and environment in human development?",
a: [
"The relative effects vary in different areas",
"Government policy is based on nature",
"Environment is fixed",
"Behaviourism is based on nature"
],
correct: 0,
explanation: "Different aspects are influenced differently."
},

{
q: "In the context of nature-nurture debate, which one of the following statements seem appropriate?",
a: [
"A child is like a blank slate",
"Children are genetically predisposed irrespective of environment",
"Environmental influence is negligible",
"Heredity and environment both influence development"
],
correct: 3,
explanation: "Both nature and nurture play roles."
},

{
q: "Do children acquire language because they are genetically predisposed or because parents teach them?",
a: [
"Continuous or discontinuous development",
"Influence of cognition",
"Nature-nurture debate",
"Development as multi-factor ability"
],
correct: 2,
explanation: "This question highlights the nature–nurture debate."
},

{
q: "Environmental factors do not play any role in shaping an individual since growth is genetically determined. This statement is",
a: [
"Correct",
"Incorrect because environment contributes little",
"Incorrect because environment has major influence",
"Correct because genes are strong"
],
correct: 2,
explanation: "Research proves environment has major influence."
},

{
q: "Which of the following statements about the role of heredity and environment in human development is correct?",
a: [
"Only heredity causes individual differences",
"Environment totally shapes development",
"Neither heredity nor environment influence development",
"Heredity and environment influence development in a complex interplay"
],
correct: 3,
explanation: "Development occurs through interaction of both."
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
