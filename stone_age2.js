/* ============================================================
       MASTER JS TEMPLATE — CREATE ALL FUTURE TESTS USING THIS
===============================================================
   START OF ALLOWED SECTION — YOU MAY EDIT BELOW THIS LINE
============================================================ */

// Test Title
const TEST_TITLE = "Stone Age – CTET Practice Test";

// Subtitle
const SUBTITLE_TEXT = "Paleolithic, Mesolithic, Neolithic & Important Sites";

// Topic name
const TOPIC_NAME = "The Earliest People (Stone Age)";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 25;

// 40 QUESTIONS ON STONE AGE (CTET LEVEL)
const quizData = [

  {
    q: "1. The earliest period of human history is known as:",
    a: ["Mesolithic Age", "Neolithic Age", "Paleolithic Age", "Copper Age"],
    correct: 2,
    explanation: "Paleolithic Age is the oldest and longest Stone Age period."
  },

  {
    q: "2. Paleolithic people lived mainly in:",
    a: ["Brick houses", "Caves and rock shelters", "Wooden huts", "Houses with roofs"],
    correct: 1,
    explanation: "They lived in caves such as Bhimbetka."
  },

  {
    q: "3. The main occupation of Paleolithic humans was:",
    a: ["Farming", "Fishing only", "Hunting and gathering", "Animal herding"],
    correct: 2,
    explanation: "Food came from hunting animals and gathering plants."
  },

  {
    q: "4. Which site is famous for Paleolithic rock paintings?",
    a: ["Burzahom", "Bhimbetka", "Mehrgarh", "Daojali Hading"],
    correct: 1,
    explanation: "Bhimbetka is known for cave paintings."
  },

  {
    q: "5. The biggest discovery of Paleolithic Age was:",
    a: ["Wheel", "Fire", "Pottery", "Agriculture"],
    correct: 1,
    explanation: "Fire helped in cooking, protection and warmth."
  },

  {
    q: "6. Paleolithic tools were mostly:",
    a: ["Polished", "Microliths", "Large and crude", "Made of metal"],
    correct: 2,
    explanation: "Hand axes and choppers were large and crude."
  },

  {
    q: "7. Mesolithic Age is also known as:",
    a: ["Old Stone Age", "Middle Stone Age", "New Stone Age", "Bronze Age"],
    correct: 1,
    explanation: "Mesolithic is the transitional phase."
  },

  {
    q: "8. Typical tools of Mesolithic Age are:",
    a: ["Hand axes", "Microliths", "Metal tools", "Polished tools"],
    correct: 1,
    explanation: "Microliths were tiny, sharp tools used for hunting."
  },

  {
    q: "9. Mesolithic Age started after:",
    a: ["Ice Age ended", "Metals were discovered", "Writing began", "Cities developed"],
    correct: 0,
    explanation: "Climate warming changed plants and animals."
  },

  {
    q: "10. In Mesolithic Age people started:",
    a: ["Growing crops", "Full domestication of animals", "Early animal domestication", "Metal use"],
    correct: 2,
    explanation: "Proto-domestication began in this age."
  },

  {
    q: "11. Neolithic Age is known for:",
    a: ["Rock paintings", "Beginning of agriculture", "Bronze tools", "Iron tools"],
    correct: 1,
    explanation: "Agriculture changed human life completely."
  },

  {
    q: "12. Earliest rice cultivation evidence is found at:",
    a: ["Mehrgarh", "Koldihwa", "Burzahom", "Chirand"],
    correct: 1,
    explanation: "Koldihwa in Uttar Pradesh has earliest rice evidence."
  },

  {
    q: "13. The first domesticated animal was:",
    a: ["Cow", "Dog", "Goat", "Sheep"],
    correct: 1,
    explanation: "Dog was the first domesticated animal."
  },

  {
    q: "14. Neolithic tools were different because they were:",
    a: ["Crude", "Polished and ground", "Made of iron", "Huge in size"],
    correct: 1,
    explanation: "Polished tools improved efficiency."
  },

  {
    q: "15. Pottery began in Neolithic Age mainly because:",
    a: ["People liked decoration", "Surplus grain needed storage", "Metal became expensive", "Climate changed"],
    correct: 1,
    explanation: "Storage of surplus food created need for pottery."
  },

  {
    q: "16. Permanent settlements began because:",
    a: ["Hunting stopped", "Farming required settling", "People learned writing", "Tools improved"],
    correct: 1,
    explanation: "Farming requires people to stay in one place."
  },

  {
    q: "17. Burzahom (Kashmir) is famous for:",
    a: ["Wheat fields", "Pit-houses", "Iron furnaces", "Brick houses"],
    correct: 1,
    explanation: "Burzahom has deep pit dwellings."
  },

  {
    q: "18. Mehrgarh is known for:",
    a: ["Early farming and herding", "Rock art", "Bronze wheels", "Pottery kilns"],
    correct: 0,
    explanation: "Mehrgarh shows early wheat-barley farming."
  },

  {
    q: "19. Chirand (Bihar) is known for:",
    a: ["Bone tools", "Iron smelting", "Rice farming", "Stone temples"],
    correct: 0,
    explanation: "Chirand has many bone tools."
  },

  {
    q: "20. Daojali Hading (Assam) is famous for:",
    a: ["Pit-houses", "Jadeite stones", "Wheat farming", "Iron objects"],
    correct: 1,
    explanation: "Jadeite indicates long-distance trade with China."
  },

  {
    q: "21. Utnur is known for:",
    a: ["Ash mounds", "Cotton weaving", "Rice fields", "Stone wheels"],
    correct: 0,
    explanation: "Ash mounds show cattle herding."
  },

  {
    q: "22. Mortar-pestle (grinding stone) belongs to:",
    a: ["Paleolithic", "Mesolithic", "Neolithic", "Iron Age"],
    correct: 2,
    explanation: "Grinding grains indicates agriculture."
  },

  {
    q: "23. Rock art mainly shows:",
    a: ["Hunting scenes", "Farming", "Animal herding", "Writing"],
    correct: 0,
    explanation: "Rock paintings show hunting and daily life."
  },

  {
    q: "24. Paleolithic Age lasted:",
    a: ["Few centuries", "Thousands of years", "Millions of years", "Only 100 years"],
    correct: 2,
    explanation: "It lasted for millions of years."
  },

  {
    q: "25. Microliths were used because:",
    a: ["They were decorative", "Animals became smaller & faster", "Metals were rare", "Clay was unavailable"],
    correct: 1,
    explanation: "Microliths helped hunt small fast animals."
  },

  {
    q: "26. Neolithic weaving developed because:",
    a: ["People studied fashion", "Sheep wool became available", "Humans needed shoes", "Weather changed"],
    correct: 1,
    explanation: "Wool from sheep enabled weaving."
  },

  {
    q: "27. Burial practices in Neolithic show:",
    a: ["No beliefs", "Belief in afterlife", "Fear of animals", "Use of metals"],
    correct: 1,
    explanation: "Burials show belief in life after death."
  },

  {
    q: "28. Which age introduced food storage?",
    a: ["Paleolithic", "Mesolithic", "Neolithic", "Iron Age"],
    correct: 2,
    explanation: "Surplus food required storage solutions."
  },

  {
    q: "29. Which tool is MOST associated with Paleolithic?",
    a: ["Microlith", "Polished Axe", "Hand Axe", "Iron plough"],
    correct: 2,
    explanation: "Hand axe is the classic Paleolithic tool."
  },

  {
    q: "30. The biggest reason village population increased was:",
    a: ["Better hunting", "Food surplus", "Climate change", "Fire discovery"],
    correct: 1,
    explanation: "Surplus food supported more people."
  },

  {
    q: "31. Jadeite at Daojali Hading proves:",
    a: ["No trade existed", "Local stone use", "Long-distance trade", "Iron smelting"],
    correct: 2,
    explanation: "Jadeite stone came from China."
  },

  {
    q: "32. Rice evidence at Koldihwa shows:",
    a: ["Domestication", "Metal melting", "City planning", "Boat building"],
    correct: 0,
    explanation: "It shows early rice domestication."
  },

  {
    q: "33. Fire was first controlled in:",
    a: ["Neolithic", "Mesolithic", "Paleolithic", "Iron Age"],
    correct: 2,
    explanation: "Fire was used in Paleolithic age."
  },

  {
    q: "34. Pit-houses were made mainly to:",
    a: ["Store water", "Avoid cold climate", "Hide animals", "Cook food"],
    correct: 1,
    explanation: "Burzahom pit houses protected from cold."
  },

  {
    q: "35. Earliest cotton evidence is from:",
    a: ["Mehrgarh", "Burzahom", "Chirand", "Koldihwa"],
    correct: 0,
    explanation: "Cotton fibres found at Mehrgarh."
  },

  {
    q: "36. Which age saw beginning of weaving?",
    a: ["Paleolithic", "Mesolithic", "Neolithic", "Iron Age"],
    correct: 2,
    explanation: "Weaving began due to wool and cotton."
  },

  {
    q: "37. Ash mounds suggest:",
    a: ["Metal work", "Cattle herding", "Pottery use", "River trade"],
    correct: 1,
    explanation: "Ash mounds formed from burnt cattle dung."
  },

  {
    q: "38. Polished axe was important because:",
    a: ["It looked beautiful", "It helped clear forests", "It was used in worship", "It replaced iron tools"],
    correct: 1,
    explanation: "Polished tools helped prepare farming land."
  },

  {
    q: "39. Neolithic houses were mainly made of:",
    a: ["Bricks", "Stone", "Mud and straw", "Glass"],
    correct: 2,
    explanation: "Simple mud houses were common."
  },

  {
    q: "40. The major turning point of Neolithic Age was:",
    a: ["Rock painting", "Farming and settled life", "Microliths", "Ice Age"],
    correct: 1,
    explanation: "Farming completely changed human lifestyle."
  }

];

/* ============================================================
      END OF ALLOWED SECTION — DO NOT EDIT BELOW THIS LINE
===============================================================




/* ============================================================
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
