// Variables
const choices = ["rock", "paper", "scissors"];
let randomChoice;
let userChoice;
let roundCounter = 0;

// Selectors
const userChoiceRock = document.querySelector(".rock");
const userChoicePaper = document.querySelector(".paper");
const userChoiceScissors = document.querySelector(".scissors");
const computerChoiceText = document.querySelector(".computer-choice");
const statusRoundCountText = document.querySelector(".status__round");

// Create a random computer choice
let getComputerChoice = () => {
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
};

// Play 1 round of RPS
let playRound = () => {
  // Round counter
  roundCounter++;
  statusRoundCountText.innerHTML = `<div class="status__round">Current round: ${roundCounter}</div>`;
  getComputerChoice();
  // Change computer choice text
  computerChoiceText.innerHTML = `<div class="computer-choice">Computer choice<h2>${
    randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1)
  }</h2></div>`;
  // If same choice = draw
  if (randomChoice === userChoice) {
    console.log("Draw");
  } else if (
    (randomChoice === "rock" && userChoice === "scissors") ||
    (randomChoice === "scissors" && userChoice === "paper") ||
    (randomChoice === "paper" && userChoice === "rock")
  ) {
    console.log("You lose");
  } else {
    console.log("You win");
  }
  console.log(randomChoice);
};

// User clicks on rock / paper / scissors and starts the game
userChoiceRock.addEventListener("click", () => {
  userChoice = "rock";
  playRound();
});

userChoicePaper.addEventListener("click", () => {
  userChoice = "paper";
  playRound();
});

userChoiceScissors.addEventListener("click", () => {
  userChoice = "scissors";
  playRound();
});
