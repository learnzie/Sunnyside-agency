var navLinks = document.getElementById("navLinks");
var backdrop = document.querySelector(".backdrop");

function showMenu() {
  navLinks.style.right = "0";
  backdrop.classList.add("open");
}
function hideMenu() {
  navLinks.style.right = "-200px";
  backdrop.classList.remove("open");
}
