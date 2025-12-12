
/* ------------------ CTET — Child Development & Pedagogy (CDP) — 25 Qs ------------------ */
/* Save this file as e.g. CTET_CDP_25.js and open master HTML as:
     index.html?js=CTET_CDP_25.js
   Edit TEST_TITLE / TEST_SUBTITLE / TEST_TIME_MINUTES or quizData below if needed.
*/

const TEST_TITLE = "CTET — Child Development & Pedagogy (CDP)";
const TEST_SUBTITLE = "25 Questions • Auto-next on selection • CTET Pattern";
const TEST_TIME_MINUTES = 20; // minutes

const quizData = [
  { q: "1. Which of the following is an example of a fine motor skill in early childhood?",
    a: ["Running across the playground", "Stacking small blocks", "Jumping with both feet", "Throwing a ball far"],
    correct: 1 },

  { q: "2. According to Piaget, children in the preoperational stage (2–7 years) typically show which characteristic?",
    a: ["Abstract logical thinking","Egocentrism","Hypothetical reasoning","Formal operations"],
    correct: 1 },

  { q: "3. What does 'scaffolding' mean in Vygotsky’s theory?",
    a: ["Giving the answer directly","Providing temporary support to help a learner perform a task","Assessing a learner's IQ","Forcing independent work only"],
    correct: 1 },

  { q: "4. A child who is able to understand that the amount of liquid remains same even when poured into different-shaped containers demonstrates:",
    a: ["Conservation","Egocentrism","Object permanence","Centration"],
    correct: 0 },

  { q: "5. Which assessment method is best to observe a child's spontaneous language use in class?",
    a: ["Standardized multiple-choice test","Structured interview","Naturalistic observation","Timed written test"],
    correct: 2 },

  { q: "6. Which of the following is a key principle of inclusive education?",
    a: ["Separate special schools for all children with difficulties","Excluding children with disabilities from mainstream activities","Providing reasonable accommodations in regular classrooms","Lowering expectations for diverse learners always"],
    correct: 2 },

  { q: "7. What does formative assessment primarily provide?",
    a: ["A final grade for the term","Feedback to improve ongoing teaching and learning","A ranking of students","Only summative data for reports"],
    correct: 1 },

  { q: "8. In Erikson’s psychosocial stages, the main challenge for early childhood (approx. 3–5 years) is:",
    a: ["Trust vs. Mistrust","Autonomy vs. Shame & Doubt","Initiative vs. Guilt","Industry vs. Inferiority"],
    correct: 2 },

  { q: "9. Which teaching method emphasises learning by doing and real-world tasks?",
    a: ["Lecture method","Project method","Rote memorization","Chalk-and-talk only"],
    correct: 1 },

  { q: "10. A child repeatedly answers incorrectly but gets immediate corrective feedback and gradually improves. This is an example of which learning principle?",
    a: ["Operant conditioning/Reinforcement","Maturation","Innate knowledge","Random learning"],
    correct: 0 },

  { q: "11. Which of the following supports language development in young children?",
    a: ["Talking rarely to the child","Reading aloud and conversation","Only using complicated academic words","Forbidding play-based talk"],
    correct: 1 },

  { q: "12. When planning instruction, a teacher should consider a child’s 'readiness'. Readiness refers to:",
    a: ["Child’s physical and mental preparedness for learning a particular skill","Only the child's age in years","Only the school's schedule","Teacher's convenience"],
    correct: 0 },

  { q: "13. Which strategy helps children develop metacognition?",
    a: ["Telling answers without explanation","Modeling thinking aloud and asking reflective questions","Only grading final answers","Discouraging student reflection"],
    correct: 1 },

  { q: "14. A child who can take another child’s perspective and show empathy is demonstrating development in the _____ domain.",
    a: ["Cognitive","Affective / socio-emotional","Psychomotor","Physical"],
    correct: 1 },

  { q: "15. Which is the best reason to use play-based learning in early grades?",
    a: ["It keeps children busy only","It develops multiple domains (social, cognitive, language) through meaningful activity","It reduces teacher responsibility","It is easier than planning other activities"],
    correct: 1 },

  { q: "16. Which of these is a characteristic of a good question for formative use?",
    a: ["Vague and broad","Closed with only 'yes' or 'no' answers","Open-ended and probing student thinking","Unrelated to learning objectives"],
    correct: 2 },

  { q: "17. Differentiated instruction means:",
    a: ["Teaching every child the exact same way","Adjusting content, process, or product to meet diverse learners’ needs","Grouping only high achievers","Repeating the same worksheet for all children"],
    correct: 1 },

  { q: "18. Which factor is LEAST likely to be directly inherited (heredity) in a child?",
    a: ["Eye colour","Temperament tendencies","A specific learned language","Blood group"],
    correct: 2 },

  { q: "19. Zone of Proximal Development (ZPD) refers to:",
    a: ["What a child can do independently without help","What a child cannot learn even with help","What a child can do with guidance but not alone","Only mature adult tasks"],
    correct: 2 },

  { q: "20. Which practice best fosters classroom self-regulation in children?",
    a: ["Only punish misbehaviour","Teach routines, model self-control, and provide opportunities for practice","Ignore social-emotional skills","Give unlimited free time without structure"],
    correct: 1 },

  { q: "21. Which assessment is most appropriate to measure a child's progress in a long-term project?",
    a: ["A single multiple-choice test at the end","Portfolios and performance-based assessment","Only oral questioning once","Timed quizzes unrelated to project tasks"],
    correct: 1 },

  { q: "22. When working with multilingual children, a teacher should:",
    a: ["Insist on English only and forbid home language","Use the child's home language as a resource and build on it","Ignore language differences","Separate children permanently by home language"],
    correct: 1 },

  { q: "23. According to behaviorist approaches, learning is best understood as:",
    a: ["Change in observable behaviour through reinforcement","Purely genetic unfolding","Development of moral reasoning only","Only cognitive restructuring"],
    correct: 0 },

  { q: "24. Which practice helps reduce bias in classroom assessment?",
    a: ["Using a single test format for all tasks","Using varied assessment methods and clear rubrics","Assuming all students have same background","Grading based on handwriting only"],
    correct: 1 },

  { q: "25. A teacher gives small steps of instruction, checks understanding frequently, and gives corrective feedback. This method is best described as:",
    a: ["Direct instruction with formative checks","Discovery without guidance","Solely lecture-based teaching","Punitive correction"],
    correct: 0 }
];

/* ------------------ QUIZ ENGINE (Auto-next, Timer, Review) ------------------ */
/* This code will run when master HTML loads this script. It assumes the master
   HTML contains elements with the following IDs:
   title, subtitle, qProgress, timer, topicName, question, options,
   prevBtn, nextBtn, submitBtn, resultArea, reviewArea, footerText
*/

(function () {
  // Settings from top-level constants
  try {
    document.getElementById('title').innerText = TEST_TITLE || "Mock Test";
  } catch (e) { /* ignore if element missing */ }
  try {
    document.getElementById('subtitle').innerText = TEST_SUBTITLE || "";
  } catch (e) {}
  try {
    document.getElementById('footerText').innerText = "CTET — Child Development & Pedagogy";
  } catch (e) {}

  let current = 0;
  const total = quizData.length;
  let answers = new Array(total).fill(null);
  let totalSeconds = (typeof TEST_TIME_MINUTES === 'number' && TEST_TIME_MINUTES > 0) ? TEST_TIME_MINUTES * 60 : 20 * 60;
  let timerInterval = null;

  const qEl = document.getElementById('question');
  const optsEl = document.getElementById('options');
  const qProgress = document.getElementById('qProgress');
  const subtle = document.getElementById('topicName');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const timerDisplay = document.getElementById('timer');
  const resultArea = document.getElementById('resultArea');
  const reviewArea = document.getElementById('reviewArea');

  function getTopic() {
    return "Topic: Child Development & Pedagogy (CTET)";
  }

  function renderQuestion(index) {
    current = index;
    const item = quizData[index];
    if (!item) return;
    if (qProgress) qProgress.textContent = `Question ${index + 1} of ${total}`;
    if (subtle) subtle.textContent = getTopic();
    if (qEl) qEl.textContent = item.q;

    if (!optsEl) return;
    optsEl.innerHTML = '';

    item.a.forEach((text, i) => {
      const id = `opt-${index}-${i}`;
      const wrap = document.createElement('label');
      wrap.className = 'opt';
      wrap.htmlFor = id;

      // create inner HTML for accessibility & layout
      wrap.innerHTML = `
        <input type="radio" name="option-${index}" id="${id}" value="${i}" ${answers[index]===i ? 'checked' : ''}>
        <div style="flex:1"><strong>${String.fromCharCode(65+i)}.</strong> <span style="margin-left:8px">${text}</span></div>
      `;

      // Use change event on the input to avoid label-click timing issues
      const input = wrap.querySelector('input');
      input.addEventListener('change', () => {
        answers[index] = i;
        // small visual mark for chosen option (optional)
        // Move to next question automatically
        if (index < total - 1) {
          // slight delay so the checked style is visible before switching
          setTimeout(() => renderQuestion(index + 1), 120);
        } else {
          showEndPrompt();
        }
      });

      optsEl.appendChild(wrap);
    });

    // update nav buttons
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
    if (submitBtn) submitBtn.style.display = index === total - 1 ? 'inline-block' : 'none';
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { if (current > 0) renderQuestion(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (current < total - 1) renderQuestion(current + 1); });
  if (submitBtn) submitBtn.addEventListener('click', submitQuiz);

  function showEndPrompt() {
    if (!resultArea) return;
    resultArea.innerHTML = `
      <div class="result">
        <div style="font-weight:700;margin-bottom:8px">You are at the last question.</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button id="finishNow">Submit Test</button>
          <button class="small" id="reviewBtn">Review Answers</button>
        </div>
      </div>`;
    const finishNow = document.getElementById('finishNow');
    const reviewBtn = document.getElementById('reviewBtn');
    if (finishNow) finishNow.addEventListener('click', submitQuiz);
    if (reviewBtn) reviewBtn.addEventListener('click', () => {
      const un = answers.findIndex(v => v === null);
      renderQuestion(un >= 0 ? un : 0);
      resultArea.innerHTML = '';
    });
  }

  function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        submitQuiz(true);
      } else updateTimer();
    }, 1000);
  }
  function updateTimer() {
    if (!timerDisplay) return;
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function submitQuiz(auto = false) {
    if (timerInterval) clearInterval(timerInterval);

    let correct = 0;
    for (let i = 0; i < total; i++) if (answers[i] === quizData[i].correct) correct++;
    const attempted = answers.filter(v => v !== null).length;
    const incorrect = attempted - correct;
    const percent = ((correct / total) * 100).toFixed(2);

    if (!resultArea) return;
    resultArea.innerHTML = `
      <div class="result">
        <div style="font-size:18px;font-weight:700;margin-bottom:8px">${auto ? 'Time is up! Test submitted automatically.' : 'Test Submitted'}</div>
        <div class="row" style="justify-content:center;margin-bottom:12px">
          <div class="pill">Correct: ${correct}</div>
          <div class="wrong-pill">Incorrect: ${incorrect}</div>
          <div style="background:#fff;padding:8px;border-radius:8px;border:1px solid #e6eef2;font-weight:700">Score: ${percent}%</div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button id="showReviewBtn">Show Detailed Review</button>
          <button id="restartBtn" style="background:#1b6fef">Restart Test</button>
        </div>
      </div>`;

    const showReviewBtn = document.getElementById('showReviewBtn');
    const restartBtn = document.getElementById('restartBtn');
    if (showReviewBtn) showReviewBtn.addEventListener('click', showReview);
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
  }

  function showReview() {
    if (!reviewArea) return;
    reviewArea.innerHTML = '<h3 style="margin-top:0;margin-bottom:12px">Detailed Review</h3>';
    quizData.forEach((item, i) => {
      const user = answers[i];
      const good = user === item.correct;
      const block = document.createElement('div');
      block.className = 'item';
      block.style.background = good ? 'var(--correct)' : 'var(--incorrect)';

      block.innerHTML = `
        <div><strong>Q${i + 1}.</strong> ${item.q}</div>
        <div style="margin:6px 0">
          Your answer: <span class="${good ? 'correct' : 'incorrect'}">
            ${user === null ? 'Not answered' : String.fromCharCode(65 + user) + '. ' + item.a[user]}
          </span>
        </div>
        <div>Correct answer: <span class="correct">
          ${String.fromCharCode(65 + item.correct) + '. ' + item.a[item.correct]}
        </span></div>
      `;
      reviewArea.appendChild(block);
    });

    document.querySelectorAll('.nav, #card > .qcount, #card > .question, #card > .options')
            .forEach(el => el.style.display = 'none');
  }

  function restartQuiz() {
    answers = new Array(total).fill(null);
    totalSeconds = (typeof TEST_TIME_MINUTES === 'number' && TEST_TIME_MINUTES > 0) ? TEST_TIME_MINUTES * 60 : 20 * 60;
    if (timerInterval) clearInterval(timerInterval);
    document.querySelectorAll('.nav, #card > .qcount, #card > .question, #card > .options')
            .forEach(el => el.style.display = 'block');
    resultArea.innerHTML = '';
    reviewArea.innerHTML = '';
    renderQuestion(0);
    startTimer();
  }

  // initialize
  renderQuestion(0);
  startTimer();

})();
