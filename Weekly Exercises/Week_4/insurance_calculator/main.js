const calcBtn = document.getElementById("calcInsurance");

let inputAge = document.getElementById("age");

const healthCondition = document.querySelectorAll(".health-condition");
const habits = document.querySelectorAll(".habits");

let resultTxt = document.querySelector(".insurance-cost");
let monthlyCostField = document.querySelector(".monthly-cost");

let basePrice = 500;


for(let i = 0; i < healthCondition.length; i++) {
    healthCondition[i].addEventListener("click", (e) => {
        if(e.target.checked) {
            basePrice *= 1.01;
            console.log(basePrice);
        } else return basePrice;
    }) 
}

for(let i = 0; i < habits.length; i++) {
    habits[i].addEventListener("click", (b)=>{
        if(b.target.checked) {
            basePrice *= 1.05;
            console.log(basePrice);
        } else return;
    })
}


calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputAge = Number(inputAge.value);

    

    if(inputAge > 0 && inputAge < 18) {
        basePrice;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if(inputAge >= 18 && inputAge <= 25) {
        basePrice *= 1.10;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if (inputAge >= 26 && inputAge <=35 ) {
        basePrice *= 1.30;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if (inputAge >= 36 && inputAge <= 45) {
        basePrice *= 1.60;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if (inputAge >= 46 && inputAge <= 55) {
        basePrice *= 2;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if (inputAge >= 56 && inputAge <= 65) {
        basePrice *= 2.5;
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else if( inputAge >= 66) {
        basePrice *= 3.1
        resultTxt.textContent = `${basePrice.toFixed(2)}€`;
    } else return;

    monthlyCost();
})



function monthlyCost() {
    monthlyCostField.textContent = `${(basePrice/12).toFixed(2)}€/month`
}



