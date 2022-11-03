///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".main-nav-link");

btnNav.addEventListener("click", (e) => {
  e.preventDefault();
  header.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.className == "main-nav-link main-nav-link-cta") {
      e.preventDefault();
    }

    header.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

///////////////////////////////////////////////////////////
// Sticky navigation

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
