/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 5 (Assertion–Reason Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "कथन (A): सामाजीकरण एक आजीवन चलने वाली प्रक्रिया है। कारण (R): व्यक्ति जीवन भर नई भूमिकाएँ और व्यवहार सीखता रहता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "व्यक्ति समाज में परिवर्तन के साथ नई भूमिकाएँ सीखता रहता है, इसलिए सामाजीकरण आजीवन चलता है।"
},

{
q: "कथन (A): परिवार सामाजीकरण का प्राथमिक अभिकर्ता है। कारण (R): बच्चा सबसे पहले सामाजिक व्यवहार परिवार में ही सीखता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "परिवार बच्चे का पहला सामाजिक परिवेश होता है।"
},

{
q: "कथन (A): विद्यालय सामाजीकरण का एक महत्वपूर्ण अभिकर्ता है। कारण (R): विद्यालय केवल शैक्षणिक ज्ञान प्रदान करता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 2,
explanation: "विद्यालय सामाजिक कौशल भी सिखाता है, केवल अकादमिक ज्ञान नहीं।"
},

{
q: "कथन (A): किशोरावस्था में सहकर्मी समूह का प्रभाव बहुत अधिक होता है। कारण (R): किशोर अपनी पहचान और स्वीकृति साथियों में खोजते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "पहचान निर्माण के कारण सहकर्मी प्रभाव बढ़ जाता है।"
},

{
q: "कथन (A): भाषा सामाजीकरण में महत्वपूर्ण भूमिका निभाती है। कारण (R): भाषा के माध्यम से संस्कृति और मूल्य संप्रेषित होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "संस्कृति और मूल्य भाषा द्वारा पीढ़ी-दर-पीढ़ी पहुँचते हैं।"
},

{
q: "कथन (A): सामाजीकरण सामाजिक व्यवस्था बनाए रखने में सहायक होता है। कारण (R): यह सामाजिक नियम और स्वीकार्य व्यवहार सिखाता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "नियम व्यवहार को दिशा देते हैं और व्यवस्था बनाए रखते हैं।"
},

{
q: "कथन (A): बच्चे खेल के माध्यम से कई सामाजिक कौशल सीखते हैं। कारण (R): खेल सहयोग और अंतःक्रिया को बढ़ावा देता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "खेल सामाजिक सीख का महत्वपूर्ण साधन है।"
},

{
q: "कथन (A): सामाजीकरण में आनुवंशिक संचरण शामिल नहीं होता। कारण (R): आनुवंशिक गुण जैविक होते हैं, सामाजिक नहीं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "सामाजीकरण सीखा जाता है, विरासत में नहीं मिलता।"
},

{
q: "कथन (A): द्वितीयक सामाजीकरण मुख्य रूप से परिवार के बाहर होता है। कारण (R): यह विद्यालय और कार्यस्थल जैसी संस्थाओं से होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "द्वितीयक सामाजीकरण समाज के व्यापक स्तर पर होता है।"
},

{
q: "कथन (A): जनसंचार माध्यम सामाजीकरण का एक अभिकर्ता है। कारण (R): यह दृष्टिकोण, विश्वास और व्यवहार को प्रभावित करता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "मीडिया समाजीकरण में महत्वपूर्ण भूमिका निभाता है।"
},

{
q: "कथन (A): प्रारंभिक बाल्यावस्था सामाजीकरण के लिए अत्यंत महत्वपूर्ण होती है। कारण (R): इस अवस्था में मूल आदतें और मूल्य विकसित होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "प्रारंभिक अनुभव आगे के व्यवहार की नींव रखते हैं।"
},

{
q: "कथन (A): सामाजीकरण जैविक प्राणी को सामाजिक प्राणी बनाता है। कारण (R): यह व्यक्ति को समाज में कार्य करने योग्य बनाता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "सामाजिक जीवन के लिए सामाजिक सीख आवश्यक है।"
},

{
q: "कथन (A): सहकारी खेल सामाजिक विकास में सहायक होता है। कारण (R): इसमें बच्चे भूमिकाएँ और पारस्परिक निर्भरता सीखते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "भूमिकाएँ और सहयोग सामाजिक कौशल बढ़ाते हैं।"
},

{
q: "कथन (A): विद्यालय सामाजीकरण का द्वितीयक अभिकर्ता है। कारण (R): प्राथमिक सामाजीकरण परिवार में होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "परिवार पहले और विद्यालय बाद में प्रभाव डालता है।"
},

{
q: "कथन (A): सामाजीकरण एक सरल और रैखिक प्रक्रिया है। कारण (R): यह सभी व्यक्तियों में एक ही क्रम से होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 3,
explanation: "सामाजीकरण जटिल और व्यक्ति-व्यक्ति में भिन्न होता है।"
},

{
q: "कथन (A): पहचान बच्चे को सामाजिक बनने में सहायता करती है। कारण (R): बच्चा पसंद किए गए लोगों या वस्तुओं से जुड़ता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "पहचान सामाजिक संबंधों को मजबूत करती है।"
},

{
q: "कथन (A): किशोरावस्था सामाजीकरण की एक महत्वपूर्ण अवस्था है। कारण (R): इस अवस्था में पहचान का निर्माण होता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "पहचान निर्माण किशोरावस्था को महत्वपूर्ण बनाता है।"
},

{
q: "कथन (A): छिपा पाठ्यक्रम सामाजीकरण में भूमिका निभाता है। कारण (R): यह अनौपचारिक नियम और अपेक्षाएँ सिखाता है।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "छिपा पाठ्यक्रम सामाजिक व्यवहार सिखाता है।"
},

{
q: "कथन (A): सामाजीकरण संस्कृति को संरक्षित करता है। कारण (R): सांस्कृतिक मूल्य पीढ़ी-दर-पीढ़ी पहुँचते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "सामाजीकरण से संस्कृति आगे बढ़ती है।"
},

{
q: "कथन (A): कमजोर सामाजीकरण से असमायोजन हो सकता है। कारण (R): व्यक्ति सामाजिक नियम सही से नहीं सीख पाता।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "नियम न सीख पाने से सामाजिक समस्याएँ होती हैं।"
},

{
q: "कथन (A): खेल सामाजीकरण के लिए महत्वपूर्ण नहीं है। कारण (R): सामाजिक कौशल केवल औपचारिक शिक्षा से विकसित होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 3,
explanation: "खेल सामाजिक कौशल विकास का मुख्य साधन है।"
},

{
q: "कथन (A): सामाजीकरण व्यक्ति-व्यक्ति में भिन्न होता है। कारण (R): सभी व्यक्तियों के सामाजिक अनुभव अलग होते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "अलग-अलग अनुभव अलग विकास करते हैं।"
},

{
q: "कथन (A): शिक्षक विद्यार्थियों के लिए आदर्श होते हैं। कारण (R): विद्यार्थी शिक्षकों के व्यवहार की नकल करते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "अनुकरण के कारण शिक्षक प्रभावशाली होते हैं।"
},

{
q: "कथन (A): सामाजीकरण बचपन में समाप्त हो जाता है। कारण (R): वयस्क नई सामाजिक भूमिकाएँ नहीं सीखते।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 3,
explanation: "सामाजीकरण वयस्कता तक चलता रहता है।"
},

{
q: "कथन (A): सफल सामाजीकरण सामाजिक सौहार्द उत्पन्न करता है। कारण (R): व्यक्ति सहयोग और पारस्परिक सम्मान सीखते हैं।",
a: [
"A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
"A और R दोनों सत्य हैं पर R, A की सही व्याख्या नहीं है",
"A सत्य है पर R असत्य है",
"A और R दोनों असत्य हैं"
],
correct: 0,
explanation: "सहयोग और सम्मान से सामाजिक सौहार्द बनता है।"
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
