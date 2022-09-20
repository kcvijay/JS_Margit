const btnModalClose = document.querySelector("#modal-close");
const btnInfo = document.querySelector(".info");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".btn");

const btnStartGame = document.querySelector("#startStopBtn");

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

btnStartGame.addEventListener("click", () => {
  console.log("Game is started!");
});
