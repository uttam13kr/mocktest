
/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट 1
   प्रश्न: 25
   समय: 30 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 1";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "बाल विकास के सिद्धांत";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
  q: "बाल विकास का अध्ययन जन्म से किस अवस्था तक किया जाता है?",
  a: ["प्रौढ़ावस्था", "वृद्धावस्था", "किशोरावस्था", "मध्य आयु"],
  correct: 2,
  explanation: "बाल विकास में जन्म से किशोरावस्था तक होने वाले परिवर्तनों का अध्ययन किया जाता है।"
},

{
  q: "यह कथन कि प्रत्येक बच्चा अलग होता है, किस सिद्धांत को दर्शाता है?",
  a: ["एकरूप विकास", "व्यक्तिगत भिन्नता का सिद्धांत", "शिरोपाद सिद्धांत", "निकट से दूर सिद्धांत"],
  correct: 1,
  explanation: "व्यक्तिगत भिन्नता का सिद्धांत बताता है कि हर बच्चा अद्वितीय होता है।"
},

{
  q: "सिर से पैर की ओर होने वाले विकास को क्या कहा जाता है?",
  a: ["निकट से दूर सिद्धांत", "सामान्य से विशिष्ट", "शिरोपाद सिद्धांत", "निरंतरता सिद्धांत"],
  correct: 2,
  explanation: "शिरोपाद सिद्धांत के अनुसार विकास सिर से पैर की ओर होता है।"
},

{
  q: "शरीर के मध्य भाग से बाहरी अंगों की ओर विकास किस सिद्धांत को दर्शाता है?",
  a: ["शिरोपाद सिद्धांत", "निकट से दूर की ओर सिद्धांत", "क्रमिक विकास", "पूर्वानुमेयता"],
  correct: 1,
  explanation: "निकट से दूर की ओर सिद्धांत में विकास केंद्र से बाहरी भागों की ओर होता है।"
},

{
  q: "विकास कभी रुकता नहीं, यह किस सिद्धांत को दर्शाता है?",
  a: ["निरंतरता का सिद्धांत", "पूर्वानुमेयता", "व्यक्तिगत भिन्नता", "एकरूपता"],
  correct: 0,
  explanation: "विकास जन्म से परिपक्वता तक निरंतर चलता रहता है।"
},

{
  q: "साधारण क्रियाओं से जटिल कौशल की ओर विकास किस सिद्धांत को दर्शाता है?",
  a: ["सामान्य से विशिष्ट", "व्यक्तिगत भिन्नता", "परिपक्वता", "आनुवंशिकता"],
  correct: 0,
  explanation: "बच्चा पहले सामान्य गतिविधियाँ करता है, बाद में विशिष्ट कौशल सीखता है।"
},

{
  q: "विकास के सभी क्षेत्र एक-दूसरे से कैसे जुड़े होते हैं?",
  a: ["स्वतंत्र", "अलग-अलग", "परस्पर संबंधित", "असंबंधित"],
  correct: 2,
  explanation: "शारीरिक, मानसिक, सामाजिक और भावनात्मक विकास आपस में जुड़े होते हैं।"
},

{
  q: "कौन-सी अवस्था विकास की दृष्टि से सबसे अधिक महत्वपूर्ण मानी जाती है?",
  a: ["प्रौढ़ावस्था", "वृद्धावस्था", "प्रारंभिक बाल्यावस्था", "किशोरावस्था"],
  correct: 2,
  explanation: "प्रारंभिक बाल्यावस्था के अनुभव पूरे जीवन को प्रभावित करते हैं।"
},

{
  q: "सोच और व्यवहार से संबंधित विकास किस प्रकार का होता है?",
  a: ["मात्रात्मक", "गुणात्मक", "संख्यात्मक", "भौतिक"],
  correct: 1,
  explanation: "मानसिक और व्यवहारिक परिवर्तन गुणात्मक होते हैं।"
},

{
  q: "परिपक्वता सिद्धांत किस मनोवैज्ञानिक ने दिया?",
  a: ["पियाजे", "स्किनर", "गेसेल", "वायगोत्स्की"],
  correct: 2,
  explanation: "परिपक्वता सिद्धांत गेसेल द्वारा दिया गया।"
},

{
  q: "परिपक्वता सिद्धांत के अनुसार बच्चों में अंतर क्यों होता है?",
  a: ["केवल वातावरण", "केवल सीखना", "परिपक्वता की गति", "दंड"],
  correct: 2,
  explanation: "सभी बच्चे समान अवस्थाओं से गुजरते हैं, पर गति अलग होती है।"
},

{
  q: "दूसरों को देखकर सीखना किस सिद्धांत से संबंधित है?",
  a: ["प्रयास और त्रुटि", "सामाजिक अधिगम सिद्धांत", "परिपक्वता सिद्धांत", "अंतर्दृष्टि अधिगम"],
  correct: 1,
  explanation: "सामाजिक अधिगम सिद्धांत में बच्चा अनुकरण द्वारा सीखता है।"
},

{
  q: "निम्न में से कौन विकास का आंतरिक कारक है?",
  a: ["परिवार", "विद्यालय", "आनुवंशिकता", "पड़ोस"],
  correct: 2,
  explanation: "आनुवंशिकता विकास का आंतरिक कारक है।"
},

{
  q: "संतुलित भावनाएँ बच्चे में किसे बढ़ावा देती हैं?",
  a: ["खराब समायोजन", "अच्छा सामाजिक व्यवहार", "कम आत्मविश्वास", "धीमी सीख"],
  correct: 1,
  explanation: "भावनात्मक संतुलन से सामाजिक व्यवहार बेहतर होता है।"
},

{
  q: "प्रदूषण और आवास किस कारक में आते हैं?",
  a: ["आनुवंशिकता", "भौतिक वातावरण", "बुद्धि", "भावना"],
  correct: 1,
  explanation: "प्रदूषण और आवास भौतिक वातावरण के भाग हैं।"
},

{
  q: "सामाजिक-आर्थिक स्थिति मुख्य रूप से किसे प्रभावित करती है?",
  a: ["शिक्षा और अवसर", "जीन", "प्रतिवर्त क्रियाएँ", "सहज प्रवृत्ति"],
  correct: 0,
  explanation: "आर्थिक स्थिति शिक्षा और अवसरों को प्रभावित करती है।"
},

{
  q: "बाल मनोविज्ञान मुख्य रूप से किसका अध्ययन करता है?",
  a: ["वयस्कों का व्यवहार", "बच्चों का मानसिक और भावनात्मक विकास", "शिक्षण विधियाँ", "विद्यालय प्रबंधन"],
  correct: 1,
  explanation: "बाल मनोविज्ञान बच्चों के मानसिक और भावनात्मक विकास का अध्ययन करता है।"
},

{
  q: "बाल मनोविज्ञान का ज्ञान शिक्षक को किसमें सहायता करता है?",
  a: ["दंड देने में", "अंतर अनदेखा करने में", "बच्चों को समझने में", "तेज़ पढ़ाने में"],
  correct: 2,
  explanation: "बाल मनोविज्ञान से शिक्षक बच्चों को बेहतर समझ पाता है।"
},

{
  q: "व्यक्तिगत अंतर किस सिद्धांत से संबंधित है?",
  a: ["निरंतरता", "एकरूपता", "व्यक्तिगत भिन्नता", "पूर्वानुमेयता"],
  correct: 2,
  explanation: "हर बच्चा अलग होता है, यह व्यक्तिगत भिन्नता का सिद्धांत है।"
},

{
  q: "शरीर के अलग-अलग भागों का अलग गति से बढ़ना क्या दर्शाता है?",
  a: ["एकरूप विकास", "विभिन्न दर का विकास", "असतत विकास", "अनियमित विकास"],
  correct: 1,
  explanation: "शरीर के सभी अंग समान गति से विकसित नहीं होते।"
},

{
  q: "किस प्रकार का विकास अधिक पूर्वानुमेय होता है?",
  a: ["भावनात्मक", "मानसिक", "शारीरिक", "सामाजिक"],
  correct: 2,
  explanation: "शारीरिक विकास का अनुमान आसानी से लगाया जा सकता है।"
},

{
  q: "भाषा विकास पर सबसे अधिक प्रभाव किसका पड़ता है?",
  a: ["भावनात्मक संतुलन", "ऊँचाई", "वजन", "प्रतिवर्त"],
  correct: 0,
  explanation: "भावनात्मक स्थिरता भाषा विकास में सहायक होती है।"
},

{
  q: "परिवार मुख्य रूप से किस विकास को प्रभावित करता है?",
  a: ["नैतिक और भावनात्मक विकास", "आनुवंशिक गुण", "प्रतिवर्त क्रियाएँ", "केवल शारीरिक विकास"],
  correct: 0,
  explanation: "परिवार बच्चे के नैतिक और भावनात्मक विकास में महत्वपूर्ण भूमिका निभाता है।"
},

{
  q: "विकास का अवस्था-दर-अवस्था होना किस सिद्धांत को दर्शाता है?",
  a: ["निरंतरता", "क्रमिक विकास", "पूर्वानुमेयता", "एकरूपता"],
  correct: 1,
  explanation: "बच्चा शैशव, बाल्यावस्था और किशोरावस्था की अवस्थाओं से गुजरता है।"
},

{
  q: "बाल विकास को समझने का मुख्य उद्देश्य क्या है?",
  a: ["बच्चों को नियंत्रित करना", "बच्चों की तुलना करना", "उचित मार्गदर्शन और शिक्षा देना", "पाठ्यक्रम बढ़ाना"],
  correct: 2,
  explanation: "बाल विकास की समझ से बच्चों को सही दिशा दी जा सकती है।"
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
