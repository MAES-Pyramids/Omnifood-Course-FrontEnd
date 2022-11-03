///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", (e) => {
  e.preventDefault();
  header.classList.toggle("nav-open");
});

// const navLinks = document.querySelectorAll(".main-nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
// if (link.classList.contains("main-nav-link-cta")) {
//   e.preventDefault();
// }

//     header.classList.remove("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      if (!link.classList.contains("main-nav-link-cta")) {
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile navigation

    if (link.classList.contains("main-nav-link"))
      header.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
