// Main Function Where Manage Everythin ⭐
export const navbarCreator = (() => {
  const navbar = document.querySelector("#navbar");
  logoCreator();
  navBtnCreator(3);
  loginBtnCreator();
})();

// Create Logo section in Navbar
function logoCreator() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  document.querySelector("#navbar").appendChild(logo);
  logo.textContent = "Younes";
}

// Create Navigation Button in Navbar (number is Button Counts)
function navBtnCreator(number) {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("buttons-container");
  document.querySelector("#navbar").appendChild(btnContainer);
  for (let i = 1; i <= number; i++) {
    createNavBtn(i);
  }
  putContentinButton();
}

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

// Login Button Creator Function
function loginBtnCreator() {
  const login = document.createElement("button");
  login.classList.add("btn", "login-btn");
  login.textContent = "Login / Signup";
  document.querySelector("#navbar").appendChild(login);
}
