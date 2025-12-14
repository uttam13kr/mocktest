/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट
   प्रश्न: 25
   समय: 30 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
  question: "बाल विकास का अध्ययन जन्म से किस अवस्था तक किया जाता है?",
  options: ["वृद्धावस्था", "मध्य आयु", "किशोरावस्था", "प्रौढ़ावस्था"],
  correctAnswer: 2,
  explanation: "बाल विकास में जन्म से किशोरावस्था तक होने वाले परिवर्तनों का अध्ययन किया जाता है।"
},

{
  question: "यह कथन कि प्रत्येक बच्चा अलग होता है, किस सिद्धांत को दर्शाता है?",
  options: ["सार्वभौमिकता का सिद्धांत", "व्यक्तिगत भिन्नता का सिद्धांत", "शिरोपाद सिद्धांत", "निरंतरता का सिद्धांत"],
  correctAnswer: 1,
  explanation: "व्यक्तिगत भिन्नता का सिद्धांत बताता है कि हर बच्चा अद्वितीय होता है।"
},

{
  question: "सिर से पैर की ओर होने वाले विकास को क्या कहते हैं?",
  options: ["निकट से दूर की ओर", "सामान्य से विशिष्ट", "शिरोपाद सिद्धांत", "क्रमिक विकास"],
  correctAnswer: 2,
  explanation: "शिरोपाद सिद्धांत के अनुसार विकास सिर से पैर की ओर होता है।"
},

{
  question: "शरीर के मध्य भाग से बाहरी अंगों की ओर विकास किस सिद्धांत को दर्शाता है?",
  options: ["शिरोपाद सिद्धांत", "निकट से दूर की ओर सिद्धांत", "निरंतरता", "पूर्वानुमेयता"],
  correctAnswer: 1,
  explanation: "निकट से दूर की ओर सिद्धांत के अनुसार विकास शरीर के केंद्र से बाहरी अंगों की ओर होता है।"
},

{
  question: "विकास कभी रुकता नहीं, यह किस सिद्धांत को दर्शाता है?",
  options: ["निरंतरता का सिद्धांत", "पूर्वानुमेयता", "व्यक्तिगत भिन्नता", "एकरूपता"],
  correctAnswer: 0,
  explanation: "विकास जन्म से परिपक्वता तक लगातार चलता रहता है।"
},

{
  question: "साधारण गतिविधियों से जटिल कौशल की ओर विकास किस सिद्धांत को दर्शाता है?",
  options: ["सामान्य से विशिष्ट", "परिपक्वता", "आनुवंशिकता", "व्यक्तिगत भिन्नता"],
  correctAnswer: 0,
  explanation: "बच्चा पहले सामान्य क्रियाएँ करता है, बाद में विशिष्ट क्रियाएँ सीखता है।"
},

{
  question: "विकास के सभी क्षेत्र एक-दूसरे से कैसे जुड़े होते हैं?",
  options: ["अलग-अलग", "स्वतंत्र", "परस्पर संबंधित", "असंबंधित"],
  correctAnswer: 2,
  explanation: "शारीरिक, मानसिक, सामाजिक और भावनात्मक विकास एक-दूसरे को प्रभावित करते हैं।"
},

{
  question: "कौन-सी अवस्था विकास की दृष्टि से सबसे अधिक महत्वपूर्ण मानी जाती है?",
  options: ["वृद्धावस्था", "प्रौढ़ावस्था", "प्रारंभिक बाल्यावस्था", "किशोरावस्था"],
  correctAnswer: 2,
  explanation: "प्रारंभिक बाल्यावस्था के अनुभव जीवन भर प्रभाव डालते हैं।"
},

{
  question: "सोच, व्यवहार और भावनाओं से जुड़ा विकास किस प्रकार का होता है?",
  options: ["मात्रात्मक", "गुणात्मक", "संख्यात्मक", "भौतिक"],
  correctAnswer: 1,
  explanation: "मानसिक और भावनात्मक परिवर्तन गुणात्मक होते हैं।"
},

{
  question: "परिपक्वता सिद्धांत किस मनोवैज्ञानिक ने दिया?",
  options: ["पियाजे", "स्किनर", "गेसेल", "वायगोत्स्की"],
  correctAnswer: 2,
  explanation: "गेसेल ने परिपक्वता सिद्धांत दिया।"
},

{
  question: "परिपक्वता सिद्धांत के अनुसार बच्चों में अंतर किस कारण होता है?",
  options: ["केवल वातावरण", "केवल सीखना", "परिपक्वता की गति", "दंड"],
  correctAnswer: 2,
  explanation: "बच्चे समान अवस्थाओं से गुजरते हैं, लेकिन उनकी गति अलग होती है।"
},

{
  question: "दूसरों को देखकर सीखना किस सिद्धांत से संबंधित है?",
  options: ["प्रयास और त्रुटि", "सामाजिक अधिगम सिद्धांत", "परिपक्वता सिद्धांत", "अंतर्दृष्टि अधिगम"],
  correctAnswer: 1,
  explanation: "सामाजिक अधिगम सिद्धांत में बच्चा अनुकरण द्वारा सीखता है।"
},

{
  question: "निम्न में से कौन-सा विकास का आंतरिक कारक है?",
  options: ["परिवार", "विद्यालय", "आनुवंशिकता", "पड़ोस"],
  correctAnswer: 2,
  explanation: "आनुवंशिकता आंतरिक कारक है।"
},

{
  question: "संतुलित भावनाएँ बच्चे में किसे बढ़ावा देती हैं?",
  options: ["खराब समायोजन", "अच्छा सामाजिक व्यवहार", "कम आत्मविश्वास", "धीमी सीखने की गति"],
  correctAnswer: 1,
  explanation: "भावनात्मक संतुलन से सामाजिक व्यवहार बेहतर होता है।"
},

{
  question: "प्रदूषण और आवास से संबंधित कारक कौन-सा है?",
  options: ["आनुवंशिकता", "भौतिक वातावरण", "बुद्धि", "भावना"],
  correctAnswer: 1,
  explanation: "भौतिक वातावरण में प्रदूषण और आवास शामिल होते हैं।"
},

{
  question: "सामाजिक-आर्थिक स्थिति मुख्य रूप से किसे प्रभावित करती है?",
  options: ["शिक्षा और अवसर", "जीन", "प्रतिक्रियाएँ", "सहज प्रवृत्ति"],
  correctAnswer: 0,
  explanation: "आर्थिक स्थिति शिक्षा और सीखने के अवसरों को प्रभावित करती है।"
},

{
  question: "बाल मनोविज्ञान का मुख्य अध्ययन विषय क्या है?",
  options: ["वयस्कों का व्यवहार", "बच्चों का मानसिक और भावनात्मक विकास", "शिक्षण विधियाँ", "विद्यालय प्रबंधन"],
  correctAnswer: 1,
  explanation: "बाल मनोविज्ञान बच्चों के मानसिक, भावनात्मक और व्यवहारिक विकास का अध्ययन करता है।"
},

{
  question: "बाल मनोविज्ञान का ज्ञान शिक्षक को किसमें सहायता करता है?",
  options: ["दंड देने में", "अंतर अनदेखा करने में", "बच्चों को बेहतर समझने में", "तेज़ पढ़ाने में"],
  correctAnswer: 2,
  explanation: "बाल मनोविज्ञान से शिक्षक बच्चों को बेहतर समझ पाता है।"
},

{
  question: "व्यक्तिगत अंतर किस सिद्धांत से संबंधित है?",
  options: ["निरंतरता", "एकरूपता", "व्यक्तिगत भिन्नता", "पूर्वानुमेयता"],
  correctAnswer: 2,
  explanation: "हर बच्चा अलग होता है, यह व्यक्तिगत भिन्नता का सिद्धांत है।"
},

{
  question: "शरीर के अलग-अलग भागों का अलग गति से बढ़ना किस सिद्धांत को दर्शाता है?",
  options: ["एकरूप विकास", "विभिन्न दर का विकास", "असतत विकास", "अनियमित विकास"],
  correctAnswer: 1,
  explanation: "शरीर के सभी अंग समान गति से नहीं बढ़ते।"
},

{
  question: "किस प्रकार का विकास अधिक पूर्वानुमेय होता है?",
  options: ["भावनात्मक", "मानसिक", "शारीरिक", "सामाजिक"],
  correctAnswer: 2,
  explanation: "शारीरिक विकास का अनुमान आसानी से लगाया जा सकता है।"
},

{
  question: "भाषा विकास पर सबसे अधिक प्रभाव किसका पड़ता है?",
  options: ["भावनात्मक संतुलन", "ऊँचाई", "वजन", "प्रतिक्रियाएँ"],
  correctAnswer: 0,
  explanation: "भावनात्मक स्थिरता भाषा विकास में सहायक होती है।"
},

{
  question: "परिवार मुख्य रूप से किस विकास को प्रभावित करता है?",
  options: ["नैतिक और भावनात्मक विकास", "जैविक गुण", "प्रतिवर्त क्रियाएँ", "केवल शारीरिक विकास"],
  correctAnswer: 0,
  explanation: "परिवार बच्चे के नैतिक और भावनात्मक विकास में बड़ी भूमिका निभाता है।"
},

{
  question: "विकास का अवस्था-दर-अवस्था होना किस सिद्धांत को दर्शाता है?",
  options: ["निरंतरता", "क्रमिक विकास", "पूर्वानुमेयता", "एकरूपता"],
  correctAnswer: 1,
  explanation: "बच्चा शैशव, बाल्यावस्था और किशोरावस्था से गुजरता है।"
},

{
  question: "बाल विकास को समझने का मुख्य उद्देश्य क्या है?",
  options: ["बच्चों को नियंत्रित करना", "बच्चों की तुलना करना", "उचित मार्गदर्शन और शिक्षा देना", "पाठ्यक्रम बढ़ाना"],
  correctAnswer: 2,
  explanation: "बाल विकास की समझ से बच्चों को सही दिशा दी जा सकती है।"
}

];






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
