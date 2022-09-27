const btnModalClose = document.querySelector(".modal-close");
const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const scoreModal = document.querySelector(".score-modal");
const coins = document.querySelectorAll(".coin");
const scoreBox = document.querySelector("#score");
const highScoreBox = document.querySelector("#high-score");
const livesBox = document.querySelector(".lives");

const btnStartGame = document.querySelector(".startBtn");
const btnStopGame = document.querySelector(".stopBtn");

//Sounds
const coinSound = new Audio("media/coin.mp3");
const wrongCoinSound = new Audio("media/wrong-coin.mp3");
const gameStartSound = new Audio("media/game-start.mp3");
const audioGameOver = new Audio("media/game-over.wav");
const audioGameSuccess = new Audio("media/game-success.wav");

//Global vars
let score = 0;
let highScore = 0;
let active = 0;
let timer;
let pace = 1000;
let lives;

coins.forEach((coin, i) => {
  coin.disabled = true;
  coin.addEventListener("click", () => clickCoin(i));
});

const onClickCoins = () => {
  coinSound.play();
  lives = 5;
  if (i != active) {
    lives--;
    if (lives === 5) {
      return (livesBox.textContent = `🧡 🧡 🧡 🧡 🧡`);
    } else if (lives === 4) {
      return (livesBox.textContent = `🧡 🧡 🧡 🧡 🤍`);
    } else if (lives === 3) {
      return (livesBox.textContent = `🧡 🧡 🧡 🤍 🤍`);
    } else if (lives === 2) {
      return (livesBox.textContent = `🧡 🧡 🤍 🤍 🤍`);
    } else if (lives === 1) {
      return (livesBox.textContent = `🧡 🤍 🤍 🤍 🤍`);
    } else if (lives === 0) {
      livesBox.textContent = `🤍 🤍 🤍 🤍 🤍`;
      return gameEnds();
    }
  } else {
    score++;
    scoreBox.textContent = score;
  }
};

const gameStarts = () => {
  for (const coin of coins) {
    coin.disabled = false;
  }

  let nextActive = pickNew(active);
  coins[nextActive].classList.toggle("active");
  coins[active].classList.remove("active");
  active = nextActive;

  function pickNew(active) {
    let nextActive = getRandomNumber();
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }

  timer = setTimeout(gameStarts, pace);
  pace = pace - 5;
};

const gameEnds = () => {
  if (score >= highScore) {
    highScore = score;
    highScoreBox.textContent = highScore;
  }
  if (score <= 1) {
    scoreModal.innerHTML = `
          <i class="material-icons modal-close">close</i>
          <h3>Game Over!</h3>
          <p>You collected ${score} coin.</p>
          <p>High score is ${highScore}.</p>`;
  } else {
    scoreModal.innerHTML = `
          <i class="material-icons modal-close">close</i>
          <h3>Game Over!</h3>
          <p>You collected ${score} coins.</p>
          <p>High score is ${highScore}.</p>`;
  }
  if (score >= 15) {
    audioGameSuccess.play();
    gameWinAnimation(scoreModal);
  }
};
