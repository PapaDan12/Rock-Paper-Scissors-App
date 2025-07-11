// Section elements
const readyBtn = document.getElementById('ready-btn');
const startBtn = document.getElementById('start-btn');
const gameSection = document.getElementById('game-section');

// Game elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultText = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Scores
let playerScore = 0;
let computerScore = 0;

// Choices
const choices = ['rock', 'paper', 'scissors'];

// Handle "Are You Ready?" button
readyBtn.addEventListener('click', () => {
  readyBtn.textContent = "👍 Great!";
  startBtn.classList.remove('hidden');
});

// Handle "Get Started" button
startBtn.addEventListener('click', () => {
  document.getElementById('ready-section').classList.add('hidden');
  gameSection.classList.remove('hidden');
});

// Computer random choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine round winner
function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return 'player';
  return 'computer';
}

// Play one round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  if (winner === 'player') {
    playerScore++;
    resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. 🎉 You win!`;
  } else if (winner === 'computer') {
    computerScore++;
    resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. 🤖 Computer wins!`;
  } else {
    resultText.textContent = `You both chose ${playerChoice}. 😐 It's a draw!`;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Button click events
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
