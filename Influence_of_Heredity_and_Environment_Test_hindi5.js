/* ============================================================
   वंशानुक्रम और पर्यावरण का प्रभाव — टेस्ट 5 (हिंदी)
   स्रोत: अध्याय अभ्यास + पूर्व वर्ष प्रश्न
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 5 (Book + PYQs)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "वंशानुक्रम को किस प्रकार की सामाजिक संरचना माना जाता है?",
a: [
"द्वितीयक",
"गतिशील",
"स्थिर",
"प्राथमिक"
],
correct: 2,
explanation: "वंशानुक्रम स्थिर होता है और उसमें परिवर्तन नहीं होता।"
},

{
q: "किसने कहा कि वंशानुक्रम वह है जो व्यक्ति अपने माता-पिता के माध्यम से अपने पूर्वजों से प्राप्त करता है?",
a: [
"जीन पियाजे",
"पावलोव",
"बैंडुरा",
"पीटरसन"
],
correct: 3,
explanation: "पीटरसन ने वंशानुक्रम को पूर्वजों से प्राप्त गुण बताया।"
},

{
q: "निम्न में से कौन-सा सही सुमेलित है?",
a: [
"शारीरिक गुण – पर्यावरण",
"व्यक्तित्व का विकास – वंशानुक्रम",
"किसी जाति की बौद्धिक श्रेष्ठता – पर्यावरण",
"बच्चों की मानसिक वृद्धि – वंशानुक्रम"
],
correct: 3,
explanation: "मानसिक वृद्धि का मजबूत आधार वंशानुक्रम होता है।"
},

{
q: "निम्न में से कौन-सा बच्चे की क्षमताओं और उसके उचित विकास से संबंधित प्रश्नों को दर्शाता है?",
a: [
"वंशानुक्रमीय कारक",
"पर्यावरणीय कारक",
"उपरोक्त दोनों",
"इनमें से कोई नहीं"
],
correct: 2,
explanation: "बच्चे का विकास वंशानुक्रम और पर्यावरण दोनों से होता है।"
},

{
q: "निम्न में से कौन-सा वंशानुक्रम का नियम नहीं है?",
a: [
"समानता",
"विविधता",
"प्रतिगमन",
"प्रेरणा"
],
correct: 3,
explanation: "प्रेरणा वंशानुक्रम का नियम नहीं है।"
},

{
q: "किसने कहा कि बुद्धिमान माता-पिता के बच्चे बुद्धिमान होते हैं और मंद माता-पिता के बच्चे मंद होते हैं?",
a: [
"बैंडुरा",
"पावलोव",
"एच.एच. गोडार्ड",
"पीटरसन"
],
correct: 2,
explanation: "यह कथन एच.एच. गोडार्ड ने दिया।"
},

{
q: "किस विचारक ने पर्यावरण को किसी वस्तु को चारों ओर से घेरने वाला और प्रत्यक्ष प्रभाव डालने वाला बताया?",
a: [
"एन नास्टेस",
"हॉलैंड और डगलस",
"पी. गिस्बर्ट",
"ई.जे. रॉस"
],
correct: 2,
explanation: "गिस्बर्ट ने पर्यावरण की यह परिभाषा दी।"
},

{
q: "निम्न में से किस कथन से वंशानुक्रम और पर्यावरण की भूमिका को जोड़ा जा सकता है?",
a: [
"पर्यावरण स्थिर है और वंशानुक्रम बदलता है",
"व्यवहारवादी सिद्धांत वंशानुक्रम से जुड़े हैं",
"मानव विकास के विभिन्न क्षेत्रों में दोनों के प्रभाव अलग-अलग होते हैं",
"इनमें से कोई नहीं"
],
correct: 2,
explanation: "विकास के विभिन्न क्षेत्रों में दोनों का प्रभाव अलग होता है।"
},

{
q: "निम्न में से विकास का कौन-सा रूप वंशानुक्रम और पर्यावरण दोनों से प्रभावित होता है?",
a: [
"सामाजिक विकास",
"भावनात्मक विकास",
"मानसिक विकास",
"उपरोक्त सभी"
],
correct: 3,
explanation: "विकास के सभी रूप दोनों से प्रभावित होते हैं।"
},

{
q: "रीता की नाक उसके पिता से मिलती-जुलती है। यह किस कारण से है?",
a: [
"जैविक वंशानुक्रम",
"सामाजिक वंशानुक्रम",
"व्यवहारिक वंशानुक्रम",
"शैक्षिक वंशानुक्रम"
],
correct: 0,
explanation: "शारीरिक गुण जैविक रूप से विरासत में मिलते हैं।"
},

{
q: "वंशानुक्रम निम्न में से किसे निर्धारित करता है?",
a: [
"परिपक्वता",
"वृद्धि",
"कौशल विकास",
"इनमें से कोई नहीं"
],
correct: 0,
explanation: "परिपक्वता जैविक रूप से निर्धारित होती है।"
},

{
q: "निम्न में से कौन-सा एक पर्यावरणीय कारक है?",
a: [
"परिवार",
"कुछ रोगों की प्रवृत्ति जैसे मधुमेह",
"आँखों का रंग",
"रक्त प्रकार"
],
correct: 0,
explanation: "परिवार पर्यावरण का हिस्सा है।"
},

{
q: "निम्न में से कौन-सा मुख्यतः वंशानुक्रम से संबंधित कारक है?",
a: [
"सामाजिक गतिविधियों में भागीदारी",
"सहपाठी समूह के प्रति दृष्टिकोण",
"सोचने का ढंग",
"आँखों का रंग"
],
correct: 3,
explanation: "आँखों का रंग आनुवंशिक होता है।"
},

{
q: "वंशानुक्रम के संबंध में निम्न में से कौन-सा कथन गलत है?",
a: [
"दो भाई-बहन बिल्कुल समान शारीरिक गुण रखते हैं",
"वंशानुक्रम परिपक्वता निर्धारित करता है",
"वंशानुक्रम स्वभाव निर्धारित करता है",
"जन्मजात प्रतिभाएँ वंशानुक्रम से जुड़ी होती हैं"
],
correct: 0,
explanation: "भाई-बहन समान होते हैं लेकिन बिल्कुल एक जैसे नहीं।"
},

{
q: "बच्चे के शारीरिक गुण किससे प्रभावित होते हैं?",
a: [
"पिता का डीएनए",
"माता का डीएनए",
"माता और पिता दोनों का डीएनए",
"पर्यावरण"
],
correct: 2,
explanation: "दोनों माता-पिता के जीन प्रभाव डालते हैं।"
},

{
q: "किस विचारक का मानना था कि मन एक कोरी स्लेट होता है और ज्ञान अनुभव से आता है?",
a: [
"सुकरात",
"लॉक",
"प्लेटो",
"इनमें से कोई नहीं"
],
correct: 1,
explanation: "जॉन लॉक ने टैबुला रासा सिद्धांत दिया।"
},

{
q: "एक समान जुड़वाँ अनाथ भाइयों में से एक अमीर परिवार और दूसरा गरीब परिवार में गोद लिया जाता है। एक वर्ष बाद क्या देखा जाएगा?",
a: [
"गरीब परिवार का बच्चा पढ़ाई में बेहतर होगा",
"अमीर परिवार का बच्चा अधिक बुद्धिमान होगा",
"अमीर परिवार का बच्चा अधिक स्वस्थ होगा",
"दोनों समान रूप से विकसित होंगे"
],
correct: 2,
explanation: "अच्छा पर्यावरण स्वास्थ्य को बेहतर बनाता है।"
},

{
q: "एक बच्चा उस पर्यावरण में अच्छी तरह सीखता है जो",
a: [
"बच्चे की भावनाओं और अनुभवों को महत्व देता है",
"खेलने के लिए स्थान देता है",
"कठोर अनुशासन को बढ़ावा देता है",
"दोस्त बनाने के अवसर देता है"
],
correct: 0,
explanation: "भावनात्मक जरूरतें सीखने के लिए आवश्यक हैं।"
},

{
q: "विकास को प्रभावित करने वाले पर्यावरणीय कारकों में निम्न सभी शामिल हैं, सिवाय",
a: [
"पोषण की गुणवत्ता",
"संस्कृति",
"शिक्षा की गुणवत्ता",
"शारीरिक बनावट"
],
correct: 3,
explanation: "शारीरिक बनावट मुख्यतः वंशानुगत होती है।"
},

{
q: "निम्न में से कौन-सा कथन बच्चे के विकास में पर्यावरण की भूमिका को दर्शाता है?",
a: [
"कुछ बच्चे जल्दी जानकारी ग्रहण करते हैं",
"आईक्यू अंकों में वृद्धि हुई है",
"पर्यावरण का बहुत कम महत्व है",
"वंशानुक्रम और पर्यावरण एक-दूसरे से जुड़े हैं"
],
correct: 3,
explanation: "विकास दोनों की पारस्परिक क्रिया से होता है।"
},

{
q: "मानव विकास में वंशानुक्रम और पर्यावरण की भूमिका के बारे में कौन-सा कथन सही है?",
a: [
"विभिन्न क्षेत्रों में प्रभाव अलग-अलग होता है",
"सरकारी नीति केवल प्रकृति पर आधारित है",
"पर्यावरण स्थिर होता है",
"व्यवहारवाद प्रकृति पर आधारित है"
],
correct: 0,
explanation: "विकास के क्षेत्रों में प्रभाव अलग होता है।"
},

{
q: "प्रकृति-पोषण विवाद के संदर्भ में कौन-सा कथन उचित है?",
a: [
"बच्चा एक कोरी स्लेट है",
"बच्चे केवल जीन से निर्धारित होते हैं",
"पर्यावरण का प्रभाव नगण्य है",
"वंशानुक्रम और पर्यावरण दोनों विकास को प्रभावित करते हैं"
],
correct: 3,
explanation: "दोनों कारक विकास में भूमिका निभाते हैं।"
},

{
q: "क्या बच्चे भाषा आनुवंशिक प्रवृत्ति से सीखते हैं या माता-पिता सिखाते हैं? यह प्रश्न किसे दर्शाता है?",
a: [
"सतत या असतत विकास",
"संज्ञान का प्रभाव",
"प्रकृति-पोषण विवाद",
"बहु-कारक विकास"
],
correct: 2,
explanation: "यह प्रकृति-पोषण विवाद को दर्शाता है।"
},

{
q: "‘पर्यावरण विकास में कोई भूमिका नहीं निभाता क्योंकि वृद्धि आनुवंशिक है’ यह कथन है",
a: [
"सही",
"गलत, क्योंकि पर्यावरण का प्रभाव कम है",
"गलत, क्योंकि पर्यावरण का बड़ा प्रभाव है",
"सही, क्योंकि जीन मजबूत होते हैं"
],
correct: 2,
explanation: "अनुसंधान से सिद्ध है कि पर्यावरण का बड़ा प्रभाव है।"
},

{
q: "मानव विकास में वंशानुक्रम और पर्यावरण की भूमिका के बारे में सही कथन कौन-सा है?",
a: [
"व्यक्तिगत भिन्नताओं का एकमात्र कारण वंशानुक्रम है",
"पर्यावरण पूरी तरह विकास को तय करता है",
"दोनों का कोई प्रभाव नहीं",
"वंशानुक्रम और पर्यावरण जटिल रूप से मिलकर कार्य करते हैं"
],
correct: 3,
explanation: "विकास दोनों के जटिल अंतःक्रिया से होता है।"
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
