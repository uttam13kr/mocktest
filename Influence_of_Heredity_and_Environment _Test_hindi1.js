/* ============================================================
   TEST 1 : वंशानुक्रम और पर्यावरण का प्रभाव
   विषय: बाल विकास एवं शिक्षाशास्त्र (CTET)
   समय: 20 मिनट | प्रश्न: 25
   NOTE: प्रश्नों में कोई क्रम संख्या न लिखें
============================================================ */

// ✔ TEST TITLE
const TEST_TITLE = "Influence of Heredity and Environment – Test 1 (Hindi)";

// ✔ TIME LIMIT
const TIME_LIMIT_MINUTES = 20;

// ✔ QUIZ QUESTIONS
const quizData = [

{
  question: "वंशानुक्रम का अर्थ गुणों का स्थानांतरण किससे किसमें होना है?",
  options: [
    "शिक्षकों से छात्रों में",
    "माता-पिता से बच्चों में",
    "समाज से व्यक्ति में",
    "विद्यालय से बच्चे में"
  ],
  answer: "माता-पिता से बच्चों में",
  explanation: "वंशानुक्रम का अर्थ माता-पिता से बच्चों में जैविक गुणों का स्थानांतरण है।"
},

{
  question: "निम्नलिखित में से कौन-सा गुण मुख्यतः वंशानुक्रम से निर्धारित होता है?",
  options: [
    "बोली जाने वाली भाषा",
    "धार्मिक विश्वास",
    "आँखों का रंग",
    "नैतिक मूल्य"
  ],
  answer: "आँखों का रंग",
  explanation: "आँखों का रंग जीन के माध्यम से प्राप्त होने वाला शारीरिक गुण है।"
},

{
  question: "व्यक्तियों में भिन्नता मुख्य रूप से किस कारण होती है?",
  options: [
    "सभी बच्चों को समान जीन मिलते हैं",
    "सभी का पर्यावरण समान होता है",
    "जीन का संयोजन अलग-अलग होता है",
    "सभी को समान शिक्षा मिलती है"
  ],
  answer: "जीन का संयोजन अलग-अलग होता है",
  explanation: "हर बच्चे को जीन का अलग संयोजन मिलता है, जिससे भिन्नता होती है।"
},

{
  question: "HH गोडार्ड के अनुसार बुद्धि",
  options: [
    "पूर्णतः पर्यावरण पर निर्भर है",
    "पूर्णतः सीखी जाती है",
    "माता-पिता से वंशानुक्रम द्वारा मिलती है",
    "वंशानुक्रम से स्वतंत्र होती है"
  ],
  answer: "माता-पिता से वंशानुक्रम द्वारा मिलती है",
  explanation: "HH गोडार्ड का मानना था कि बुद्धि मुख्य रूप से वंशानुगत होती है।"
},

{
  question: "बच्चे का स्वभाव मुख्यतः किससे प्रभावित होता है?",
  options: [
    "विद्यालय का वातावरण",
    "सहपाठी समूह",
    "वंशानुक्रम",
    "पाठ्यक्रम"
  ],
  answer: "वंशानुक्रम",
  explanation: "स्वभाव जन्मजात होता है और वंशानुक्रम से प्रभावित होता है।"
},

{
  question: "निम्न में से कौन-सा विकास पर्यावरण से सबसे अधिक प्रभावित होता है?",
  options: [
    "लंबाई",
    "आँखों का रंग",
    "व्यक्तित्व",
    "रक्त समूह"
  ],
  answer: "व्यक्तित्व",
  explanation: "व्यक्तित्व का विकास मुख्यतः पर्यावरण से होता है।"
},

{
  question: "पर्यावरण से तात्पर्य है",
  options: [
    "केवल भौतिक परिवेश",
    "केवल सामाजिक कारक",
    "व्यक्ति के चारों ओर की सभी वस्तुएँ",
    "केवल विद्यालय का वातावरण"
  ],
  answer: "व्यक्ति के चारों ओर की सभी वस्तुएँ",
  explanation: "पर्यावरण में भौतिक, सामाजिक और सांस्कृतिक सभी तत्व शामिल होते हैं।"
},

{
  question: "पर्यावरण को वस्तु के तुरंत चारों ओर की चीज़ बताने वाले विचारक कौन हैं?",
  options: [
    "एन नास्टेस",
    "गिस्बर्ट",
    "जॉन लॉक",
    "प्लेटो"
  ],
  answer: "गिस्बर्ट",
  explanation: "गिस्बर्ट ने पर्यावरण को तुरंत प्रभाव डालने वाली चीज़ बताया।"
},

{
  question: "निम्न में से कौन-सा गुण वंशानुक्रम से सबसे कम प्रभावित होता है?",
  options: [
    "लंबाई",
    "बुद्धि की क्षमता",
    "बोली जाने वाली भाषा",
    "आँखों का रंग"
  ],
  answer: "बोली जाने वाली भाषा",
  explanation: "भाषा पर्यावरण से सीखी जाती है, वंशानुक्रम से नहीं।"
},

{
  question: "वंशानुक्रम मुख्यतः क्या प्रदान करता है?",
  options: [
    "अंतिम व्यवहार",
    "सीखने के अनुभव",
    "संभावित क्षमताएँ",
    "सामाजिक कौशल"
  ],
  answer: "संभावित क्षमताएँ",
  explanation: "वंशानुक्रम क्षमता देता है, विकास पर्यावरण करता है।"
},

{
  question: "परिपक्वता का सबसे उपयुक्त अर्थ क्या है?",
  options: [
    "अभ्यास द्वारा सीखना",
    "अनुभव से विकास",
    "जैविक तत्परता",
    "सामाजिक संपर्क"
  ],
  answer: "जैविक तत्परता",
  explanation: "परिपक्वता जैविक विकास की अवस्था को दर्शाती है।"
},

{
  question: "वंचित पर्यावरण में पले बच्चे में क्या देखा जा सकता है?",
  options: [
    "बेहतर बुद्धि",
    "मानसिक विकास में विलंब",
    "तेज़ परिपक्वता",
    "कोई प्रभाव नहीं"
  ],
  answer: "मानसिक विकास में विलंब",
  explanation: "खराब पर्यावरण मानसिक विकास को बाधित करता है।"
},

{
  question: "पर्यावरण की भूमिका को कौन-सा उदाहरण स्पष्ट करता है?",
  options: [
    "आँखों का रंग",
    "रक्त समूह",
    "जंगली बच्चा बोल न पाना",
    "उँगलियों के निशान"
  ],
  answer: "जंगली बच्चा बोल न पाना",
  explanation: "मानवीय पर्यावरण न मिलने से भाषा का विकास नहीं हो पाया।"
},

{
  question: "Nature से तात्पर्य है",
  options: [
    "पालन-पोषण",
    "विद्यालयी शिक्षा",
    "आनुवंशिक गुण",
    "संस्कृति"
  ],
  answer: "आनुवंशिक गुण",
  explanation: "Nature का अर्थ जन्म से मिले आनुवंशिक गुण हैं।"
},

{
  question: "Nurture से तात्पर्य है",
  options: [
    "केवल जीन",
    "वंशानुगत गुण",
    "पर्यावरण और पालन-पोषण",
    "रक्त समूह"
  ],
  answer: "पर्यावरण और पालन-पोषण",
  explanation: "Nurture में वातावरण, शिक्षा और अनुभव शामिल हैं।"
},

{
  question: "जॉन लॉक के अनुसार बच्चे का मस्तिष्क होता है",
  options: [
    "जन्म से निश्चित",
    "कोरी स्लेट",
    "पूरी तरह विकसित",
    "अनुभव से अप्रभावित"
  ],
  answer: "कोरी स्लेट",
  explanation: "जॉन लॉक का मानना था कि ज्ञान अनुभव से आता है।"
},

{
  question: "निम्न में से कौन-सा कथन सही है?",
  options: [
    "केवल वंशानुक्रम विकास को प्रभावित करता है",
    "केवल पर्यावरण विकास को प्रभावित करता है",
    "वंशानुक्रम और पर्यावरण दोनों विकास को प्रभावित करते हैं",
    "दोनों का कोई प्रभाव नहीं"
  ],
  answer: "वंशानुक्रम और पर्यावरण दोनों विकास को प्रभावित करते हैं",
  explanation: "विकास दोनों की परस्पर क्रिया का परिणाम है।"
},

{
  question: "चलना जैसे शारीरिक विकास मुख्यतः किस पर निर्भर करते हैं?",
  options: [
    "शिक्षण",
    "परिपक्वता",
    "सहपाठी समूह",
    "अनुशासन"
  ],
  answer: "परिपक्वता",
  explanation: "चलना जैविक परिपक्वता पर निर्भर करता है।"
},

{
  question: "निम्न में से कौन-सा गुण वंशानुगत है?",
  options: [
    "दृष्टिकोण",
    "रुचि",
    "रक्त समूह",
    "भाषा"
  ],
  answer: "रक्त समूह",
  explanation: "रक्त समूह जीन द्वारा निर्धारित होता है।"
},

{
  question: "व्यक्तित्व में सुधार मुख्यतः किससे होता है?",
  options: [
    "जीन",
    "पर्यावरण",
    "क्रोमोसोम",
    "हार्मोन"
  ],
  answer: "पर्यावरण",
  explanation: "पर्यावरण व्यक्तित्व को आकार देता है।"
},

{
  question: "भाई-बहनों में अंतर क्यों होता है?",
  options: [
    "समान जीन होने से",
    "केवल पर्यावरण के कारण",
    "जीन के अलग संयोजन के कारण",
    "समान पालन-पोषण के कारण"
  ],
  answer: "जीन के अलग संयोजन के कारण",
  explanation: "हर बच्चे को अलग जीन संयोजन मिलता है।"
},

{
  question: "निम्न में से कौन पर्यावरणीय कारक है?",
  options: [
    "आँखों का रंग",
    "रक्त प्रकार",
    "परिवार का वातावरण",
    "लंबाई की क्षमता"
  ],
  answer: "परिवार का वातावरण",
  explanation: "परिवार का वातावरण पर्यावरण का भाग है।"
},

{
  question: "बुद्धि का सर्वोत्तम विकास तब होता है जब",
  options: [
    "केवल वंशानुक्रम अच्छा हो",
    "केवल पर्यावरण अच्छा हो",
    "वंशानुक्रम और पर्यावरण दोनों सहायक हों",
    "दोनों महत्वहीन हों"
  ],
  answer: "वंशानुक्रम और पर्यावरण दोनों सहायक हों",
  explanation: "क्षमता वंशानुक्रम देता है, विकास पर्यावरण करता है।"
},

{
  question: "वंशानुक्रम के बारे में कौन-सा कथन गलत है?",
  options: [
    "यह क्षमता निर्धारित करता है",
    "यह परिपक्वता को प्रभावित करता है",
    "यह अकेले व्यक्तित्व तय करता है",
    "यह स्वभाव को प्रभावित करता है"
  ],
  answer: "यह अकेले व्यक्तित्व तय करता है",
  explanation: "व्यक्तित्व पर पर्यावरण का अधिक प्रभाव होता है।"
},

{
  question: "मानव विकास के बारे में सही दृष्टिकोण है",
  options: [
    "Nature, nurture पर हावी है",
    "Nurture, nature पर हावी है",
    "दोनों की परस्पर क्रिया से विकास होता है",
    "दोनों की कोई भूमिका नहीं"
  ],
  answer: "दोनों की परस्पर क्रिया से विकास होता है",
  explanation: "मानव विकास nature और nurture की संयुक्त क्रिया है।"
}

];

/* ============================================================
   END OF ALLOWED SECTION — QUIZ ENGINE CODE IS SKIPPED
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
