// Variables
const choices = ["rock", "paper", "scissors"];
let randomChoice;
let userChoice;
let roundCounter = 0;
let yourLives = 5;
let computerLives = 5;

// Selectors
const userChoiceRock = document.querySelector(".rock");
const userChoicePaper = document.querySelector(".paper");
const userChoiceScissors = document.querySelector(".scissors");
const computerChoiceText = document.querySelector(".computer-choice");
const statusRoundCountText = document.querySelector(".status__round");
const statusLives = document.querySelector(".status__lives");
const statusWinning = document.querySelector(".status__winning");
const gameWinner = document.querySelector(".game-winner");

// Add click events to images
addClickEvents();
// Play 1 round of RPS
let playRound = () => {
  //Remove "Choose your weapon to start" text
  removeBottomText();
  // Remove bottom blinking animation
  removeBlinkAnimation();
  // Start round counter + change counter text
  startCounter();
  changeCounterText();
  // Generate computer choice + change text
  getComputerChoice();
  changeComputerChoiceText();
  // If same choice = draw
  if (
    (randomChoice === "rock" && userChoice === "scissors") ||
    (randomChoice === "scissors" && userChoice === "paper") ||
    (randomChoice === "paper" && userChoice === "rock")
  ) {
    // Lose round
    if (yourLives !== 0) {
      yourLives--;
    }
    // Win round
  } else {
    if (computerLives !== 0) {
      computerLives--;
    }
  }
  // You're winning
  if (yourLives > computerLives) {
    youreWinningText();
    // You're losing
  } else if (yourLives < computerLives) {
    computerWinningText();
  } else {
    // Draw
    drawText();
  }
  updateLivesText();
  //   You win the game
  if (computerLives === 0) {
    youWinText();
    removeClickEvents();
    addPlayAgainButton();
    // You lose the game
  } else if (yourLives === 0) {
    youLoseText();
    removeClickEvents();
    addPlayAgainButton();
  }
};

// User clicks on rock / paper / scissors and starts the game
function chooseRock() {
  userChoice = "rock";
  playRound();
}

function choosePaper() {
  userChoice = "paper";
  playRound();
}

function chooseScissors() {
  userChoice = "scissors";
  playRound();
}

// Create a random computer choice
let getComputerChoice = () => {
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
};
// Add click events to images
function addClickEvents() {
  if (yourLives > 0 && computerLives > 0) {
    userChoiceRock.addEventListener("click", chooseRock);

    userChoicePaper.addEventListener("click", choosePaper);

    userChoiceScissors.addEventListener("click", chooseScissors);
  }
}

// Remove click events from images
function removeClickEvents() {
  userChoiceRock.removeEventListener("click", chooseRock);

  userChoicePaper.removeEventListener("click", choosePaper);

  userChoiceScissors.removeEventListener("click", chooseScissors);
}

// Style + inner HTML change
function removeBlinkAnimation() {
  gameWinner.style.animation = "none";
}

function changeCounterText() {
  statusRoundCountText.innerHTML = `<div class="status__round">Current round: ${roundCounter}</div>`;
}

function changeComputerChoiceText() {
  computerChoiceText.innerHTML = `<div class="computer-choice">Computer choice<h2>${
    randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1)
  }</h2></div>`;
}

function youreWinningText() {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: You</div>`;
}

function computerWinningText() {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: Computer</div>`;
}

function drawText() {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: Draw</div>`;
}

function updateLivesText() {
  statusLives.innerHTML = `<div class="status__lives">Your Lives ${yourLives}: | Computer Lives: ${computerLives}</div>`;
}

function removeBottomText() {
  gameWinner.innerHTML = ``;
}

function youWinText() {
  gameWinner.innerHTML = `<div class="game-winner no-blink">YOU WIN  <button class="play-again">Play again?</button></div>`;
}

function youLoseText() {
  gameWinner.innerHTML = `<div class="game-winner no-blink">YOU LOSE  <button class="play-again">Play again?</button></div>`;
}

// Add play again button at the end of the game

function addPlayAgainButton() {
  const playAgain = document.querySelector(".play-again");
  playAgain.addEventListener("click", function () {
    location.reload();
  });
}

// Start counter
function startCounter() {
  if (computerLives !== 0 && yourLives !== 0) {
    roundCounter++;
  }
}
