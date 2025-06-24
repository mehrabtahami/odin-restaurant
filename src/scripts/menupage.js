const container = document.querySelector("#content");
// import pizza1 from `../images/pizza/Pizza-1.png`;
import pizza1 from "../images/Pizza-1.png";
import pizza2 from "../images/Pizza-2.png";
import pizza3 from "../images/Pizza-3.png";
import pizza4 from "../images/Pizza-4.png";
import pizza5 from "../images/Pizza-5.png";
import pizza6 from "../images/Pizza-6.png";

export const menupage = () => {
  // Heading Menu Section
  const headingSection = document.createElement("div");
  headingSection.classList.add("menu-heading");
  headingSection.textContent = "OUR DELICIOUS FOODS, CHOOSE ONE :";
  container.appendChild(headingSection);
  // Menu Cards Section
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  container.appendChild(menuContainer);
  // Appending
  pizzaCreator(6);
};

function pizzaCreator(counts) {
  const pizzaContainer = document.createElement("div");
  pizzaContainer.classList.add("pizza-container");
  document.querySelector(".menu-container").appendChild(pizzaContainer);
  // Create Cards
  cardCreator(counts, "pizza");
  // Function To Give Image Content To cards
  (function () {
    document.querySelector(`.food-card-1 .food-image`).src = pizza1;
    document.querySelector(`.food-card-2 .food-image`).src = pizza2;
    document.querySelector(`.food-card-3 .food-image`).src = pizza3;
    document.querySelector(`.food-card-4 .food-image`).src = pizza4;
    document.querySelector(`.food-card-5 .food-image`).src = pizza5;
    document.querySelector(`.food-card-6 .food-image`).src = pizza6;
  })();
  // Function To Give Name To cards
  (function () {
    document.querySelector(`.food-card-1 .food-name`).textContent =
      "Margarita Pizza";
    document.querySelector(`.food-card-2 .food-name`).textContent =
      "Pepperoni Pizza";
    document.querySelector(`.food-card-3 .food-name`).textContent =
      "American Pizza";
    document.querySelector(`.food-card-4 .food-name`).textContent =
      "Naopoli Pizza";
    document.querySelector(`.food-card-5 .food-name`).textContent =
      "Italian Pizza";
    document.querySelector(`.food-card-6 .food-name`).textContent =
      "Chicken Pizza";
  })();
  // Function To Give Discription To cards
  (function () {
    document.querySelector(`.food-card-1 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
    document.querySelector(`.food-card-2 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
    document.querySelector(`.food-card-3 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
    document.querySelector(`.food-card-4 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
    document.querySelector(`.food-card-5 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
    document.querySelector(`.food-card-6 .food-details`).textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
  })();
  // Function To Give Price To cards
  (function () {
    document.querySelector(`.food-card-1 .food-price`).textContent = "8.5$";
    document.querySelector(`.food-card-2 .food-price`).textContent = "4.5$";
    document.querySelector(`.food-card-3 .food-price`).textContent = "9.5$";
    document.querySelector(`.food-card-4 .food-price`).textContent = "7.9$";
    document.querySelector(`.food-card-5 .food-price`).textContent = "5.8$";
    document.querySelector(`.food-card-6 .food-price`).textContent = "6.5$";
  })();
}

function cardCreator(counts, category) {
  for (let i = 1; i <= counts; i++) {
    const card = document.createElement("div");
    card.classList.add("food-card", `food-card-${i}`);
    if (category === "pizza") {
      document.querySelector(".pizza-container").appendChild(card);
    }
    // Create Card Food Image
    const foodImage = document.createElement("img");
    foodImage.classList.add("food-image");
    card.appendChild(foodImage);
    // Food Name
    const foodName = document.createElement("h3");
    foodName.classList.add("food-name");
    card.appendChild(foodName);
    // Food Details
    const foodDetails = document.createElement("p");
    foodDetails.classList.add("food-details");
    card.appendChild(foodDetails);
    // Price & Shopping Icon
    const buyTag = document.createElement("div");
    card.appendChild(buyTag);
    const price = document.createElement("h3");
    price.classList.add("food-price");
    buyTag.appendChild(price);
    const shopIcon = document.createElement("span");
    shopIcon.classList.add("shop-icon");
    shopIcon.textContent = "+";
    buyTag.appendChild(shopIcon);
  }
}
