const container = document.querySelector("#content");

// Home Page Main Function ⭐
export const homePage = (() => {
  container.classList.add("homepage"); // for css design
  welcomeHeading("Welcome To");
  HomeimageCreator();
  bottomHeading();
})();

// Welcome Text Creator
function welcomeHeading(text) {
  const welcome = document.createElement("h1");
  welcome.textContent = text;
  welcome.classList.add("welcome-heading");
  container.appendChild(welcome);
}

// Image Creator Function
import burgerImage from "../images/burger.png";
function HomeimageCreator() {
  const homeImage = document.createElement("img");
  homeImage.src = burgerImage;
  homeImage.classList.add("home-image");
  container.appendChild(homeImage);
}

// Heading Restaurant name style codes
function bottomHeading() {
  restaurantNameCreator("YOUNES");
  const restaurantText = document.createElement("h3");
  restaurantText.textContent = "Restaurant";
  restaurantText.classList.add("restaurant-text");
  container.appendChild(restaurantText);
}

// if i wanted to style it better later, so i created this function
function restaurantNameCreator(name) {
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  for (let i = 0; i < name.length; i++) {
    const newLetter = document.createElement("span");
    newLetter.textContent = name[i];
    newLetter.classList.add(`restaurant-letter-${i + 1}`);
    restaurantName.appendChild(newLetter);
  }
  container.appendChild(restaurantName);
}
