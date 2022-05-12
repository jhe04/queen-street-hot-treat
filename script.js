const drinks = {
  coffee: [
    {
      title: "Early Bird",
      price: "$$",
    },
    {
      title: "Strange Love",
      price: "$$",
    },
    {
      title: "Fahrenheit",
      price: "$$",
    },
    {
      title: "Voodoo Child",
      price: "$$",
    },
    {
      title: "Dark Horse",
      price: "$",
    },
    {
      title: "Cops",
      price: "$",
    },
    {
      title: "i deal",
      price: "$",
    },
    {
      title: "Jimmy's",
      price: "$",
    },
  ],
  tea: [
    {
      title: "Icha",
      price: "$$",
    },
    {
      title: "Ten Ren's",
      price: "$$",
    },
    {
      title: "David's Tea",
      price: "$$",
    },
    {
      title: "Bubble Lee",
      price: "$$",
    },
    {
      title: "Chattime",
      price: "$",
    },
    {
      title: "Tealish",
      price: "$",
    },
    {
      title: "Kung Fu",
      price: "$",
    },
    {
      title: "Gong Cha",
      price: "$",
    },
  ],
};

// Our code goes here:

// helper function to get a random item from an array
const getRandomItem = function (array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// add eventlistener (submit) to form element
const formEl = document.querySelector("form");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // retrieve user's drink and price choice and store in variables
  const drinkChoice = document.querySelector(
    "input[name=beverage]:checked"
  ).value;
  const priceChoice = document.querySelector("input[name=price]:checked").value;

  // use drink choice to isolate the array that represents thair choice (either coffee or tea)
  const chosenDrinkArray = drinks[drinkChoice];

  // use the user's price choice to filter for shop that match
  //loop through the chosen array
  const matchedShops = [];
  for (let i = 0; i < chosenDrinkArray.length; i++) {
    const shopPrice = chosenDrinkArray[i].price;
    //user a condition to check if the user's price === shop price
    if (shopPrice === priceChoice) {
      // store the matching results in a new array
      matchedShops.push(chosenDrinkArray[i].title);
    }
  }

  // randomize our data of remaining shops and select a single one
  const finalShop = getRandomItem(matchedShops);
  console.log(finalShop);

  // take the randomly selected shop and display it's title value in the HTML
  document.querySelector(".results").innerHTML = `<h2>${finalShop}</h2>`;
});
