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
    "B"
  ],

  // 3
  [
    "A defender takes a direct free kick and passes the ball back to a goalkeeper. The goalkeeper fails to kick the ball and does not touch it. After that, the ball enters the goal. What is the correct decision?",
    "Referee awards a goal",
    "Corner kick to the opponents",
    "The free kick is retaken",
    "Referee applies advantage",
    "B"
  ],

  // 4
  [
    "For what can allowance of time be made off? ",
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
    "Right before halftime a player scores. The referee doesn’t restart with a kick-    off, but whistles for the end of the half. While everyone is still on the field of play, the AR informs the referee that the ball was scored with a deliberate handball by     the attacker in an attempt to score. What does the referee decide?",    
    "He disallows the goal and goes to the dressing room for halftime",
    "He disallows the goal, shows the offender a yellow card and goes to the dressing room for halftime",
    "He disallows the goal, shows the offender a red card and goes to the dressing room for halftime",
    "He allows the goal, as he already whistle for halftime",
    "B"
  ],

  // 7
  [
    "A Mathare United player is dribbling the ball towards Nairobi City's goal. Suddenly, his shoe accidentally falls off. With only one shoe on, he decides to take a shot and he scores a goal. The referee should use what method of restarting play?",
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
    "During penalty shoot-out, after completing the run-up, the kicker feints to kick the ball and, at the same time, the goalkeeper moves off the goal line with both feet. What is the referee’s decision?",
    "The kicker is cautioned and indirect free kick awarded.",
    "Both the kicker and the goalkeeper are cautioned and the kick retaken",
    "The Goalkeeper is given a warning and the kick retaken. If he/she repeats the     same, the goalkeeper gets sent off (red card),",
    "The kick is recorded as missed and the kicker is cautioned (yellow card)",
    "D"
  ],

  // 10
  [
    " A player (Team A) takes the throw-in. After the ball is in play, it hits the referee and leaves the field of play without touching any other player. How is play  restarted?",
    "A dropped ball is awarded to the opponents.",
    "The referee will award a throw-in/corner kick/goal kick to the opponents (Team B),",
    "A goal kick is awarded to the opponents",
    "A throw-in is awarded to the opponents",
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
    "May the referee allow a kick-off after a goal was scored when players of the scoring team are off the field celebrating?",
    "No. For every kick-off all players, except the player taking the kick-off, must be in their own half of the field of play.",
    "Yes so long as the players of the team taking the kick-off are in their own half of the field of play.",
    "No. for every kick-off all players including the player taking the kick-off, must be in their own half of the field of play.",
    "Yes. For every kick-off all players, except the players of the scoring team, must be in their own half of the field of play but.",
    "C"
  ],

  // 13
  [
    "While the ball is in play, a substitute strikes a substitute from the same team outside field of play. How is play restarted?",
    "If advantage cannot be played, restart with a direct free kick on the boundary line nearest to where the offence occurred.",
    "It is a dropped ball. A free kick can only be given if such an offence is committed by a player against an opposing player or a match official.",
    "Dropped ball (not a FK offence as not vs opponent/official)",
    "Indirect free kick on the boundary line nearest to where the offence occurred.",
    "C"
  ],

  // 14
  [
    "From a dropped ball at the center circle, a player dribbles the ball past opponents and scores a goal. What will be the referee’s decision?",
    "Allow the goal since the player touched the ball several times from a long distance and scored.",
    "Disallow the goal if the ball didn’t touch at least two players. Play is restarted with a goal kick or a corner kick.",
    "Disallow the goal if the ball didn’t touch at least two players. Retake the dropped ball.",
    "Disallow the goal if the ball didn’t touch at least two players. Caution the player and play is restarted with a goal kick or a corner kick.",
    "B"
  ],

  // 15
  [
    "How many types of punishments do we have in the game of soccer.",
    "Two: penalty kick and cards",
    "Two: team free kick or a penalty kick and individual yellow and red card.",
    "Two: yellow and red card",
    "Three: free kick, yellow card and red card",
    "B"
  ],

  // 16
  [
    "The referee notices that a player is committing a cautionable (yellow card) offence on the field of play during the warm-up before the kick-off. What is the correct procedure?",
    "The referee cautions, or shows a yellow card to the offending player, as the referee has authority before entering the field of play at the start of the match. The incident is reported to the appropriate disciplinary authorities.",
    "The referee cannot caution, or show a yellow to the offending player, as the offence has occurred before the referee has entered the field of play at the start of the match. The incident is reported to the appropriate disciplinary authorities.",
    "The referee cautions, or shows a yellow card to the offending player, as the referee has authority before entering the field of play at the start of the match. No need to report the incident.",
    "None of the answers above is correct.",
    "B"
  ],

  // 17
  [
    "A player had left the field of play to correct or change equipment and then. returned during play without the referee’s permission. What are the sanction and restart?",
    "A player must be cautioned (yellow card, YC). If play was stopped to issue the YC, it will be restarted with:",
    "A direct free kick (or penalty kick) – from the position of interference, or",
    "An indirect free kick – from the position of the ball when play was stopped (if there was no interference)",
    "All of the above",
    "D"
  ],

  // 18
  [
    "A dog enters the field of play during the match and prevents a goal being. scored by stopping the ball on the goal line. The dog’s interference does not prevent any defending player from playing the ball. What is the referee’s decision?",
    "The referee allows the goal since the dog doesn’t prevent any defending player from playing the ball.",
    "The referee stops play and restarts with a dropped ball for the defending team goalkeeper in their penalty area.",
    "The dog is an ‘outside agent’ so the referee stops play and restarts with a dropped ball for any defending team player in the field of play.",
    "B and C could be correct",
    "B"
  ],

  // 19
  [
    "After the second half has started, the referee notices that during half-time a player changed places and shirts with the goalkeeper without the referee’s permission. What is the referee’s decision?",
    "The referee allows play to continue. Both players are not cautioned (yellow cards are not issued). The matter is reported after the match to the appropriate authorities.",
    "The referee stops play. Cautions both players and restart play with an indirect free kick where the ball was.",
    "The referee allows play but caution both players during the next stoppage and restart play accordingly. The matter is reported after the match to the appropriate authorities.",
    "None of the answers above is correct.",
    "B"
  ],

  // 20
  [
    "How many types of free kicks do we have?",
    "Two: direct free kick and indirect free kick",
    "Three: direct free kick, indirect free kick and penalty kick",
    "Four: direct free kick, indirect indirect free kick, corner kick and penalty kick",
    "All of the above are correct",
    "A"
  ],

  // 21
  [
    "In this situation, where a striker shoots the ball towards the goal and it travels along the goal line within penalty area, but a substitute who was warming up stops the ball with his foot before it crosses the line, the correct decision for the referee to make is:",
    "Award a direct free kick or a penalty kick to the opposing team from the position where the substitute interfered with play.",
    "The substitute should be cautioned (yellow card) for unsporting behavior.",
    "If the interference prevented a clear goal-scoring opportunity, the referee may consider sending off (red card) the substitute for denying an obvious goal-scoring opportunity.",
    "Award a direct free kick or a penalty kick to the opposing team from the position where the substitute interfered with play and caution the substitute.",
    "D"
  ],

  // 22
  [
    "At a free kick the goalkeeper flicks the ball up using his/her foot and a teammate chests the ball back to the goalkeeper to catch in their own penalty area. What is the referee's decision? 1 point",
    "Penalty kick and yellow card to the goalkeeper",
    "Indirect free kick and yellow card to the goalkeeper",
    "Indirect free kick and yellow card to the teammate of the goalkeeper",
    "Play on",
    "B"
  ],

  // 23
  [
    "A player wants to take a corner kick, but the flag post is moving a lot due to the wind. The player takes out the flag post. What does the referee decide?",
    "He allows the corner kick to be taken",
    "He allows the corner kick to be taken only if the player tells him he will move the flag post back immediately after taking the kick",
    "He allows the corner kick to be taken and commands his assistant referee to move back the flagpost afterwards",
    "He does not allow the corner kick to be taken, because the corner flagpost must not be moved",
    "D"
  ],

  // 24
  [
    "What does the Referee check for when inspecting the ball?",
    "That it meets all the requirements of Law 2,",
    "If the ball is spherical",
    "Weight and circumference",
    "Pressure",
    "A"
  ],

  // 25
  [
    "Name laws of the game in order from law 1 to 8…",
    "", "", "", "",  
    "TEXT" 
  ]
  

];



// -------------------------------------------------
// GLOBAL STATE
// -------------------------------------------------
let pos = 0;
let answers = [];
let correctCount = 0;

let timerInterval = null;           // 20-min global timer
let totalTime = 1200;

let questionTimerInterval = null;   // 45-sec per question timer
let questionTime = 45;
let fullName = "";  // store user's name


// -------------------------------------------------
// DOM REFERENCES
// -------------------------------------------------
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionBox = document.getElementById("questionBox");
const progressEl = document.getElementById("progress");
const timeLeftEl = document.getElementById("timeLeft");

const questionTimerEl = document.getElementById("questionTimer"); // <<< ADD TO HTML

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
   const nameInput = document.getElementById("fullName").value.trim();

    if (!nameInput) {
        alert("Please enter your full name to start the test.");
        return;
    }

  fullName = nameInput;
  pos = 0;
  correctCount = 0;
  answers = new Array(questions.length).fill(null);

  hide(startScreen);
  show(quizScreen);

  totalTime = 1200;
  startTimer();        // GLOBAL TIMER (20 minutes)
  renderQuestion();    // FIRST QUESTION
}

// -------------------------------------------------
// GLOBAL TIMER (20 minutes)
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
// PER-QUESTION TIMER (45 seconds)
// -------------------------------------------------
function startQuestionTimer() {
  clearInterval(questionTimerInterval);
  questionTime = 45;

  updateQuestionTimerDisplay();

  questionTimerInterval = setInterval(() => {
    questionTime--;

    updateQuestionTimerDisplay();

    if (questionTime <= 0) {
      clearInterval(questionTimerInterval);
      lockQuestion();
    }

  }, 1000);
}

function updateQuestionTimerDisplay() {
  if (questionTimerEl) {
    questionTimerEl.textContent = `Time left: ${questionTime}s`;
  }
}

// -------------------------------------------------
// LOCK QUESTION WHEN TIME EXPIRES
// -------------------------------------------------
function lockQuestion() {
  saveCurrentAnswer();          // save whatever they had

  // disable choices
  questionBox.querySelectorAll("input").forEach(i => i.disabled = true);
  questionBox.querySelectorAll(".choice").forEach(c => c.classList.add("disabled"));

  prevBtn.style.visibility = "hidden";  // cannot go back

  // If last question → auto-submit
  if (pos === questions.length - 1) {
    submitQuiz();
    return;
  }

  // Move to next question in 1 sec
  setTimeout(() => {
    pos++;
    renderQuestion();
  }, 800);
}

// -------------------------------------------------
// RENDER QUESTION + START QUESTION TIMER
// -------------------------------------------------
function renderQuestion() {
  clearInterval(questionTimerInterval);

  const q = questions[pos];
  const correct = q[5];

  progressEl.textContent = `Question ${pos + 1} of ${questions.length}`;

  let html = `<h3>${q[0]}</h3>`;

  // TEXT QUESTION
  if (correct === "TEXT") {
    const savedText = answers[pos]?.text || "";

    html += `
      <textarea id="textAnswer"
      style="width:100%; height:160px; font-size:15px; padding:10px;"
      placeholder="Enter all 8 laws in order...">${savedText}</textarea>
    `;

    questionBox.innerHTML = html;

    // If this question was locked earlier (user answered it and pressed Next),
    // disable inputs and add the disabled class for styling/UX.
    if (answers[pos]?.locked) {
    // disable radio inputs
    questionBox.querySelectorAll("input[name='choices']").forEach(i => i.disabled = true);
    // add disabled class to labels (matches your CSS)
    questionBox.querySelectorAll(".choice").forEach(c => c.classList.add("disabled"));
    }

    updateNavButtons();
    startQuestionTimer();
    return;
  }

  // MULTIPLE CHOICE
  html += `<div class="choices">`;
  const labels = ["A", "B", "C", "D"];
  const saved = answers[pos]?.selected;

  for (let i = 1; i <= 4; i++) {
    const letter = labels[i - 1];
    html += `
      <label class="choice ${saved === letter ? "selected" : ""}">
        <input type="radio" name="choices" value="${letter}"
        ${saved === letter ? "checked" : ""}>
        <span>${letter}. ${q[i]}</span>
      </label>
    `;
  }

  html += `</div>`;

  questionBox.innerHTML = html;

  questionBox.querySelectorAll(".choice").forEach(c => {
    c.addEventListener("click", () => {
  
      // Mark the selected option
      questionBox.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      c.querySelector("input").checked = true;
  
      // Lock the question AFTER answering
      questionBox.querySelectorAll("input").forEach(i => i.disabled = true);
      questionBox.querySelectorAll(".choice").forEach(x => x.classList.add("disabled"));
  
      // Save answer
      saveCurrentAnswer();
  
      // Hide previous button ONLY after answering
      prevBtn.style.visibility = "hidden";
  
      // Do NOT move to next question automatically
    });
  });
  

  updateNavButtons();
  startQuestionTimer();
}

// -------------------------------------------------
// SAVE CURRENT ANSWER
// -------------------------------------------------
function saveCurrentAnswer() {
  const q = questions[pos];
  const correct = q[5];

  if (correct === "TEXT") {
    const txt = document.getElementById("textAnswer")?.value || "";

    answers[pos] = {
      question: q[0],
      text: txt,
      selected: txt,
      correctAnswer: "TEXT",
      passed: txt.trim().length > 0
    };
    return;
  }

  const radios = document.getElementsByName("choices");
  let selected = null;

  for (const r of radios) {
    if (r.checked) selected = r.value;
  }

  answers[pos] = {
    question: q[0],
    selected: selected,
    correctAnswer: correct,
    passed: selected === correct
  };
}

// -------------------------------------------------
// NAVIGATION
// -------------------------------------------------
function nextQuestion() {
    // Save current answer for this question
    saveCurrentAnswer();
  
    // mark current question as locked (so it cannot be changed later)
    answers[pos] = answers[pos] || {};
    answers[pos].locked = true;
  
    // Move forward
    if (pos < questions.length - 1) {
      pos++;
      renderQuestion();
  
      // Once the user moves forward from a question, disable PREVIOUS navigation
      // (hides Prev so they cannot return)
      prevBtn.style.visibility = "hidden";
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
  clearInterval(questionTimerInterval);

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
  rows.push(["Full Name", fullName]);
  rows.push([]);
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
    <p><strong>Full Name:</strong> ${fullName}</p>
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