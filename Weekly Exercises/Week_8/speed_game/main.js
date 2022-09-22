const btnModalClose = document.querySelector("#modal-close");
const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const coins = document.querySelectorAll(".coin");
let scoreBox = document.querySelector("#score");
const highScoreBox = document.querySelector("#high-score");
const livesBox = document.querySelector(".lives");

const btnStartGame = document.querySelector(".startBtn");
const btnStopGame = document.querySelector(".stopBtn");

const audio = new Audio("photo/coin-sound.wav");
const audioGameOver = new Audio("photo/game-over.wav");

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
  audio.play();
  if (i != active) {
    lives--;
    if (lives === 5) {
      return (livesBox.textContent = "Lives:" + "  " + "🧡🧡🧡🧡🧡");
    } else if (lives === 4) {
      return (livesBox.textContent = "Lives:" + "  " + "🧡🧡🧡🧡");
    } else if (lives === 3) {
      return (livesBox.textContent = "Lives:" + "  " + "🧡🧡🧡");
    } else if (lives === 2) {
      return (livesBox.textContent = "Lives:" + "  " + "🧡🧡");
    } else if (lives === 1) {
      return (livesBox.textContent = "Lives:" + "  " + "🧡");
    } else if (lives === 0) {
      livesBox.textContent = "Lives: 0";
      return endGame();
    }
  } else {
    score++;
    scoreBox.textContent = score;
  }
};

// if (score > highScore) {
//   score == highScore;
//   highScoreBox.textContent = score;
// }

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
    let nextActive = getRandomNumber(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

const endGame = () => {
  audioGameOver.play();
  overlay.style.display = "flex";
  modal.innerHTML = `
  <h3>Game Over!</h3>
  <p>Your current score is ${score}.</p>
  <p>Reset the game by clicking the screen.</p>`;
  clearTimeout(timer);
};

const resetGame = () => {
  window.location.reload();
};

function displayToggle() {
  btnStartGame.classList.toggle("display");
  btnStopGame.classList.toggle("display");
}

btnStartGame.addEventListener("click", startGame);
btnStartGame.addEventListener("click", displayToggle);
btnStopGame.addEventListener("click", endGame);

btnInfo.addEventListener("click", toggleModal);
overlay.addEventListener("click", resetGame);
btnModalClose.addEventListener("click", toggleModal);
