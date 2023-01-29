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

// const sT = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 1500,
//   reset: true,
// });
const sL = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 1500,
  // reset: true,
});

/*SCROLL HOME*/
sL.reveal("header article h2", { delay: 200 });
sL.reveal("header article div", { delay: 300 });
sL.reveal("header article h1", { delay: 400 });
sL.reveal("header article h4", { delay: 600 });

/*SCROLL ABOUT*/
sL.reveal(".about-img", { delay: 300 });
sL.reveal(".about-info", { delay: 500 });

// /*SCROLL SKILLS*/
sL.reveal(".skills-front", { delay: 400 });
sL.reveal(".skills-front div", { interval: 200 });
sL.reveal(".skills-back", { delay: 700 });
sL.reveal(".skills-back div", { interval: 200 });

// /*SCROLL WORK*/
sL.reveal(".projects section-title", { interval: 200 });
sL.reveal(".projects article", { interval: 400 });

// /*SCROLL CONTACT*/
// sT.reveal(".contact-input", { interval: 200 });

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
