/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 4 (HINDI)
   ASSERTION–REASON TYPE
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 4 (Assertion–Reason)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "कथन (A): वंशानुक्रम बच्चे के विकास के लिए मूल क्षमता प्रदान करता है।\nकारण (R): जीन शारीरिक और मानसिक क्षमताओं की अधिकतम सीमा तय करते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "वंशानुक्रम क्षमता देता है और जीन उसकी सीमा तय करते हैं।"
},

{
q: "कथन (A): पर्यावरण का बुद्धि के विकास में कोई योगदान नहीं है।\nकारण (R): बुद्धि जन्म के समय पूरी तरह निश्चित होती है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 3,
explanation: "पर्यावरण बुद्धि को प्रभावित करता है और बुद्धि पूरी तरह निश्चित नहीं होती।"
},

{
q: "कथन (A): समान वंशानुक्रम वाले बच्चों का विकास अलग-अलग हो सकता है।\nकारण (R): वे अलग-अलग पर्यावरण में पलते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "अलग पर्यावरण समान वंशानुक्रम के बावजूद अलग विकास करता है।"
},

{
q: "कथन (A): भाषा विकास मुख्य रूप से पर्यावरण पर निर्भर करता है।\nकारण (R): भाषा सामाजिक संपर्क से सीखी जाती है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "भाषा सामाजिक वातावरण से सीखने पर आधारित होती है।"
},

{
q: "कथन (A): बच्चे का रक्त समूह पर्यावरण द्वारा बदला जा सकता है।\nकारण (R): रक्त समूह आनुवंशिक रूप से निर्धारित होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "रक्त समूह आनुवंशिक होता है और बदला नहीं जा सकता।"
},

{
q: "कथन (A): व्यक्तित्व विकास पारिवारिक वातावरण से प्रभावित होता है।\nकारण (R): परिवार भावनात्मक और सामाजिक अनुभव प्रदान करता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "परिवार के अनुभव व्यक्तित्व को आकार देते हैं।"
},

{
q: "कथन (A): केवल वंशानुक्रम ही बच्चे के अंतिम व्यवहार को तय करता है।\nकारण (R): व्यवहार सीखने और अनुभव से प्रभावित होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "व्यवहार पर पर्यावरण और अनुभव का भी प्रभाव पड़ता है।"
},

{
q: "कथन (A): पर्यावरणीय अभाव मानसिक विकास को प्रभावित करता है।\nकारण (R): मानसिक विकास के लिए उत्तेजना और अनुभव आवश्यक होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "उत्तेजना की कमी मानसिक विकास को बाधित करती है।"
},

{
q: "कथन (A): सहायक वातावरण में बुद्धि का सर्वोत्तम विकास होता है।\nकारण (R): पर्यावरण वंशानुगत क्षमता को विकसित करता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "पर्यावरण क्षमता को वास्तविक रूप देता है।"
},

{
q: "कथन (A): आँखों का रंग पर्यावरण से प्रभावित होता है।\nकारण (R): आँखों का रंग जीन द्वारा निर्धारित होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "आँखों का रंग आनुवंशिक होता है।"
},

{
q: "कथन (A): भावनात्मक सुरक्षा सीखने में सहायक होती है।\nकारण (R): भावनाएँ ध्यान और प्रेरणा को प्रभावित करती हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "भावनात्मक स्थिरता सीखने को बढ़ाती है।"
},

{
q: "कथन (A): वंशानुक्रम परिपक्वता को प्रभावित करता है।\nकारण (R): परिपक्वता जैविक समय-सारिणी के अनुसार होती है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "परिपक्वता जैविक रूप से नियंत्रित होती है।"
},

{
q: "कथन (A): पर्यावरण स्कूल के बाद ही विकास को प्रभावित करता है।\nकारण (R): घर का वातावरण जन्म से ही बच्चे को प्रभावित करता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "पर्यावरण का प्रभाव जन्म से शुरू हो जाता है।"
},

{
q: "कथन (A): नैतिक विकास सामाजिक वातावरण से बनता है।\nकारण (R): मूल्य परिवार और समाज से सीखे जाते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "सामाजिक अनुभव नैतिक विकास करते हैं।"
},

{
q: "कथन (A): बच्चे की लंबाई आंशिक रूप से पोषण से प्रभावित होती है।\nकारण (R): पोषण एक पर्यावरणीय कारक है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "पोषण शारीरिक वृद्धि को सहारा देता है।"
},

{
q: "कथन (A): पर्यावरण के बिना भाषा सीखना असंभव है।\nकारण (R): भाषा के लिए सामाजिक संपर्क आवश्यक है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "भाषा सामाजिक संपर्क से ही आती है।"
},

{
q: "कथन (A): आनुवंशिक रोग वंशानुक्रम की भूमिका को दर्शाते हैं।\nकारण (R): ये रोग माता-पिता से बच्चों में स्थानांतरित होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "आनुवंशिक रोग विरासत में मिलते हैं।"
},

{
q: "कथन (A): शिक्षण की गुणवत्ता सीखने के परिणामों को प्रभावित करती है।\nकारण (R): सीखना एक पर्यावरणीय प्रक्रिया है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "सीखना पर्यावरण पर निर्भर करता है।"
},

{
q: "कथन (A): वंशानुक्रम बुद्धि को अंतिम रूप से तय करता है।\nकारण (R): पर्यावरण का बुद्धि पर कोई प्रभाव नहीं होता।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 3,
explanation: "पर्यावरण बुद्धि को प्रभावित करता है।"
},

{
q: "कथन (A): सहपाठी समूह सामाजिक विकास को प्रभावित करता है।\nकारण (R): बच्चे सामाजिक व्यवहार संपर्क से सीखते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "सहपाठी सामाजिक सीख का अवसर देते हैं।"
},

{
q: "कथन (A): उँगलियों के निशान पर्यावरण से प्रभावित होते हैं।\nकारण (R): उँगलियों के निशान आनुवंशिक होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "फिंगरप्रिंट आनुवंशिक होते हैं।"
},

{
q: "कथन (A): संतुलित विकास के लिए वंशानुक्रम और पर्यावरण दोनों आवश्यक हैं।\nकारण (R): कोई एक कारक अकेले पूर्ण विकास नहीं कर सकता।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "पूर्ण विकास के लिए दोनों कारक ज़रूरी हैं।"
},

{
q: "कथन (A): उत्तेजक वातावरण रचनात्मकता को बढ़ावा देता है।\nकारण (R): रचनात्मकता अनुभव और अभ्यास से विकसित होती है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 0,
explanation: "अनुभव और अभ्यास से रचनात्मकता बढ़ती है।"
},

{
q: "कथन (A): वंशानुक्रम पर्यावरण से स्वतंत्र होकर कार्य करता है।\nकारण (R): विकास अनेक कारकों की परस्पर क्रिया का परिणाम है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या करता है",
"A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं करता",
"A सत्य है लेकिन R असत्य है",
"A असत्य है लेकिन R सत्य है"
],
correct: 3,
explanation: "वंशानुक्रम अकेले काम नहीं करता, विकास पारस्परिक है।"
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
