let firstColor = document.querySelector("#first-color");
let secondColor = document.querySelector("#second-color");
const positionBtn = document.querySelectorAll("label");
const colorTxt = document.querySelector("#colorTxt");
const gradientField = document.querySelector(".main-container");
const textToCopy = document.getElementById("color-code");

let actionVal;

for (let i = 0; i < positionBtn.length; i++) {
  positionBtn[i].addEventListener("click", () => {
    actionVal = positionBtn[i].id;
    let val1 = firstColor.value;
    let val2 = secondColor.value;
    gradientField.style.backgroundImage = `linear-gradient(${actionVal}, ${val1}, ${val2})`;
    colorTxt.innerHTML = `<p><strong>For Geeks:</strong></p>
        <p id="color-code"><strong>background-image:</strong> linear-gradient(${actionVal}, ${val1}, ${val2});</p>`;
  });
}
