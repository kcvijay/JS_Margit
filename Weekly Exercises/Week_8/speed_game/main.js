const btnModalClose = document.querySelector("#modal-close");
const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const coins = document.querySelectorAll(".coin");
let scoreBox = document.querySelector("#score");

const btnStartGame = document.querySelector("#startBtn");
const btnStopGame = document.querySelector("#stopBtn");
let randArray = [];

function getRandom() {
  let rand = Math.floor(Math.random() * 4);
  console.log(rand);
  randArray.push(rand);

  setTimeout(getRandom, 1000);
}

setTimeout(getRandom, 1000);

let score = 0;

coins.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCoin(i));
});

const clickCoin = (i) => {
  score++;
  console.log(score);
  scoreBox.textContent = score + " " + "₿";
};

// const endGame = () => {
//   console.log("Game ended");
// };

// btnStartGame.addEventListener("click", startGame);
// btnStopGame.addEventListener("click", endGame);

const toggleModal = () => {
  overlay.classList.toggle("visible");
};
btnInfo.addEventListener("click", toggleModal);

btnModalClose.addEventListener("click", toggleModal);

// const startGame = () => {
//   let count = 0;
//   //Throwing random number every second.
//   setInterval(function () {
//     let rand = Math.floor(Math.random() * 4);
//     console.log(rand);
//   }, 1000);
//   for (const coin of coins) {
//     coin.addEventListener("click", () => {
//       let indexOfCoin = Array.from(coin.parentNode.children).indexOf(coin);
//       let rand = coin;
//       console.log(indexOfCoin);
//       count++;
//       console.log(count);
//       coin.classList.add("active");
//     });
//   }
// };
