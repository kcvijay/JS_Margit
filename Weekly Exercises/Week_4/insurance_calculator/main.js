const calcBtn = document.getElementById("calcInsurance");
let inputAge = document.getElementById("age");
const inputName = document.getElementById("name");

const healthCondition = document.querySelectorAll(".health-condition");
const habits = document.querySelectorAll(".bad-habits");
const dailyExercise = document.querySelectorAll(".daily-exercise");
const surgery = document.querySelectorAll(".surgery")

const resultTxt = document.querySelector(".insurance-score");

const resultField = document.querySelector(".result-field");
const userName = document.querySelector(".user-name");

let baseScore = 500;

function calcRiskScore (e) {
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
        baseScore *= 3.1;
        resultTxt.textContent = `${baseScore.toFixed(0)}`;
    } else return;
    
    
    healthCondition.forEach((e) => { // On every health condition, +1% increase;
        if(e.checked) {
            baseScore *= 1.01; 
            console.log(baseScore);
            resultTxt.textContent = `${baseScore.toFixed(0)}`;
        } else return;
    });

    dailyExercise.forEach((e) => {
        if(e.checked) {
            if(e.value === "exercise-yes") { // On regularly exercising, -5% decrease;
                baseScore *= 0.95;
                resultTxt.textContent = `${baseScore.toFixed(0)}`;
            } else if (e.value === "exercise-no") { // On not exercising, +5% increase;
                baseScore *= 1.05;
                resultTxt.textContent = `${baseScore.toFixed(0)}`;
            } else return;
        }
    })

    habits.forEach((e)=> { // On every bad habit, +5% increase
        if(e.checked) {
            baseScore *= 1.05;
            resultTxt.textContent = `${baseScore.toFixed(0)}`;
        }
    })

    surgery.forEach((e) => {
        if(e.checked) {
            if(e.value === "minor-surgery") { // On minor surgery, +1% increase
                baseScore *= 1.01;
                resultTxt.textContent = `${baseScore.toFixed(0)}`;
            } else if (e.value === "big-surgery") { // On big surgery, +10% increase
                baseScore *= 1.10;
                resultTxt.textContent = `${baseScore.toFixed(0)}`;
            } else return;
        }
    })

    if(resultField.classList.contains("hide")) { // Toggling a score result field
        resultField.classList.remove("hide")
    } else {
        resultField.classList.add("hide")
    }

    userName.textContent = `Hello, ${inputName.value}`; // Name of a user showing on result field
}

calcBtn.addEventListener("click", calcRiskScore);