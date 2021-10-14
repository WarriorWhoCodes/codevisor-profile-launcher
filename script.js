const themeToggle = document.getElementById("darkBtn");
themeToggle.addEventListener("click", () => {
  themeToggle.classList.toggle("fa-moon");
  themeToggle.classList.toggle("fa-sun");
  if (localStorage.getItem("theme")) {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme == 1) {
      localStorage.setItem("theme", 0);
      document.getElementsByTagName("body")[0].classList.remove("dark");
      themeToggle.classList.add("fa-moon");
      themeToggle.classList.remove("fa-sun");
    }
    else {
      localStorage.setItem("theme", 1);
      document.getElementsByTagName("body")[0].classList.add("dark");
      themeToggle.classList.add("fa-sun");
      themeToggle.classList.remove("fa-moon");

    }
  }
  else {
    document.getElementsByTagName("body")[0].classList.add("dark");
    localStorage.setItem("theme", 1);
    themeToggle.classList.add("fa-sun");
  }
});
// 1 - For darkmode 2- For NormalMode
if (localStorage.getItem("theme")) {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme == 1) {
    document.getElementsByTagName("body")[0].classList.add("dark");
    themeToggle.classList.add("fa-sun");
    themeToggle.classList.remove("fa-moon");
  }
  else {
    document.getElementsByTagName("body")[0].classList.remove("dark");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  }
}