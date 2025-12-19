const hamburgerMenu = document.getElementById("bar");
const smallScreenMenu = document.getElementById(
  "small-screen-menu"
);
const x = document.getElementById("x");

hamburgerMenu.addEventListener("click", () => {
  smallScreenMenu.style.display = "block";
});

x.addEventListener("click", () => {
  smallScreenMenu.style.display = "none";
});

const animalquiz = document.getElementById("animalquiz");
const algrebraquiz =
  document.getElementById("algrebraquiz");

const sharksquiz = document.getElementById("sharksquiz");
const spacequiz = document.getElementById("spacequiz");
const computerquiz =
  document.getElementById("computerquiz");

animalquiz.addEventListener("click", () => {
  window.location.href = "/animal-quiz/animal.html";
});

algrebraquiz.addEventListener("click", () => {
  window.location.href = "/algebra-quiz/algrebra.html";
});

sharksquiz.addEventListener("click", () => {
  window.location.href = "/sharks-quiz/sharks.html";
});

spacequiz.addEventListener("click", () => {
  window.location.href = "/space-quiz/space.html";
});

computerquiz.addEventListener("click", () => {
  window.location.href = "/computer-quiz/computer.html";
});
