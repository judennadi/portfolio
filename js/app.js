const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const list = document.querySelectorAll("#sidebar .sidebar-links li");
const sections = document.querySelectorAll("section");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    sidebar.classList.toggle("show-sidebar");
  });
});

sections.forEach((section) => {
  section.style.paddingTop = "110px";
});
// set year
date.innerHTML = new Date().getFullYear();
