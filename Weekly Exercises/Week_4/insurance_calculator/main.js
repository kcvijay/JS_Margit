const calcBtn = document.getElementById("calcInsurance");

let inputAge = document.getElementById("age");

const healthCondition = document.querySelectorAll(".health-condition");
const habits = document.querySelectorAll(".habits");

let resultTxt = document.querySelector(".insurance-cost");
let monthlyCostField = document.querySelector(".monthly-cost");

const inputName = document.getElementById("name");
const userName = document.querySelector(".user-name");

let baseScore = 500;

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputAge = Number(inputAge.value);

    if(inputAge > 0 && inputAge < 18) {
        baseScore;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if(inputAge >= 18 && inputAge <= 25) {
        baseScore *= 1.10;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if (inputAge >= 26 && inputAge <=35 ) {
        baseScore *= 1.30;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if (inputAge >= 36 && inputAge <= 45) {
        baseScore *= 1.60;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if (inputAge >= 46 && inputAge <= 55) {
        baseScore *= 2;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if (inputAge >= 56 && inputAge <= 65) {
        baseScore *= 2.5;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else if( inputAge >= 66) {
        baseScore *= 3.1
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else return;
    
    
    healthCondition.forEach((e) => {
        if(e.checked) {
            baseScore *= 1.01;
            console.log(baseScore);
            resultTxt.textContent = `${baseScore.toFixed(0)}`;
        }
    });

    goodHabit();

    habits.forEach((e)=> {
        if(e.checked) {
            baseScore *= 1.05;
            resultTxt.textContent = `${baseScore.toFixed(0)}`;
        }
    })

    userName.textContent = `Hello, ${inputName.value},`;
})

function goodHabit() {
    let niceHabit = document.querySelector("#daily-exercise");
    if(niceHabit.checked) {
        baseScore *= 0.95;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    }
}



