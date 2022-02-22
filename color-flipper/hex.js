const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

btn.addEventListener("click", () => {
  let hexColor = "#";
  let hexColor2 = "#";
  let hexColor3 = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    hexColor2 += hex[getRandomNumber()];
    hexColor3 += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  circle1.style.backgroundColor = hexColor2;
  circle2.style.backgroundColor = hexColor3;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
