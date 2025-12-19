/* ============================================================
   बाल विकास के सिद्धांत — टेस्ट 5 (पुस्तक आधारित)
   प्रश्न: 29
   समय: 30 मिनट
   भाषा: हिंदी
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 5 (पुस्तक आधारित)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "बाल विकास के सिद्धांत";
const TIME_LIMIT_MINUTES = 30;

// QUESTIONS DATA
const quizData = [

{
q: "विकास के सिद्धांतों को समझना शिक्षक की किस प्रकार सहायता करता है?",
a: [
"शिक्षार्थी की आर्थिक पृष्ठभूमि पहचानने में",
"यह तर्क देने में कि सीखना क्यों आवश्यक है",
"विभिन्न शिक्षार्थियों की सीखने की शैली के अनुसार पढ़ाने में",
"शिक्षार्थी की सामाजिक स्थिति पहचानने में"
],
correct: 2,
explanation: "विकास के सिद्धांत शिक्षक को विभिन्न सीखने की शैलियों को समझने में मदद करते हैं।"
},

{
q: "संकल्पनाओं का विकास मुख्यतः किसका भाग है?",
a: [
"बौद्धिक विकास",
"शारीरिक विकास",
"सामाजिक विकास",
"भावनात्मक विकास"
],
correct: 0,
explanation: "संकल्पना निर्माण बौद्धिक विकास से संबंधित है।"
},

{
q: "मिलर और डालर्ड द्वारा प्रस्तावित सामाजिक अधिगम सिद्धांत के अनुसार",
a: [
"लोग दूसरों को देखकर सीखते हैं",
"मानवीय विचार प्रक्रियाएँ व्यक्तित्व समझने में महत्वपूर्ण हैं",
"दोनों",
"कोई नहीं"
],
correct: 2,
explanation: "सामाजिक अधिगम सिद्धांत अनुकरण एवं प्रेक्षण से सीखने पर बल देता है।"
},

{
q: "निम्न में से कौन विकास के सिद्धांत को दर्शाता है?",
a: [
"यह सभी में समान गति से नहीं होता",
"यह असतत प्रक्रिया है",
"सभी विकास प्रक्रियाएँ आपस में जुड़ी नहीं होतीं",
"विकास सदैव रेखीय होता है"
],
correct: 0,
explanation: "विकास सभी बच्चों में समान गति से नहीं होता।"
},

{
q: "नरेश और मुकेश समान आयु समूह के हैं, फिर भी मानसिक एवं सामाजिक विकास में अंतर है। यह किस सिद्धांत से संबंधित है?",
a: [
"परिवर्तनीयता का सिद्धांत",
"निश्चित एवं पूर्वानुमेय पैटर्न का सिद्धांत",
"व्यक्तिगत भिन्नता का सिद्धांत",
"समान पैटर्न का सिद्धांत"
],
correct: 2,
explanation: "बच्चों में व्यक्तिगत अंतर विकास को प्रभावित करते हैं।"
},

{
q: "निम्न में से विकास के सिद्धांतों के बारे में कौन सा कथन गलत है?",
a: [
"विकास वंशानुक्रम एवं वातावरण की निरंतर सहभागिता से होता है",
"विकास परिपक्वता और अधिगम पर निर्भर करता है",
"हर बच्चा विकास के चरणों से गुजरता है परन्तु व्यक्तिगत अंतर होते हैं",
"विकास सदैव रेखीय होता है"
],
correct: 3,
explanation: "विकास सदैव रेखीय नहीं होता।"
},

{
q: "बाल विकास के अध्ययन का क्षेत्र शामिल करता है",
a: [
"विभिन्न विकास चरणों का अध्ययन",
"वातावरण के प्रभाव का अध्ययन",
"व्यक्तिगत भिन्नताओं का अध्ययन",
"उपरोक्त सभी"
],
correct: 3,
explanation: "बाल विकास में चरण, वातावरण और भिन्नताएँ सभी आते हैं।"
},

{
q: "निम्न में से कौन विकास का आंतरिक कारक है?",
a: [
"बुद्धि",
"शारीरिक क्षमता",
"वंशानुगति",
"उपरोक्त सभी"
],
correct: 3,
explanation: "बुद्धि, वंशानुक्रम और शारीरिक क्षमता आंतरिक कारक हैं।"
},

{
q: "सिर से पैर तक विकास होने का सिद्धांत क्या कहलाता है?",
a: [
"शिरोपाद सिद्धांत",
"पाद-शिर सिद्धांत",
"केन्द्र से परिधि सिद्धांत",
"उपरोक्त में से कोई नहीं"
],
correct: 0,
explanation: "शिरोपाद सिद्धांत का अर्थ सिर से पैर तक विकास।"
},

{
q: "बाल मनोवैज्ञानिक बच्चों के किस पक्ष पर ध्यान देते हैं?",
a: [
"मानसिक क्षमताओं पर",
"व्यवहार पर",
"भाषा विकास पर",
"उपरोक्त सभी"
],
correct: 3,
explanation: "बाल मनोविज्ञान मानसिक, व्यवहारिक और भाषा विकास का अध्ययन करता है।"
},

{
q: "निम्न में से कौन विकास का बाहरी कारक है?",
a: [
"आर्थिक स्थिति",
"सामाजिक स्थिति",
"जीवन अनुभव",
"उपरोक्त सभी"
],
correct: 3,
explanation: "आर्थिक, सामाजिक और जीवन अनुभव बाहरी कारक हैं।"
},

{
q: "गेसल के परिपक्वता सिद्धांत के अनुसार",
a: [
"परिपक्वता केवल वातावरण पर निर्भर है",
"परिपक्वता वंशानुक्रम और वातावरण दोनों पर निर्भर है",
"सभी बच्चे समान दर से परिपक्व होते हैं",
"उपरोक्त सभी"
],
correct: 3,
explanation: "गेसल ने वंशानुक्रम एवं वातावरण दोनों को महत्व दिया।"
},

{
q: "विकास एक कभी न समाप्त होने वाली प्रक्रिया है, यह किस सिद्धांत से संबंधित है?",
a: [
"विकास सहसंबद्ध है",
"विकास निरंतर है",
"विकास पैटर्न का अनुसरण करता है",
"विकास परिवर्तनशील है"
],
correct: 1,
explanation: "विकास जीवन भर चलता है।"
},

{
q: "विकास क्रमिक एवं धीमी प्रक्रिया है — यह विचार किसका है?",
a: [
"मास्लो",
"स्किनर",
"एरिस्टोटल",
"लोवस्की"
],
correct: 0,
explanation: "मास्लो ने क्रमिक विकास पर बल दिया।"
},

{
q: "सीता ने दूसरी लड़की को देखकर हाथ से खाना सीख लिया। यह किस सिद्धांत से संबंधित है?",
a: [
"विकास अधिगम के द्वारा होता है",
"प्रारंभिक विकास बाद के विकास से अधिक महत्वपूर्ण है",
"विकास क्रम का अनुसरण करता है",
"व्यक्तित्व विकास"
],
correct: 0,
explanation: "यह प्रेक्षणीय अधिगम का उदाहरण है।"
},

{
q: "एक माँ देखती है कि उसके जुड़वां बच्चों में से एक ने जल्दी चलना सीख लिया। यह किस सिद्धांत से संबंधित है?",
a: [
"विकास सिर से पैर की ओर होता है",
"विकास चरण दर चरण होता है",
"विकास अलग–अलग बच्चों में अलग गति से होता है",
"विकास सामान्य से विशेष की ओर होता है"
],
correct: 2,
explanation: "बच्चों की विकास गति अलग होती है।"
},

{
q: "शिक्षकों के लिए बाल विकास के चरणों का ज्ञान क्यों आवश्यक है?",
a: [
"अनुकूल शिक्षण वातावरण बनाने के लिए",
"बच्चे की समस्याएँ समझने के लिए",
"बच्चे से प्रभावी संचार के लिए",
"उपरोक्त सभी"
],
correct: 3,
explanation: "बाल विकास का ज्ञान शिक्षण को प्रभावी बनाता है।"
},

{
q: "निम्न में से कौन सा कारण बाल मनोविज्ञान पढ़ने का कारण नहीं है?",
a: [
"बच्चे को जीवन कौशल दिशा देना",
"व्यवहार के कारण समझना",
"जन्म के बाद विकृति क्यों होती है समझना",
"प्रभावी शिक्षण वातावरण बनाना"
],
correct: 2,
explanation: "बाल मनोविज्ञान शारीरिक विकृति से संबंधित नहीं है।"
},

{
q: "उचित विकास की शर्त है स्वस्थ शारीरिक विकास — यह कथन",
a: [
"असत्य हो सकता है क्योंकि विकास अलग-अलग होता है",
"सत्य है क्योंकि शारीरिक विकास सबसे महत्वपूर्ण है",
"सत्य है क्योंकि शारीरिक विकास अन्य क्षेत्रों से जुड़ा है",
"असत्य है क्योंकि शारीरिक विकास अन्य क्षेत्रों को प्रभावित नहीं करता"
],
correct: 1,
explanation: "शारीरिक विकास विकास का आधार है।"
},

{
q: "संकल्पनाओं की व्यवस्थित प्रस्तुति किस सिद्धांत से संबंधित है?",
a: [
"विकास वृद्धि की ओर ले जाता है",
"विकास पराधीनता से स्वाधीनता की ओर जाता है",
"विद्यार्थी अलग-अलग गति से विकसित होते हैं",
"विकास अपेक्षाकृत सुव्यवस्थित है"
],
correct: 1,
explanation: "विकास निर्भरता से स्वतंत्रता की ओर बढ़ता है।"
},

{
q: "एक शिक्षक देखता है कि बच्चा वर्ग नहीं बना पा रहा, तो मानता है कि वह हीरा भी नहीं बना पाएगा। यह किस सिद्धांत से संबंधित है?",
a: [
"विकास धीरे–धीरे होता है",
"विकास अलग-अलग बच्चों में अलग होता है",
"विकास क्रमबद्ध होता है",
"विकास छलांगों में होता है"
],
correct: 2,
explanation: "कौशल क्रम में विकसित होते हैं।"
},

{
q: "निम्न में से कौन बाल विकास का सिद्धांत है?",
a: [
"विकास परिपक्वता और अनुभव की सहभागिता से होता है",
"विकास की गति सटीक भविष्यवाणी की जा सकती है",
"अनुभव ही एकमात्र निर्धारक है",
"विकास केवल प्रोत्साहन से होता है"
],
correct: 0,
explanation: "विकास maturation + experience पर निर्भर है।"
},

{
q: "सही मेल किसमें दिया गया है?",
a: [
"कोड 2 4 3 1",
"कोड 4 2 3 1",
"कोड 4 2 1 5",
"कोड 2 1 5"
],
correct: 3,
explanation: "सही मिलान पुस्तक के अनुसार वही है।"
},

{
q: "शरीर के केंद्र से बाहरी भाग की ओर विकास को क्या कहते हैं?",
a: [
"विकेन्द्रीकृत विकास सिद्धांत",
"केन्द्र से परिधि सिद्धांत",
"सोपानिक विकास सिद्धांत",
"विकिरित विकास सिद्धांत"
],
correct: 1,
explanation: "प्रोक्सीमोडिस्टल विकास केन्द्र से बाहरी भाग तक होता है।"
},

{
q: "निम्न में से कौन सा कथन विकास और अधिगम के संबंध को सही दर्शाता है?",
a: [
"विकास और अधिगम परस्पर संबंधित एवं आश्रित हैं",
"दोनों असंबंधित हैं",
"अधिगम विकास से स्वतंत्र है",
"अधिगम गति विकास से बहुत अधिक है"
],
correct: 0,
explanation: "अधिगम और विकास एक–दूसरे को प्रभावित करते हैं।"
},

{
q: "प्रोक्सीमोडिस्टल सिद्धांत का उदाहरण कौन सा है?",
a: [
"शिशु पहले दृष्टि विकसित करते हैं फिर हाथ",
"शिशु पहले संज्ञानात्मक फिर भाषा",
"शिशु पहले धड़ फिर हाथ–पैर नियंत्रित करते हैं",
"शिशु कुहू–कुहू पहले फिर बुदबुदाना"
],
correct: 2,
explanation: "विकास केंद्र से बाहरी भाग की ओर होता है।"
},

{
q: "बच्चा खड़े होना सीखता है फिर चलता है, बोलने से पहले बुदबुदाता है। यह किस सिद्धांत का उदाहरण है?",
a: [
"विकास क्रमिक है",
"विकास सिर से पैर तक",
"विकास अव्यवस्थित है",
"विकास केंद्र से परिधि की ओर"
],
correct: 0,
explanation: "विकास क्रमिक और अनुक्रमिक होता है।"
},

{
q: "कौन सा सिद्धांत बताता है कि शरीर के विभिन्न अंग अलग–अलग दर से विकसित होते हैं?",
a: [
"शिरोपाद सिद्धांत",
"प्रोक्सीमोडिस्टल सिद्धांत",
"श्रृंखलाबद्ध एकीकरण सिद्धांत",
"स्वतंत्र प्रणाली सिद्धांत"
],
correct: 0,
explanation: "विभिन्न अंग अलग दर से बढ़ते हैं।"
},

{
q: "विकासात्मक परिवर्तन",
a: [
"पूरी तरह अप्रत्याशित होते हैं",
"केवल बचपन तक होते हैं",
"व्यक्तियों में अलग–अलग गति से होते हैं",
"सामाजिक संदर्भ से स्वतंत्र होते हैं"
],
correct: 2,
explanation: "विकास की गति व्यक्ति–व्यक्ति पर निर्भर करती है।"
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
