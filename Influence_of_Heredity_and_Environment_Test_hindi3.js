/* ============================================================
   INFLUENCE OF HEREDITY AND ENVIRONMENT — TEST 3 (HINDI)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 3";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "निम्न में से कौन-सा जन्म के समय निश्चित होता है?",
a: [
"बुद्धि स्तर",
"व्यक्तित्व",
"रक्त समूह",
"अभिवृत्ति"
],
correct: 2,
explanation: "रक्त समूह आनुवंशिक होता है और जन्म से ही निश्चित रहता है।"
},

{
q: "वंशानुक्रम विकास को मुख्यतः किसके माध्यम से प्रभावित करता है?",
a: [
"सीखने के अनुभव",
"जीन और क्रोमोसोम",
"विद्यालयी वातावरण",
"सहपाठी संपर्क"
],
correct: 1,
explanation: "जीन और क्रोमोसोम वंशानुगत गुणों को वहन करते हैं।"
},

{
q: "वंशानुक्रम का सबसे उपयुक्त वर्णन कौन-सा है?",
a: [
"यह जीवन में सब कुछ तय करता है",
"यह विकास के लिए प्रारंभिक आधार देता है",
"इसकी विकास में कोई भूमिका नहीं",
"यह पर्यावरण का स्थान ले लेता है"
],
correct: 1,
explanation: "वंशानुक्रम विकास के लिए आधार प्रदान करता है।"
},

{
q: "निम्न में से किस गुण पर पर्यावरण का सबसे अधिक प्रभाव होता है?",
a: [
"रक्त समूह",
"आँखों का रंग",
"भाषा",
"उँगलियों के निशान"
],
correct: 2,
explanation: "भाषा पर्यावरण से सीखी जाती है।"
},

{
q: "अच्छा वंशानुक्रम लेकिन कमजोर पर्यावरण वाला बच्चा",
a: [
"पूरी क्षमता प्राप्त करेगा",
"औसत विकास दिखाएगा",
"अपनी पूरी क्षमता प्राप्त नहीं कर पाएगा",
"कोई विकास नहीं करेगा"
],
correct: 2,
explanation: "कमजोर पर्यावरण क्षमता के विकास को रोक देता है।"
},

{
q: "भावनात्मक विकास पर सबसे अधिक प्रभाव किस पर्यावरणीय कारक का पड़ता है?",
a: [
"विद्यालय की इमारत",
"पारिवारिक संबंध",
"जलवायु",
"फर्नीचर"
],
correct: 1,
explanation: "सकारात्मक पारिवारिक संबंध भावनात्मक विकास में सहायक होते हैं।"
},

{
q: "वंशानुक्रम की भूमिका को सबसे अच्छे रूप में कैसे समझा जा सकता है?",
a: [
"अंतिम परिणाम तय करता है",
"सीमाएँ और संभावनाएँ प्रदान करता है",
"सीखने को पूरी तरह नियंत्रित करता है",
"पर्यावरण के प्रभाव को समाप्त करता है"
],
correct: 1,
explanation: "वंशानुक्रम संभावनाओं और सीमाओं को तय करता है।"
},

{
q: "निम्न में से कौन-सा उदाहरण वंशानुक्रम और पर्यावरण की परस्पर क्रिया को दर्शाता है?",
a: [
"रक्त समूह का विरासत में मिलना",
"मातृभाषा सीखना",
"प्रतिभाशाली बच्चा प्रशिक्षण से विशेषज्ञ बनता है",
"उँगलियों के निशान"
],
correct: 2,
explanation: "प्रतिभा को विकसित होने के लिए प्रशिक्षण की आवश्यकता होती है।"
},

{
q: "पर्यावरणीय उत्तेजना सबसे अधिक किसके लिए आवश्यक है?",
a: [
"केवल शारीरिक विकास",
"मानसिक विकास",
"रक्त संचार",
"आनुवंशिक बनावट"
],
correct: 1,
explanation: "मानसिक विकास अनुभव और उत्तेजना पर निर्भर करता है।"
},

{
q: "निम्न में से कौन-सा पर्यावरण द्वारा बदला नहीं जा सकता?",
a: [
"रुचि",
"अभिवृत्ति",
"रक्त समूह",
"व्यक्तित्व गुण"
],
correct: 2,
explanation: "रक्त समूह आनुवंशिक होता है और बदला नहीं जा सकता।"
},

{
q: "व्यक्तित्व विकास के बारे में सही कथन कौन-सा है?",
a: [
"यह पूरी तरह वंशानुगत है",
"यह जन्म से निश्चित होता है",
"यह पर्यावरण से प्रभावित होता है",
"यह सामाजिक कारकों से असंबंधित है"
],
correct: 2,
explanation: "व्यक्तित्व पर पर्यावरण का गहरा प्रभाव होता है।"
},

{
q: "डर के वातावरण में पलने वाला बच्चा सामान्यतः",
a: [
"अधिक आत्मविश्वासी",
"भावनात्मक रूप से असुरक्षित",
"अधिक बुद्धिमान",
"तेज़ परिपक्वता दिखाएगा"
],
correct: 1,
explanation: "डर का वातावरण भावनात्मक असुरक्षा पैदा करता है।"
},

{
q: "निम्न में से कौन-सा कारक सीखने की गति को सीधे प्रभावित करता है?",
a: [
"पोषण",
"रक्त समूह",
"आँखों का रंग",
"उँगलियों के निशान"
],
correct: 0,
explanation: "उचित पोषण ध्यान और सीखने में सहायक होता है।"
},

{
q: "शारीरिक वृद्धि को प्रभावित करने वाला वंशानुगत कारक कौन-सा है?",
a: [
"संस्कृति",
"पोषण",
"आनुवंशिक संरचना",
"विद्यालयी वातावरण"
],
correct: 2,
explanation: "शारीरिक वृद्धि जीन से प्रभावित होती है।"
},

{
q: "समान वंशानुक्रम वाले बच्चे अलग-अलग क्यों विकसित हो सकते हैं?",
a: [
"समान पर्यावरण के कारण",
"अलग-अलग पर्यावरण के कारण",
"सीखने की कमी के कारण",
"समान शिक्षा के कारण"
],
correct: 1,
explanation: "अलग पर्यावरण विकास को अलग दिशा देता है।"
},

{
q: "निम्न में से कौन-सा पोषण (Nurture) का उदाहरण है?",
a: [
"क्रोमोसोम",
"जीन",
"पालन-पोषण की शैली",
"रक्त प्रकार"
],
correct: 2,
explanation: "पालन-पोषण की शैली पोषण का भाग है।"
},

{
q: "निम्न में से कौन-सा विकास क्षेत्र पर्यावरण से सबसे कम प्रभावित होता है?",
a: [
"सामाजिक विकास",
"भावनात्मक विकास",
"आँखों का रंग",
"भाषा विकास"
],
correct: 2,
explanation: "आँखों का रंग आनुवंशिक होता है।"
},

{
q: "सहायक सहपाठी समूह मुख्यतः किसे बढ़ावा देता है?",
a: [
"शारीरिक लंबाई",
"सामाजिक कौशल",
"रक्त संचार",
"आनुवंशिक गुण"
],
correct: 1,
explanation: "सहपाठी सामाजिक विकास को प्रभावित करते हैं।"
},

{
q: "विकास के बारे में सही कथन कौन-सा है?",
a: [
"यह केवल वंशानुक्रम से नियंत्रित है",
"यह केवल पर्यावरण से नियंत्रित है",
"यह कई कारकों की पारस्परिक क्रिया से होता है",
"यह पूरी तरह यादृच्छिक है"
],
correct: 2,
explanation: "विकास अनेक कारकों के संयुक्त प्रभाव से होता है।"
},

{
q: "अच्छे वंशानुक्रम के बावजूद कौन-सी स्थिति बौद्धिक विकास को सीमित कर सकती है?",
a: [
"समृद्ध सांस्कृतिक अनुभव",
"उत्तेजना की कमी",
"अच्छा विद्यालय",
"सहायक परिवार"
],
correct: 1,
explanation: "उत्तेजना की कमी मानसिक विकास को रोकती है।"
},

{
q: "नैतिक विकास को सबसे अधिक कौन-सा पर्यावरणीय कारक प्रभावित करता है?",
a: [
"जलवायु",
"पारिवारिक मूल्य",
"शरीर संरचना",
"जीन"
],
correct: 1,
explanation: "नैतिक मूल्य परिवार और समाज से सीखे जाते हैं।"
},

{
q: "वंशानुक्रम की सीमा को कौन-सा उदाहरण दर्शाता है?",
a: [
"प्रतिभा लेकिन अभ्यास नहीं",
"रक्त समूह का विरासत में मिलना",
"आँखों के रंग का विरासत में मिलना",
"आनुवंशिक रोग"
],
correct: 0,
explanation: "अभ्यास के बिना प्रतिभा विकसित नहीं होती।"
},

{
q: "बुद्धि का विकास किस पर निर्भर करता है?",
a: [
"केवल जीन",
"केवल पर्यावरण",
"जीन और पर्यावरण की परस्पर क्रिया",
"केवल आयु"
],
correct: 2,
explanation: "बुद्धि जीन और अनुभव दोनों से बनती है।"
},

{
q: "जन्म के तुरंत बाद कौन-सा कारक विकास को प्रभावित करना शुरू करता है?",
a: [
"वंशानुक्रम",
"पर्यावरण",
"क्रोमोसोम",
"जीन"
],
correct: 1,
explanation: "पर्यावरण का प्रभाव जन्म से ही शुरू हो जाता है।"
},

{
q: "विकास का संतुलित दृष्टिकोण किसे समर्थन देता है?",
a: [
"अत्यधिक वंशानुक्रम दृष्टिकोण",
"अत्यधिक पर्यावरणीय दृष्टिकोण",
"परस्पर क्रियावादी दृष्टिकोण",
"दोनों की उपेक्षा"
],
correct: 2,
explanation: "संतुलित दृष्टिकोण प्रकृति और पोषण दोनों को मानता है।"
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
