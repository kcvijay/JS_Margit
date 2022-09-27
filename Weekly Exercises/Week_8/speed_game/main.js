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

const coinSound = new Audio("media/coin.mp3");
const wrongCoinSound = new Audio("media/wrong-coin.mp3");
const gameStartSound = new Audio("media/game-start.mp3");
const audioGameOver = new Audio("media/game-over.wav");
const audioGameSuccess = new Audio("media/game-success.wav");

let score = 0;
let highScore = 0;
let active = 0;
let timer;
let pace = 1000;
let lives = 5;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

const toggleModal = () => {
  overlay.classList.toggle("visible");
};

coins.forEach((coin, i) => {
  coin.disabled = true;
  coin.addEventListener("click", () => clickCoin(i));
});

const clickCoin = (i) => {
  coinSound.play();
  if (i != active) {
    lives--;
    if (lives === 5) {
      return (livesBox.textContent = "🧡🧡🧡🧡🧡");
    } else if (lives === 4) {
      return (livesBox.textContent = "🧡🧡🧡🧡🤍");
    } else if (lives === 3) {
      return (livesBox.textContent = "🧡🧡🧡🤍🤍");
    } else if (lives === 2) {
      return (livesBox.textContent = "🧡🧡🤍🤍🤍");
    } else if (lives === 1) {
      return (livesBox.textContent = "🧡🤍🤍🤍🤍");
    } else if (lives === 0) {
      livesBox.textContent = "🤍🤍🤍🤍🤍";
      return endGameOnLife();
    }
  } else {
    score++;
    scoreBox.textContent = score;
    if (score >= highScore) {
      highScore = score;
      highScoreBox.textContent = highScore;
    }
  }
};

const startSound = () => {
  gameStartSound.play();
};

const startGame = () => {
  for (const coin of coins) {
    coin.disabled = false;
  }
  let nextActive = pickNew(active);
  coins[nextActive].classList.toggle("active");
  coins[active].classList.remove("active");
  active = nextActive;

  timer = setTimeout(startGame, pace);
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

const gameEnds = () => {
  clearTimeout(timer);
  audioGameOver.play();
  toggleModal();
  modal.classList.toggle("display");
  // Conditions on score.
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

  score = 0;
  scoreBox.textContent = 0;
};

//Addition animation on game win.
const gameWinAnimation = (item) => {
  item.style.backgroundImage = "url('media/confetti.gif')";
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
};

function displayToggle() {
  btnStartGame.classList.toggle("display");
  btnStopGame.classList.toggle("display");
}

btnStartGame.addEventListener("click", () => {
  startSound();
  displayToggle();
  startGame();
});

btnStopGame.addEventListener("click", () => {
  endGameOnStop();
});

btnInfo.addEventListener("click", toggleModal);
btnModalClose.addEventListener("click", () => {
  toggleModal();
});
