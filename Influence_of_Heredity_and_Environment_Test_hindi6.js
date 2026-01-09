/* ============================================================
   वंशानुक्रम और पर्यावरण का प्रभाव — टेस्ट 6
   CASE-BASED (PYQs) — HINDI
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "वंशानुक्रम और पर्यावरण का प्रभाव – टेस्ट 6 (Case Based)";
const SUBTITLE_TEXT = "बाल विकास एवं शिक्षाशास्त्र";
const TOPIC_NAME = "वंशानुक्रम और पर्यावरण का प्रभाव";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "केस: दो बच्चे जुड़वाँ हैं और उनकी आनुवंशिक बनावट समान है। एक बच्चा प्रेरक और समृद्ध घरेलू वातावरण में पलता है, जबकि दूसरा वंचित वातावरण में।\n\nसबसे अधिक क्या देखा जाएगा?",
a: [
"दोनों का विकास बिल्कुल समान होगा",
"अच्छे वातावरण वाला बच्चा बेहतर संज्ञानात्मक विकास दिखाएगा",
"वंचित बच्चा अधिक बुद्धिमान होगा",
"पर्यावरण का विकास में कोई योगदान नहीं है"
],
correct: 1,
explanation: "प्रेरक वातावरण वंशानुगत क्षमता को विकसित करने में मदद करता है।"
},

{
q: "केस: रमेश का वंशानुक्रम अच्छा है लेकिन वह अस्वच्छ वातावरण में रहता है और बार-बार बीमार पड़ता है।\n\nकौन-सा कारक उसके विकास को सीमित कर रहा है?",
a: [
"वंशानुक्रम",
"भौतिक पर्यावरण",
"बुद्धि",
"प्रेरणा"
],
correct: 1,
explanation: "खराब भौतिक पर्यावरण स्वास्थ्य और विकास को प्रभावित करता है।"
},

{
q: "केस: एक बच्चा धाराप्रवाह अंग्रेज़ी बोलता है क्योंकि वह अंग्रेज़ी बोलने वाले परिवार में पला है।\n\nयह विकास मुख्यतः किस कारण से है?",
a: [
"वंशानुक्रम",
"जैविक परिपक्वता",
"पर्यावरण",
"बुद्धि"
],
correct: 2,
explanation: "भाषा पर्यावरण से सीखी जाती है।"
},

{
q: "केस: उच्च आनुवंशिक क्षमता वाला बच्चा प्रोत्साहन के अभाव में अच्छा प्रदर्शन नहीं कर पाता।\n\nयह दर्शाता है कि",
a: [
"केवल वंशानुक्रम पर्याप्त है",
"पर्यावरण वंशानुगत क्षमता को सीमित कर सकता है",
"जीन समय के साथ बदल जाते हैं",
"विकास आकस्मिक होता है"
],
correct: 1,
explanation: "समर्थन के बिना क्षमता पूर्ण रूप से विकसित नहीं होती।"
},

{
q: "केस: समान आयु के दो बच्चों की लंबाई में काफी अंतर है।\n\nयह अंतर मुख्यतः किस कारण से है?",
a: [
"विद्यालयी शिक्षा",
"वंशानुक्रम और पोषण",
"सहपाठी प्रभाव",
"शिक्षण विधियाँ"
],
correct: 1,
explanation: "लंबाई वंशानुक्रम और पोषण दोनों पर निर्भर करती है।"
},

{
q: "केस: डर के वातावरण में पला बच्चा चिंता और कम आत्मविश्वास दिखाता है।\n\nविकास का कौन-सा पक्ष सबसे अधिक प्रभावित है?",
a: [
"शारीरिक",
"भावनात्मक",
"भाषायी",
"नैतिक"
],
correct: 1,
explanation: "घरेलू वातावरण भावनात्मक विकास को प्रभावित करता है।"
},

{
q: "केस: एक शिक्षक देखता है कि बच्चे अलग-अलग गति से अवधारणाएँ सीखते हैं।\n\nयह किसे दर्शाता है?",
a: [
"विकास समान होता है",
"विकास में व्यक्तिगत भिन्नताएँ होती हैं",
"शिक्षण प्रभावी नहीं है",
"सीखना केवल आयु पर निर्भर करता है"
],
correct: 1,
explanation: "हर बच्चे की विकास गति अलग होती है।"
},

{
q: "केस: कुपोषित बच्चा कक्षा में ध्यान केंद्रित नहीं कर पाता।\n\nसीखने को कौन-सा कारक प्रभावित कर रहा है?",
a: [
"वंशानुक्रम",
"पोषण",
"सहपाठी दबाव",
"पाठ्यक्रम"
],
correct: 1,
explanation: "पोषण ध्यान और सीखने के लिए आवश्यक है।"
},

{
q: "केस: बच्चा संगीत प्रतिभा लेकर जन्म लेता है लेकिन प्रशिक्षण के बाद ही निपुण बनता है।\n\nयह किसे दर्शाता है?",
a: [
"केवल वंशानुक्रम",
"केवल पर्यावरण",
"वंशानुक्रम और पर्यावरण की परस्पर क्रिया",
"आकस्मिक विकास"
],
correct: 2,
explanation: "प्रतिभा को विकसित होने के लिए अभ्यास और वातावरण चाहिए।"
},

{
q: "केस: सांस्कृतिक रूप से समृद्ध वातावरण में पलने वाले बच्चों की भाषा-क्षमता बेहतर होती है।\n\nयह किसकी भूमिका दर्शाता है?",
a: [
"जैविक कारक",
"पर्यावरणीय उत्तेजना",
"आनुवंशिक प्रभुत्व",
"केवल परिपक्वता"
],
correct: 1,
explanation: "सांस्कृतिक अनुभव भाषा विकास को बढ़ाते हैं।"
},

{
q: "केस: बच्चा अमूर्त अवधारणाएँ नहीं समझ पाता क्योंकि वह संज्ञानात्मक रूप से तैयार नहीं है।\n\nयह सीमा किससे जुड़ी है?",
a: [
"शिक्षण विधि",
"परिपक्वता",
"केवल पर्यावरण",
"प्रेरणा"
],
correct: 1,
explanation: "सीखने के लिए विकासात्मक तत्परता आवश्यक है।"
},

{
q: "केस: अलग-अलग घरों में पले समान जुड़वाँ बच्चों के व्यक्तित्व अलग हैं।\n\nयह किसे दर्शाता है?",
a: [
"वंशानुक्रम का प्रभुत्व",
"पर्यावरण की नगण्य भूमिका",
"व्यक्तित्व में पर्यावरण की भूमिका",
"आकस्मिक विकास"
],
correct: 2,
explanation: "व्यक्तित्व पर्यावरण से आकार लेता है।"
},

{
q: "केस: सहायक शिक्षक बच्चों को प्रोत्साहित करता है जिससे प्रदर्शन सुधरता है।\n\nयह किसके महत्व को दर्शाता है?",
a: [
"वंशानुक्रम",
"विद्यालयी पर्यावरण",
"आनुवंशिक कारक",
"आयु"
],
correct: 1,
explanation: "सकारात्मक विद्यालयी वातावरण सीखने में सहायक होता है।"
},

{
q: "केस: कमजोर दृष्टि वाला बच्चा सहायता के बिना पढ़ाई में संघर्ष करता है।\n\nयह क्या दर्शाता है?",
a: [
"शारीरिक सीमाएँ सीखने को प्रभावित करती हैं",
"पर्यावरण की कोई भूमिका नहीं",
"बुद्धि कम है",
"सीखना असंभव है"
],
correct: 0,
explanation: "शारीरिक स्वास्थ्य सीखने की क्षमता को प्रभावित करता है।"
},

{
q: "केस: भावनात्मक रूप से सुरक्षित परिवारों के बच्चे बेहतर समायोजन दिखाते हैं।\n\nकौन-सा विकास क्षेत्र समर्थित होता है?",
a: [
"सामाजिक और भावनात्मक",
"केवल शारीरिक",
"केवल नैतिक",
"केवल संज्ञानात्मक"
],
correct: 0,
explanation: "भावनात्मक सुरक्षा सामाजिक समायोजन को बेहतर बनाती है।"
},

{
q: "केस: बच्चा घर में देखे गए आक्रामक व्यवहार की नकल करता है।\n\nयह व्यवहार मुख्यतः किससे विकसित होता है?",
a: [
"वंशानुक्रम",
"पर्यवेक्षण और पर्यावरण",
"परिपक्वता",
"जैविक प्रवृत्ति"
],
correct: 1,
explanation: "बच्चे व्यवहार को देखकर सीखते हैं।"
},

{
q: "केस: लोकतांत्रिक परिवार में पला बच्चा स्वतंत्र और आत्मविश्वासी होता है।\n\nयह किसकी भूमिका दर्शाता है?",
a: [
"जीन",
"पालन-पोषण की शैली",
"आयु",
"जैविक परिपक्वता"
],
correct: 1,
explanation: "पालन-पोषण की शैली व्यक्तित्व को प्रभावित करती है।"
},

{
q: "केस: औसत वंशानुक्रम के बावजूद बच्चा समृद्ध सीखने के अनुभवों से उत्कृष्ट प्रदर्शन करता है।\n\nयह क्या दर्शाता है?",
a: [
"वंशानुक्रम ही सब कुछ है",
"पर्यावरण क्षमता को बढ़ाता है",
"जीन स्थायी रूप से बदल जाते हैं",
"सीखना आकस्मिक है"
],
correct: 1,
explanation: "अच्छा पर्यावरण प्रदर्शन को बढ़ा सकता है।"
},

{
q: "केस: प्रारंभिक आयु से कई भाषाओं के संपर्क में आने वाला बच्चा उन्हें आसानी से सीखता है।\n\nयह किस कारण से है?",
a: [
"वंशानुक्रम",
"प्रारंभिक पर्यावरणीय संपर्क",
"शारीरिक परिपक्वता",
"विद्यालयी अनुशासन"
],
correct: 1,
explanation: "प्रारंभिक संपर्क भाषा सीखने में सहायक होता है।"
},

{
q: "केस: सामाजिक संपर्क के बिना पला बच्चा कमजोर संप्रेषण कौशल दिखाता है।\n\nयह किसके महत्व को दर्शाता है?",
a: [
"पोषण",
"सामाजिक पर्यावरण",
"वंशानुक्रम",
"परिपक्वता"
],
correct: 1,
explanation: "संप्रेषण के लिए सामाजिक संपर्क आवश्यक है।"
},

{
q: "केस: बच्चे के नैतिक मूल्य परिवार की मान्यताओं को दर्शाते हैं।\n\nकौन-सा कारक जिम्मेदार है?",
a: [
"आनुवंशिक विरासत",
"सामाजिक पर्यावरण",
"जैविक परिपक्वता",
"आयु"
],
correct: 1,
explanation: "नैतिक मूल्य सामाजिक रूप से सीखे जाते हैं।"
},

{
q: "केस: शारीरिक रूप से मजबूत बच्चा भावनात्मक नियंत्रण में कमजोर है।\n\nयह क्या दर्शाता है?",
a: [
"विकास समान होता है",
"सभी क्षेत्र समान रूप से विकसित होते हैं",
"विकास के क्षेत्र अलग-अलग गति से विकसित होते हैं",
"शारीरिक विकास भावनात्मक शक्ति सुनिश्चित करता है"
],
correct: 2,
explanation: "विकास के विभिन्न क्षेत्र अलग गति से बढ़ते हैं।"
},

{
q: "केस: बेहतर विद्यालय में स्थानांतरण के बाद बच्चे का शैक्षिक प्रदर्शन सुधरता है।\n\nयह किसे दर्शाता है?",
a: [
"आनुवंशिक परिवर्तन",
"पर्यावरणीय प्रभाव",
"आयु कारक",
"शारीरिक वृद्धि"
],
correct: 1,
explanation: "विद्यालयी पर्यावरण सीखने को प्रभावित करता है।"
},

{
q: "केस: वंचित पृष्ठभूमि के बच्चों में संज्ञानात्मक विकास में देरी दिखती है।\n\nयह मुख्यतः किसकी कमी को दर्शाता है?",
a: [
"आनुवंशिक क्षमता",
"पर्यावरणीय उत्तेजना",
"जैविक वृद्धि",
"आयु"
],
correct: 1,
explanation: "संज्ञानात्मक विकास के लिए उत्तेजना आवश्यक है।"
},

{
q: "केस: भावनात्मक सहयोग मिलने पर बच्चे का विकास बेहतर होता है।\n\nयह किस दृष्टिकोण का समर्थन करता है?",
a: [
"भावनाएँ सीखने को प्रभावित करती हैं",
"वंशानुक्रम विकास पर हावी है",
"पर्यावरण की कोई भूमिका नहीं",
"विकास स्थिर है"
],
correct: 0,
explanation: "भावनात्मक समर्थन सीखने और विकास को बढ़ाता है।"
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
