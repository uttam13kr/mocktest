/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 2 (Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "सामाजीकरण व्यक्ति को मुख्य रूप से किसमें सहायता करता है?",
a: [
"शारीरिक रूप से मजबूत बनने में",
"सामाजिक वातावरण के साथ समायोजन में",
"जैविक वृद्धि बढ़ाने में",
"आनुवंशिकता सुधारने में"
],
correct: 1,
explanation: "सामाजीकरण व्यक्ति को समाज में सही ढंग से समायोजित होने में मदद करता है।"
},

{
q: "सामाजीकरण की प्रक्रिया को सबसे अच्छा कैसे वर्णित किया जा सकता है?",
a: [
"अचानक और स्थिर",
"केवल बचपन तक सीमित",
"निरंतर और आजीवन",
"केवल विद्यालय आधारित"
],
correct: 2,
explanation: "सामाजीकरण जन्म से मृत्यु तक चलता रहने वाली प्रक्रिया है।"
},

{
q: "कौन-सा सामाजीकरण का अभिकर्ता औपचारिक रूप से अनुशासन सिखाता है?",
a: [
"परिवार",
"सहकर्मी समूह",
"विद्यालय",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "विद्यालय औपचारिक रूप से अनुशासन और सामाजिक नियम सिखाता है।"
},

{
q: "निम्नलिखित में से कौन सामाजीकरण का अभिकर्ता नहीं है?",
a: [
"परिवार",
"विद्यालय",
"सहकर्मी समूह",
"आनुवंशिकता"
],
correct: 3,
explanation: "आनुवंशिकता जैविक है, यह सामाजीकरण का अभिकर्ता नहीं है।"
},

{
q: "सामाजीकरण मुख्य रूप से किसके विकास में सहायक होता है?",
a: [
"मांसपेशीय शक्ति",
"व्यक्तित्व",
"रक्त समूह",
"ऊँचाई"
],
correct: 1,
explanation: "व्यक्तित्व का विकास सामाजिक अनुभवों से होता है।"
},

{
q: "वयस्क अवस्था में होने वाला सामाजीकरण कौन-सा है?",
a: [
"प्राथमिक सामाजीकरण",
"द्वितीयक सामाजीकरण",
"पूर्वजन्म सामाजीकरण",
"जैविक सामाजीकरण"
],
correct: 1,
explanation: "द्वितीयक सामाजीकरण किशोरावस्था और वयस्क अवस्था में भी चलता रहता है।"
},

{
q: "दूसरों को देखकर व्यवहार सीखने की प्रक्रिया कहलाती है",
a: [
"अनुकूलन",
"अनुकरण",
"परिपक्वता",
"पुनर्बलन"
],
correct: 1,
explanation: "अनुकरण में व्यक्ति दूसरों के व्यवहार की नकल करता है।"
},

{
q: "कौन-सा तत्व बच्चे को दूसरों की भावनाएँ समझने में सहायता करता है?",
a: [
"भाषा",
"सहानुभूति",
"प्रतिस्पर्धा",
"दंड"
],
correct: 1,
explanation: "सहानुभूति से बच्चा दूसरों की भावनाओं को समझता है।"
},

{
q: "एरिकसन के अनुसार पहल बनाम अपराधबोध की अवस्था होती है",
a: [
"शैशवावस्था",
"प्रारंभिक बाल्यावस्था",
"पूर्व-विद्यालय अवस्था",
"किशोरावस्था"
],
correct: 2,
explanation: "पहल बनाम अपराधबोध की अवस्था पूर्व-विद्यालय अवस्था में होती है।"
},

{
q: "भाषा विकास सबसे सक्रिय रूप से किस अवस्था में शुरू होता है?",
a: [
"किशोरावस्था",
"वृद्धावस्था",
"प्रारंभिक बाल्यावस्था",
"वयस्कता"
],
correct: 2,
explanation: "भाषा का सक्रिय विकास प्रारंभिक बाल्यावस्था में होता है।"
},

{
q: "सहकर्मी समूह का प्रभाव मुख्य रूप से किस पर पड़ता है?",
a: [
"जैविक गुणों पर",
"सामाजिक व्यवहार और आदतों पर",
"रक्त संचार पर",
"आनुवंशिक संरचना पर"
],
correct: 1,
explanation: "सहकर्मी समूह व्यवहार, आदतों और दृष्टिकोण को प्रभावित करता है।"
},

{
q: "सामाजीकरण का कौन-सा कार्य है?",
a: [
"समाज से अलगाव",
"संस्कृति का संप्रेषण",
"आनुवंशिकता का नियंत्रण",
"जैविक परिपक्वता"
],
correct: 1,
explanation: "सामाजीकरण संस्कृति, मूल्य और परंपराओं का संप्रेषण करता है।"
},

{
q: "कौन-सा सामाजीकरण का अभिकर्ता एक-तरफा संचार करता है?",
a: [
"परिवार",
"विद्यालय",
"सहकर्मी समूह",
"जनसंचार माध्यम"
],
correct: 3,
explanation: "जनसंचार माध्यम सामान्यतः एक-तरफा संचार करता है।"
},

{
q: "एरिकसन के अनुसार परिश्रम बनाम हीन भावना की अवस्था होती है",
a: [
"शैशवावस्था",
"पूर्व-विद्यालय अवस्था",
"विद्यालय अवस्था",
"किशोरावस्था"
],
correct: 2,
explanation: "यह अवस्था विद्यालय अवस्था में होती है।"
},

{
q: "कौन-सा खेल निर्धारित भूमिकाओं के साथ खेला जाता है?",
a: [
"एकाकी खेल",
"समानांतर खेल",
"सहयोगात्मक खेल",
"सहकारी खेल"
],
correct: 3,
explanation: "सहकारी खेल में नियम और भूमिकाएँ होती हैं।"
},

{
q: "समानांतर खेल सामान्यतः किस अवस्था में देखा जाता है?",
a: [
"किशोरावस्था",
"प्रारंभिक बाल्यावस्था",
"मध्य वयस्कता",
"वृद्धावस्था"
],
correct: 1,
explanation: "समानांतर खेल प्रारंभिक बाल्यावस्था में पाया जाता है।"
},

{
q: "सामाजीकरण किसके विकास में सहायता करता है?",
a: [
"सामाजिक पहचान",
"आनुवंशिक कोड",
"जैविक प्रतिवर्त",
"रक्त समूह"
],
correct: 0,
explanation: "सामाजीकरण से सामाजिक पहचान विकसित होती है।"
},

{
q: "एरिकसन के अनुसार निकटता बनाम अलगाव की अवस्था होती है",
a: [
"किशोरावस्था",
"युवावस्था",
"मध्य वयस्कता",
"वृद्धावस्था"
],
correct: 1,
explanation: "निकटता बनाम अलगाव की अवस्था युवावस्था में होती है।"
},

{
q: "परिवार सामाजीकरण को मुख्य रूप से कैसे प्रभावित करता है?",
a: [
"औपचारिक पाठ्यक्रम से",
"पुरस्कार और दंड द्वारा",
"मीडिया प्रभाव से",
"सहकर्मी दबाव से"
],
correct: 1,
explanation: "परिवार पुरस्कार और दंड द्वारा व्यवहार को दिशा देता है।"
},

{
q: "निम्नलिखित में से कौन द्वितीयक सामाजीकरण का उदाहरण है?",
a: [
"मातृभाषा सीखना",
"भोजन शिष्टाचार सीखना",
"कार्यस्थल के नियम सीखना",
"विश्वास का विकास"
],
correct: 2,
explanation: "कार्यस्थल के नियम सीखना द्वितीयक सामाजीकरण है।"
},

{
q: "सामाजीकरण किसको बनाए रखने में सहायता करता है?",
a: [
"सामाजिक निरंतरता",
"आनुवंशिक स्थिरता",
"जैविक समानता",
"शारीरिक समानता"
],
correct: 0,
explanation: "सामाजीकरण समाज की निरंतरता बनाए रखता है।"
},

{
q: "एरिकसन के अनुसार उत्पादकता बनाम ठहराव की अवस्था होती है",
a: [
"युवावस्था",
"मध्य वयस्कता",
"किशोरावस्था",
"वृद्धावस्था"
],
correct: 1,
explanation: "यह अवस्था मध्य वयस्कता में होती है।"
},

{
q: "असफल सामाजीकरण का परिणाम हो सकता है",
a: [
"बेहतर समायोजन",
"सामाजिक असमायोजन",
"बुद्धि में वृद्धि",
"जैविक वृद्धि"
],
correct: 1,
explanation: "असफल सामाजीकरण से समायोजन की समस्याएँ हो सकती हैं।"
},

{
q: "सामाजिक मानदंड मुख्य रूप से किसके द्वारा सीखे जाते हैं?",
a: [
"प्रतिवर्त क्रिया",
"सामाजिक अंतःक्रिया",
"आनुवंशिकता",
"जैविक वृद्धि"
],
correct: 1,
explanation: "सामाजिक मानदंड सामाजिक अंतःक्रिया से सीखे जाते हैं।"
},

{
q: "सामाजीकरण का सबसे महत्वपूर्ण उद्देश्य है",
a: [
"सभी को समान बनाना",
"सहयोगपूर्ण जीवन जीने में सहायता करना",
"अंतर समाप्त करना",
"आनुवंशिकता को नियंत्रित करना"
],
correct: 1,
explanation: "सामाजीकरण सहयोग और सामंजस्यपूर्ण जीवन को बढ़ावा देता है।"
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
