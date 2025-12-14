
/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट 2
   प्रश्न: 25
   समय: 20 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 2";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "बाल विकास के सिद्धांत";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
  q: "विकास का अर्थ है",
  a: ["व्यवहार में अचानक परिवर्तन", "व्यक्ति में होने वाले समग्र और निरंतर परिवर्तन", "केवल शारीरिक वृद्धि", "केवल मानसिक क्षमता"],
  correct: 1,
  explanation: "विकास में शारीरिक, मानसिक, सामाजिक और भावनात्मक सभी क्षेत्रों का समग्र परिवर्तन शामिल होता है।"
},

{
  q: "वृद्धि और विकास का संबंध इस कारण है कि",
  a: ["दोनों समान हैं", "वृद्धि मात्रात्मक और विकास गुणात्मक होता है", "विकास पहले होता है", "वृद्धि केवल सीखने पर निर्भर करती है"],
  correct: 1,
  explanation: "वृद्धि शारीरिक बढ़ोतरी को दर्शाती है, जबकि विकास गुणात्मक परिवर्तन है।"
},

{
  q: "कौन-सा सिद्धांत बताता है कि विकास एक निश्चित क्रम में होता है?",
  a: ["निरंतरता सिद्धांत", "क्रमिक सिद्धांत", "व्यक्तिगत भिन्नता सिद्धांत", "एकरूपता सिद्धांत"],
  correct: 1,
  explanation: "विकास एक निश्चित और पूर्वानुमेय क्रम का पालन करता है।"
},

{
  q: "छोटी मांसपेशियों से पहले बड़ी मांसपेशियों पर नियंत्रण किस सिद्धांत से संबंधित है?",
  a: ["शिरोपाद सिद्धांत", "निकट से दूर सिद्धांत", "सामान्य से विशिष्ट सिद्धांत", "निरंतरता सिद्धांत"],
  correct: 2,
  explanation: "बच्चा पहले सामान्य और बड़ी गतिविधियाँ सीखता है, फिर सूक्ष्म कौशल।"
},

{
  q: "विकास में व्यक्तिगत भिन्नताओं का मुख्य कारण है",
  a: ["केवल आनुवंशिकता", "केवल वातावरण", "आनुवंशिकता और वातावरण की अंतःक्रिया", "पाठ्यक्रम"],
  correct: 2,
  explanation: "आनुवंशिकता और वातावरण दोनों मिलकर विकास को प्रभावित करते हैं।"
},

{
  q: "सहपाठियों के साथ संपर्क मुख्य रूप से किस विकास से जुड़ा है?",
  a: ["शारीरिक", "सामाजिक", "नैतिक", "भाषाई"],
  correct: 1,
  explanation: "सामाजिक विकास सहपाठियों के साथ संबंधों से प्रभावित होता है।"
},

{
  q: "आत्म-नियंत्रण और भावनात्मक संतुलन किस विकास से संबंधित है?",
  a: ["संज्ञानात्मक", "शारीरिक", "भावनात्मक", "भाषाई"],
  correct: 2,
  explanation: "भावनात्मक विकास से भावनाओं पर नियंत्रण आता है।"
},

{
  q: "विकास के बारे में सही कथन कौन-सा है?",
  a: ["यह प्रौढ़ावस्था में रुक जाता है", "यह अनियमित होता है", "यह निरंतर होता है", "यह अचानक होता है"],
  correct: 2,
  explanation: "विकास एक निरंतर और आजीवन प्रक्रिया है।"
},

{
  q: "मूल्य और नैतिकता सीखना किस विकास से संबंधित है?",
  a: ["शारीरिक विकास", "नैतिक विकास", "भाषा विकास", "संज्ञानात्मक विकास"],
  correct: 1,
  explanation: "नैतिक विकास में सही-गलत की समझ आती है।"
},

{
  q: "प्रारंभिक बाल्यावस्था में किसका प्रभाव सबसे अधिक होता है?",
  a: ["विद्यालय पाठ्यक्रम", "केवल शिक्षक", "घरेलू वातावरण", "सहपाठी दबाव"],
  correct: 2,
  explanation: "प्रारंभिक वर्षों में परिवार और घर का वातावरण सबसे प्रभावी होता है।"
},

{
  q: "बच्चों की सीखने की तैयारी मुख्य रूप से किस पर निर्भर करती है?",
  a: ["केवल आयु", "परिपक्वता स्तर", "दंड", "प्रतिस्पर्धा"],
  correct: 1,
  explanation: "सीखना तभी प्रभावी होता है जब बच्चा मानसिक रूप से परिपक्व हो।"
},

{
  q: "बाल-केन्द्रित शिक्षा किस सिद्धांत पर आधारित है?",
  a: ["एकरूप विकास", "व्यक्तिगत भिन्नता", "अनियमित विकास", "यांत्रिक अधिगम"],
  correct: 1,
  explanation: "बाल-केन्द्रित शिक्षा व्यक्तिगत भिन्नताओं को महत्व देती है।"
},

{
  q: "मोटर विकास मुख्य रूप से किसमें सहायक होता है?",
  a: ["सोचने की क्षमता", "शरीर का समन्वय", "भाषा प्रयोग", "नैतिक निर्णय"],
  correct: 1,
  explanation: "मोटर विकास से शरीर का संतुलन और समन्वय बढ़ता है।"
},

{
  q: "पोषण का सबसे अधिक प्रभाव किस विकास पर पड़ता है?",
  a: ["नैतिक", "सामाजिक", "शारीरिक", "भाषाई"],
  correct: 2,
  explanation: "उचित पोषण शारीरिक विकास के लिए आवश्यक है।"
},

{
  q: "अनुकरण द्वारा सीखना किस सिद्धांत से संबंधित है?",
  a: ["प्रयास और त्रुटि सिद्धांत", "सामाजिक अधिगम सिद्धांत", "परिपक्वता सिद्धांत", "अंतर्दृष्टि सिद्धांत"],
  correct: 1,
  explanation: "सामाजिक अधिगम सिद्धांत के अनुसार बच्चा दूसरों को देखकर सीखता है।"
},

{
  q: "निम्न में से कौन-सा विकास को प्रभावित करने वाला बाह्य कारक है?",
  a: ["बुद्धि", "आनुवंशिकता", "परिवार", "परिपक्वता"],
  correct: 2,
  explanation: "परिवार विकास का एक महत्वपूर्ण बाह्य कारक है।"
},

{
  q: "किस अवस्था में शारीरिक वृद्धि तीव्र होती है?",
  a: ["शैशवावस्था", "किशोरावस्था", "प्रौढ़ावस्था", "वृद्धावस्था"],
  correct: 1,
  explanation: "किशोरावस्था में शारीरिक परिवर्तन तेज़ी से होते हैं।"
},

{
  q: "भाषा विकास सबसे अधिक किससे जुड़ा होता है?",
  a: ["सामाजिक अंतःक्रिया", "ऊँचाई", "वजन", "प्रतिवर्त क्रिया"],
  correct: 0,
  explanation: "अन्य लोगों से बातचीत भाषा विकास में सहायक होती है।"
},

{
  q: "तार्किक सोच विकसित होना किस विकास से संबंधित है?",
  a: ["भावनात्मक", "सामाजिक", "संज्ञानात्मक", "शारीरिक"],
  correct: 2,
  explanation: "संज्ञानात्मक विकास से सोचने और तर्क करने की क्षमता आती है।"
},

{
  q: "सहयोगी कक्षा वातावरण मुख्य रूप से किसमें सहायक होता है?",
  a: ["भय विकास", "स्वस्थ भावनात्मक विकास", "शारीरिक कमजोरी", "अलगाव"],
  correct: 1,
  explanation: "सकारात्मक वातावरण भावनात्मक विकास को बढ़ावा देता है।"
},

{
  q: "प्रारंभिक अनुभव भविष्य को प्रभावित करते हैं, यह किस सिद्धांत को दर्शाता है?",
  a: ["निरंतरता सिद्धांत", "प्रारंभिक आधार सिद्धांत", "एकरूपता सिद्धांत", "अनियमित सिद्धांत"],
  correct: 1,
  explanation: "प्रारंभिक अनुभव जीवन की नींव बनाते हैं।"
},

{
  q: "समाज में समायोजन की क्षमता किस विकास से आती है?",
  a: ["शारीरिक", "भावनात्मक", "सामाजिक", "बौद्धिक"],
  correct: 2,
  explanation: "सामाजिक विकास से सहयोग और समायोजन संभव होता है।"
},

{
  q: "मूल्यों और दृष्टिकोणों का विकास किस विकास का भाग है?",
  a: ["शारीरिक विकास", "नैतिक विकास", "भाषाई विकास", "मोटर विकास"],
  correct: 1,
  explanation: "नैतिक विकास में मूल्य और दृष्टिकोण शामिल होते हैं।"
},

{
  q: "समग्र विकास का सही अर्थ क्या है?",
  a: ["केवल शैक्षणिक विकास", "केवल शारीरिक विकास", "विकास के सभी क्षेत्रों का महत्व", "परीक्षा-केंद्रित विकास"],
  correct: 2,
  explanation: "समग्र विकास में सभी क्षेत्रों का संतुलित विकास शामिल है।"
},

{
  q: "शिक्षकों के लिए बाल विकास का अध्ययन करने का मुख्य उद्देश्य है",
  a: ["बच्चों की तुलना करना", "दंड देना", "प्रभावी शिक्षण की योजना बनाना", "कार्यभार बढ़ाना"],
  correct: 2,
  explanation: "बाल विकास की समझ से शिक्षक बेहतर शिक्षण रणनीति बना सकते हैं।"
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
