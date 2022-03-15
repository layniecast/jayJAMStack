// Show navigation links active when clicked:

var tabs = document.querySelectorAll("nav a");
document.addEventListener("click", makeActive);

function makeActive() {
  if (target.matches(tabs)) {
    for (let navItem of tabs) {
      navItem.target.classList.add("active");
    }
  } else {
    target.classList.remove("active");
  }
}
