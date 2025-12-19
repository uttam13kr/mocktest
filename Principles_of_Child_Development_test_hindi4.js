/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट 4 (Assertion–Reason)
   प्रश्न: 25
   समय: 20 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 4 (Assertion–Reason)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "बाल विकास के सिद्धांत";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
  q: "Assertion (A): बाल विकास एक निरंतर प्रक्रिया है।\nReason (R): विकास किशोरावस्था के बाद रुक जाता है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R, A की सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 2,
  explanation: "विकास जीवन भर चलता है; यह किशोरावस्था पर समाप्त नहीं होता।"
},

{
  q: "Assertion (A): हर बच्चा अलग गति से विकसित होता है।\nReason (R): बच्चों में व्यक्तिगत भिन्नताएँ पाई जाती हैं।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "व्यक्तिगत भिन्नताएँ ही विकास की गति के अंतर को समझाती हैं।"
},

{
  q: "Assertion (A): विकास एक निश्चित क्रम का पालन करता है।\nReason (R): बच्चा पहले सिर पर नियंत्रण प्राप्त करता है फिर पैरों पर।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "शिरोपाद सिद्धांत विकास की क्रमिकता को दर्शाता है।"
},

{
  q: "Assertion (A): भावनात्मक विकास सामाजिक विकास को प्रभावित करता है।\nReason (R): भावनात्मक रूप से संतुलित बच्चे बेहतर सामाजिक संबंध बनाते हैं।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "भावनात्मक संतुलन सामाजिक समायोजन में सहायता करता है।"
},

{
  q: "Assertion (A): विकास गुणात्मक और मात्रात्मक दोनों होता है।\nReason (R): विकास में व्यवहार, सोच, ऊँचाई और वजन सभी में परिवर्तन शामिल है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "विकास मानसिक और शारीरिक दोनों प्रकार के परिवर्तन को दर्शाता है।"
},

{
  q: "Assertion (A): प्रारंभिक बाल्यावस्था के अनुभव भविष्य को प्रभावित करते हैं।\nReason (R): प्रारंभिक वर्ष भावनात्मक और सामाजिक विकास की नींव रखते हैं।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "प्रारंभिक अनुभव व्यक्तित्व निर्माण में महत्वपूर्ण होते हैं।"
},

{
  q: "Assertion (A): विकास के सभी क्षेत्र एक-दूसरे से जुड़े होते हैं।\nReason (R): शारीरिक स्वास्थ्य सीखने और भावनाओं को प्रभावित कर सकता है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "शारीरिक, सामाजिक, भावनात्मक और संज्ञानात्मक विकास परस्पर संबंधित हैं।"
},

{
  q: "Assertion (A): बच्चे कई व्यवहार देखकर सीखते हैं।\nReason (R): सामाजिक अधिगम सिद्धांत अनुकरण और मॉडलिंग द्वारा सीखने को समझाता है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "सामाजिक अधिगम सिद्धांत प्रेक्षणीय अधिगम को दर्शाता है।"
},

{
  q: "Assertion (A): वृद्धि केवल शारीरिक परिवर्तन को दर्शाती है।\nReason (R): वृद्धि ऊँचाई, वजन और आकार से मापी जाती है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "वृद्धि मात्रात्मक और शारीरिक परिवर्तन है।"
},

{
  q: "Assertion (A): विकास चरण दर चरण होता है।\nReason (R): प्रत्येक विकासात्मक अवस्था की अपनी विशेषताएँ और आवश्यकताएँ होती हैं।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "प्रत्येक अवस्था विशिष्ट और महत्वपूर्ण होती है।"
},

{
  q: "Assertion (A): सीखने में परिपक्वता महत्वपूर्ण भूमिका निभाती है।\nReason (R): बच्चा तभी प्रभावी रूप से सीखता है जब वह परिपक्व होता है।",
  a: [
    "A और R दोनों सही हैं और R, A की सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "सीखना readiness और परिपक्वता पर निर्भर करता है।"
},

{
  q: "Assertion (A): सभी बच्चे समान आयु पर समान माइलस्टोन प्राप्त करते हैं।\nReason (R): सभी बच्चों की विकास गति समान होती है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 3,
  explanation: "विकास गति सभी के लिए समान नहीं होती।"
},

{
  q: "Assertion (A): वातावरण बच्चे के विकास को प्रभावित करता है।\nReason (R): परिवार, विद्यालय और समाज बच्चे के व्यवहार को आकार देते हैं।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "बाहरी वातावरण विकास का प्रमुख कारक है।"
},

{
  q: "Assertion (A): पोषण संज्ञानात्मक विकास को प्रभावित करता है।\nReason (R): खराब पोषण मस्तिष्क कार्यक्षमता और ध्यान को कम कर सकता है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "पोषण मस्तिष्क विकास के लिए आवश्यक है।"
},

{
  q: "Assertion (A): सामाजिक संपर्क भाषा विकास में सहायक होता है।\nReason (R): बच्चे संवाद और exposure के माध्यम से भाषा सीखते हैं।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "भाषा अभ्यास और संवाद से विकसित होती है।"
},

{
  q: "Assertion (A): नैतिक विकास केवल आयु के साथ स्वतः हो जाता है।\nReason (R): बच्चा केवल जैविक विकास से सही–गलत सीखता है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 2,
  explanation: "नैतिक विकास अनुभव और मार्गदर्शन से विकसित होता है।"
},

{
  q: "Assertion (A): शारीरिक विकास अन्य क्षेत्रों का समर्थन करता है।\nReason (R): स्वस्थ बच्चा सीखने और गतिविधियों में बेहतर भाग लेता है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "अच्छा स्वास्थ्य सभी विकास क्षेत्रों को प्रभावित करता है।"
},

{
  q: "Assertion (A): विकास पूर्वानुमेय होता है।\nReason (R): बच्चे सामान्यतः समान विकास चरणों से गुजरते हैं।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "विकास के चरण अनुमानित और निश्चित होते हैं।"
},

{
  q: "Assertion (A): बच्चों के लिए खेल आवश्यक है।\nReason (R): खेल सामाजिक, भावनात्मक और रचनात्मक विकास में मदद करता है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "खेल समग्र विकास का महत्वपूर्ण साधन है।"
},

{
  q: "Assertion (A): शिक्षकों को बच्चों की बार–बार तुलना नहीं करनी चाहिए।\nReason (R): तुलना आत्म-सम्मान और भावनात्मक संतुलन को नुकसान पहुँचाती है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "तुलना भावनात्मक विकास पर नकारात्मक प्रभाव डालती है।"
},

{
  q: "Assertion (A): सामाजिक विकास बच्चों को समाज में समायोजन सिखाता है।\nReason (R): सामाजिक कौशल सहयोग और सकारात्मक संबंध बनाने में मदद करते हैं।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "सामाजिक कौशल सामाजिक समायोजन के लिए आवश्यक हैं।"
},

{
  q: "Assertion (A): विकास केवल आनुवंशिकता से प्रभावित होता है।\nReason (R): वातावरण का विकास पर कोई प्रभाव नहीं पड़ता।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 3,
  explanation: "विकास आनुवंशिकता और वातावरण दोनों पर निर्भर करता है।"
},

{
  q: "Assertion (A): भावनात्मक सुरक्षा बच्चे के सीखने में सहायक होती है।\nReason (R): सुरक्षित महसूस करने पर बच्चा सीखने पर बेहतर ध्यान देता है।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "भावनात्मक सुरक्षा सीखने की क्षमता बढ़ाती है।"
},

{
  q: "Assertion (A): विकास आजीवन प्रक्रिया है।\nReason (R): जीवन के प्रत्येक चरण में परिवर्तन होते रहते हैं।",
  a: [
    "A और R दोनों सही हैं और R सही व्याख्या है",
    "A और R दोनों सही हैं लेकिन R सही व्याख्या नहीं है",
    "A सही है लेकिन R गलत है",
    "A गलत है लेकिन R सही है"
  ],
  correct: 0,
  explanation: "विकास जन्म से वृद्धावस्था तक चलता है।"
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
