const calcBtn = document.getElementById("calcInsurance");

let inputAge = document.getElementById("age");

let healthCondition = document.querySelectorAll(".health-condition");

let resultTxt = document.getElementById("result");

let basePrice = 500;

const healthConditionResult = [];


calcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    ageCondition();

    for(let i = 0; i < healthCondition.length; i++) {
        healthCondition[i].addEventListener("change", ()=> {
            basePrice *= 1.01;
            return resultTxt.textContent = `Your insurance is ${basePrice}.`;
        })
    }

})


function ageCondition() {

    inputAge = Number(inputAge.value);

    if(inputAge > 0 && inputAge < 18) {
        return resultTxt.textContent = `Your insurance Price is ${basePrice}.`
    } else if(inputAge >= 18 && inputAge <= 25) {
        return resultTxt.textContent = `Your insurance price is ${
        basePrice *= 1.10}.`
    } else if (inputAge >= 26 && inputAge <=35 ) {
        return resultTxt.textContent = `Your insurance price is ${basePrice *= 1.30}.`;
    } else if (inputAge >= 36 && inputAge <= 45) {
        return resultTxt.textContent = `Your insurance price is ${basePrice *= 1.60}.`;
    } else if (inputAge >= 46 && inputAge <= 55) {
        return resultTxt.textContent = `Your insurance price is ${basePrice *= 2}.`;
    } else if (inputAge >= 56 && inputAge <= 65) {
        return resultTxt.textContent = `Your insurance price is ${basePrice *= 2.5}.`;
    } else if( inputAge >= 66) {
        return resultTxt.textContent = `Your insurance price is ${basePrice *= 3.1}.`;
    } else basePrice;
}



