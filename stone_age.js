/*  
===========================================================
       MASTER TEST TEMPLATE — READ BEFORE EDITING
===========================================================

This JavaScript file is the ONLY format you should use to 
create new tests for the online mock test system.

ANYONE USING THIS FILE MUST FOLLOW THESE RULES:

-----------------------------------------------------------
WHAT YOU ARE ALLOWED TO CHANGE (✔ ALLOWED)
-----------------------------------------------------------
1. Test Title → change inside TEST_TITLE variable
2. Time limit → change TIME_LIMIT_MINUTES value
3. All questions inside quizData array
4. Number of questions (any amount: 5, 10, 25, 50, 100)
5. Explanation text for each question

-----------------------------------------------------------
WHAT YOU MUST NOT CHANGE (❌ DO NOT TOUCH)
-----------------------------------------------------------
1. Variable names: quizData, TIME_LIMIT_MINUTES
2. Keys inside questions: q, a, correct, explanation
3. The quiz engine code at the bottom
4. Function names (renderQuestion, submitQuiz, showReview)
5. Structure of answer array: ["A", "B", "C", "D"]

Breaking these rules will break the test system.

===========================================================
              CHANGE TEST SETTINGS BELOW
===========================================================
*/

// ✔ CHANGE TEST TITLE
const TEST_TITLE = "Sample CTET CDP Test";

// ✔ CHANGE TIME LIMIT (in minutes)
const TIME_LIMIT_MINUTES = 30;

// ✔ WRITE ALL QUESTIONS INSIDE THIS ARRAY
// -----------------------------------------------------
// FORMAT (do not change keys):
// {
//   q: "Write question here",
//   a: ["Option A", "Option B", "Option C", "Option D"],
//   correct: 1,  // correct option index (0=A, 1=B, 2=C, 3=D)
//   explanation: "Explain WHY this option is correct."
// }
// -----------------------------------------------------

const quizData = [

  // ===== SAMPLE QUESTIONS (DELETE & WRITE YOUR OWN) =====

  {
    q: "1. Learning is defined as:",
    a: [
      "Temporary behaviour change",
      "Permanent behaviour change due to experience",
      "Change caused by biological growth only",
      "Sudden change without practice"
    ],
    correct: 1,
    explanation: "Learning is a lasting change that occurs through experience, not biological maturation."
  },

  {
    q: "2. Which domain includes values and attitudes?",
    a: ["Cognitive", "Psychomotor", "Affective", "Motor"],
    correct: 2,
    explanation: "Affective domain covers emotions, values, motivation and attitudes."
  }

  // Add more questions in same format...

];

/*
===========================================================
      DO NOT MODIFY ANY CODE BELOW THIS LINE
      (Quiz Engine — Must remain exactly the same)
===========================================================
*/

let current = 0;
const total = quizData.length;
let answers = new Array(total).fill(null);
let totalSeconds = TIME_LIMIT_MINUTES * 60;
let timerInterval = null;

const qEl = document.getElementById('question');
const optsEl = document.getElementById('options');
const qProgress = document.getElementById('qProgress');
const subtle = document.getElementById('subtle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const timerDisplay = document.getElementById('timer');
const resultArea = document.getElementById('resultArea');
const reviewArea = document.getElementById('reviewArea');

document.getElementById("testTitle").innerText = TEST_TITLE;

function renderQuestion(index){
  current = index;
  const item = quizData[index];
  qProgress.textContent = `Question ${index+1} of ${total}`;
  subtle.textContent = TEST_TITLE;
  qEl.textContent = item.q;

  optsEl.innerHTML = '';
  item.a.forEach((text,i)=>{

    const id = `opt-${index}-${i}`;
    const wrap = document.createElement('label');
    wrap.className = 'opt';
    wrap.innerHTML = `
      <input type="radio" name="option" id="${id}" value="${i}" ${answers[index]===i ? 'checked' : ''}>
      <div style="flex:1"><strong>${String.fromCharCode(65+i)}.</strong>
      <span style="margin-left:8px">${text}</span></div>
    `;

    wrap.addEventListener('click',()=>{
      answers[index]=i;
      if(index < total-1) renderQuestion(index+1);
      else showEndPrompt();
    });

    optsEl.appendChild(wrap);
  });

  prevBtn.disabled = index===0;
  nextBtn.disabled = index===total-1;
  submitBtn.style.display = index===total-1 ? 'inline-block' : 'none';
}

prevBtn.addEventListener('click',()=>current>0 && renderQuestion(current-1));
nextBtn.addEventListener('click',()=>current<total-1 && renderQuestion(current+1));
submitBtn.addEventListener('click', submitQuiz);

function showEndPrompt(){
  resultArea.innerHTML = `
    <div class="result">
      <strong>You are at the last question.</strong><br>
      <button id="finishNow">Submit Test</button>
    </div>`;
  document.getElementById('finishNow').addEventListener('click', submitQuiz);
}

function startTimer(){
  updateTimer();
  timerInterval=setInterval(()=>{
    totalSeconds--;
    if(totalSeconds<0){
      clearInterval(timerInterval);
      submitQuiz(true);
    }
    updateTimer();
  },1000);
}

function updateTimer(){
  const m=Math.floor(totalSeconds/60);
  const s=totalSeconds%60;
  timerDisplay.textContent =
    `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function submitQuiz(auto=false){
  if(timerInterval) clearInterval(timerInterval);

  let correctAns=0;
  for(let i=0;i<total;i++){
    if(answers[i]===quizData[i].correct) correctAns++;
  }

  const incorrect = total - correctAns;
  const percent = ((correctAns/total)*100).toFixed(2);

  resultArea.innerHTML=`
    <div class="result">
      <h3>${auto ? "Time Up — Auto Submitted" : "Test Submitted"}</h3>
      <p>Correct: ${correctAns}</p>
      <p>Incorrect: ${incorrect}</p>
      <p><strong>Score: ${percent}%</strong></p>
      <button id="showReviewBtn">Show Detailed Review</button>
    </div>`;

  document.getElementById('showReviewBtn').addEventListener('click', showReview);
}

function showReview(){
  reviewArea.innerHTML='<h3>Detailed Review</h3>';

  quizData.forEach((item,i)=>{
    const user = answers[i];
    const correct = item.correct;

    const div = document.createElement('div');
    div.className='item';
    div.style.background = (user===correct ? 'var(--correct)' : 'var(--incorrect)');

    div.innerHTML = `
      <strong>Q${i+1}:</strong> ${item.q}<br>
      Your answer: ${user!==null ? item.a[user] : "Not answered"}<br>
      Correct answer: <strong>${item.a[correct]}</strong><br>
      <em>Explanation:</em> ${item.explanation}<br><br>
    `;
    reviewArea.appendChild(div);
  })
}

renderQuestion(0);
startTimer();
