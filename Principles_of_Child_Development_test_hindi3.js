/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट 3 (कॉन्सेप्चुअल)
   प्रश्न: 25
   समय: 20 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 3 (Conceptual)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "बाल विकास के सिद्धांत";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
  q: "एक शिक्षक देखता है कि बच्चा तार्किक सोच सकता है लेकिन भावनाओं को नियंत्रित नहीं कर पाता। यह दर्शाता है कि विकास",
  a: ["सभी क्षेत्रों में समान होता है", "एक-दूसरे से स्वतंत्र होता है", "परस्पर संबंधित लेकिन समान नहीं होता", "केवल बुद्धि पर निर्भर होता है"],
  correct: 2,
  explanation: "विकास के सभी क्षेत्र जुड़े होते हैं लेकिन समान गति से विकसित नहीं होते।"
},

{
  q: "जब बच्चा लिखने से पहले चलना सीखता है तो यह दर्शाता है कि विकास",
  a: ["अनियमित है", "केवल शिक्षा पर निर्भर है", "एक निश्चित क्रम का पालन करता है", "केवल अभ्यास पर आधारित है"],
  correct: 2,
  explanation: "विकास हमेशा एक निश्चित और पूर्वानुमेय क्रम का पालन करता है।"
},

{
  q: "यदि बच्चे को भावनात्मक समर्थन अच्छा मिले लेकिन पोषण खराब हो, तो सबसे अधिक प्रभावित होगा",
  a: ["सामाजिक विकास", "शारीरिक विकास", "भाषा विकास", "नैतिक विकास"],
  correct: 1,
  explanation: "पोषण सीधे रूप से शारीरिक विकास को प्रभावित करता है।"
},

{
  q: "यदि शिक्षक अलग-अलग बच्चों के लिए अलग गतिविधियाँ योजना बनाता है, तो वह किस सिद्धांत का पालन कर रहा है?",
  a: ["एकरूप विकास", "व्यक्तिगत भिन्नता का सिद्धांत", "अनियमित विकास", "यांत्रिक अधिगम"],
  correct: 1,
  explanation: "हर बच्चा अलग होता है इसलिए सीखने के अवसर भी अलग होने चाहिए।"
},

{
  q: "यदि बच्चा हिंसक व्यवहार देखकर वही व्यवहार अपनाता है तो यह किस सिद्धांत से जुड़ा है?",
  a: ["प्रयास व त्रुटि सिद्धांत", "परिपक्वता सिद्धांत", "सामाजिक अधिगम सिद्धांत", "अंतर्दृष्टि सिद्धांत"],
  correct: 2,
  explanation: "बच्चे दूसरों को देखकर और उनका अनुकरण करके सीखते हैं।"
},

{
  q: "वह कौन-सी स्थिति है जो प्रारंभिक अनुभवों के भविष्य पर प्रभाव को दर्शाती है?",
  a: ["किशोरावस्था में लंबाई बढ़ना", "प्रारंभिक प्रोत्साहन के कारण आत्मविश्वास दिखाना", "विद्यालय में नई जानकारी सीखना", "उत्तर रट लेना"],
  correct: 1,
  explanation: "प्रारंभिक भावनात्मक अनुभव व्यक्तित्व को प्रभावित करते हैं।"
},

{
  q: "यदि शिक्षक सभी बच्चों से एक ही गति से सीखने की अपेक्षा करता है तो वह किस सिद्धांत की उपेक्षा कर रहा है?",
  a: ["निरंतरता सिद्धांत", "परिपक्वता सिद्धांत", "व्यक्तिगत भिन्नता सिद्धांत", "क्रमिक विकास सिद्धांत"],
  correct: 2,
  explanation: "हर बच्चा अलग गति से सीखता है।"
},

{
  q: "वह विचार कि विकास को readiness से पहले मजबूर नहीं किया जा सकता, किस बात को दर्शाता है?",
  a: ["दंड", "परिपक्वता", "शर्तबद्धता", "यांत्रिक अभ्यास"],
  correct: 1,
  explanation: "सीखना बच्चे की परिपक्वता पर निर्भर करता है।"
},

{
  q: "कौन-सा कक्षा वातावरण समग्र विकास को बढ़ावा देता है?",
  a: ["केवल लिखित परीक्षा", "केवल शैक्षणिक ध्यान", "शारीरिक, सामाजिक और भावनात्मक गतिविधियाँ", "केवल कठोर अनुशासन"],
  correct: 2,
  explanation: "समग्र विकास में सभी क्षेत्रों का विकास शामिल है।"
},

{
  q: "एक बच्चा समस्या हल कर सकता है लेकिन सहपाठियों के साथ नहीं रह पाता। यह कमजोरी किस क्षेत्र में है?",
  a: ["संज्ञानात्मक विकास", "सामाजिक विकास", "शारीरिक विकास", "भाषा विकास"],
  correct: 1,
  explanation: "सहपाठियों के साथ संबंध सामाजिक विकास का हिस्सा है।"
},

{
  q: "यदि विकास निरंतर न होता तो बच्चे",
  a: ["अचानक विकास करते", "केवल बचपन तक ही विकसित होते", "कभी विकसित नहीं होते", "एक जैसे विकसित होते"],
  correct: 0,
  explanation: "निरंतरता का अर्थ है विकास धीरे-धीरे होता है, अचानक नहीं।"
},

{
  q: "गुणात्मक विकास का सर्वोत्तम उदाहरण कौन सा है?",
  a: ["लंबाई बढ़ना", "वजन बढ़ना", "तर्क क्षमता बढ़ना", "मांसपेशियों का बढ़ना"],
  correct: 2,
  explanation: "तर्क क्षमता गुणात्मक परिवर्तन है।"
},

{
  q: "पेंसिल पकड़ना सीखने के बाद लिखना सीखना किस सिद्धांत को दर्शाता है?",
  a: ["शिरोपाद सिद्धांत", "सामान्य से विशिष्ट सिद्धांत", "एकरूप विकास", "अनियमित विकास"],
  correct: 1,
  explanation: "बच्चा पहले सामान्य कौशल सीखता है फिर विशिष्ट।"
},

{
  q: "किस कारक का बच्चे के मूल्य प्रणाली पर सबसे अधिक प्रभाव पड़ता है?",
  a: ["ऊँचाई", "परिवार और सहपाठी", "प्रतिवर्त क्रियाएँ", "केवल आयु"],
  correct: 1,
  explanation: "सामाजिक वातावरण मूल्य निर्माण करता है।"
},

{
  q: "यदि गरीब परिवार का बच्चा भावनात्मक समर्थन मिलने से अच्छा प्रदर्शन करता है, तो यह दर्शाता है कि",
  a: ["पैसे का कोई महत्व नहीं", "वातावरण हमेशा आनुवंशिकता से अधिक शक्तिशाली होता है", "सकारात्मक वातावरण विकास में मदद करता है", "विकास संयोग है"],
  correct: 2,
  explanation: "सहायक वातावरण विकास में मदद करता है।"
},

{
  q: "कौन-सा शिक्षक व्यवहार व्यक्तिगत भिन्नता का सम्मान करता है?",
  a: ["सभी के लिए एक ही तरीका", "सार्वजनिक तुलना", "विभिन्न सीखने के अवसर देना", "धीमे बच्चों को अनदेखा करना"],
  correct: 2,
  explanation: "हर बच्चे को अलग अवसर देने चाहिए।"
},

{
  q: "वृद्धि और विकास के संबंध को सबसे सही कौन व्यक्त करता है?",
  a: ["दोनों का कोई संबंध नहीं", "केवल वृद्धि विकास कराती है", "वृद्धि विकास का समर्थन करती है", "विकास वृद्धि को रोकता है"],
  correct: 2,
  explanation: "शारीरिक वृद्धि विकास को समर्थन देती है।"
},

{
  q: "यदि बच्चा भाषा में अच्छा है लेकिन भावनात्मक नियंत्रण कमजोर है, तो मदद किस क्षेत्र में चाहिए?",
  a: ["भाषा विकास", "भावनात्मक विकास", "शारीरिक विकास", "मोटर विकास"],
  correct: 1,
  explanation: "भावनात्मक विकास भावनाओं को नियंत्रित करने से जुड़ा है।"
},

{
  q: "बच्चों की निरंतर तुलना करना",
  a: ["सकारात्मक होता है", "निरंतर विकास बढ़ाता है", "भावनात्मक विकास को नुकसान पहुँचाता है", "सीखना तेज करता है"],
  correct: 2,
  explanation: "तुलना आत्म-सम्मान और भावनात्मक संतुलन को नुकसान पहुंचाती है।"
},

{
  q: "सूक्ष्म मांसपेशियों का विकास बड़ी मांसपेशियों के बाद होता है, यह किस सिद्धांत से संबंधित है?",
  a: ["निकट से दूर सिद्धांत", "शिरोपाद सिद्धांत", "सामान्य से विशिष्ट सिद्धांत", "निरंतरता सिद्धांत"],
  correct: 2,
  explanation: "पहले बड़ी गतिविधियाँ, फिर सूक्ष्म।"
},

{
  q: "वह स्थिति जो आनुवंशिकता और वातावरण की पारस्परिक क्रिया को दर्शाती है",
  a: ["बच्चे का केवल लंबा होना", "परिवार के संपर्क से भाषा सीखना", "जन्मजात प्रतिवर्त", "रटना"],
  correct: 1,
  explanation: "भाषा आनुवंशिक क्षमता और वातावरण दोनों से विकसित होती है।"
},

{
  q: "खेल के माध्यम से सीखना किसका समर्थन करता है?",
  a: ["यांत्रिक अधिगम", "स्वाभाविक विकास", "कठोर दंड", "रटने का अधिगम"],
  correct: 1,
  explanation: "खेल प्राकृतिक और सार्थक सीख प्रदान करता है।"
},

{
  q: "सही और गलत की समझ किस विकास से आती है?",
  a: ["शारीरिक विकास", "नैतिक विकास", "संज्ञानात्मक विकास", "मोटर विकास"],
  correct: 1,
  explanation: "नैतिक विकास मूल्यों और नैतिकता से जुड़ा है।"
},

{
  q: "बहुत छोटे बच्चे से अमूर्त सोच की अपेक्षा करना किस सिद्धांत की अनदेखी है?",
  a: ["परिपक्वता और readiness सिद्धांत", "निरंतरता सिद्धांत", "व्यक्तिगत भिन्नता सिद्धांत", "सामाजिक अधिगम सिद्धांत"],
  correct: 0,
  explanation: "अमूर्त सोच के लिए संज्ञानात्मक परिपक्वता चाहिए।"
},

{
  q: "शिक्षकों के लिए बाल विकास का अध्ययन करने का मुख्य उद्देश्य है",
  a: ["कक्षा नियंत्रित करना", "बच्चों के अनुसार शिक्षण योजना बनाना", "सिलेबस जल्दी पूरा करना", "अधिक दबाव डालना"],
  correct: 1,
  explanation: "बाल विकास समझने से शिक्षक बेहतर शिक्षण डिजाइन कर सकता है।"
}

];

/* ============================================================
   END OF ALLOWED SECTION — DO NOT EDIT ANYTHING BELOW
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
