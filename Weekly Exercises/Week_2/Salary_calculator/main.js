

function askSalary (){
    const hourlyRate = prompt("What is your hourly salary?");
    const hours = prompt("How many hours did you work?");

    const baseRate = hours * hourlyRate;
    const fiftyPercent = baseRate + (hours - 7) * hourlyRate / 2;
    const hundredPercent = baseRate + 2 * hourlyRate / 2 + (hours - 9)* hourlyRate;

    if(hours <= 7) {
        alert(`Your total salary is ${baseRate}.`);
    } else if (hours > 7 && hours <= 9) {
        alert(`Your total salary is ${fiftyPercent}.`)
    } else {
        alert(`Your total salary is ${hundredPercent}.`)
    }
}

askSalary();

