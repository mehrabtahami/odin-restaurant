import resetCss from "./styles/reset.css"; // Reset Css
import css from "./styles/style.css"; // Css Style File

// Navbar (after Work move it to it's module file and import here)
const navbarCreator = (() => {
  const navbar = document.querySelector("#navbar");

  const logoCreator = (() => {
    const logo = document.createElement("div");
    logo.classList.add("logo");
    navbar.appendChild(logo);
    logo.textContent = "Younes";
  })();

  const navBtnCreator = (() => {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("buttons-container");
    navbar.appendChild(btnContainer);
    for (let i = 1; i <= 3; i++) {
      createNavBtn(i);
    }
    putContentinButton();
  })();
})();

// Create Navigiation Buttons
function createNavBtn(num) {
  const btn = document.createElement("button");
  btn.classList.add("nav-btn", `navbtn-${num}`);
  document.querySelector(".buttons-container").appendChild(btn);
}

// Put Content in Nav Buttons
function putContentinButton() {
  document.querySelector(".navbtn-1").textContent = "Home";
  document.querySelector(".navbtn-2").textContent = "Menu";
  document.querySelector(".navbtn-3").textContent = "About";
}
