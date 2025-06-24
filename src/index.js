import resetCss from "./styles/reset.css"; // Reset Css
import css from "./styles/style.css"; // Css Style File

// Navbar Import
import { navbarCreator } from "./scripts/navbar";
import { homePage } from "./scripts/homepage";
import { menupage } from "./scripts/menupage";
// Start
homePage();
const container = document.querySelector("#content");

// Switch Content Pages
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = e.target.closest(".nav-btn");
    // item.classList.toggle("active-navitem");
    // Home Page
    if (item.classList.contains("navbtn-1")) {
      container.classList = "";
      container.classList.add("homepage");
      indicateCurrentNavPage();
      removeContent();
      homePage();
      // Menu Page
    } else if (item.classList.contains("navbtn-2")) {
      container.classList = "";
      container.classList.add("menupage");
      indicateCurrentNavPage();
      removeContent();
      menupage();
      // About Page
    } else if (item.classList.contains("navbtn-3")) {
      container.classList = "";
      container.classList.add("aboutpage");
      indicateCurrentNavPage();
      removeContent();
    }
  });
});

// Active Indicator When Page Loads
(function () {
  if (container.classList.contains("homepage")) {
    document.querySelector(".navbtn-1").classList.add("active-navitem");
  } else if (container.classList.contains("menupage")) {
    document.querySelector(".navbtn-2").classList.add("active-navitem");
  } else if (container.classList.contains("aboutpage")) {
    document.querySelector(".navbtn-3").classList.add("active-navitem");
  }
})();

// To check which page is active to switch activated nav page indicator
function indicateCurrentNavPage() {
  if (container.classList.contains("homepage")) {
    document.querySelector(".navbtn-1").classList.add("active-navitem");
    document.querySelector(".navbtn-2").classList.remove("active-navitem");
    document.querySelector(".navbtn-3").classList.remove("active-navitem");
  } else if (container.classList.contains("menupage")) {
    document.querySelector(".navbtn-2").classList.add("active-navitem");
    document.querySelector(".navbtn-1").classList.remove("active-navitem");
    document.querySelector(".navbtn-3").classList.remove("active-navitem");
  } else if (container.classList.contains("aboutpage")) {
    document.querySelector(".navbtn-3").classList.add("active-navitem");
    document.querySelector(".navbtn-2").classList.remove("active-navitem");
    document.querySelector(".navbtn-1").classList.remove("active-navitem");
  }
}

function removeContent() {
  while (container.firstChild !== null) {
    container.firstChild.remove();
  }
}
