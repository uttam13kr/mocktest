/* ============================================================
   Topic name — Socialisation Process
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "Socialisation Process – Test 6 (Case-Based Hindi)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Socialisation Process";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "केस: रोहन रोज़ अपने माता-पिता को देखकर बड़ों का आदरपूर्वक अभिवादन करना सीखता है।\nयह सामाजीकरण की कौन-सी प्रक्रिया दर्शाता है?",
a: [
"परिपक्वता",
"अनुकरण",
"अनुकूलन",
"आनुवंशिक संचरण"
],
correct: 1,
explanation: "रोहन दूसरों के व्यवहार की नकल कर रहा है, इसे अनुकरण कहते हैं।"
},

{
q: "केस: एक बच्चा विद्यालय में लाइन में खड़ा होना और हाथ उठाकर बोलना सीखता है।\nयह स्थिति किस प्रकार के सामाजीकरण को दर्शाती है?",
a: [
"प्राथमिक सामाजीकरण",
"द्वितीयक सामाजीकरण",
"जैविक परिपक्वता",
"आनुवंशिक अधिगम"
],
correct: 1,
explanation: "विद्यालय के नियम परिवार के बाहर सीखे जाते हैं, इसलिए यह द्वितीयक सामाजीकरण है।"
},

{
q: "केस: मानव संपर्क के बिना पले बच्चे में भाषा का विकास नहीं होता।\nयह किसके महत्व को दर्शाता है?",
a: [
"आनुवंशिकता",
"पर्यावरण",
"परिपक्वता",
"गुणसूत्र"
],
correct: 1,
explanation: "भाषा का विकास सामाजिक पर्यावरण और अंतःक्रिया से होता है।"
},

{
q: "केस: बच्चे ‘घर-घर’ खेलते समय माँ, पिता और बच्चे की भूमिकाएँ निभाते हैं।\nयह कौन-सा खेल है?",
a: [
"एकाकी खेल",
"समानांतर खेल",
"सहयोगात्मक खेल",
"सहकारी खेल"
],
correct: 3,
explanation: "भूमिकाओं और सहयोग वाला खेल सहकारी खेल होता है।"
},

{
q: "केस: शिक्षक कक्षा में समूह चर्चा और टीमवर्क को प्रोत्साहित करता है।\nयह अभ्यास मुख्य रूप से किसे बढ़ावा देता है?",
a: [
"प्रतिस्पर्धा",
"सामाजीकरण",
"परिपक्वता",
"आनुवंशिक वृद्धि"
],
correct: 1,
explanation: "समूह अंतःक्रिया सामाजिक कौशल विकसित करती है।"
},

{
q: "केस: बच्चा घर पर भोजन शिष्टाचार सीखता है।\nयह सीख किसमें आती है?",
a: [
"द्वितीयक सामाजीकरण",
"प्राथमिक सामाजीकरण",
"औपचारिक अधिगम",
"संस्थागत अधिगम"
],
correct: 1,
explanation: "परिवार आधारित सीख प्राथमिक सामाजीकरण है।"
},

{
q: "केस: किशोर अपने दोस्तों की तरह कपड़े पहनना पसंद करते हैं।\nकौन-सा अभिकर्ता सबसे अधिक प्रभाव डाल रहा है?",
a: [
"परिवार",
"विद्यालय",
"सहकर्मी समूह",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "किशोरावस्था में सहकर्मी समूह का प्रभाव अधिक होता है।"
},

{
q: "केस: बच्चे को खिलौने साझा करने पर पुरस्कार मिलता है।\nसामाजीकरण की कौन-सी विधि प्रयुक्त हुई?",
a: [
"दंड",
"पुनर्बलन",
"अलगाव",
"परिपक्वता"
],
correct: 1,
explanation: "पुरस्कार अच्छे व्यवहार को मजबूत करता है।"
},

{
q: "केस: सार्वजनिक स्थान पर गलत व्यवहार करने पर माता-पिता बच्चे को डाँटते हैं।\nयह किसके माध्यम से सामाजीकरण है?",
a: [
"अनुकरण",
"सुझाव",
"पुरस्कार और दंड",
"परिपक्वता"
],
correct: 2,
explanation: "डाँटना दंड का उदाहरण है।"
},

{
q: "केस: बच्चा कहानियों और भाषा के माध्यम से सांस्कृतिक परंपराएँ सीखता है।\nकौन-सा कारक यहाँ प्रमुख है?",
a: [
"भाषा",
"आनुवंशिकता",
"परिपक्वता",
"प्रतिवर्त क्रिया"
],
correct: 0,
explanation: "भाषा संस्कृति और मूल्यों का संप्रेषण करती है।"
},

{
q: "केस: विद्यार्थी शिक्षक के अनुशासित व्यवहार की नकल करता है।\nयह सीख किससे होती है?",
a: [
"अनुकूलन",
"अनुकरण",
"आनुवंशिक प्रभाव",
"परिपक्वता"
],
correct: 1,
explanation: "बच्चे आदर्श व्यक्तियों की नकल करके सीखते हैं।"
},

{
q: "केस: शैशवावस्था में प्रेम और देखभाल मिलने से बच्चा आत्मविश्वासी बनता है।\nएरिकसन के अनुसार यह किसको दर्शाता है?",
a: [
"स्वायत्तता",
"विश्वास",
"पहल",
"पहचान"
],
correct: 1,
explanation: "उचित देखभाल से विश्वास विकसित होता है।"
},

{
q: "केस: विद्यालय समयपालन, अनुशासन और सहयोग सिखाता है जो पुस्तकों से परे है।\nयह क्या दर्शाता है?",
a: [
"औपचारिक पाठ्यक्रम",
"छिपा पाठ्यक्रम",
"आनुवंशिक अधिगम",
"परिपक्वता"
],
correct: 1,
explanation: "छिपा पाठ्यक्रम अनौपचारिक सामाजिक मूल्य सिखाता है।"
},

{
q: "केस: बच्चा दूसरों से बिना बातचीत किए अकेले खेलना पसंद करता है।\nयह कौन-सा खेल है?",
a: [
"एकाकी खेल",
"समानांतर खेल",
"सहकारी खेल",
"सहयोगात्मक खेल"
],
correct: 0,
explanation: "अकेले खेलना एकाकी खेल कहलाता है।"
},

{
q: "केस: बच्चा टीवी पर दिखे कार्टून पात्रों की नकल करता है।\nकौन-सा अभिकर्ता जिम्मेदार है?",
a: [
"विद्यालय",
"सहकर्मी समूह",
"जनसंचार माध्यम",
"परिवार"
],
correct: 2,
explanation: "टेलीविजन जनसंचार माध्यम का भाग है।"
},

{
q: "केस: किशोर सामाजिक नियमों पर प्रश्न करता है और अपनी पहचान खोजता है।\nयह कौन-सी अवस्था है?",
a: [
"प्रारंभिक बाल्यावस्था",
"मध्य बाल्यावस्था",
"किशोरावस्था",
"वयस्कता"
],
correct: 2,
explanation: "पहचान निर्माण किशोरावस्था में होता है।"
},

{
q: "केस: कार्यरत वयस्क कार्यालय संस्कृति और पेशेवर व्यवहार सीखता है।\nयह किसका उदाहरण है?",
a: [
"प्राथमिक सामाजीकरण",
"द्वितीयक सामाजीकरण",
"जैविक परिपक्वता",
"आनुवंशिक प्रभाव"
],
correct: 1,
explanation: "कार्यस्थल सीख द्वितीयक सामाजीकरण है।"
},

{
q: "केस: हिंसक मीडिया देखने से बच्चे में आक्रामक व्यवहार दिखता है।\nयह दर्शाता है कि सामाजीकरण हो सकता है",
a: [
"हमेशा सकारात्मक",
"तटस्थ",
"नकारात्मक",
"अमहत्वपूर्ण"
],
correct: 2,
explanation: "मीडिया का नकारात्मक प्रभाव भी हो सकता है।"
},

{
q: "केस: टीम गेम खेलते समय बच्चे सहयोग सीखते हैं।\nकौन-सा विकास सबसे अधिक सुदृढ़ होता है?",
a: [
"शारीरिक विकास",
"सामाजिक विकास",
"जैविक वृद्धि",
"आनुवंशिक गुण"
],
correct: 1,
explanation: "टीम खेल सामाजिक कौशल बढ़ाते हैं।"
},

{
q: "केस: बच्चा परिवार के सदस्यों को देखकर लिंग भूमिकाएँ सीखता है।\nयह किससे होता है?",
a: [
"पहचान",
"दंड",
"परिपक्वता",
"प्रतिवर्त क्रिया"
],
correct: 0,
explanation: "पहचान से सामाजिक भूमिकाएँ अपनाई जाती हैं।"
},

{
q: "केस: सहायक वातावरण में पला बच्चा सकारात्मक सामाजिक व्यवहार विकसित करता है।\nयह दर्शाता है कि विकास निर्भर करता है",
a: [
"केवल आनुवंशिकता पर",
"केवल पर्यावरण पर",
"आनुवंशिकता और पर्यावरण दोनों पर",
"न आनुवंशिकता न पर्यावरण पर"
],
correct: 2,
explanation: "विकास प्रकृति और पोषण दोनों से प्रभावित होता है।"
},

{
q: "केस: बच्चा बड़ों की बातें सुनकर नैतिक मूल्य सीखता है।\nमुख्य अभिकर्ता कौन है?",
a: [
"विद्यालय",
"सहकर्मी समूह",
"परिवार",
"जनसंचार माध्यम"
],
correct: 2,
explanation: "नैतिक सीख का पहला स्रोत परिवार है।"
},

{
q: "केस: भाई-बहन सामाजिक नियम अलग-अलग तरह से सीखते हैं।\nइसका कारण है",
a: [
"समान आनुवंशिकता",
"भिन्न सामाजिक अनुभव",
"समान पर्यावरण",
"समान संस्कृति"
],
correct: 1,
explanation: "भिन्न अनुभव अलग सामाजिक सीख देते हैं।"
},

{
q: "केस: प्रारंभिक अंतःक्रिया की कमी से बच्चा सहयोग से इंकार करता है।\nयह किसकी विफलता दर्शाता है?",
a: [
"परिपक्वता",
"सामाजीकरण",
"आनुवंशिक वृद्धि",
"शारीरिक विकास"
],
correct: 1,
explanation: "कम अंतःक्रिया से सामाजीकरण प्रभावित होता है।"
},

{
q: "केस: वयस्क माता-पिता या कर्मचारी जैसी नई भूमिकाओं के अनुसार ढलते रहते हैं।\nयह दर्शाता है कि सामाजीकरण",
a: [
"केवल बचपन तक सीमित है",
"केवल जैविक है",
"आजीवन है",
"केवल विद्यालय आधारित है"
],
correct: 2,
explanation: "सामाजीकरण जीवनभर चलता रहता है।"
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
