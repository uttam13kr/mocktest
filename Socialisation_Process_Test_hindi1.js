/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 1 (Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "सामाजीकरण वह प्रक्रिया है जिसके द्वारा एक व्यक्ति",
a: [
"शारीरिक शक्ति प्राप्त करता है",
"समाज में रहना सीखता है",
"जैविक गुण प्राप्त करता है",
"केवल बुद्धि विकसित करता है"
],
correct: 1,
explanation: "सामाजीकरण व्यक्ति को समाज के नियम, मूल्य और व्यवहार सीखने में सहायता करता है।"
},

{
q: "सामाजीकरण की प्रक्रिया शुरू होती है",
a: [
"किशोरावस्था में",
"स्कूल जाने की उम्र में",
"जन्म से",
"परिपक्वता के बाद"
],
correct: 2,
explanation: "सामाजीकरण जन्म से ही शुरू हो जाता है जब बच्चा दूसरों से सीखना शुरू करता है।"
},

{
q: "सामाजीकरण का प्राथमिक अभिकर्ता कौन है?",
a: [
"विद्यालय",
"सहकर्मी समूह",
"परिवार",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "परिवार बचपन में सामाजीकरण का पहला और सबसे महत्वपूर्ण अभिकर्ता होता है।"
},

{
q: "प्राथमिक सामाजीकरण मुख्य रूप से होता है",
a: [
"विद्यालय में",
"समाज में",
"परिवार में",
"कार्यक्षेत्र में"
],
correct: 2,
explanation: "प्राथमिक सामाजीकरण परिवार में प्रारंभिक बचपन के दौरान होता है।"
},

{
q: "द्वितीयक सामाजीकरण सामान्यतः होता है",
a: [
"जन्म से पहले",
"केवल परिवार में",
"घर के बाहर",
"केवल वृद्धावस्था में"
],
correct: 2,
explanation: "द्वितीयक सामाजीकरण परिवार के बाहर विद्यालय और समाज के माध्यम से होता है।"
},

{
q: "सामाजिक भूमिकाओं और नियमों को सीखना किसका भाग है?",
a: [
"परिपक्वता",
"अनुकूलन",
"सामाजीकरण",
"आनुवंशिकता"
],
correct: 2,
explanation: "सामाजीकरण में सामाजिक भूमिकाएँ, नियम और व्यवहार सीखना शामिल होता है।"
},

{
q: "सामाजीकरण में सबसे महत्वपूर्ण भूमिका किसकी होती है?",
a: [
"सामाजिक अंतःक्रिया",
"मांसपेशीय शक्ति",
"रक्त समूह",
"ऊँचाई"
],
correct: 0,
explanation: "सामाजिक अंतःक्रिया के माध्यम से व्यक्ति दूसरों से व्यवहार सीखता है।"
},

{
q: "सामाजीकरण में अनुकरण का अर्थ है",
a: [
"दूसरों को दंड देना",
"दूसरों के व्यवहार की नकल करना",
"सामाजिक नियमों को अस्वीकार करना",
"जैविक वृद्धि"
],
correct: 1,
explanation: "बच्चे दूसरों के व्यवहार की नकल करके सामाजिक व्यवहार सीखते हैं।"
},

{
q: "सामाजीकरण में भाषा महत्वपूर्ण है क्योंकि यह",
a: [
"शारीरिक शक्ति बढ़ाती है",
"संस्कृति और मूल्य स्थानांतरित करती है",
"आनुवंशिकता बढ़ाती है",
"केवल भावनाओं को नियंत्रित करती है"
],
correct: 1,
explanation: "भाषा के माध्यम से संस्कृति, मूल्य और विचार पीढ़ी दर पीढ़ी पहुँचते हैं।"
},

{
q: "सामाजीकरण में पहचान का अर्थ है",
a: [
"दूसरों को अस्वीकार करना",
"व्यवहार को दंडित करना",
"दूसरों से जुड़ाव विकसित करना",
"खुद को अलग करना"
],
correct: 2,
explanation: "पहचान के द्वारा बच्चा लोगों या वस्तुओं से जुड़कर सामाजिक बनता है।"
},

{
q: "एरिकसन के अनुसार विश्वास बनाम अविश्वास की अवस्था कौन-सी है?",
a: [
"प्रारंभिक बाल्यावस्था",
"शैशवावस्था",
"किशोरावस्था",
"वयस्कता"
],
correct: 1,
explanation: "विश्वास बनाम अविश्वास की अवस्था शैशवावस्था में होती है।"
},

{
q: "पहचान बनाम भूमिका भ्रम की अवस्था होती है",
a: [
"बाल्यावस्था में",
"किशोरावस्था में",
"युवावस्था में",
"वृद्धावस्था में"
],
correct: 1,
explanation: "किशोरावस्था में व्यक्ति अपनी पहचान बनाने की कोशिश करता है।"
},

{
q: "सहकर्मी समूह का प्रभाव सबसे अधिक होता है",
a: [
"शैशवावस्था में",
"प्रारंभिक बाल्यावस्था में",
"किशोरावस्था में",
"वृद्धावस्था में"
],
correct: 2,
explanation: "किशोरावस्था में सहकर्मी समूह का प्रभाव सबसे अधिक होता है।"
},

{
q: "औपचारिक शिक्षा कौन-सा अभिकर्ता प्रदान करता है?",
a: [
"परिवार",
"सहकर्मी समूह",
"विद्यालय",
"समुदाय"
],
correct: 2,
explanation: "विद्यालय औपचारिक शिक्षा और सामाजिक अनुशासन सिखाता है।"
},

{
q: "जनसंचार माध्यम सामाजीकरण में मुख्य रूप से",
a: [
"द्वि-मार्गीय संचार प्रदान करता है",
"कोई प्रभाव नहीं डालता",
"व्यवहार और दृष्टिकोण को प्रभावित करता है",
"आनुवंशिकता को नियंत्रित करता है"
],
correct: 2,
explanation: "जनसंचार माध्यम विचारों और व्यवहार को प्रभावित करते हैं।"
},

{
q: "सामाजीकरण में खेल का महत्व इसलिए है क्योंकि खेल",
a: [
"केवल शारीरिक विकास करता है",
"रचनात्मकता और सामाजिक कौशल बढ़ाता है",
"आनुवंशिक गुण देता है",
"जैविक परिपक्वता लाता है"
],
correct: 1,
explanation: "खेल रचनात्मकता, सहयोग और सामाजिक विकास में सहायक होता है।"
},

{
q: "एकाकी खेल का अर्थ है",
a: [
"नियमों के साथ समूह खेल",
"बिना दूसरों के अकेले खेलना",
"दूसरों को खेलते देखना",
"सहकारी खेल"
],
correct: 1,
explanation: "एकाकी खेल में बच्चा अकेले खेलता है।"
},

{
q: "समानांतर खेल में",
a: [
"बच्चे नियमों के साथ खेलते हैं",
"बच्चे पास-पास लेकिन अलग-अलग खेलते हैं",
"बच्चे अकेले खेलते हैं",
"बच्चे केवल देखते हैं"
],
correct: 1,
explanation: "समानांतर खेल में बच्चे साथ होते हुए भी अलग-अलग खेलते हैं।"
},

{
q: "सहकारी खेल की विशेषता है",
a: [
"नियम और भूमिका नहीं",
"भूमिकाएँ और सहयोग",
"अकेले खेलना",
"कोई अंतःक्रिया नहीं"
],
correct: 1,
explanation: "सहकारी खेल में नियम, भूमिकाएँ और सहयोग आवश्यक होता है।"
},

{
q: "परिश्रम बनाम हीन भावना की अवस्था होती है",
a: [
"पूर्व-विद्यालय अवस्था",
"स्कूल अवस्था",
"किशोरावस्था",
"युवावस्था"
],
correct: 1,
explanation: "स्कूल अवस्था में बच्चा कौशल सीखता है और आत्मविश्वास विकसित करता है।"
},

{
q: "सामाजीकरण व्यक्ति को मदद करता है",
a: [
"अलग-थलग रहने में",
"सामाजिक नियम अस्वीकार करने में",
"समाज में समायोजन करने में",
"आनुवंशिकता नियंत्रित करने में"
],
correct: 2,
explanation: "सामाजीकरण व्यक्ति को समाज में सामंजस्य बैठाने में मदद करता है।"
},

{
q: "पुरस्कार और दंड के माध्यम से सही-गलत कौन सिखाता है?",
a: [
"विद्यालय",
"सहकर्मी समूह",
"परिवार",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "परिवार अनौपचारिक रूप से सही-गलत सिखाता है।"
},

{
q: "सामाजीकरण को सबसे सही रूप में कहा जा सकता है",
a: [
"अल्पकालिक प्रक्रिया",
"केवल जैविक प्रक्रिया",
"आजीवन चलने वाली प्रक्रिया",
"केवल विद्यालयी प्रक्रिया"
],
correct: 2,
explanation: "सामाजीकरण जन्म से मृत्यु तक चलता रहता है।"
},

{
q: "सामाजीकरण के बारे में सही कथन है",
a: [
"यह बचपन में समाप्त हो जाता है",
"यह केवल परिवार तक सीमित है",
"यह व्यक्तित्व विकास में सहायक है",
"यह सामाजिक मूल्यों की उपेक्षा करता है"
],
correct: 2,
explanation: "सामाजीकरण व्यक्तित्व और व्यवहार के विकास में मदद करता है।"
},

{
q: "सामाजीकरण का सबसे महत्वपूर्ण परिणाम है",
a: [
"शारीरिक शक्ति",
"सामाजिक समायोजन",
"आनुवंशिक गुण",
"जैविक वृद्धि"
],
correct: 1,
explanation: "सामाजीकरण व्यक्ति को समाज में सही ढंग से रहने योग्य बनाता है।"
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

