const btnModalClose = document.querySelector("#modal-close");
const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".btn");

const btnStartGame = document.querySelector("#startBtn");
const btnStopGame = document.querySelector("#stopBtn");

const startGame = () => {
  console.log("Game started");
};

const endGame = () => {
  console.log("Game ended");
};

btnStartGame.addEventListener("click", startGame);
btnStopGame.addEventListener("click", endGame);

const toggleModal = () => {
  overlay.classList.toggle("visible");
};
btnInfo.addEventListener("click", toggleModal);

btnModalClose.addEventListener("click", toggleModal);

for (const btn of btns) {
  btn.addEventListener("click", () => {
    console.log(btn.value);
  });
}
