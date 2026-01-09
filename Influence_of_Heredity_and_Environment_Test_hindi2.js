/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 2 (HINDI)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 2";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "जन्म से पहले वंशानुक्रम मुख्य रूप से किस पक्ष को प्रभावित करता है?",
a: [
"भाषा विकास",
"शारीरिक संरचना",
"सामाजिक व्यवहार",
"नैतिक मूल्य"
],
correct: 1,
explanation: "शरीर की संरचना जन्म से पहले जीन द्वारा निर्धारित होती है।"
},

{
q: "बुद्धि की अधिकतम क्षमता किससे निर्धारित होती है?",
a: [
"विद्यालय की शिक्षा",
"सहपाठी समूह",
"वंशानुक्रम",
"केवल अभ्यास"
],
correct: 2,
explanation: "वंशानुक्रम बुद्धि की संभावित सीमा तय करता है।"
},

{
q: "पर्यावरण मुख्य रूप से किसमें सहायता करता है?",
a: [
"आनुवंशिक गुण तय करने में",
"वंशानुगत क्षमता के विकास में",
"रक्त समूह बदलने में",
"आँखों का रंग तय करने में"
],
correct: 1,
explanation: "पर्यावरण वंशानुक्रम से मिली क्षमता को विकसित करता है।"
},

{
q: "बुद्धिमान माता-पिता का बच्चा यदि कमजोर पर्यावरण में पले तो वह",
a: [
"स्वतः पूर्ण बुद्धि दिखाएगा",
"कभी बुद्धि विकसित नहीं करेगा",
"क्षमता का सीमित विकास दिखाएगा",
"माता-पिता से अधिक बुद्धिमान होगा"
],
correct: 2,
explanation: "खराब पर्यावरण वंशानुगत क्षमता के विकास को सीमित करता है।"
},

{
q: "निम्न में से कौन-सा वंशानुगत गुण नहीं है?",
a: [
"रक्त समूह",
"आँखों का रंग",
"लंबाई की क्षमता",
"अभिवृत्ति"
],
correct: 3,
explanation: "अभिवृत्ति पर्यावरण और अनुभव से बनती है।"
},

{
q: "सामाजिक पर्यावरण मुख्य रूप से किसे प्रभावित करता है?",
a: [
"उँगलियों के निशान",
"क्रोमोसोम",
"व्यवहार और व्यक्तित्व",
"रक्त प्रकार"
],
correct: 2,
explanation: "व्यवहार और व्यक्तित्व सामाजिक वातावरण से बनते हैं।"
},

{
q: "पर्यावरण की भूमिका को सबसे अच्छा कौन-सा कथन दर्शाता है?",
a: [
"पर्यावरण बुद्धि तय करता है",
"पर्यावरण सीखने के अनुभव देता है",
"पर्यावरण जीन तय करता है",
"पर्यावरण वंशानुक्रम को बदल देता है"
],
correct: 1,
explanation: "पर्यावरण सीखने के अवसर और अनुभव प्रदान करता है।"
},

{
q: "समृद्ध पर्यावरण में पलने वाले बच्चों में सामान्यतः देखा जाता है",
a: [
"कम बुद्धि",
"विकास में देरी",
"बेहतर संज्ञानात्मक विकास",
"कोई परिवर्तन नहीं"
],
correct: 2,
explanation: "अच्छा पर्यावरण संज्ञानात्मक विकास को बढ़ाता है।"
},

{
q: "वंशानुक्रम और पर्यावरण विकास को किस प्रकार प्रभावित करते हैं?",
a: [
"परस्पर विरोधी रूप में",
"अलग-अलग रूप में",
"पारस्परिक रूप से",
"यादृच्छिक रूप में"
],
correct: 2,
explanation: "दोनों मिलकर विकास को प्रभावित करते हैं।"
},

{
q: "निम्न में से कौन-सा उदाहरण पर्यावरण के प्रभाव को दर्शाता है?",
a: [
"नाक का आकार",
"रक्त समूह",
"बच्चे द्वारा बोली जाने वाली भाषा",
"बालों का रंग"
],
correct: 2,
explanation: "भाषा पर्यावरण से सीखी जाती है।"
},

{
q: "मानसिक विकास सबसे अधिक किससे प्रभावित होता है?",
a: [
"केवल जीन से",
"केवल भौतिक पर्यावरण से",
"अनुभव और उत्तेजना की गुणवत्ता से",
"केवल आयु से"
],
correct: 2,
explanation: "अच्छे अनुभव मानसिक विकास को बढ़ाते हैं।"
},

{
q: "वंशानुक्रम की भूमिका को कौन-सी स्थिति दर्शाती है?",
a: [
"मातृभाषा सीखना",
"सिकल सेल एनीमिया का वंशानुगत होना",
"अच्छे संस्कार सीखना",
"सामाजिक कौशल सीखना"
],
correct: 1,
explanation: "आनुवंशिक रोग वंशानुक्रम से मिलते हैं।"
},

{
q: "सहायक कक्षा-पर्यावरण किसमें मदद करता है?",
a: [
"जीन बदलने में",
"बुद्धि दबाने में",
"सीखने को बढ़ाने में",
"परिपक्वता घटाने में"
],
correct: 2,
explanation: "सकारात्मक कक्षा वातावरण सीखने को बढ़ाता है।"
},

{
q: "विकास का कौन-सा क्षेत्र सबसे अधिक परिवर्तनशील है?",
a: [
"रक्त समूह",
"आँखों का रंग",
"व्यक्तित्व",
"उँगलियों के निशान"
],
correct: 2,
explanation: "व्यक्तित्व पर्यावरण से आसानी से बदल सकता है।"
},

{
q: "एक ही माता-पिता के बच्चों में अंतर किस कारण होता है?",
a: [
"समान वंशानुक्रम",
"समान पर्यावरण",
"जीन का अलग संयोजन",
"पर्यावरण का कोई प्रभाव नहीं"
],
correct: 2,
explanation: "हर बच्चे को जीन का अलग संयोजन मिलता है।"
},

{
q: "पर्यावरणीय अभाव मुख्य रूप से किसे प्रभावित करता है?",
a: [
"रक्त संचार",
"मानसिक और भावनात्मक विकास",
"उँगलियों के निशान",
"लंबाई की क्षमता"
],
correct: 1,
explanation: "खराब पर्यावरण मानसिक और भावनात्मक विकास को रोकता है।"
},

{
q: "पूर्ण विकास के लिए सबसे उपयुक्त स्थिति कौन-सी है?",
a: [
"केवल मजबूत वंशानुक्रम",
"केवल अच्छा पर्यावरण",
"वंशानुक्रम और पर्यावरण की परस्पर क्रिया",
"केवल कठोर अनुशासन"
],
correct: 2,
explanation: "पूर्ण विकास के लिए दोनों आवश्यक हैं।"
},

{
q: "सांस्कृतिक पर्यावरण मुख्य रूप से किसे प्रभावित करता है?",
a: [
"शारीरिक लंबाई",
"भाषा और मूल्य",
"रक्त समूह",
"आँखों का रंग"
],
correct: 1,
explanation: "संस्कृति भाषा और मूल्यों को प्रभावित करती है।"
},

{
q: "बुद्धि के बारे में सही कथन कौन-सा है?",
a: [
"यह पूरी तरह वंशानुगत है",
"यह पूरी तरह सीखी जाती है",
"यह वंशानुक्रम और पर्यावरण दोनों से प्रभावित होती है",
"यह पर्यावरण से असंबंधित है"
],
correct: 2,
explanation: "बुद्धि जीन और अनुभव दोनों पर निर्भर करती है।"
},

{
q: "सीखने को सबसे अधिक प्रभावित करने वाला पर्यावरणीय कारक कौन-सा है?",
a: [
"शिक्षण की गुणवत्ता",
"आँखों का रंग",
"रक्त प्रकार",
"क्रोमोसोम संख्या"
],
correct: 0,
explanation: "अच्छा शिक्षण सीखने को प्रभावी बनाता है।"
},

{
q: "भावनात्मक रूप से सुरक्षित परिवार में पला बच्चा सामान्यतः",
a: [
"खराब समायोजन दिखाता है",
"बेहतर भावनात्मक विकास दिखाता है",
"सामाजिक कौशल नहीं रखता",
"कम बुद्धि दिखाता है"
],
correct: 1,
explanation: "भावनात्मक सुरक्षा स्वस्थ विकास में सहायक होती है।"
},

{
q: "वंशानुक्रम के बारे में कौन-सा कथन सही है?",
a: [
"यह अंतिम व्यवहार तय करता है",
"यह स्थायी क्षमताएँ देता है",
"यह विकास की मूल रूपरेखा देता है",
"यह पर्यावरण से स्वतंत्र है"
],
correct: 2,
explanation: "वंशानुक्रम केवल आधार देता है, परिणाम नहीं।"
},

{
q: "वंशानुक्रम की सीमा को कौन-सा उदाहरण दर्शाता है?",
a: [
"उच्च क्षमता वाला बच्चा लेकिन सीखने का समर्थन नहीं",
"रक्त समूह का विरासत में मिलना",
"आँखों के रंग का विरासत में मिलना",
"आनुवंशिक रोग का विरासत में मिलना"
],
correct: 0,
explanation: "समर्थन न मिलने पर क्षमता विकसित नहीं हो पाती।"
},

{
q: "पर्यावरण विकास को कब से प्रभावित करना शुरू करता है?",
a: [
"केवल स्कूल के बाद",
"केवल किशोरावस्था में",
"जन्म से ही",
"परिपक्वता के बाद"
],
correct: 2,
explanation: "पर्यावरण का प्रभाव जन्म से शुरू हो जाता है।"
},

{
q: "बाल विकास का आधुनिक दृष्टिकोण किस पर ज़ोर देता है?",
a: [
"केवल प्रकृति पर",
"केवल पोषण पर",
"प्रकृति और पोषण की परस्पर क्रिया पर",
"वंशानुक्रम की उपेक्षा पर"
],
correct: 2,
explanation: "आधुनिक मनोविज्ञान दोनों की भूमिका मानता है।"
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
