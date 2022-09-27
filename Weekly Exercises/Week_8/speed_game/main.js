const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const infoTxt = document.querySelector(".info-txt");
const scoreModal = document.querySelector(".score-modal");
const coins = document.querySelectorAll(".coin");
const scoreBox = document.querySelector("#score");
const highScoreBox = document.querySelector("#high-score");
const livesBox = document.querySelector(".lives");

const btnStartGame = document.querySelector(".startBtn");
const btnStopGame = document.querySelector(".stopBtn");

//Sounds
const coinSound = new Audio("media/coin.mp3");
const gameStartSound = new Audio("media/game-start.mp3");
const gameOverSound = new Audio("media/game-over.wav");
const gameSuccessSound = new Audio("media/game-success.wav");

//Global vars
let score = 0;
let highScore = 0;
let active = 0;
let timer;
let pace = 1000;
let lives = 5;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

/******* Styling Functions *****/

const toggleDisplayNone = () => {
  btnStartGame.classList.toggle("display-none");
  btnStopGame.classList.toggle("display-none");
};

const gameWinAnimation = (item) => {
  item.style.backgroundImage = "url('media/confetti.gif')";
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
};

/*** On Clicking Coins ****/

coins.forEach((coin, i) => {
  coin.disabled = true;
  coin.addEventListener("click", () => clickCoin(i));
});

const clickCoin = (i) => {
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
    coinSound.play();
    score++;
    scoreBox.textContent = score;
  }
};

/***** On Starting Game *****/

const gameStarts = () => {
  for (const coin of coins) {
    coin.disabled = false;
  }

  //From the courtesy of Margit. :D
  let nextActive = pickNew(active);
  coins[nextActive].classList.toggle("active");
  coins[active].classList.remove("active");
  active = nextActive;

  timer = setTimeout(gameStarts, pace);
  pace = pace - 5;
  function pickNew(active) {
    let nextActive = getRandomNumber();
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

/**** On Ending Game *****/

const gameEnds = () => {
  for (const coin of coins) {
    coin.disabled = true;
  }
  overlay.style.display = "flex";
  gameOverSound.play();
  clearTimeout(timer);
  // Conditions on score.
  if (score >= highScore) {
    highScore = score;
    highScoreBox.textContent = highScore;
  }
  if (score <= 1) {
    modal.innerHTML = `
      <i class="material-icons modal-close">close</i>
      <h3>Game Over!</h3>
      <p>You collected ${score} coin.</p>
      <p>Best collection is ${highScore}.</p>`;
  } else {
    modal.innerHTML = `
      <i class="material-icons modal-close">close</i>
      <h3>Game Over!</h3>
      <p>You collected ${score} coins.</p>
      <p>Best collection is ${highScore}.</p>`;
  }

  if (score >= 15) {
    gameSuccessSound.play();
    gameWinAnimation(modal);
  }

  score = 0;
  scoreBox.textContent = 0;
};

/**** EVENT-LISTENERS *****/

btnStartGame.addEventListener("click", () => {
  gameStarts();
  toggleDisplayNone();
});
btnStopGame.addEventListener("click", gameEnds);
/*************/

btnInfo.addEventListener("click", () => {
  infoTxt.classList.toggle("display-none");
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  lives = 5;
  livesBox.textContent = `🧡🧡🧡🧡🧡`;
  toggleDisplayNone();
});

/*************/
