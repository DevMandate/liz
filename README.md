# Referee Laws of the Game — MCQ Quiz

A lightweight, fast, and mobile-friendly interactive quiz application built using **HTML**, **CSS**, and **JavaScript**.
This project is designed for referee training and assessment, following the FKF Laws of the Game standards.

---

## Features

### 25 Multiple-Choice Questions

Fully configurable through an array inside `script.js`.

### Smooth UI

Clean, professional typography and responsive layout that works on phones and desktop browsers.

### Timer

A 20-minute countdown that auto-submits when time ends.

### Prevent skipping questions

Users cannot go to the next question until they select an answer.

### Progress Indicator

Shows **“Question X of 25”** for easy navigation.

### Auto-submit + Score Calculation

Results are displayed at the end with correct/incorrect tracking.

### CSV Download

The quiz automatically generates a downloadable **CSV report** showing:

* Each question
* The user’s answer
* The correct answer
* Pass/Fail per question
* Total score

### One Attempt Only

Restart is removed. User can only submit once.

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

Find the section:

```js
// QUESTIONS (INSERT YOUR 25 QUESTIONS HERE)
const questions = [
  ["Question", "Option A", "Option B", "Option C", "Option D", "Correct Letter"],
  ...
];
```

Replace the entries with your own 25-question array.

---

## How to Run the Project

No installations required.
Just open **index.html** in any browser.

If hosted online, simply upload the three files/folders:

* `index.html`
* `css/`
* `js/`

---

## Requirements

* Works in any modern browser
* No backend required
* Optional: Google Apps Script endpoint for sending results (if configured)

---

## Customization

You can freely adjust:

* Colors in `styles.css`
* Timer duration in `script.js`
* Number of questions
* CSV output format

If you want Dark Mode, animations, or a redesigned UI, just ask.

---

## License

This project is free to use and modify for training, educational, or assessment use.

---

## Support

If you need:

* A version with images
* Randomized question order
* Leaderboard system
* Firebase / Google Sheets data storage

Just tell me — I can generate it instantly.
