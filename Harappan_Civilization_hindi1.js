// Test Title
const TEST_TITLE = "CTET Practice Test – Harappan Civilization";

// Subtitle
const SUBTITLE_TEXT = "The First Cities (Indus Valley Civilization)";

// Topic name
const TOPIC_NAME = "हड़प्पा सभ्यता";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 25;

// QUESTIONS (35 Questions – Hindi)
const quizData = [

  {
    q: " हड़प्पा नगरों की नगर योजना की सबसे प्रमुख विशेषता क्या थी?",
    a: [
      "निर्माण में लोहे के औज़ारों का प्रयोग",
      "दुर्ग और निचले नगर का विभाजन तथा ग्रिड प्रणाली",
      "विशाल मंदिरों का निर्माण",
      "पत्थर की ऊँची सुरक्षा दीवारें"
    ],
    correct: 1,
    explanation: "हड़प्पा नगरों की पहचान नगर का नियोजित विभाजन और समकोण पर कटती सड़कों वाली ग्रिड प्रणाली थी।"
  },

  {
    q: " हड़प्पा सभ्यता में भवन निर्माण के लिए सामान्यतः किस प्रकार की ईंटें प्रयोग की जाती थीं?",
    a: [
      "कच्ची ईंटें",
      "ग्रेनाइट पत्थर",
      "पकी हुई ईंटें",
      "मिट्टी और भूसे की ईंटें"
    ],
    correct: 2,
    explanation: "पकी हुई ईंटें मज़बूत होती थीं और जल से सुरक्षित रहती थीं।"
  },

  {
    q: " मोहनजोदड़ो के महान स्नानागार को जलरोधी बनाने के लिए किसका प्रयोग किया गया था?",
    a: [
      "प्लास्टर ऑफ पेरिस",
      "प्राकृतिक तार (बिटुमेन/जिप्सम) और पकी ईंटें",
      "ग्रेनाइट पत्थर",
      "साधारण मिट्टी"
    ],
    correct: 1,
    explanation: "पकी ईंटों के बीच प्राकृतिक तार का प्रयोग किया गया था जिससे पानी रिसे नहीं।"
  },

  {
    q: " हड़प्पा और मोहनजोदड़ो में पाए गए अन्नागारों का मुख्य उद्देश्य क्या था?",
    a: [
      "प्रशासनिक कार्य",
      "अतिरिक्त अनाज का भंडारण",
      "धार्मिक अनुष्ठान",
      "कारीगरों की कार्यशाला"
    ],
    correct: 1,
    explanation: "अन्नागार कृषि से प्राप्त अतिरिक्त अनाज के संग्रह के लिए थे।"
  },

  {
    q: " हड़प्पा सभ्यता की संगठित नगरपालिका व्यवस्था का सबसे मज़बूत प्रमाण क्या है?",
    a: [
      "राजमहल की उपस्थिति",
      "धार्मिक एकरूपता",
      "महान स्नानागार",
      "हर घर से जुड़ी ढकी हुई नालियाँ"
    ],
    correct: 3,
    explanation: "पूरे नगर में समान जल निकासी व्यवस्था एक मज़बूत प्रशासन को दर्शाती है।"
  },

  {
    q: " हड़प्पा सभ्यता के लोगों को किस धातु का ज्ञान नहीं था?",
    a: ["तांबा", "सोना", "लोहा", "चाँदी"],
    correct: 2,
    explanation: "हड़प्पा सभ्यता कांस्य युगीन थी, लोहे का ज्ञान नहीं था।"
  },

  {
    q: " लोथल किस खोज के लिए प्रसिद्ध है?",
    a: ["सभा भवन", "गोदी (डॉकयार्ड)", "मंदिर", "किला"],
    correct: 1,
    explanation: "लोथल में विश्व का सबसे प्राचीन मानव निर्मित डॉकयार्ड मिला है।"
  },

  {
    q: " हड़प्पा सभ्यता में व्यापार किस प्रणाली पर आधारित था?",
    a: [
      "सिक्कों द्वारा",
      "कागज़ी मुद्रा",
      "वस्तु विनिमय प्रणाली",
      "उधार प्रणाली"
    ],
    correct: 2,
    explanation: "हड़प्पा सभ्यता में वस्तु के बदले वस्तु का आदान-प्रदान होता था।"
  },

  {
    q: " हड़प्पा लिपि के बारे में सही कथन कौन-सा है?",
    a: [
      "यह वर्णमाला आधारित थी",
      "यह पूरी तरह पढ़ी जा चुकी है",
      "यह चित्रलिपि थी और अभी तक पढ़ी नहीं जा सकी",
      "यह देवनागरी का प्रारंभिक रूप थी"
    ],
    correct: 2,
    explanation: "हड़प्पा लिपि चित्रलिपि थी और आज तक पूरी तरह पढ़ी नहीं जा सकी।"
  },

  {
    q: " हड़प्पा सभ्यता के लोग विश्व में सबसे पहले किस फसल की खेती करते थे?",
    a: ["गन्ना", "चावल", "कपास", "तंबाकू"],
    correct: 2,
    explanation: "हड़प्पा सभ्यता विश्व में कपास उगाने वाली पहली सभ्यता थी।"
  },

  {
    q: " निचले नगर के घरों में केंद्रीय आँगन का मुख्य उपयोग क्या था?",
    a: [
      "बाज़ार",
      "धार्मिक अनुष्ठान",
      "घरेलू कार्य और हवा-रोशनी",
      "पानी संग्रह"
    ],
    correct: 2,
    explanation: "आँगन से हवा, रोशनी मिलती थी और घरेलू कार्य किए जाते थे।"
  },

  {
    q: " धोलावीरा नगर की विशेषता क्या थी?",
    a: [
      "दो भागों में विभाजन",
      "तीन भागों में विभाजन",
      "चार समान भाग",
      "एक ही घिरा हुआ क्षेत्र"
    ],
    correct: 1,
    explanation: "धोलावीरा तीन भागों—दुर्ग, मध्य नगर और निचले नगर—में विभाजित था।"
  },

  {
    q: " हड़प्पा मुहरों पर यूनिकॉर्न का चित्र क्या दर्शाता है?",
    a: [
      "कृषि पशु",
      "धार्मिक या व्यापारिक प्रतीक",
      "परिवहन का साधन",
      "विदेशी गठबंधन"
    ],
    correct: 1,
    explanation: "यूनिकॉर्न संभवतः धार्मिक या व्यापारिक प्रतीक था।"
  },

  {
    q: " महान स्नानागार का उपयोग किस लिए किया जाता था?",
    a: [
      "मनोरंजन",
      "पेयजल संग्रह",
      "धार्मिक स्नान",
      "रंगाई"
    ],
    correct: 2,
    explanation: "महान स्नानागार का प्रयोग धार्मिक या पवित्र स्नान के लिए होता था।"
  },

  {
    q: " कालीबंगा से हल के प्रयोग का प्रमाण कैसे मिला?",
    a: [
      "लकड़ी के हल",
      "मुहरों पर चित्र",
      "जुते हुए खेत और टेराकोटा मॉडल",
      "लिखित विवरण"
    ],
    correct: 2,
    explanation: "कालीबंगा में जुते हुए खेत और मिट्टी के हल मॉडल मिले हैं।"
  },

  {
    q: " विशाल जल संग्रह प्रणाली किस स्थल से मिली है?",
    a: ["लोथल", "धोलावीरा", "हड़प्पा", "राखीगढ़ी"],
    correct: 1,
    explanation: "धोलावीरा शुष्क क्षेत्र में जल प्रबंधन के लिए प्रसिद्ध है।"
  },

  {
    q: " हड़प्पा की मुहरें मुख्यतः किस पदार्थ से बनी थीं?",
    a: ["धातु", "मिट्टी", "स्टीटाइट पत्थर", "संगमरमर"],
    correct: 2,
    explanation: "अधिकांश मुहरें स्टीटाइट पत्थर से बनी थीं।"
  },

  {
    q: " हड़प्पा सभ्यता के पतन का एक संभावित कारण क्या माना जाता है?",
    a: [
      "रोमन आक्रमण",
      "लोहे की खोज",
      "नदियों का सूखना और पर्यावरण परिवर्तन",
      "बारूद का प्रयोग"
    ],
    correct: 2,
    explanation: "नदी मार्ग बदलना और पर्यावरण परिवर्तन पतन का प्रमुख कारण माना जाता है।"
  },

  {
    q: " मेसोपोटामिया में हड़प्पा मुहरों का मिलना क्या दर्शाता है?",
    a: [
      "राजनीतिक अधीनता",
      "दीर्घ दूरी व्यापार",
      "जनसंख्या प्रवासन",
      "कच्चे माल की पूर्ण निर्भरता"
    ],
    correct: 1,
    explanation: "यह हड़प्पा सभ्यता के अंतरराष्ट्रीय व्यापार को दर्शाता है।"
  },

  {
    q: " पशुपति मुहर किसका प्रतीक मानी जाती है?",
    a: [
      "राजा",
      "मातृ देवी",
      "प्रारंभिक शिव",
      "युद्ध देवता"
    ],
    correct: 2,
    explanation: "पशुपति मुहर को शिव के प्रारंभिक रूप से जोड़ा जाता है।"
  },

  {
    q: " अग्नि वेदियों का प्रमाण किन स्थलों से मिला है?",
    a: [
      "लोथल और कालीबंगा",
      "धोलावीरा और हड़प्पा",
      "मोहनजोदड़ो और चन्हूदड़ो",
      "सुत्कागेन डोर"
    ],
    correct: 0,
    explanation: "लोथल और कालीबंगा में अग्नि वेदियाँ मिली हैं।"
  },

  {
    q: " हड़प्पा नगर में दुर्ग का मुख्य उद्देश्य क्या था?",
    a: [
      "सामान्य आवास",
      "कार्यशालाएँ",
      "प्रशासनिक और धार्मिक भवन",
      "बंदरगाह"
    ],
    correct: 2,
    explanation: "दुर्ग क्षेत्र में प्रशासनिक और धार्मिक संरचनाएँ होती थीं।"
  },

  {
    q: " हड़प्पा सभ्यता में कौन-सा शिल्प विकसित नहीं था?",
    a: [
      "मुहर निर्माण",
      "लोहा गलाना",
      "मनका निर्माण",
      "कपड़ा बुनाई"
    ],
    correct: 1,
    explanation: "हड़प्पा सभ्यता में लोहे का ज्ञान नहीं था।"
  },

  {
    q: " मानकीकृत बाट-माप प्रणाली क्या दर्शाती है?",
    a: [
      "केंद्रीय नियंत्रण का अभाव",
      "संगठित व्यापार व्यवस्था",
      "पूर्ण सामाजिक समानता",
      "केवल विदेशी व्यापार"
    ],
    correct: 1,
    explanation: "मानकीकृत बाट-माप संगठित व्यापार को दर्शाते हैं।"
  },

  {
    q: " पुजारी-राजा की मूर्ति क्या दर्शाती है?",
    a: [
      "सैन्य शक्ति",
      "धार्मिक-प्रशासनिक नेतृत्व",
      "व्यापारिक प्रभुत्व",
      "कृषि विशेषज्ञता"
    ],
    correct: 1,
    explanation: "यह मूर्ति धार्मिक और प्रशासनिक सत्ता के मेल को दर्शाती है।"
  },

  {
    q: " हड़प्पा नगर योजना में ज्यामिति और माप का सबसे अच्छा प्रमाण क्या है?",
    a: [
      "पत्थर का पैमाना",
      "ग्रिड प्रणाली और ईंटों का 1:2:4 अनुपात",
      "यूनिकॉर्न चिह्न",
      "पिरामिड निर्माण"
    ],
    correct: 1,
    explanation: "समकोण सड़कों और निश्चित अनुपात वाली ईंटों से गणितीय ज्ञान स्पष्ट होता है।"
  },

  {
    q: " हड़प्पा सभ्यता किस युग से संबंधित थी?",
    a: ["लौह युग", "नवपाषाण युग", "कांस्य युग", "महापाषाण युग"],
    correct: 2,
    explanation: "तांबा और कांसे के प्रयोग के कारण यह कांस्य युगीन थी।"
  },

  {
    q: " किस स्थल पर गोदी और मनका उद्योग दोनों के प्रमाण मिलते हैं?",
    a: ["मोहनजोदड़ो", "कालीबंगा", "लोथल", "हड़प्पा"],
    correct: 2,
    explanation: "लोथल एक बंदरगाह नगर और औद्योगिक केंद्र था।"
  },

  {
    q: " हड़प्पा नगरों की मुख्य सड़कें किस दिशा में बनी थीं?",
    a: [
      "उत्तर-दक्षिण और पूर्व-पश्चिम",
      "उत्तर-पूर्व और दक्षिण-पश्चिम",
      "केन्द्र से बाहर की ओर",
      "प्राकृतिक ढाल के अनुसार"
    ],
    correct: 0,
    explanation: "सड़कें ग्रिड प्रणाली में उत्तर-दक्षिण और पूर्व-पश्चिम दिशा में थीं।"
  },

  {
    q: " निचले नगर के घरों के दरवाज़े मुख्य सड़क के बजाय गलियों की ओर क्यों खुलते थे?",
    a: [
      "निजता और धूल से बचाव",
      "कचरा फेंकने के लिए",
      "चोरी से सुरक्षा",
      "आँगन दिखाने के लिए"
    ],
    correct: 0,
    explanation: "इससे निजता बनी रहती थी और मुख्य सड़क की धूल-शोर से बचाव होता था।"
  },

  {
    q: " सबसे बड़ा हड़प्पा नगर किस स्थल को माना जाता है?",
    a: ["चन्हूदड़ो", "राखीगढ़ी", "कालीबंगा", "लोथल"],
    correct: 1,
    explanation: "राखीगढ़ी को अब तक का सबसे बड़ा हड़प्पा स्थल माना जाता है।"
  },

  {
    q: " हड़प्पा सभ्यता को तांबा मुख्यतः कहाँ से मिलता था?",
    a: ["मेसोपोटामिया", "कोलार", "राजस्थान (खेेत्री)", "हिमालय"],
    correct: 2,
    explanation: "राजस्थान के खेेत्री क्षेत्र से तांबा प्राप्त होता था।"
  },

  {
    q: " हड़प्पा लोगों के धार्मिक विश्वासों का सही सार क्या है?",
    a: [
      "एकमात्र आकाश देव की पूजा",
      "मातृ देवी, पशु-वृक्ष पूजा और पशुपति",
      "केवल अग्नि पूजा",
      "पूरी तरह धर्मनिरपेक्ष"
    ],
    correct: 1,
    explanation: "मातृ देवी, पशुपति और प्रकृति पूजा के प्रमाण मिले हैं।"
  },

  {
    q: " कालीबंगा किस खोज के लिए प्रसिद्ध है?",
    a: [
      "अन्नागार और पुजारी-राजा",
      "जलाशय प्रणाली",
      "जुता हुआ खेत और अग्नि वेदियाँ",
      "चावल की खेती"
    ],
    correct: 2,
    explanation: "कालीबंगा में जुते हुए खेत और अग्नि वेदियाँ मिली हैं।"
  },

  {
    q: " लगभग सभी हड़प्पा घरों की समान संरचना क्या दर्शाती है?",
    a: [
      "कोई सामाजिक भेद नहीं",
      "मानकीकरण और संगठित नागरिक जीवन",
      "सैन्य नियंत्रण",
      "एक ही समय में निर्माण"
    ],
    correct: 1,
    explanation: "यह केंद्रीय योजना और नागरिक जीवन पर ज़ोर को दर्शाता है।"
  }

];


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

