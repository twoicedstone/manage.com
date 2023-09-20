const closed = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const blackCover = document.querySelector(".black-cover");
const illustration = document.querySelector(".illustration");
const firstFeedback = document.getElementById("first-feedback");
const firstFbkframe = document.getElementById("first-fkbframe");
const sectionFeedback = document.querySelector(".section__feedback");
const submit = document.querySelector(".footer__button");
const errorMessage = document.querySelector(".error");
const input = document.querySelector("input");
const form = document.querySelector("form");

hamburger.addEventListener("click", () => {
  closed.style.display = "block";
  hamburger.style.display = "none";
  mobileNav.style.display = "block";
  blackCover.style.visibility = "visible";
  illustration.style.visibility = "hidden";
});

closed.addEventListener("click", () => {
  closed.style.display = "none";
  hamburger.style.display = "block";
  blackCover.style.visibility = "hidden";
  mobileNav.style.display = "none";
  illustration.style.visibility = "visible";
});

// FORM VALIDATION

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value;

  if (!isEmail(inputValue)) {
    errorMessage.style.display = "block";
    input.style.borderColor = "hsl(12, 88%, 59%)";
    input.style.borderWidth = "2px";
  } else {
    errorMessage.style.display = "none";
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

window.onresize = function () {
  location.reload();
};
