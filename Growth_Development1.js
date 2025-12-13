/* ============================================================
        MASTER JS TEMPLATE — CREATE ALL FUTURE TESTS USING THIS
===============================================================
    ⚠️ VERY IMPORTANT — READ BEFORE EDITING ⚠️

    ✔ You are allowed to change ONLY the following:
      1) TEST_TITLE
      2) SUBTITLE_TEXT
      3) TOPIC_NAME
      4) TIME_LIMIT_MINUTES
      5) quizData (all questions)

    ❌ DO NOT change anything outside the ALLOWED SECTION.
    ❌ DO NOT rename variables.
    ❌ DO NOT change array structure.

===============================================================
   START OF ALLOWED SECTION — YOU MAY EDIT BELOW THIS LINE
============================================================ */

// Test Title
const TEST_TITLE = "Growth & Development + Learning Concept — Test 1";

// Subtitle
const SUBTITLE_TEXT = "CTET-style MCQ Test (20 Questions)";

// Topic name (appears above questions)
const TOPIC_NAME = "Growth & Development and Learning Concept";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS (Test Code 1 inserted here)
const quizData = [

  {
    q:" Development refers to changes related to _______.",
    a:["Physical, mental and emotional state","Only physical growth","Height and weight","Intelligence only"],
    correct:0,
    explanation:"Development includes physical, emotional, cognitive and social changes."
  },

  {
    q:" Growth stops when _______.",
    a:["We reach adulthood","We die","We achieve maturity","All of these"],
    correct:2,
    explanation:"Growth is mainly physical and stops after maturity."
  },

  {
    q:" Development is a ______ process.",
    a:["Continuous","Temporary","Reversible","Quantitative"],
    correct:0,
    explanation:"Development continues from conception to death."
  },

  {
    q:" Growth is mainly ______.",
    a:["Qualitative","Quantitative","Emotional","Cognitive"],
    correct:1,
    explanation:"Growth involves measurable changes like height and weight."
  },

  {
    q:" Cognitive development means ______.",
    a:["Ability to understand, think and reason","Physical changes","Emotional changes","Language changes"],
    correct:0,
    explanation:"Cognitive development relates to thinking, understanding and reasoning."
  },

  {
    q:" Emotional development involves ______.",
    a:["Physical ability","Control and expression of emotions","Learning to read","Growth of height"],
    correct:1,
    explanation:"It deals with understanding and expressing emotions."
  },

  {
    q:" Social development involves ______.",
    a:["Building relationships and cooperation","Thinking skills","Emotional control","Only physical health"],
    correct:0,
    explanation:"It relates to interaction and adjustment with society."
  },

  {
    q:" Growth refers to ______.",
    a:["Increase in weight, height and size","Moral progress","Development of thinking","None"],
    correct:0,
    explanation:"Growth is physical and measurable."
  },

  {
    q:" Development is influenced by ______.",
    a:["Heredity and environment","Luck","School only","Age only"],
    correct:0,
    explanation:"Both heredity and environment work together in development."
  },

  {
    q:" Learning is defined as ______.",
    a:["Temporary change in behaviour","Permanent change in behaviour due to experience","Growth of knowledge only","Physical process"],
    correct:1,
    explanation:"Learning results in relatively permanent behavioural change."
  },

  {
    q:" According to Crow and Crow, learning involves ______.",
    a:["Acquisition of habits, knowledge and attitudes","Physical exercise","Emotions only","Motor skills only"],
    correct:0,
    explanation:"Learning develops habits, skills, attitudes and knowledge."
  },

  {
    q:" Growth and development are ______.",
    a:["Independent","Reversible","Interrelated","Temporary"],
    correct:2,
    explanation:"Growth affects development and development affects growth."
  },

  {
    q:" Development continues from ______.",
    a:["Birth to adulthood","Conception to maturity","School age to adulthood","Teenage only"],
    correct:1,
    explanation:"Development begins at conception and continues throughout life."
  },

  {
    q:" The main factor affecting growth is ______.",
    a:["Heredity","Experience","Motivation","Interest"],
    correct:0,
    explanation:"Heredity sets growth limits like height and body structure."
  },

  {
    q:" Development includes both ______.",
    a:["Quantitative and qualitative changes","Permanent and temporary changes","Physical and random changes","Mental and spiritual changes"],
    correct:0,
    explanation:"Development has measurable and behavioural changes."
  },

  {
    q:" The infancy stage lasts from ______.",
    a:["Birth to 2 years","2 to 6 years","6 to 12 years","12 to 18 years"],
    correct:0,
    explanation:"Infancy refers to the first two years of life."
  },

  {
    q:" Late childhood stage is also known as ______.",
    a:["Play age","Latency stage","Learning stage","Sensitive stage"],
    correct:1,
    explanation:"According to Freud, late childhood is the latency stage."
  },

  {
    q:" Adolescence refers to ______.",
    a:["Transition between childhood and adulthood","Old age","Infancy","Retirement"],
    correct:0,
    explanation:"Adolescence is a period of rapid physical and emotional change."
  },

  {
    q:" Early stimulation encourages ______.",
    a:["Development of heredity potentials","Only emotional control","Physical exercise","None"],
    correct:0,
    explanation:"Proper stimulation helps hereditary potentials to unfold."
  },

  {
    q:" Development is affected by ______.",
    a:["Social, cultural and environmental factors","Temperature","Luck","None"],
    correct:0,
    explanation:"Environment plays a major role in shaping development."
  }

];

/* ============================================================
      END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
===============================================================
    ⛔ STOP! DO NOT CHANGE ANY CODE BELOW THIS POINT ⛔
    ⛔ COPY EVERYTHING EXACTLY AS IT IS ⛔
    ⛔ THIS IS THE QUIZ ENGINE + SHUFFLING SYSTEM ⛔
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
