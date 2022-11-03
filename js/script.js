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

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#") {
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
      const section = document.querySelector(".top");
      section.scrollIntoView({ behavior: "smooth" });
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
const sectionHeader = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeader);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(`Flexbox gap property is ${isSupported}`);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////////////////////////////////////////////
// Lazy loading images
const image = document.querySelector(".hero-img");
function lazyLoad(entries, observer) {
  const [entire] = entries;
  if (!entire.isIntersecting) return;
  entire.target.src = entire.target.dataset.src;
  entire.target.addEventListener("load", () => {
    entire.target.classList.remove("lazy-img");
  });
}
const lazyLoadingObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.2,
});
lazyLoadingObserver.observe(image);

//Images Pixelation
const lazyImage = document.querySelector("img[data-src]");
const lazySection = document.querySelector(".how-works");
const clearSection = document.querySelector(".hero-section");

function lazyUnload(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  lazyImage.classList.add("lazy-img");
}
const lazySectionsObserver = new IntersectionObserver(lazyUnload, {
  root: null,
  threshold: 0.25,
});
lazySectionsObserver.observe(lazySection);

function lazyload(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  lazyImage.classList.remove("lazy-img");
}
const clearSectionsObserver = new IntersectionObserver(lazyload, {
  root: null,
  threshold: 0.5,
});
clearSectionsObserver.observe(clearSection);
