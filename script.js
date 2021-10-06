const themeToggle = document.getElementById("darkBtn");
themeToggle.addEventListener("click", () => {
  themeToggle.classList.toggle("fa-moon");
  themeToggle.classList.toggle("fa-sun");
  document.getElementsByTagName("body")[0].classList.toggle("dark");
});
