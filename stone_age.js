/* ============================================================
   STONE AGE TEST — CTET 2026
   This file must only contain:
   TEST_TITLE, TIME_LIMIT_MINUTES, quizData, and display settings.
   Do NOT modify anything else.
============================================================ */

// ✔ CHANGE TEST TITLE
const TEST_TITLE = "The Earliest People – Stone Age (CTET 2026)";

// ✔ CHANGE SUBTITLE / TOPIC NAME (Optional)
const SUBTITLE_TEXT = "Stone Age – CTET CDP 2026 Topic";
const TOPIC_NAME = "The Earliest People – Stone Age";

// ✔ CHANGE TIME LIMIT
const TIME_LIMIT_MINUTES = 30;

/*  
===============================================================
   REQUIRED: Update the master HTML before loading questions
===============================================================
*/
document.getElementById("title").innerText = TEST_TITLE;
document.getElementById("subtitle").innerText = SUBTITLE_TEXT;
document.getElementById("topicName").innerText = TOPIC_NAME;

/*  
===============================================================
   ✔ 35 QUESTIONS START HERE
===============================================================
*/
const quizData = [

  {
    q: "1. The earliest phase of human history is called:",
    a: ["Mesolithic Age", "Neolithic Age", "Paleolithic Age", "Copper Age"],
    correct: 2,
    explanation: "Paleolithic Age is the oldest and longest Stone Age period."
  },

  {
    q: "2. Paleolithic people mainly lived in:",
    a: ["Brick houses", "Caves and rock shelters", "Mud houses", "Pit houses"],
    correct: 1,
    explanation: "Paleolithic humans lived in caves such as Bhimbetka."
  },

  {
    q: "3. The most important source of food during Paleolithic Age was:",
    a: ["Agriculture", "Fishing only", "Hunting and gathering", "Animal herding"],
    correct: 2,
    explanation: "They survived by hunting animals and gathering plants."
  },

  {
    q: "4. Which site is famous for rock paintings?",
    a: ["Daojali Hading", "Bhimbetka", "Mehrgarh", "Burzahom"],
    correct: 1,
    explanation: "Bhimbetka contains early rock paintings depicting hunting scenes."
  },

  {
    q: "5. The biggest discovery of Paleolithic Age was:",
    a: ["Wheel", "Fire", "Metal tools", "Pottery"],
    correct: 1,
    explanation: "Control of fire changed human life dramatically."
  },

  {
    q: "6. Which type of tools belong to Paleolithic Age?",
    a: ["Microliths", "Hand axes and choppers", "Polished tools", "Iron weapons"],
    correct: 1,
    explanation: "Paleolithic tools were large, heavy and crude."
  },

  {
    q: "7. Mesolithic Age is also known as:",
    a: ["New Stone Age", "Middle Stone Age", "Old Stone Age", "Metal Age"],
    correct: 1,
    explanation: "Mesolithic is the transitional phase between Paleolithic and Neolithic."
  },

  {
    q: "8. The characteristic tools of Mesolithic Age are:",
    a: ["Copper tools", "Microliths", "Iron tools", "Heavy stone axes"],
    correct: 1,
    explanation: "Microliths are tiny, sharp stone tools used in hunting."
  },

  {
    q: "9. The Mesolithic Age began due to:",
    a: ["Heavy rainfall", "Warming climate after Ice Age", "Invention of fire", "Creation of metal tools"],
    correct: 1,
    explanation: "Climate changes created new plants and animals."
  },

  {
    q: "10. In Mesolithic Age, humans began:",
    a: ["Pure farming", "Animal domestication in early form", "Metal forging", "City building"],
    correct: 1,
    explanation: "Early domestication of animals began in this period."
  },

  {
    q: "11. The major change in Neolithic Age was:",
    a: ["Writing books", "Beginning of agriculture", "Creating bronze tools", "Travel by sea"],
    correct: 1,
    explanation: "Neolithic Revolution marks the shift to farming."
  },

  {
    q: "12. Which Neolithic site gives earliest rice evidence?",
    a: ["Burzahom", "Chirand", "Koldihwa", "Mehrgarh"],
    correct: 2,
    explanation: "Koldihwa (UP) shows earliest rice cultivation."
  },

  {
    q: "13. The first domesticated animal was:",
    a: ["Cow", "Goat", "Dog", "Sheep"],
    correct: 2,
    explanation: "Dog was the first animal domesticated by humans."
  },

  {
    q: "14. Neolithic tools were different because they were:",
    a: ["Rough and crude", "Polished and ground", "Made of iron", "Made of copper"],
    correct: 1,
    explanation: "Polished tools increased efficiency in farming."
  },

  {
    q: "15. Pottery started mainly because:",
    a: ["People enjoyed decorating", "Need to store grains and food", "Metals were unavailable", "For religious rituals"],
    correct: 1,
    explanation: "Agriculture created a need for storage."
  },

  {
    q: "16. Why did humans settle permanently in Neolithic Age?",
    a: ["Climate became cold", "Farming required staying in one place", "More wild animals existed", "Fire became common"],
    correct: 1,
    explanation: "Farming made permanent settlements necessary."
  },

  {
    q: "17. Which site is known for pit-houses?",
    a: ["Mehrgarh", "Burzahom", "Koldihwa", "Chirand"],
    correct: 1,
    explanation: "Burzahom in Kashmir has pit-dwellings."
  },

  {
    q: "18. Mehrgarh is famous for:",
    a: ["Metal tools", "Early farming and herding", "Stone temples", "Rock paintings"],
    correct: 1,
    explanation: "Mehrgarh shows early wheat-barley farming."
  },

  {
    q: "19. Chirand (Bihar) is known for:",
    a: ["Bone tools", "Iron furnaces", "Brick houses", "Pottery kilns"],
    correct: 0,
    explanation: "Many bone tools were found at Chirand."
  },

  {
    q: "20. Daojali Hading is important because:",
    a: ["Rice fields", "Jadeite stone indicating China trade", "Pit houses", "Iron tools"],
    correct: 1,
    explanation: "Jadeite stones prove long-distance trade."
  },

  {
    q: "21. Utnur (South India) is famous for:",
    a: ["Wheat fields", "Large ash mounds", "Bronze statues", "Copper tools"],
    correct: 1,
    explanation: "Ash mounds come from cattle dung burning."
  },

  {
    q: "22. Which tool belongs to Neolithic Age?",
    a: ["Microlith", "Hand Axe", "Polished Axe", "Copper spear"],
    correct: 2,
    explanation: "Polished stone axe is typical of Neolithic."
  },

  {
    q: "23. Grinding stones (mortar–pestle) indicate:",
    a: ["Metal polishing", "Grain processing", "Hunting", "Painting"],
    correct: 1,
    explanation: "Used for grinding grains in Neolithic Age."
  },

  {
    q: "24. Paleolithic rock art mainly shows:",
    a: ["Farming scenes", "Hunting scenes", "Vehicles", "Writing"],
    correct: 1,
    explanation: "Rock art includes daily life and hunting."
  },

  {
    q: "25. Which Stone Age lasted the longest?",
    a: ["Mesolithic", "Neolithic", "Paleolithic", "Chalcolithic"],
    correct: 2,
    explanation: "Paleolithic lasted millions of years."
  },

  {
    q: "26. Mesolithic people used microliths because:",
    a: ["They were decorative", "Useful for hunting small fast animals", "Available in markets", "Needed for farming"],
    correct: 1,
    explanation: "Climate change created more small animals."
  },

  {
    q: "27. Burials with animals in Neolithic Age indicate:",
    a: ["Fear of animals", "Belief in afterlife", "No relation", "Worship of caves"],
    correct: 1,
    explanation: "Burials show ritualistic beliefs."
  },

  {
    q: "28. Mehrgarh also gives earliest evidence of:",
    a: ["Cotton", "Tea", "Sugarcane", "Iron"],
    correct: 0,
    explanation: "Cotton fibres were discovered at Mehrgarh."
  },

  {
    q: "29. Neolithic weaving developed because:",
    a: ["Writing began", "Sheep wool and cotton became available", "People needed bags for hunting", "Metals became common"],
    correct: 1,
    explanation: "Domestication of sheep enabled weaving."
  },

  {
    q: "30. Ash mounds are found mainly in:",
    a: ["Kashmir", "South India", "Bihar", "Rajasthan"],
    correct: 1,
    explanation: "Utnur in South India is known for ash mounds."
  },

  {
    q: "31. Which Stone Age introduced food storage?",
    a: ["Paleolithic", "Mesolithic", "Neolithic", "Bronze Age"],
    correct: 2,
    explanation: "Agriculture created surplus food needing storage."
  },

  {
    q: "32. Hand Axe is MOST associated with:",
    a: ["Neolithic", "Mesolithic", "Paleolithic", "Iron Age"],
    correct: 2,
    explanation: "Hand Axe is the classic Paleolithic tool."
  },

  {
    q: "33. Which factor increased village size in Neolithic Age?",
    a: ["Fire", "Food surplus", "Better hunting", "More rainfall"],
    correct: 1,
    explanation: "Surplus food supported a larger population."
  },

  {
    q: "34. Daojali Hading proves:",
    a: ["Local pottery making", "Long-distance trade", "Temple building", "Fishing"],
    correct: 1,
    explanation: "Jadeite stone found there is not local."
  },

  {
    q: "35. What was the MAJOR reason Neolithic Age is a turning point?",
    a: ["Fire discovery", "Farming and settled life", "Cave paintings", "Use of microliths"],
    correct: 1,
    explanation: "Beginning of agriculture changed human lifestyle forever."
  }

];





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
