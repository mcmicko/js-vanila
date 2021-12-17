let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
getComputerChoice();

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "user".fontsize(3).sup();
  const winGreen = "WIN".fontcolor("green");

  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} beats ${convertToWord(
    computer
  )} ${smallCompWord} YOU ${winGreen}`;
  document.getElementById(user).classList.add("green-glow");

  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 300);
}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "user".fontsize(3).sup();
  const lost = "LOOSEE".fontcolor("red");

  result_p.innerHTML = `${convertToWord(
    computer
  )} ${smallCompWord} beats ${convertToWord(
    user
  )} ${smallUserWord} you ${lost}`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("red-glow");
  }, 300);
}

function draw(user, computer) {
  const draw = "DRAWWW".fontcolor("yellow");

  result_p.innerHTML = `${convertToWord(user)} ${convertToWord(
    computer
  )} ${draw}`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissor_div.addEventListener("click", () => {
    game("s");
  });
}
main();
