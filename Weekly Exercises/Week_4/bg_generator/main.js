let firstColor = document.querySelector("#first-color");
let secondColor = document.querySelector("#second-color");
const positionBtn = document.querySelectorAll("label");
const codeTxt = document.querySelector("#colorTxt");

let actionVal;
let val1;
let val2;

for (let i = 0; i < positionBtn.length; i++) {
  positionBtn[i].addEventListener("click", () => {
    actionVal = positionBtn[i].id;
    val1 = firstColor.value;
    val2 = secondColor.value;
    backgroundTxt = `linear-gradient(${actionVal}, ${val1}, ${val2})`;
    document.body.style.backgroundImage = backgroundTxt;
    codeTxt.innerHTML = `<p><strong>For Geeks:</strong></p>
        <p id="color-code"><strong>background-image:</strong>${backgroundTxt};</p>`;
  });
}
