# Referee Laws of the Game — MCQ Quiz

A lightweight, fast, and mobile-friendly interactive quiz application built using **HTML**, **CSS**, and **JavaScript**.
This project is designed for referee training and assessment following FKF Laws of the Game standards.

---

## Features

### 25 Multiple-Choice Questions

Fully configurable through the questions array inside `script.js`.

### Smooth, Professional UI

Clean typography and responsive design that works perfectly on both mobile and desktop.

### Global Timer (20 Minutes)

A 20-minute countdown runs for the entire test and auto-submits when it reaches zero.

### Per-Question Timer (45 Seconds)

Each question has its own **45-second timer**.
When it expires:

* The question locks
* User cannot go back
* The quiz auto-moves to the next question

### Prevent Skipping Questions

A user **cannot go to the next question until they have selected an answer**.
If unanswered:

* **Next** button is hidden
* **Previous** button stays visible

### Controlled Navigation

* When a user **answers**, choices lock
* **Next** button appears
* **Previous** button becomes hidden
* Users must click **Next** manually (no auto-jumping)

### Progress Indicator

Shows **“Question X of 25”** for easy tracking.

### Auto-submit + Score Calculation

At the end, the system displays:

* Total correct answers
* Completion message

### CSV Download

Generates a downloadable report containing:

* Each question
* The user’s answer
* The correct answer
* Pass/Fail for each item
* Total score

### HTML Report

A clean, formatted HTML table version of the results.

### One Attempt Only

Restart functionality is removed — each user only gets one attempt.

---

## Project Structure

```
project-folder/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

---

## How to Add / Edit Questions

Open:

```
js/script.js
```

Find:

```js
// QUESTIONS (INSERT YOUR 25 QUESTIONS HERE)
const questions = [
  ["Question", "Option A", "Option B", "Option C", "Option D", "Correct Letter"],
];
```

Replace with your custom questions.

---

## How the Quiz Logic Works (Important)

* The quiz starts with a **20-minute global timer**
* Each question gets **45 seconds**
* If user selects an answer:

  * It locks
  * Previous button hides
  * Next button appears
  * User must press **Next** manually
* If **unanswered**, the question does NOT lock — only the timer can lock it
* If time expires:

  * Question locks
  * Navigation backward is disabled
  * Quiz automatically moves forward

This ensures fairness, prevents reviewing previous answers, and keeps timing strict.

---

## How to Run the Project

No installations required.
Simply open **index.html** in any browser.

To host online, upload:

* `index.html`
* `css/` folder
* `js/` folder

---

## Requirements

* Runs on all modern browsers
* No backend required
* Optional: connect Google Sheets or Firebase to store results

---

## Customization Options

You can modify:

* Styles (`styles.css`)
* Timer durations (`script.js`)
* Number of questions
* CSV fields
* Report layout

If you'd like:

* Dark mode
* Animated UI
* Random question order
* Category-based questions
  Just ask!

---

## License

Free to use and modify for training, education, or assessments.

---

## Support

If you want advanced features like:

* Leaderboards
* Admin dashboard
* Auto-emailing results
* Timer presets
* Multi-user sessions

Tell me — I can generate them instantly.
