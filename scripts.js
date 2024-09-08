document.addEventListener("DOMContentLoaded", function() {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute("href").substring(1); // Get target section ID
      const targetSection = document.getElementById(targetId); // Get target section element
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
    });
  });
});

let lastScrollTop = 0;
const header = document.querySelector("header");

// Detect Scroll Direction and Hide/Show Header
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hide-header"); // Hide header when scrolling down
  } else {
    header.classList.remove("hide-header"); // Show header when scrolling up
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update last scroll position
});
