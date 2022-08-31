let firstColor = document.querySelector("#first-color");
let secondColor = document.querySelector("#second-color");

const positionBtn = document.querySelectorAll("label")
const colorTxt = document.querySelector("#colorTxt");

const gradientField = document.querySelector(".gradient-field");

const textToCopy = document.getElementById("color-code");
const copyBtn = document.getElementById("textCopy");

let val1 = "#000000";
let val2 = "#000000";

let actionVal = "";

firstColor.addEventListener("input", () => {
    val1 = firstColor.value;
    console.log(val1);
})

secondColor.addEventListener("input", ()=> {
    val2 = secondColor.value;
    console.log(val2);
})


for(let i = 0; i < positionBtn.length; i++) {   
    positionBtn[i].addEventListener("click", () => {
        
        actionVal = positionBtn[i].id;
        gradientField.style.backgroundImage = `linear-gradient(${actionVal}, ${val1}, ${val2})`;
        colorTxt.innerHTML = `<p><strong>For Styling Geeks:</strong></p>
        <p id="color-code">background-image: linear-gradient(${actionVal}, ${val1}, ${val2});</p>
    <button id="textCopy" onclick="copyTextField()">Copy Code</button>
        <p id="copy-code"></p>`;
        
    })  

}


