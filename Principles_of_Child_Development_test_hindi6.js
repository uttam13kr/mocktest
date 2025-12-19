/* ============================================================
   PRINCIPLES OF CHILD DEVELOPMENT — TEST 6 (CASE STUDY – HINDI)
   QUESTIONS: 25
   TIME: 20 MINUTES
   LANGUAGE: HINDI ONLY
============================================================ */

// TEST SETTINGS
const TEST_TITLE = "बाल विकास के सिद्धांत – टेस्ट 6 (केस स्टडी)";
const SUBTITLE_TEXT = "Child Development & Pedagogy";
const TOPIC_NAME = "Principles of Child Development";
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS DATA
const quizData = [

{
q: "केस: एक अध्यापिका देखती है कि रिया पहले रेंगना सीखती है, फिर सहारे से खड़ी होती है, फिर खुद चलना शुरू करती है और बाद में दौड़ना सीखती है।\n\nयह घटना किस सिद्धांत को दर्शाती है?",
a: [
"विकास अनियमित होता है",
"विकास क्रमबद्ध और निश्चित अनुक्रम में होता है",
"विकास अप्रत्याशित होता है",
"विकास केवल सिखाने पर निर्भर है"
],
correct: 1,
explanation: "रिया के सभी चरण एक निश्चित और स्वाभाविक क्रम में हैं।"
},

{
q: "केस: रिया पहले सिर सँभालना सीखती है, फिर हाथ-पैर नियंत्रित करती है और बाद में चलना शुरू करती है।\n\nयह किस विकास सिद्धांत को दर्शाता है?",
a: [
"सामान्य से विशिष्ट विकास",
"प्रॉक्सिमोडिस्टल विकास",
"सीफेलो-कॉडल विकास",
"समान विकास"
],
correct: 2,
explanation: "सीफेलो-कॉडल का अर्थ सिर से पैर की ओर विकास है।"
},

{
q: "केस: अर्जुन शारीरिक रूप से मजबूत है लेकिन भावनात्मक रूप से कमजोर है। वह जल्दी रो पड़ता है और साथियों के दबाव को नहीं सह पाता।\n\nयह स्थिति क्या दर्शाती है?",
a: [
"सभी क्षेत्रों का विकास समान होता है",
"केवल शारीरिक विकास होता है",
"विकास के विभिन्न क्षेत्र आपस में जुड़े हैं लेकिन अलग-अलग गति से विकसित होते हैं",
"विकास बचपन के बाद रुक जाता है"
],
correct: 2,
explanation: "हर क्षेत्र अलग गति से विकसित होता है लेकिन आपस में जुड़ा होता है।"
},

{
q: "केस: अर्जुन शारीरिक रूप से मजबूत है लेकिन भावनात्मक रूप से कमजोर है।\n\nकिस क्षेत्र में सहायता की आवश्यकता है?",
a: [
"मानसिक विकास",
"भावनात्मक विकास",
"शारीरिक विकास",
"भाषागत विकास"
],
correct: 1,
explanation: "अर्जुन भावनात्मक रूप से कमजोर है इसलिए भावनात्मक सहायता चाहिए।"
},

{
q: "केस: मीना गरीब परिवार से है लेकिन घर का वातावरण प्रेमपूर्ण और सहयोगात्मक है। उसके माता-पिता उसे प्रोत्साहित करते हैं और वह पढ़ाई में अच्छा करती है।\n\nयह क्या दर्शाता है?",
a: [
"केवल आर्थिक स्थिति ही विकास निर्धारित करती है",
"पर्यावरण और भावनात्मक सहयोग विकास को गहराई से प्रभावित करते हैं",
"गरीब बच्चे सफल नहीं हो सकते",
"विकास केवल वंशानुक्रम पर निर्भर है"
],
correct: 1,
explanation: "सकारात्मक पारिवारिक वातावरण विकास में मदद करता है।"
},

{
q: "केस: मीना आर्थिक रूप से कमजोर है लेकिन भावनात्मक समर्थन उसे हमेशा मिलता है।\n\nउसके विकास पर सबसे अधिक प्रभाव किसका पड़ा?",
a: [
"केवल वंशानुक्रम",
"केवल पोषण",
"सकारात्मक पारिवारिक वातावरण",
"दंड"
],
correct: 2,
explanation: "सहयोगी परिवार आत्मविश्वास और विकास बढ़ाता है।"
},

{
q: "केस: एक अध्यापिका देखती है कि कुछ बच्चे जल्दी सीखते हैं जबकि कुछ समय लेते हैं लेकिन आखिरकार सीख जाते हैं।\n\nयह किस सिद्धांत को दर्शाता है?",
a: [
"सभी बच्चों का विकास समान होता है",
"बच्चों का विकास अलग-अलग गति से होता है",
"विकास को मापा नहीं जा सकता",
"विकास संयोग से होता है"
],
correct: 1,
explanation: "बच्चों की सीखने की गति अलग-अलग होती है।"
},

{
q: "केस: कक्षा में बच्चे अलग-अलग गति से सीखते हैं।\n\nअध्यापक को क्या करना चाहिए?",
a: [
"धीमे बच्चों की तुलना तेज़ बच्चों से करना",
"धीमे बच्चों को दंड देना",
"बच्चों को व्यक्तिगत सहारा देना",
"अंतर को नज़रअंदाज़ करना"
],
correct: 2,
explanation: "शिक्षक को व्यक्तिगत अंतर का सम्मान करना चाहिए।"
},

{
q: "केस: राहुल अपने बड़े भाई के बोलने, खाने, पहनने और व्यवहार की नकल करता है।\n\nयह किस सिद्धांत को दर्शाता है?",
a: [
"प्रयोग एवं त्रुटि सीखना",
"पर्यवेक्षण/अनुकरण द्वारा सीखना",
"याद करके सीखना",
"अनियमित सीखना"
],
correct: 1,
explanation: "राहुल दूसरों को देखकर सीख रहा है।"
},

{
q: "केस: राहुल हर कार्य में अपने भाई की नकल करता है।\n\nयह किस मनोवैज्ञानिक के सिद्धांत से संबंधित है?",
a: [
"गिज़ेल",
"पियाजे",
"बंडूरा",
"फ्रायड"
],
correct: 2,
explanation: "बंडूरा ने सामाजिक अधिगम सिद्धांत दिया।"
},

{
q: "केस: कव्या बड़े गेंद को आसानी से पकड़ लेती है लेकिन पेंसिल पकड़ने में कठिनाई होती है।\n\nयह किस सिद्धांत को दिखाता है?",
a: [
"सीफेलो-कॉडल विकास",
"सामान्य से विशिष्ट विकास",
"समान विकास",
"भावनात्मक विकास"
],
correct: 1,
explanation: "सामान्य कौशल पहले विकसित होते हैं, सूक्ष्म बाद में।"
},

{
q: "केस: कव्या बड़े मांसपेशीय नियंत्रण में सक्षम है लेकिन सूक्ष्म कार्यों में कठिनाई होती है।\n\nयह क्या दर्शाता है?",
a: [
"विकास अचानक होता है",
"विकास जटिल से सरल होता है",
"विकास सरल से जटिल होता है",
"विकास के कोई नियम नहीं"
],
correct: 2,
explanation: "पहले सरल, बाद में जटिल कौशल विकसित होते हैं।"
},

{
q: "केस: दो बच्चे एक ही आयु के हैं। रोहन जल्दी सीख जाता है जबकि मोहन धीरे-धीरे सीखता है लेकिन सही उत्तर देता है।\n\nयह क्या दर्शाता है?",
a: [
"केवल तेज बच्चे सीखते हैं",
"धीमे बच्चे नहीं सीखते",
"व्यक्तिगत भिन्नताएँ होती हैं",
"दोनों कमजोर हैं"
],
correct: 2,
explanation: "हर बच्चा अपनी गति से विकसित होता है।"
},

{
q: "केस: रोहन तेज सीखता है और मोहन धीरे लेकिन सही सीखता है।\n\nअध्यापक को क्या करना चाहिए?",
a: [
"दोनों से समान गति से सीखने को कहना",
"मोहन को कमजोर घोषित करना",
"दोनों को आवश्यकता अनुसार सहायता देना",
"मोहन को नज़रअंदाज़ करना"
],
correct: 2,
explanation: "शिक्षण बच्चे की आवश्यकता के अनुसार होना चाहिए।"
},

{
q: "केस: एक बच्चा प्रदूषित और भीड़भाड़ वाले वातावरण में रहता है। वह थका रहता है, चिड़चिड़ा है और कक्षा में ध्यान नहीं लगा पाता।\n\nकौन सा कारक प्रभावित हो रहा है?",
a: [
"वंशानुक्रम",
"भौतिक वातावरण",
"बुद्धि",
"केवल भावनाएँ"
],
correct: 1,
explanation: "भौतिक वातावरण विकास को प्रभावित करता है।"
},

{
q: "केस: खराब वातावरण बच्चे के स्वास्थ्य और ध्यान पर असर डाल रहा है।\n\nइससे क्या स्पष्ट होता है?",
a: [
"केवल स्कूल महत्वपूर्ण है",
"दंड आवश्यक है",
"स्वस्थ और सहयोगी वातावरण जरूरी है",
"केवल अनुशासन जरूरी है"
],
correct: 2,
explanation: "स्वस्थ वातावरण विकास को बढ़ाता है।"
},

{
q: "केस: अनिका भावनात्मक रूप से सुरक्षित है, आत्मविश्वासी है, दोस्तों से अच्छी तरह मिलती है और पढ़ाई में भी अच्छी है।\n\nयह क्या दर्शाता है?",
a: [
"भावनाओं का सीखने से संबंध नहीं",
"केवल माता-पिता विकास करते हैं",
"भावनात्मक स्थिरता सामाजिक और शैक्षणिक विकास को बढ़ाती है",
"विकास संयोग है"
],
correct: 2,
explanation: "भावनात्मक स्थिरता सीखने को बेहतर बनाती है।"
},

{
q: "केस: अनिका भावनात्मक रूप से मजबूत है और सामाजिक रूप से सक्रिय है।\n\nयह किस सिद्धांत को दिखाता है?",
a: [
"विकास के क्षेत्र स्वतंत्र हैं",
"विकास के क्षेत्र परस्पर जुड़े होते हैं",
"विकास बचपन के बाद रुक जाता है",
"विकास केवल शारीरिक है"
],
correct: 1,
explanation: "सभी विकास क्षेत्र एक-दूसरे को प्रभावित करते हैं।"
},

{
q: "केस: अध्यापक बच्चों को खेल के माध्यम से, समूह कार्य और गतिविधियों से सीखने देता है, रटने पर जोर नहीं देता।\n\nवह किस सिद्धांत का पालन कर रहा है?",
a: [
"सीखने को मजबूर करना चाहिए",
"डर से सीखना बेहतर है",
"अर्थपूर्ण अनुभवों से सीखना बेहतर है",
"केवल रटना ही सीखना है"
],
correct: 2,
explanation: "खेल आधारित सीखना स्वाभाविक विकास को बढ़ाता है।"
},

{
q: "केस: खेल आधारित शिक्षण उपयोग किया जा रहा है।\n\nयह किस प्रकार के विकास को बढ़ाता है?",
a: [
"केवल शारीरिक विकास",
"समग्र विकास",
"केवल भावनात्मक विकास",
"केवल भाषा विकास"
],
correct: 1,
explanation: "यह शारीरिक, मानसिक, सामाजिक और भावनात्मक विकास बढ़ाता है।"
},

{
q: "केस: एक बच्चा अमूर्त गणितीय अवधारणाएँ नहीं समझ पाता क्योंकि उसका संज्ञानात्मक स्तर अभी छोटा है।\n\nसीखना किस पर निर्भर है?",
a: [
"दंड पर",
"परिपक्वता और तत्परता पर",
"केवल आयु पर",
"केवल वातावरण पर"
],
correct: 1,
explanation: "परिपक्वता के बिना सीखना प्रभावी नहीं होता।"
},

{
q: "केस: बच्चा विकासात्मक रूप से तैयार नहीं है और कठिन चीजें नहीं समझ पा रहा।\n\nअध्यापक को क्या करना चाहिए?",
a: [
"जबर्दस्ती कठिन पढ़ाना",
"दंड देना",
"सरल और ठोस उदाहरण देना",
"उसे नज़रअंदाज़ करना"
],
correct: 2,
explanation: "शिक्षण बच्चे के स्तर के अनुसार होना चाहिए।"
},

{
q: "केस: कुपोषण के कारण बच्चा कमजोर है, थक जाता है और कक्षा में ध्यान नहीं लगा पाता।\n\nयह क्या दर्शाता है?",
a: [
"स्वास्थ्य का कोई प्रभाव नहीं",
"पोषण केवल कद पर प्रभाव डालता है",
"शारीरिक स्वास्थ्य सीखने और व्यवहार को प्रभावित करता है",
"सीखना केवल IQ पर निर्भर है"
],
correct: 2,
explanation: "स्वास्थ्य सीधे सीखने पर असर डालता है।"
},

{
q: "केस: कमजोर बच्चा कक्षा में संघर्ष कर रहा है क्योंकि पोषण खराब है।\n\nस्कूल और शिक्षक क्या सुनिश्चित करें?",
a: [
"दंड",
"तुलना",
"सहयोगी और देखभाल करने वाला वातावरण",
"उपेक्षा"
],
correct: 2,
explanation: "सहयोग और देखभाल विकास बढ़ाते हैं।"
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
