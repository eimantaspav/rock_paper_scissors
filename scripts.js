// Variables
const choices = ['rock', 'paper', 'scissors'];
let randomChoice;
let userChoice;
let roundCounter = 0;
let yourLives = 5;
let computerLives = 5;

// Selectors
const userChoiceRock = document.querySelector('.rock');
const userChoicePaper = document.querySelector('.paper');
const userChoiceScissors = document.querySelector('.scissors');
const computerChoiceText = document.querySelector('.computer-choice');
const statusRoundCountText = document.querySelector('.status__round');
const statusLives = document.querySelector('.status__lives');
const statusWinning = document.querySelector('.status__winning');
const gameWinner = document.querySelector('.game-winner');

// functions
// User clicks on rock / paper / scissors and starts the game
const chooseRock = () => {
  userChoice = 'rock';
  playRound();
};

const choosePaper = () => {
  userChoice = 'paper';
  playRound();
};

const chooseScissors = () => {
  userChoice = 'scissors';
  playRound();
};

// Create a random computer choice
let getComputerChoice = () => {
  randomChoice = choices[Math.floor(Math.random() * choices.length)];
};
// Add click events to images
const addClickEvents = () => {
  if (yourLives > 0 && computerLives > 0) {
    userChoiceRock.addEventListener('click', chooseRock);

    userChoicePaper.addEventListener('click', choosePaper);

    userChoiceScissors.addEventListener('click', chooseScissors);
  }
};

// Remove click events from images
const removeClickEvents = () => {
  userChoiceRock.removeEventListener('click', chooseRock);

  userChoicePaper.removeEventListener('click', choosePaper);

  userChoiceScissors.removeEventListener('click', chooseScissors);
};

// Style + inner HTML change
const removeBlinkAnimation = () => {
  gameWinner.style.animation = 'none';
};

const changeCounterText = () => {
  statusRoundCountText.innerHTML = `<div class="status__round">Current round: ${roundCounter}</div>`;
};

const changeComputerChoiceText = () => {
  computerChoiceText.innerHTML = `<div class="computer-choice">Computer choice<h2>${
    randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1)
  }</h2></div>`;
};

const youreWinningText = () => {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: You</div>`;
};

const computerWinningText = () => {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: Computer</div>`;
};

const drawText = () => {
  statusWinning.innerHTML = `<div class="status__winning">Currently winning: Draw</div>`;
};

const updateLivesText = () => {
  statusLives.innerHTML = `<div class="status__lives">Your Lives ${yourLives}: | Computer Lives: ${computerLives}</div>`;
};

const removeBottomText = () => {
  gameWinner.innerHTML = ``;
};

const youWinText = () => {
  gameWinner.innerHTML = `<div class="game-winner no-blink">YOU WIN  <button class="play-again">Play again?</button></div>`;
};

const youLoseText = () => {
  gameWinner.innerHTML = `<div class="game-winner no-blink">YOU LOSE  <button class="play-again">Play again?</button></div>`;
};

// Add play again button at the end of the game

const addPlayAgainButton = () => {
  const playAgain = document.querySelector('.play-again');
  playAgain.addEventListener('click', function () {
    location.reload();
  });
};

// Start counter
const startCounter = () => {
  if (computerLives !== 0 && yourLives !== 0) {
    roundCounter++;
  }
};

// Add click events to images
addClickEvents();
// Play 1 round of RPS
const playRound = () => {
  //Remove "Choose your weapon to start" text
  removeBottomText();
  removeBlinkAnimation();
  startCounter();
  changeCounterText();
  getComputerChoice();
  changeComputerChoiceText();
  // If same choice = draw
  if (
    (randomChoice === 'rock' && userChoice === 'scissors') ||
    (randomChoice === 'scissors' && userChoice === 'paper') ||
    (randomChoice === 'paper' && userChoice === 'rock')
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
