/** @format */

const navItemBar = document.querySelector(".navItemBar");
const navItems = document.querySelectorAll(".navItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (navItemBar.classList.contains("showBar")) {
    navItemBar.classList.remove("showBar");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    navItemBar.classList.add("showBar");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

navItems.forEach(function (navItem) {
  navItem.addEventListener("click", toggleMenu);
});
