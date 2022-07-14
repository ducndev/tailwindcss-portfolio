const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const darkMode = document.querySelector("#darkmode");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
