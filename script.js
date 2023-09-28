const hamburger = document.querySelector(".hamburger");
const features = document.querySelector(".features");

hamburger.addEventListener("click", () => {
  features.classList.toggle("-translate-x-[100%]");
});
