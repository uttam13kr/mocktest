/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 1 (HINDI)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 1";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "वंशानुक्रम से तात्पर्य गुणों के स्थानांतरण से है, जो होता है",
a: [
"शिक्षकों से विद्यार्थियों में",
"माता-पिता से बच्चों में",
"समाज से व्यक्ति में",
"विद्यालय से बच्चे में"
],
correct: 1,
explanation: "वंशानुक्रम का अर्थ माता-पिता से बच्चों में आनुवंशिक गुणों का स्थानांतरण है।"
},

{
q: "निम्नलिखित में से कौन-सा मुख्य रूप से वंशानुक्रम द्वारा निर्धारित होता है?",
a: [
"बोली जाने वाली भाषा",
"धार्मिक विश्वास",
"आँखों का रंग",
"नैतिक मूल्य"
],
correct: 2,
explanation: "आँखों का रंग जीन के माध्यम से विरासत में मिलता है।"
},

{
q: "व्यक्तियों में भिन्नता मुख्यतः किस कारण से होती है?",
a: [
"सभी बच्चों को समान जीन मिलते हैं",
"सभी का पर्यावरण समान होता है",
"जीन का संयोजन अलग-अलग होता है",
"सभी की शिक्षा समान होती है"
],
correct: 2,
explanation: "हर बच्चे को जीन का अलग संयोजन मिलता है, जिससे भिन्नता होती है।"
},

{
q: "HH गोडार्ड के अनुसार बुद्धि होती है",
a: [
"पूरी तरह पर्यावरणीय",
"पूरी तरह सीखी हुई",
"माता-पिता से विरासत में मिली",
"वंशानुक्रम से असंबंधित"
],
correct: 2,
explanation: "HH गोडार्ड का मानना था कि बुद्धि मुख्यतः वंशानुगत होती है।"
},

{
q: "बच्चे का स्वभाव (Temperament) मुख्य रूप से किससे प्रभावित होता है?",
a: [
"विद्यालय का वातावरण",
"सहपाठी समूह",
"वंशानुक्रम",
"पाठ्यक्रम"
],
correct: 2,
explanation: "स्वभाव जन्म से होता है और मुख्यतः वंशानुक्रम से प्रभावित होता है।"
},

{
q: "निम्न में से कौन-सा विकास पर्यावरण से सबसे अधिक प्रभावित होता है?",
a: [
"लंबाई",
"आँखों का रंग",
"व्यक्तित्व",
"रक्त समूह"
],
correct: 2,
explanation: "व्यक्तित्व का विकास मुख्यतः पर्यावरण से होता है।"
},

{
q: "पर्यावरण से तात्पर्य है",
a: [
"केवल भौतिक परिवेश",
"केवल सामाजिक तत्व",
"व्यक्ति को घेरे हुए सभी चीजें",
"केवल विद्यालय का वातावरण"
],
correct: 2,
explanation: "पर्यावरण में भौतिक, सामाजिक और सांस्कृतिक सभी तत्व शामिल होते हैं।"
},

{
q: "किसने पर्यावरण को वस्तु के चारों ओर मौजूद तत्त्व कहा है?",
a: [
"एन नास्टेस",
"गिस्बर्ट",
"जॉन लॉक",
"प्लेटो"
],
correct: 1,
explanation: "गिस्बर्ट ने पर्यावरण को तत्काल प्रभाव डालने वाला परिवेश कहा।"
},

{
q: "निम्न में से कौन-सा गुण वंशानुक्रम से सबसे कम प्रभावित होता है?",
a: [
"लंबाई",
"बुद्धि की क्षमता",
"बोली जाने वाली भाषा",
"आँखों का रंग"
],
correct: 2,
explanation: "भाषा पर्यावरण से सीखी जाती है, विरासत में नहीं मिलती।"
},

{
q: "वंशानुक्रम मुख्य रूप से क्या प्रदान करता है?",
a: [
"अंतिम व्यवहार",
"सीखने के अनुभव",
"संभावित क्षमताएँ",
"सामाजिक कौशल"
],
correct: 2,
explanation: "वंशानुक्रम क्षमता देता है, विकास पर्यावरण करता है।"
},

{
q: "परिपक्वता (Maturation) को सबसे अच्छी तरह क्या समझाता है?",
a: [
"अभ्यास द्वारा सीखना",
"अनुभव से विकास",
"जैविक तैयारी",
"सामाजिक संपर्क"
],
correct: 2,
explanation: "परिपक्वता जैविक विकास से संबंधित होती है।"
},

{
q: "वंचित वातावरण में पले बच्चे में क्या देखा जा सकता है?",
a: [
"अधिक बुद्धि",
"मानसिक विकास में देरी",
"तेज़ परिपक्वता",
"कोई प्रभाव नहीं"
],
correct: 1,
explanation: "खराब पर्यावरण मानसिक विकास को बाधित करता है।"
},

{
q: "निम्न में से कौन-सा उदाहरण पर्यावरण की भूमिका को दर्शाता है?",
a: [
"आँखों का रंग",
"रक्त समूह",
"जंगली बच्चा बोल नहीं पाया",
"उँगलियों के निशान"
],
correct: 2,
explanation: "मानवीय पर्यावरण न मिलने से भाषा विकास नहीं हो पाया।"
},

{
q: "Nature (प्रकृति) से तात्पर्य है",
a: [
"पालन-पोषण",
"विद्यालयी शिक्षा",
"आनुवंशिक गुण",
"संस्कृति"
],
correct: 2,
explanation: "Nature का अर्थ माता-पिता से मिले आनुवंशिक गुण हैं।"
},

{
q: "Nurture (पोषण) से तात्पर्य है",
a: [
"केवल जीन",
"विरासत में मिले गुण",
"पर्यावरण और पालन-पोषण",
"रक्त समूह"
],
correct: 2,
explanation: "Nurture में पर्यावरण, शिक्षा और अनुभव शामिल हैं।"
},

{
q: "जॉन लॉक के अनुसार बच्चे का मस्तिष्क होता है",
a: [
"जन्म से तय",
"कोरी स्लेट",
"पूरी तरह विकसित",
"अनुभव से अप्रभावित"
],
correct: 1,
explanation: "जॉन लॉक के अनुसार ज्ञान अनुभव से प्राप्त होता है।"
},

{
q: "निम्न में से कौन-सा कथन सही है?",
a: [
"केवल वंशानुक्रम विकास को प्रभावित करता है",
"केवल पर्यावरण विकास को प्रभावित करता है",
"वंशानुक्रम और पर्यावरण दोनों विकास को प्रभावित करते हैं",
"दोनों का कोई प्रभाव नहीं"
],
correct: 2,
explanation: "मानव विकास दोनों की पारस्परिक क्रिया से होता है।"
},

{
q: "चलना जैसे शारीरिक विकास मुख्यतः किस पर निर्भर करता है?",
a: [
"शिक्षण",
"परिपक्वता",
"सहपाठी",
"अनुशासन"
],
correct: 1,
explanation: "चलना जैविक परिपक्वता पर निर्भर करता है।"
},

{
q: "निम्न में से कौन-सा वंशानुगत कारक है?",
a: [
"रुचि",
"अभिवृत्ति",
"रक्त समूह",
"भाषा"
],
correct: 2,
explanation: "रक्त समूह आनुवंशिक रूप से निर्धारित होता है।"
},

{
q: "व्यक्तित्व में सुधार मुख्यतः किससे होता है?",
a: [
"जीन",
"पर्यावरण",
"क्रोमोसोम",
"हार्मोन"
],
correct: 1,
explanation: "व्यक्तित्व का विकास मुख्यतः पर्यावरण से होता है।"
},

{
q: "भाई-बहनों में अंतर क्यों पाया जाता है?",
a: [
"समान जीन",
"केवल अलग पर्यावरण",
"जीन का अलग संयोजन",
"समान पालन-पोषण"
],
correct: 2,
explanation: "हर बच्चे को जीन का अलग संयोजन मिलता है।"
},

{
q: "निम्न में से कौन-सा पर्यावरणीय कारक है?",
a: [
"आँखों का रंग",
"रक्त प्रकार",
"पारिवारिक वातावरण",
"लंबाई की क्षमता"
],
correct: 2,
explanation: "पारिवारिक वातावरण पर्यावरण का भाग है।"
},

{
q: "बुद्धि का सर्वोत्तम विकास कब होता है?",
a: [
"केवल वंशानुक्रम मजबूत हो",
"केवल पर्यावरण अच्छा हो",
"वंशानुक्रम और पर्यावरण दोनों सहायक हों",
"दोनों का कोई महत्व न हो"
],
correct: 2,
explanation: "क्षमता वंशानुक्रम देता है और विकास पर्यावरण करता है।"
},

{
q: "वंशानुक्रम के बारे में कौन-सा कथन गलत है?",
a: [
"यह क्षमता निर्धारित करता है",
"यह परिपक्वता को प्रभावित करता है",
"यह अकेले व्यक्तित्व तय करता है",
"यह स्वभाव को प्रभावित करता है"
],
correct: 2,
explanation: "व्यक्तित्व केवल वंशानुक्रम से नहीं बनता।"
},

{
q: "मानव विकास के बारे में सही दृष्टिकोण है",
a: [
"Nature, nurture पर हावी है",
"Nurture, nature पर हावी है",
"दोनों की पारस्परिक क्रिया",
"दोनों का कोई योगदान नहीं"
],
correct: 2,
explanation: "मानव विकास प्रकृति और पोषण दोनों से होता है।"
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
