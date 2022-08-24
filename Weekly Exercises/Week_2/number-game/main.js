const input1 = document.querySelector(".numberInput1");
const input2 = document.querySelector(".numberInput2");
const input3 = document.querySelector(".numberInput3");

const resultAdd = document.querySelector(".result-add");
const resultMultiply = document.querySelector(".result-multiply");

const calcBtn = document.querySelector(".calculate");

calcBtn.addEventListener("click", ()=>{
    getAddition();
    getMultiplication();
})

function getAddition () {
    if(input1.value >= 0 && input2.value >= 0 && input3.value >= 0) {
        resultAdd.innerHTML = Number(input1.value) + Number(input2.value) + Number(input3.value);
    } else {
        resultAdd.innerHTML = `At least one input is negative.`
    }
      
}
    
function getMultiplication () {
    if(input1.value >= 0 && input2.value >= 0 && input3.value >= 0) {
        resultMultiply.innerHTML = Number(input1.value) * Number(input2.value) * Number(input3.value);
    } else {
        resultMultiply.innerHTML = `At least one input is negative.`
    }
}
