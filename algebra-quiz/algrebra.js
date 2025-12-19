import { quizQuestions } from "./quizquestions.js";

const startQuiz = document.getElementById("start");
const goback = document.getElementById("back");
const animalquizIntro = document.getElementById("quiz");
const section = document.querySelector("section");

goback.addEventListener("click", () => {
  location.href = "/discover/discover.html";
});

startQuiz.addEventListener("click", () => {
  animalquizIntro.remove();
  showQuestion(0);
});

function showQuestion(index) {
  section.innerHTML = "";
  const q = quizQuestions[index];

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("div-border");
  questionDiv.innerHTML = `
  <h1>${q.question}</h1>
  <div id="choices">
    <button>${q.choices[0]}</button>
    <button>${q.choices[1]}</button> 
    <button>${q.choices[2]}</button>
    <button>${q.choices[3]}</button> 
  </div>
   <h2 class="question-num">Question ${index + 1} of ${
    quizQuestions.length
  }</h2>

  <button class="nextbtn">Next</button>
  `;

  section.appendChild(questionDiv);

  const choiceButtons = questionDiv.querySelectorAll(
    "#choices button"
  );
  const nextBtn = questionDiv.querySelector(".nextbtn");

  nextBtn.style.display = "none";

  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.textContent;

      if (choice === q.correct) {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        correct++;
      } else {
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        wrong++;
      }

      choiceButtons.forEach((b) => {
        b.disabled = true;
      });
      nextBtn.style.display = "inline-block";
    });

    nextBtn.addEventListener("click", () => {
      const nextIndex = index + 1;
      if (nextIndex < quizQuestions.length) {
        showQuestion(nextIndex);
      } else {
        showResults();
      }
    });
  });
}

let correct = 0;
let wrong = 0;

function showResults() {
  section.innerHTML = `
  <div class="quiz-result div-border">
  <h1>Quiz Finished!</h1>
    <p>Correct: ${correct}</p>
    <p>Wrong: ${wrong}</p>
    <p>Score: ${correct} / ${quizQuestions.length}</p>

    <button class="home">Home</button>

    </div>


    `;

  const homeBtn = section.querySelector(".home");
  homeBtn.addEventListener("click", () => {
    location.href = "../discover/discover.html";
  });
}
