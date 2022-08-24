
function findModulo () {
    const askPrompt = prompt("Please, input a number");
    const remainder = askPrompt%2;
    console.log(remainder);

    if(askPrompt > 0 && remainder === 0) {
        alert(`The given number ${askPrompt} is even.`);
    } else {
        alert(`The number ${askPrompt} is odd.`);
    }
}

findModulo();