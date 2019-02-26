// Tragets the menu button element
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

/*
 * When the menu button is pressed in the mobile version is added active class elements
 * to the menu buttton and nav bar
 */
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

// To add a whit background to nav bar when scrolling and to make icon smaller
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 4) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});