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
let lives = 5;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

/******* Styling Functions *****/
const toggleOverlay = () => {
  overlay.style.display = "flex";
  modal.style.display = "block";
};

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
  coinSound.play();
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

/***** On Starting Game *****/

const gameStarts = () => {
  for (const coin of coins) {
    coin.disabled = false;
  }
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
  overlay.style.display = "flex";
  audioGameOver.play();
  clearTimeout(timer);
  for (const coin of coins) {
    coin.disabled = true;
  }

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
      <p>High score is ${highScore}.</p>`;
  } else {
    modal.innerHTML = `
      <i class="material-icons modal-close">close</i>
      <h3>Game Over!</h3>
      <p>You collected ${score} coins.</p>
      <p>High score is ${highScore}.</p>`;
  }

  if (score >= 15) {
    audioGameSuccess.play();
    gameWinAnimation(modal);
  }

  score = 0;
  scoreBox.textContent = 0;
};

/**** EVENT-LISTENERS *****/

btnStartGame.addEventListener("click", () => {
  gameStarts();
  btnStartGame.classList.toggle("display-none");
  btnStopGame.classList.toggle("display-none");
});
btnStopGame.addEventListener("click", gameEnds);
/*************/
// btnModalClose.addEventListener("click", () => {
//   overlay.style.display = "none";
//   clickCoin();
//   lives = 5;
//   livesBox.textContent = `🧡 🧡 🧡 🧡 🧡`;
//   btnStartGame.classList.toggle("display-none");
//   btnStopGame.classList.toggle("display-none");
// });

const modalInfoTxt = `
<h3 class="modal-header">Instructions</h3>
          <i class="material-icons modal-close">close</i>
          <ol>
            <li>Start the game by clicking 'Start Game' button below.</li>
            <li>Collect the Bitcoins by clicking every flashed coins.</li>
            <li>Flashing speed will increase in every flash.</li>
            <li>
              You will have 5 lives 🧡 at the beginning. On every missed
              collection, you will loose one. Game will be over on all lives
              spent.
            </li>
            <li>
              In case of failure, restart the game by clicking 'Restart Game'
              below.
            </li>
            <p>Happy Playing!</p>
          </ol>
`;

btnInfo.addEventListener("click", () => {
  overlay.style.display = "flex";
  modal.innerHTML = modalInfoTxt;
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  lives = 5;
  livesBox.textContent = `🧡 🧡 🧡 🧡 🧡`;
  btnStartGame.classList.toggle("display-none");
  btnStopGame.classList.toggle("display-none");
});

/*************/
