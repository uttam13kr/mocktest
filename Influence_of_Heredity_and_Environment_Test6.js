/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 6
   CASE-BASED (FROM PYQs)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: ENGLISH ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Influence of Heredity and Environment – Test 6 (Case Based)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Influence of Heredity and Environment";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "Case: Two children are twins with similar genetic makeup. One grows up in a stimulating home environment while the other grows up in a deprived environment.\n\nWhat is most likely to be observed?",
a: [
"Both will show identical development",
"The child in better environment will show better cognitive development",
"The deprived child will show higher intelligence",
"Environment has no role in development"
],
correct: 1,
explanation: "A stimulating environment helps inherited potential to develop."
},

{
q: "Case: Ramesh comes from a family with good genetic health but lives in unhygienic surroundings and suffers frequent illness.\n\nWhich factor limits his development?",
a: [
"Heredity",
"Physical environment",
"Intelligence",
"Motivation"
],
correct: 1,
explanation: "Poor physical environment affects health and development."
},

{
q: "Case: A child speaks fluent English because he is raised in an English-speaking family.\n\nThis development is mainly due to",
a: [
"Heredity",
"Biological maturation",
"Environment",
"Intelligence"
],
correct: 2,
explanation: "Language is acquired from environment."
},

{
q: "Case: A child with high genetic potential fails to perform well due to lack of encouragement.\n\nThis shows that",
a: [
"Heredity alone is sufficient",
"Environment limits inherited abilities",
"Genes change with time",
"Development is accidental"
],
correct: 1,
explanation: "Without support, potential cannot be fully developed."
},

{
q: "Case: Two students of the same age differ greatly in height.\n\nThis difference is mainly due to",
a: [
"School education",
"Heredity and nutrition",
"Peer influence",
"Teaching methods"
],
correct: 1,
explanation: "Height depends on heredity supported by nutrition."
},

{
q: "Case: A child raised in a fearful home shows anxiety and low confidence.\n\nWhich aspect of development is most affected?",
a: [
"Physical",
"Emotional",
"Language",
"Moral"
],
correct: 1,
explanation: "Emotional development is shaped by home environment."
},

{
q: "Case: A teacher notices that children learn concepts at different speeds.\n\nThis indicates",
a: [
"Development is uniform",
"Individual differences in development",
"Teaching is ineffective",
"Learning depends only on age"
],
correct: 1,
explanation: "Children differ in their rate of development."
},

{
q: "Case: A malnourished child finds it difficult to concentrate in class.\n\nWhich factor is affecting learning?",
a: [
"Heredity",
"Nutrition",
"Peer pressure",
"Curriculum"
],
correct: 1,
explanation: "Nutrition is essential for attention and learning."
},

{
q: "Case: A child inherits musical talent but becomes skilled only after training.\n\nThis reflects",
a: [
"Heredity alone",
"Environment alone",
"Interaction of heredity and environment",
"Accidental development"
],
correct: 2,
explanation: "Talent needs practice and environment to develop."
},

{
q: "Case: Children growing up in culturally rich environments show better language skills.\n\nThis supports the role of",
a: [
"Biological factors",
"Environmental stimulation",
"Genetic dominance",
"Maturation only"
],
correct: 1,
explanation: "Cultural exposure enhances language development."
},

{
q: "Case: A child cannot grasp abstract ideas because he has not reached cognitive readiness.\n\nThis limitation is related to",
a: [
"Teaching method",
"Maturation",
"Environment only",
"Motivation"
],
correct: 1,
explanation: "Learning depends on developmental readiness."
},

{
q: "Case: Identical twins reared in different homes show different personality traits.\n\nThis highlights",
a: [
"Dominance of heredity",
"Negligible role of environment",
"Role of environment in personality",
"Random development"
],
correct: 2,
explanation: "Personality is shaped by environment."
},

{
q: "Case: A supportive teacher encourages students and improves their performance.\n\nThis shows the importance of",
a: [
"Heredity",
"School environment",
"Genetic factors",
"Age"
],
correct: 1,
explanation: "Positive school environment supports learning."
},

{
q: "Case: A child born with weak eyesight struggles academically without support.\n\nThis shows that",
a: [
"Physical limitations affect learning",
"Environment has no role",
"Intelligence is low",
"Learning is impossible"
],
correct: 0,
explanation: "Physical health affects learning ability."
},

{
q: "Case: Children from emotionally secure families show better adjustment.\n\nWhich area of development is supported?",
a: [
"Social and emotional",
"Physical only",
"Moral only",
"Cognitive only"
],
correct: 0,
explanation: "Emotional security improves social adjustment."
},

{
q: "Case: A child imitates aggressive behaviour seen at home.\n\nThis behaviour develops mainly through",
a: [
"Heredity",
"Observation and environment",
"Maturation",
"Biological instinct"
],
correct: 1,
explanation: "Children learn behaviour by observing environment."
},

{
q: "Case: A child raised in a democratic family shows independence and confidence.\n\nThis reflects the role of",
a: [
"Genes",
"Parenting style",
"Age",
"Biological maturity"
],
correct: 1,
explanation: "Parenting style shapes personality."
},

{
q: "Case: Despite average heredity, a child excels due to rich learning experiences.\n\nThis indicates",
a: [
"Heredity is everything",
"Environment enhances ability",
"Genes change permanently",
"Learning is accidental"
],
correct: 1,
explanation: "Good environment can enhance performance."
},

{
q: "Case: A child exposed to multiple languages from early age learns them easily.\n\nThis is due to",
a: [
"Heredity",
"Early environmental exposure",
"Physical maturity",
"School discipline"
],
correct: 1,
explanation: "Early exposure supports language learning."
},

{
q: "Case: A child raised without social interaction shows poor communication skills.\n\nThis shows importance of",
a: [
"Nutrition",
"Social environment",
"Heredity",
"Maturation"
],
correct: 1,
explanation: "Social interaction is necessary for communication skills."
},

{
q: "Case: A child’s moral values reflect family beliefs.\n\nWhich factor is responsible?",
a: [
"Genetic inheritance",
"Social environment",
"Biological maturity",
"Age"
],
correct: 1,
explanation: "Moral values are learned socially."
},

{
q: "Case: A physically strong child lacks emotional control.\n\nThis shows that",
a: [
"Development is uniform",
"All areas develop equally",
"Different areas develop at different rates",
"Physical development ensures emotional strength"
],
correct: 2,
explanation: "Different domains of development grow at different rates."
},

{
q: "Case: A child improves academically after shifting to a better school.\n\nThis highlights",
a: [
"Genetic change",
"Environmental influence",
"Age factor",
"Physical growth"
],
correct: 1,
explanation: "School environment affects learning."
},

{
q: "Case: Children from deprived backgrounds show delayed cognitive development.\n\nThis mainly indicates lack of",
a: [
"Genetic ability",
"Environmental stimulation",
"Biological growth",
"Age"
],
correct: 1,
explanation: "Cognitive growth needs stimulation."
},

{
q: "Case: A child’s development improves after receiving emotional support.\n\nThis supports the view that",
a: [
"Emotions influence learning",
"Heredity dominates development",
"Environment has no role",
"Development is fixed"
],
correct: 0,
explanation: "Emotional support enhances learning and development."
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
