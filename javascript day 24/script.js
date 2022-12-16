const option = document.getElementById("options");
const flex = document.querySelector(".flex");
const image = document.querySelector(".planet");
const description = document.querySelector(".description");
const input = document.querySelector("input");
let circle = document.createElement("div");
description.appendChild(circle);
let p = document.querySelector("p");
function planet() {
  p.textContent = `The weight of the object on ${
    option.options[option.selectedIndex].text
  } is`;
  image.style.height = "18rem";
  image.style.width = "20rem";
  image.style.marginRight = "5rem";
  description.style.marginTop = "5rem";
  description.style.paddingTop = "1rem";
  description.style.height = "10rem";
  circle.style.backgroundColor = "rgba(81, 81, 80, 0.7)";
  circle.style.borderRadius = "50%";
  //   circle.style.width = "auto";
  circle.style.maxWidth = "15rem";
  circle.style.height = "2rem";
  circle.style.padding = "2rem 1rem";
  circle.style.margin = "1rem auto";
  circle.style.fontWeight = "bold";
  circle.style.fontSize = "2rem";
  circle.style.textAlign = "center";
}
function answer() {
  flex.style.display = "flex";
  flex.style.justifyContent = "spaceBetween";
  description.style.backgroundColor = "rgba(81, 81, 80, 0.6)";
  description.style.width = "25rem";
  description.style.height = "3rem";
  description.style.textAlign = "center";
  if (input.value === "") {
    description.textContent = "Mass is required";
    description.style.margin = "2rem auto";
    description.style.padding = "1rem";
    description.style.height = "1rem";
    description.style.fontSize = "1.2rem";
    document.querySelector(".planet").src = "";
  } else if (option.value === "none") {
    description.textContent = "You did not choose a planet yet";
    description.style.margin = "2rem auto";
    description.style.padding = "1rem";
    description.style.height = "auto";
    description.style.fontSize = "1.2rem";
    document.querySelector(".planet").src = "";
  } else if (option.value === "earth") {
    planet();
    document.querySelector(".planet").src = "img/earth.png";
    circle.textContent = `${input.value * 9.8} N`;
  } else if (option.value === "jupiter") {
    planet();
    document.querySelector(".planet").src = "img/jupiter.png";
    circle.textContent = `${input.value * 26.0} N`;
  } else if (option.value === "mars") {
    planet();
    document.querySelector(".planet").src = "img/mars.png";
    circle.textContent = `${input.value * 3.75} N`;
  } else if (option.value === "mercury") {
    planet();
    document.querySelector(".planet").src = "img/mercury.png";
    circle.textContent = `${input.value * 3.61} N`;
  } else if (option.value === "moon") {
    planet();
    document.querySelector(".planet").src = "img/moon.png";
    circle.textContent = `${input.value * 1.625} N`;
  } else if (option.value === "neptune") {
    planet();
    document.querySelector(".planet").src = "img/neptune.png";
    circle.textContent = `${input.value * 13.3} N`;
  } else if (option.value === "pluto") {
    planet();
    document.querySelector(".planet").src = "img/pluto.png";
    circle.textContent = `${input.value * 0.61} N`;
  } else if (option.value === "saturn") {
    planet();
    document.querySelector(".planet").src = "img/saturn.png";
    circle.textContent = `${input.value * 11.2} N`;
  } else if (option.value === "uranus") {
    planet();
    document.querySelector(".planet").src = "img/uranus.png";
    circle.textContent = `${input.value * 10.5} N`;
  } else {
    planet();
    document.querySelector(".planet").src = "img/venus.png";
    circle.textContent = `${input.value * 8.83} N`;
  }
}