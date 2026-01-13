/* ============================================================
   Topic name — Socialisation Process (PYQs)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 7 (Previous Years Questions Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "सामाजीकरण वह प्रक्रिया है जिसके द्वारा एक व्यक्ति",
a: [
"सामाजिक मानदंड और मूल्य सीखता है",
"जैविक गुण विकसित करता है",
"शारीरिक परिपक्वता प्राप्त करता है",
"बुद्धि को विरासत में प्राप्त करता है"
],
correct: 0,
explanation: "PYQs के अनुसार सामाजीकरण का अर्थ सामाजिक मानदंड और मूल्य सीखना है।"
},

{
q: "सामाजीकरण का प्रथम अभिकर्ता कौन-सा है?",
a: [
"विद्यालय",
"सहकर्मी समूह",
"परिवार",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "परिवार को सामाजीकरण का प्राथमिक अभिकर्ता माना जाता है।"
},

{
q: "प्राथमिक सामाजीकरण मुख्य रूप से होता है",
a: [
"विद्यालय में",
"कार्यस्थल पर",
"परिवार में",
"समुदाय में"
],
correct: 2,
explanation: "प्राथमिक सामाजीकरण परिवार में ही होता है।"
},

{
q: "निम्नलिखित में से कौन-सा सामाजीकरण का द्वितीयक अभिकर्ता है?",
a: [
"परिवार",
"विद्यालय",
"माता-पिता",
"भाई-बहन"
],
correct: 1,
explanation: "विद्यालय को द्वितीयक अभिकर्ता माना जाता है।"
},

{
q: "एरिकसन के किस चरण में पहचान बनाम भूमिका भ्रम होता है?",
a: [
"प्रारंभिक बाल्यावस्था",
"मध्य बाल्यावस्था",
"किशोरावस्था",
"वयस्कता"
],
correct: 2,
explanation: "पहचान बनाम भूमिका भ्रम किशोरावस्था में होता है।"
},

{
q: "सहकर्मी समूह का प्रभाव सर्वाधिक किस अवस्था में होता है?",
a: [
"शैशवावस्था",
"प्रारंभिक बाल्यावस्था",
"किशोरावस्था",
"वृद्धावस्था"
],
correct: 2,
explanation: "किशोरावस्था में सहकर्मी समूह का प्रभाव सबसे अधिक होता है।"
},

{
q: "निम्नलिखित में से कौन-सा सामाजीकरण को सबसे अच्छे रूप में स्पष्ट करता है?",
a: [
"जैविक वृद्धि",
"सांस्कृतिक अधिगम",
"आनुवंशिक संचरण",
"शारीरिक परिपक्वता"
],
correct: 1,
explanation: "सामाजीकरण सांस्कृतिक और सामाजिक अधिगम है।"
},

{
q: "सामाजीकरण में भाषा की भूमिका महत्वपूर्ण है क्योंकि यह",
a: [
"भावनाओं को नियंत्रित करती है",
"संस्कृति का संप्रेषण करती है",
"बुद्धि बढ़ाती है",
"आनुवंशिकता को आकार देती है"
],
correct: 1,
explanation: "भाषा के माध्यम से संस्कृति और मूल्य संप्रेषित होते हैं।"
},

{
q: "निम्नलिखित में से कौन-सा सामाजीकरण में शामिल नहीं है?",
a: [
"मानदंड सीखना",
"मूल्य सीखना",
"आनुवंशिक विरासत",
"भूमिकाएँ सीखना"
],
correct: 2,
explanation: "आनुवंशिक विरासत जैविक है, सामाजिक नहीं।"
},

{
q: "छिपे हुए पाठ्यक्रम की अवधारणा किससे संबंधित है?",
a: [
"औपचारिक पाठ्यक्रम",
"पाठ्यपुस्तक की विषयवस्तु",
"विद्यालय में अनौपचारिक अधिगम",
"घर आधारित अधिगम"
],
correct: 2,
explanation: "छिपा पाठ्यक्रम विद्यालय में होने वाले अनौपचारिक अधिगम से संबंधित है।"
},

{
q: "सहकारी खेल की विशेषता है",
a: [
"अकेले खेलना",
"साथ-साथ खेलना",
"निर्धारित भूमिकाएँ और नियम",
"दूसरों को देखना"
],
correct: 2,
explanation: "सहकारी खेल में भूमिकाएँ और नियम होते हैं।"
},

{
q: "प्रारंभिक बाल्यावस्था में सामान्यतः कौन-सा खेल पाया जाता है?",
a: [
"एकाकी खेल",
"समानांतर खेल",
"सहकारी खेल",
"प्रतिस्पर्धात्मक खेल"
],
correct: 1,
explanation: "समानांतर खेल प्रारंभिक बाल्यावस्था में पाया जाता है।"
},

{
q: "विद्यालय सामाजीकरण में मुख्य रूप से किस प्रकार योगदान देता है?",
a: [
"आनुवंशिक गुण प्रदान करके",
"अनुशासन और सहयोग सिखाकर",
"आनुवंशिकता को नियंत्रित करके",
"अंतःक्रिया को कम करके"
],
correct: 1,
explanation: "विद्यालय अनुशासन और सहयोग सिखाता है।"
},

{
q: "कौन-सा सामाजीकरण का अभिकर्ता एक-तरफा संचार प्रदान करता है?",
a: [
"परिवार",
"विद्यालय",
"सहकर्मी समूह",
"जनसंचार माध्यम"
],
correct: 3,
explanation: "जनसंचार माध्यम प्रायः एक-तरफा संचार करता है।"
},

{
q: "सामाजीकरण को सबसे अच्छा किस रूप में वर्णित किया जा सकता है?",
a: [
"अल्पकालिक प्रक्रिया",
"जैविक प्रक्रिया",
"आजीवन प्रक्रिया",
"विद्यालय आधारित प्रक्रिया"
],
correct: 2,
explanation: "सामाजीकरण जन्म से मृत्यु तक चलता है।"
},

{
q: "एरिकसन के अनुसार विश्वास बनाम अविश्वास किस अवस्था में होता है?",
a: [
"शैशवावस्था",
"प्रारंभिक बाल्यावस्था",
"किशोरावस्था",
"वयस्कता"
],
correct: 0,
explanation: "विश्वास बनाम अविश्वास शैशवावस्था में होता है।"
},

{
q: "बच्चे लिंग भूमिकाएँ मुख्य रूप से किसके माध्यम से सीखते हैं?",
a: [
"आनुवंशिकता",
"पहचान",
"परिपक्वता",
"अनुकूलन"
],
correct: 1,
explanation: "पहचान के माध्यम से सामाजिक भूमिकाएँ सीखी जाती हैं।"
},

{
q: "सामाजीकरण में कौन-सा कारक सबसे महत्वपूर्ण भूमिका निभाता है?",
a: [
"गुणसूत्र",
"सामाजिक अंतःक्रिया",
"हार्मोन",
"प्रतिवर्त"
],
correct: 1,
explanation: "सामाजिक अंतःक्रिया सामाजीकरण का मुख्य आधार है।"
},

{
q: "सफल सामाजीकरण का सबसे अच्छा उदाहरण है",
a: [
"अलगाव",
"सामाजिक समायोजन",
"आनुवंशिक समानता",
"शारीरिक शक्ति"
],
correct: 1,
explanation: "सफल सामाजीकरण सामाजिक समायोजन को दर्शाता है।"
},

{
q: "सामाजीकरण की विफलता का परिणाम हो सकता है",
a: [
"बेहतर सहयोग",
"सामाजिक असमायोजन",
"बुद्धि में वृद्धि",
"शीघ्र परिपक्वता"
],
correct: 1,
explanation: "कमजोर सामाजीकरण से असमायोजन होता है।"
},

{
q: "निम्नलिखित में से कौन द्वितीयक सामाजीकरण का उदाहरण है?",
a: [
"मातृभाषा सीखना",
"पारिवारिक मूल्य सीखना",
"कार्यस्थल के नियम सीखना",
"विश्वास का विकास"
],
correct: 2,
explanation: "कार्यस्थल का अधिगम द्वितीयक सामाजीकरण है।"
},

{
q: "कौन-सा विकास क्षेत्र सामाजीकरण से सबसे अधिक प्रभावित होता है?",
a: [
"शारीरिक",
"सामाजिक",
"जैविक",
"आनुवंशिक"
],
correct: 1,
explanation: "सामाजिक विकास सीधे सामाजीकरण से प्रभावित होता है।"
},

{
q: "एरिकसन के अनुसार उत्पादकता बनाम ठहराव किस अवस्था में होता है?",
a: [
"किशोरावस्था",
"युवावस्था",
"मध्य वयस्कता",
"वृद्धावस्था"
],
correct: 2,
explanation: "उत्पादकता बनाम ठहराव मध्य वयस्कता में होता है।"
},

{
q: "सामाजीकरण का मुख्य उद्देश्य है",
a: [
"आनुवंशिकता को नियंत्रित करना",
"शारीरिक गुण विकसित करना",
"व्यक्ति को समाज में रहने योग्य बनाना",
"अंतर समाप्त करना"
],
correct: 2,
explanation: "सामाजीकरण व्यक्ति को समाज में समायोजित होने योग्य बनाता है।"
},

{
q: "निम्नलिखित में से कौन-सा कथन सही है?",
a: [
"सामाजीकरण बचपन में समाप्त हो जाता है",
"सामाजीकरण केवल विद्यालय में होता है",
"सामाजीकरण आजीवन चलता है",
"सामाजीकरण केवल जैविक है"
],
correct: 2,
explanation: "सामाजीकरण जीवनभर चलने वाली प्रक्रिया है।"
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
