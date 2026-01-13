/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 3 (Conceptual Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "एक बच्चा बड़ों को देखकर ‘धन्यवाद’ कहना सीखता है। यह किसका उदाहरण है?",
a: [
"परिपक्वता",
"अनुकरण",
"अनुकूलन",
"जैविक वृद्धि"
],
correct: 1,
explanation: "बच्चा बड़ों के व्यवहार की नकल करता है, इसे अनुकरण कहते हैं।"
},

{
q: "सामाजीकरण को आजीवन प्रक्रिया इसलिए माना जाता है क्योंकि",
a: [
"संस्कृति स्थिर रहती है",
"सीखना बचपन में समाप्त हो जाता है",
"समाज लगातार बदलता रहता है",
"जैविक वृद्धि चलती रहती है"
],
correct: 2,
explanation: "समाज के बदलने के साथ व्यक्ति नई भूमिकाएँ और व्यवहार सीखता रहता है।"
},

{
q: "यदि कोई बच्चा दूसरों से संपर्क नहीं करता है, तो सबसे अधिक प्रभावित होगा",
a: [
"शारीरिक विकास",
"सामाजिक विकास",
"जैविक परिपक्वता",
"प्रतिवर्त क्रियाएँ"
],
correct: 1,
explanation: "संपर्क की कमी से सामाजिक व्यवहार और समायोजन प्रभावित होता है।"
},

{
q: "ऐसी कक्षा जहाँ चर्चा और सहयोग को बढ़ावा दिया जाता है, मुख्य रूप से किसे विकसित करती है?",
a: [
"आनुवंशिक विकास",
"सामाजीकरण",
"परिपक्वता",
"अनुकूलन"
],
correct: 1,
explanation: "चर्चा और सहयोग से सामाजिक सीख को बढ़ावा मिलता है।"
},

{
q: "निम्न में से कौन-सी स्थिति द्वितीयक सामाजीकरण को दर्शाती है?",
a: [
"घर में बोलना सीखना",
"भोजन शिष्टाचार सीखना",
"कार्यालय के नियम सीखना",
"विश्वास का विकास"
],
correct: 2,
explanation: "कार्यालय के नियम सीखना परिवार के बाहर होने वाला सामाजीकरण है।"
},

{
q: "सामाजीकरण सामाजिक व्यवस्था बनाए रखने में मदद करता है क्योंकि यह",
a: [
"अंतर समाप्त करता है",
"नियम और मानदंड सिखाता है",
"आनुवंशिकता को नियंत्रित करता है",
"अंतःक्रिया कम करता है"
],
correct: 1,
explanation: "नियम और मानदंड व्यवहार को दिशा देते हैं।"
},

{
q: "जो बच्चा अपने खिलौने दूसरों के साथ बाँटता है, उसमें किसका विकास हुआ है?",
a: [
"शारीरिक परिपक्वता",
"सामाजिक दक्षता",
"आनुवंशिक गुण",
"जैविक प्रतिवर्त"
],
correct: 1,
explanation: "साझा करना सामाजिक कौशल और सहयोग को दर्शाता है।"
},

{
q: "जब माता-पिता अच्छे व्यवहार पर पुरस्कार देते हैं, तो वे सामाजीकरण को बढ़ावा देते हैं",
a: [
"अनुकरण द्वारा",
"दंड द्वारा",
"पुनर्बलन द्वारा",
"परिपक्वता द्वारा"
],
correct: 2,
explanation: "पुरस्कार अच्छे व्यवहार को मजबूत करता है।"
},

{
q: "प्रारंभिक बाल्यावस्था में सामाजीकरण की असफलता का परिणाम हो सकता है",
a: [
"बेहतर समायोजन",
"सामाजिक अलगाव",
"बुद्धि में वृद्धि",
"शीघ्र परिपक्वता"
],
correct: 1,
explanation: "कमजोर सामाजीकरण से सामाजिक समायोजन की समस्या हो सकती है।"
},

{
q: "निम्न में से कौन-सी कक्षा गतिविधि सामाजीकरण को सबसे अधिक बढ़ावा देती है?",
a: [
"केवल मौन पठन",
"समूह गतिविधियाँ",
"केवल व्यक्तिगत परीक्षा",
"रटकर सीखना"
],
correct: 1,
explanation: "समूह गतिविधियाँ अंतःक्रिया और सहयोग को बढ़ाती हैं।"
},

{
q: "एरिकसन के अनुसार, जिस बच्चे को खोज करने के लिए प्रोत्साहित किया जाता है, उसमें विकसित होता है",
a: [
"अविश्वास",
"अपराधबोध",
"पहल",
"अलगाव"
],
correct: 2,
explanation: "प्रोत्साहन से पहल की भावना विकसित होती है।"
},

{
q: "सामाजीकरण में भाषा की भूमिका मुख्य रूप से किससे संबंधित है?",
a: [
"शारीरिक विकास",
"संस्कृति का संप्रेषण",
"जैविक वृद्धि",
"आनुवंशिकता"
],
correct: 1,
explanation: "भाषा के माध्यम से संस्कृति और मूल्य आगे बढ़ते हैं।"
},

{
q: "यदि बच्चा अपने दोस्तों की तरह कपड़े पहनने लगे, तो यह किसका प्रभाव दर्शाता है?",
a: [
"परिवार",
"विद्यालय",
"सहकर्मी समूह",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "सहकर्मी समूह व्यवहार और पहनावे को प्रभावित करता है।"
},

{
q: "प्रत्येक व्यक्ति का सामाजीकरण अनुभव अलग क्यों होता है?",
a: [
"एक जैसी संस्कृति के कारण",
"भिन्न सामाजिक अंतःक्रियाओं के कारण",
"एक जैसी आनुवंशिकता के कारण",
"एक जैसी शिक्षा के कारण"
],
correct: 1,
explanation: "अलग-अलग सामाजिक अनुभव व्यक्ति को अलग बनाते हैं।"
},

{
q: "सामाजीकरण मुख्य रूप से जैविक प्राणी को किसमें बदल देता है?",
a: [
"आनुवंशिक उत्पाद",
"सामाजिक प्राणी",
"शारीरिक इकाई",
"जैविक संरचना"
],
correct: 1,
explanation: "सामाजीकरण व्यक्ति को सामाजिक जीवन के योग्य बनाता है।"
},

{
q: "मानव संपर्क के बिना पले बच्चे में भाषा का विकास न होना किस भूमिका को दर्शाता है?",
a: [
"आनुवंशिकता",
"पर्यावरण",
"परिपक्वता",
"गुणसूत्र"
],
correct: 1,
explanation: "भाषा विकास के लिए सामाजिक पर्यावरण आवश्यक है।"
},

{
q: "कौन-सा खेल सहयोग की भावना को सबसे अधिक विकसित करता है?",
a: [
"एकाकी खेल",
"समानांतर खेल",
"सहकारी खेल",
"दर्शक खेल"
],
correct: 2,
explanation: "सहकारी खेल में टीमवर्क और साझा लक्ष्य होते हैं।"
},

{
q: "जब शिक्षक सम्मानजनक व्यवहार का उदाहरण प्रस्तुत करता है, तो विद्यार्थी सीखते हैं",
a: [
"अनुकरण द्वारा",
"दंड द्वारा",
"अलगाव द्वारा",
"परिपक्वता द्वारा"
],
correct: 0,
explanation: "विद्यार्थी शिक्षक के व्यवहार की नकल करते हैं।"
},

{
q: "सामाजीकरण संस्कृति को सुरक्षित रखता है क्योंकि यह",
a: [
"परंपराएँ बदल देता है",
"मूल्यों को अस्वीकार करता है",
"मूल्यों को अगली पीढ़ी तक पहुँचाता है",
"नियम समाप्त करता है"
],
correct: 2,
explanation: "मूल्य और परंपराएँ सामाजीकरण से आगे बढ़ती हैं।"
},

{
q: "निम्न में से कौन-सी स्थिति सकारात्मक सामाजीकरण को दर्शाती है?",
a: [
"डर पर आधारित अनुशासन",
"सहयोग को प्रोत्साहन",
"सामाजिक अलगाव",
"कठोर दंड"
],
correct: 1,
explanation: "सहयोग को बढ़ावा देना स्वस्थ सामाजीकरण है।"
},

{
q: "विद्यालय के नियम सीखना किसका उदाहरण है?",
a: [
"प्राथमिक सामाजीकरण",
"द्वितीयक सामाजीकरण",
"जैविक परिपक्वता",
"आनुवंशिक विकास"
],
correct: 1,
explanation: "विद्यालय आधारित सीख द्वितीयक सामाजीकरण है।"
},

{
q: "किशोरावस्था में सहकर्मी संपर्क न होने से किस पर प्रभाव पड़ सकता है?",
a: [
"ऊँचाई",
"सामाजिक पहचान",
"रक्त समूह",
"प्रतिवर्त क्रिया"
],
correct: 1,
explanation: "सहकर्मी सामाजिक पहचान के विकास में सहायक होते हैं।"
},

{
q: "सामाजीकरण मुख्य रूप से व्यक्ति को किसमें सहायता करता है?",
a: [
"जैविक प्रतिस्पर्धा में",
"सहयोगपूर्ण जीवन जीने में",
"आनुवंशिकता बदलने में",
"परिपक्वता नियंत्रित करने में"
],
correct: 1,
explanation: "सामाजीकरण सहयोग और सामंजस्यपूर्ण जीवन को बढ़ावा देता है।"
},

{
q: "सामाजीकरण का उद्देश्य सबसे अच्छे रूप में क्या दर्शाता है?",
a: [
"सभी को समान बनाना",
"व्यक्ति को समाज के अनुकूल बनाना",
"अंतःक्रिया सीमित करना",
"आनुवंशिकता नियंत्रित करना"
],
correct: 1,
explanation: "सामाजीकरण व्यक्ति को समाज के अनुसार ढालता है।"
},

{
q: "सफल सामाजीकरण तब दिखाई देता है जब व्यक्ति",
a: [
"समाज से बचता है",
"सामाजिक मानदंडों का पालन करता है",
"मूल्यों को अस्वीकार करता है",
"केवल आनुवंशिकता पर निर्भर रहता है"
],
correct: 1,
explanation: "सामाजिक मानदंडों का पालन सफल सामाजीकरण को दर्शाता है।"
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
