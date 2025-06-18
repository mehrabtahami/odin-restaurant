import resetCss from "./styles/reset.css"; // Reset Css
import css from "./styles/style.css"; // Css Style File

// Navbar Import
import { navbarCreator } from "./scripts/navbar";
import { homePage } from "./scripts/homepage";

const container = document.querySelector("#content");

// Function to indicate active nav home page
(function () {
  if (container.classList.contains("homepage")) {
    document.querySelector(".navbtn-1").classList.add("active-navitem");
  }
})();

// const navButtons = document.querySelectorAll(".nav-btn");
// navButtons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const item = e.target.closest(".nav-btn");
//     item.classList.toggle("active-navitem");
//   });
// });
