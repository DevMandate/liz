// -------------------------------------------------
// QUESTIONS (25 QUESTIONS)
// -------------------------------------------------

const questions = [

  // 1
  [
    "Law 1 the field of play maximum length and minimum is:",
    "Minimum 90 m (100 yds) or 45m (50yds) Maximum 120 m (130 yds) or 90 m (100 yds)",
    "Minimum 80 m (90 yds) or 50m (60yds) Maximum 90 m (100 yds) or 80 m (90 yds)",
    "Minimum 110 m (130 yds) or 80m (90yds) Maximum 100 m (130 yds) or 90 m (100 yds)",
    "Minimum 70 m (80 yds) or 35m (45yds) Maximum 100 m (110 yds) or 80 m (90 yds)",
    "A"
  ],

  // 2
  [
    "When is the ball out of play?",
    "When it hits the referee",
    "When the whole of the ball crosses over the goal line or touch line and the referee has stopped play",
    "When play has been stopped by the referee",
    "Either way",
    "C"
  ],

  // 3
  [
    "A defender takes a direct free kick back to the goalkeeper. The goalkeeper misses the ball and it enters the goal. What is the correct decision?",
    "Referee awards a goal",
    "Corner kick to the opponents",
    "The free kick is retaken",
    "Referee applies advantage",
    "B"
  ],

  // 4
  [
    "For what can allowance of time be made?",
    "Substitutions",
    "Assessment and removal of injured players",
    "Wasting of time",
    "All of the above",
    "D"
  ],

  // 5
  [
    "Who is the official timekeeper for the match?",
    "Assistant referee",
    "Referee",
    "Reserve referee",
    "Match commissioner",
    "B"
  ],

  // 6
  [
    "Before halftime a goal is scored but AR reports deliberate handball by attacker. Referee had not restarted. Decision?",
    "Disallow goal and halftime",
    "Disallow goal + yellow card + halftime",
    "Disallow goal + red card + halftime",
    "Allow the goal",
    "B"
  ],

  // 7
  [
    "A player loses a shoe while dribbling but scores with one shoe on. Restart?",
    "Dropped ball",
    "Kick-off",
    "Indirect free kick",
    "Goal kick",
    "B"
  ],

  // 8
  [
    "What colour must the goalposts be?",
    "Not mentioned",
    "White in colour",
    "Grey in colour",
    "Brown in colour",
    "B"
  ],

  // 9
  [
    "Penalty shoot-out: kicker feints after run-up and goalkeeper moves off line. Decision?",
    "Kicker cautioned, IFK",
    "Both cautioned, kick retaken",
    "Keeper warned only, kick retaken",
    "Kick missed + kicker cautioned",
    "B"
  ],

  // 10
  [
    "Throw-in hits the referee and goes out without touching anyone else. Restart?",
    "Dropped ball to opponents",
    "Throw-in/corner/goal-kick to opponents depending on where it left",
    "Goal kick to opponents",
    "Throw-in to opponents",
    "B"
  ],

  // 11
  [
    "How far is the penalty mark from the goal line?",
    "12m",
    "11.5m",
    "11m",
    "12.5m",
    "C"
  ],

  // 12
  [
    "May referee allow a kick-off after a goal if some scorers are off celebrating?",
    "No, all players must be in own half",
    "Yes, as long as the team taking the kick-off is in its own half",
    "No, even the taker must be fully in own half",
    "Yes, except scoring team players",
    "B"
  ],

  // 13
  [
    "A substitute strikes a substitute from same team outside field. Restart?",
    "Direct free kick",
    "Direct free kick if no advantage",
    "Dropped ball (not a FK offence as not vs opponent/official)",
    "Indirect free kick",
    "C"
  ],

  // 14
  [
    "From a dropped ball at centre, a player dribbles and scores without anyone else touching. Decision?",
    "Allow goal",
    "Disallow – if 2 players didn’t touch – restart goal kick or corner",
    "Disallow – retake dropped ball",
    "Disallow – caution + goal kick or corner",
    "C"
  ],

  // 15
  [
    "How many types of punishments exist in football?",
    "Two: penalty kick and cards",
    "Two: team FK/PK + individual YC/RC",
    "Two: yellow and red card",
    "Three: free kick, yellow card and red card",
    "B"
  ],

  // 16
  [
    "Player commits cautionable offence during warm-up. Procedure?",
    "Ref cautions + reports incident",
    "Ref cannot caution before entering field",
    "Ref cautions but no need to report",
    "None correct",
    "A"
  ],

  // 17
  [
    "Player re-enters field without permission after fixing equipment. Sanction and restart?",
    "Caution if play stopped to issue card",
    "DFK/PK if interference occurred",
    "IFK if no interference",
    "All of the above",
    "D"
  ],

  // 18
  [
    "A dog stops a goal on the line but does not prevent a defender from playing the ball. Decision?",
    "Allow goal",
    "Dropped ball to goalkeeper",
    "Dropped ball to any defender",
    "B and C could be correct",
    "D"
  ],

  // 19
  [
    "Players switch shirts with GK at halftime without permission. Ref notices after restart. Decision?",
    "Allow play, no caution, report later",
    "Stop play, caution both, IFK",
    "Allow play, caution both at next stoppage and report",
    "None correct",
    "C"
  ],

  // 20
  [
    "How many types of free kicks exist?",
    "Two: direct and indirect",
    "Three: direct, indirect, penalty",
    "Four: direct, indirect, corner, penalty",
    "All are correct",
    "A"
  ],

  // 21
  [
    "A substitute warming up stops a ball on the goal line preventing a goal. Decision?",
    "DFK/PK from position of interference",
    "Substitute cautioned",
    "Possible red card for DOGSO",
    "DFK/PK + caution to substitute",
    "D"
  ],

  // 22
  [
    "GK flicks ball up on free kick, teammate chests back to GK to catch. Decision?",
    "Penalty + YC GK",
    "IFK + YC GK",
    "IFK + YC teammate",
    "Play on",
    "C"
  ],

  // 23
  [
    "Player removes corner flagpost because wind is shaking it. Decision?",
    "Allow the corner",
    "Allow if player replaces flag after kick",
    "Allow then ask AR to fix it",
    "Do not allow – flag must not be moved",
    "D"
  ],

  // 24
  [
    "Referee checks what when inspecting the ball?",
    "That it meets Law 2 requirements",
    "If the ball is spherical",
    "Weight and circumference",
    "Pressure",
    "A"
  ],

  // 25
  [
    "Name Laws 1 to 8 in correct order:",
    "The Field of Play",
    "The Ball",
    "The Players",
    "The Players’ Equipment, The Referee, The Other Match Officials, The Duration of the Match, The Start and Restart of Play",
    "The Field of Play only",
    "A" // You can update this based on how you want Q25 graded
  ]

];



// -------------------------------------------------
// GLOBAL STATE
// -------------------------------------------------
let pos = 0;
let answers = [];
let correctCount = 0;
let timerInterval = null;
let totalTime = 1200; // 20 minutes (20*60)


// -------------------------------------------------
// DOM REFERENCES
// -------------------------------------------------
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionBox = document.getElementById("questionBox");
const progressEl = document.getElementById("progress");
const timeLeftEl = document.getElementById("timeLeft");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const downloadCsvBtn2 = document.getElementById("downloadCsvBtn2");
const downloadHtmlBtn2 = document.getElementById("downloadHtmlBtn2");

const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");


// -------------------------------------------------
// START QUIZ
// -------------------------------------------------
function startQuiz() {
  pos = 0;
  correctCount = 0;
  answers = new Array(questions.length).fill(null);

  hide(startScreen);
  show(quizScreen);

  totalTime = 1200;
  startTimer();
  renderQuestion();
}


// -------------------------------------------------
// TIMER
// -------------------------------------------------
function startTimer() {
  updateTimeDisplay();

  timerInterval = setInterval(() => {
    totalTime--;
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    } else {
      updateTimeDisplay();
    }
  }, 1000);
}

function updateTimeDisplay() {
  const min = Math.floor(totalTime / 60);
  const sec = totalTime % 60;

  timeLeftEl.textContent = `${min}:${sec.toString().padStart(2, '0')}`;

  const bar = document.getElementById("timeBar");
  const percent = (totalTime / 1200) * 100;

  bar.style.width = percent + "%";
  bar.style.background = percent > 50 ? "#718a02ff" :
                         percent > 20 ? "#ffd700" :
                                        "#ff4f4f";
}


// -------------------------------------------------
// RENDER QUESTION
// -------------------------------------------------
function renderQuestion() {
  const q = questions[pos];

  progressEl.textContent = `Question ${pos + 1} of ${questions.length}`;

  let html = `<h3>${q[0]}</h3><div class="choices">`;
  const labels = ["A", "B", "C", "D"];
  const saved = answers[pos]?.selected || null;

  for (let i = 1; i <= 4; i++) {
    const letter = labels[i - 1];
    html += `
      <label class="choice ${saved === letter ? "selected" : ""}">
        <input type="radio" name="choices" value="${letter}" ${saved === letter ? "checked" : ""}>
        <span>${letter}. ${q[i]}</span>
      </label>
    `;
  }

  html += `</div>`;
  questionBox.innerHTML = html;

  questionBox.querySelectorAll(".choice").forEach(c => {
    c.addEventListener("click", () => {
      questionBox.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      c.querySelector("input").checked = true;
    });
  });

  updateNavButtons();
}


// -------------------------------------------------
// SAVE CURRENT ANSWER
// -------------------------------------------------
function saveCurrentAnswer() {
  const radios = document.getElementsByName("choices");
  let selected = null;

  for (const r of radios) {
    if (r.checked) selected = r.value;
  }

  answers[pos] = {
    question: questions[pos][0],
    options: {
      A: questions[pos][1],
      B: questions[pos][2],
      C: questions[pos][3],
      D: questions[pos][4]
    },
    selected: selected,
    correctAnswer: questions[pos][5],
    passed: selected === questions[pos][5]
  };
}


// -------------------------------------------------
// NAVIGATION
// -------------------------------------------------
function nextQuestion() {
  saveCurrentAnswer();

  if (pos < questions.length - 1) {
    pos++;
    renderQuestion();
  }
}

function prevQuestion() {
  saveCurrentAnswer();

  if (pos > 0) {
    pos--;
    renderQuestion();
  }
}

function submitQuiz() {
  saveCurrentAnswer();
  finishQuiz();
}

function updateNavButtons() {
  prevBtn.style.visibility = pos === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = pos === questions.length - 1 ? "hidden" : "visible";
  submitBtn.style.display = pos === questions.length - 1 ? "inline-block" : "none";
}


// -------------------------------------------------
// FINISH QUIZ
// -------------------------------------------------
function finishQuiz() {
  clearInterval(timerInterval);

  hide(quizScreen);
  show(resultScreen);

  correctCount = answers.filter(a => a?.passed).length;

  finalScore.textContent = `You scored ${correctCount} out of ${questions.length}`;
  finalMessage.textContent = "Test completed!";
}


// -------------------------------------------------
// CSV DOWNLOAD
// -------------------------------------------------
function generateCsvContent() {
  const rows = [];
  rows.push(["#", "Question", "Selected", "Correct", "Result"]);

  answers.forEach((r, i) => {
    rows.push([
      i + 1,
      r.question.replace(/[\n\r]+/g, " "),
      r.selected || "",
      r.correctAnswer,
      r.passed ? "Passed" : "Failed"
    ]);
  });

  rows.push([]);
  rows.push(["Total Score", `${correctCount}/${questions.length}`]);

  return rows.map(row =>
    row.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")
  ).join("\r\n");
}

function downloadCSV() {
  const blob = new Blob([generateCsvContent()], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mtc_referee_test.csv";
  a.click();
}


// -------------------------------------------------
// HTML REPORT
// -------------------------------------------------
function generateHtmlReport() {
  let rows = answers.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.question}</td>
      <td>${r.selected || "(none)"}</td>
      <td>${r.correctAnswer}</td>
      <td>${r.passed ? "Passed" : "Failed"}</td>
    </tr>
  `).join("");

  return `
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { border: 1px solid #555; padding: 8px; }
      th { background: #eee; }
    </style>
  </head>
  <body>
    <h1>MTC Referee Exam Report</h1>
    <p><strong>Score:</strong> ${correctCount} / ${questions.length}</p>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </body>
  </html>`;
}

function downloadHtmlReport() {
  const blob = new Blob([generateHtmlReport()], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mtc_referee_report.html";
  a.click();
}


// -------------------------------------------------
// UTIL
// -------------------------------------------------
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }


// -------------------------------------------------
// EVENTS
// -------------------------------------------------
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
submitBtn.addEventListener("click", submitQuiz);

downloadCsvBtn2.addEventListener("click", downloadCSV);
downloadHtmlBtn2.addEventListener("click", downloadHtmlReport);
