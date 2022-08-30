const calcBtn = document.getElementById("calcInsurance");

const inputAge = document.getElementById("age");

let resultTxt = document.getElementById("result");

let basePrice = 500;

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(inputAge.value < 18) {
        return resultTxt.textContent = `Your insurance Price is ${basePrice}.`
    }
})