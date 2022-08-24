
console.log("Welcome to learning JavaScript!");

//Session Tue 16 Aug 2022

// Terminal commands for Git
// ls - folders and contents
// cd - change directory - type folder name or, type few letters
//  and tab.
// cd.. - going back to last folder
// mkdir - making a new directory or folder

 // Opening a VS code in a specific directory
 // In VS code : command + shift + p
 // Click the first option: Shell command install code command in path
 // In terminal: code .

const age = document.getElementById("ageInput");
const result = document.querySelector(".result");
const checkBtn = document.getElementById("check");

function myCondition() {
    if(age.value < 18) {
        result.innerHTML = `Your're too young for the military service.`;
        result.style.color = "red";
    } else if (age.value < 27) {
        result.innerHTML = `You're right age for the military.`
        result.style.color = "green";
    } else if (age.value  < 41) {
        result.innerHTML = `You're in reserve.`
        result.style.color = "purple";
    } else if (age.value < 55) {
        result.innerHTML = `You're in backup reserve.`
        result.style.color = "purple";
    } else {
        result.innerHTML = `You're too aged for the military service.`
        result.style.color = "red";
    }    
}

checkBtn.addEventListener("click", ()=>{
    myCondition();
})

age.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") {
        myCondition();
    } else {
        return;
    }
})


