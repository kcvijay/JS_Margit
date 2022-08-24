// LOOP ASSIGNMENTS

// Exercise 1
// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

/*for(let i = 1; i < 100; i += 2) {
    console.log(i);
}

// Exercise 2
// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

for (let i = 0; i < 100; i += 2){
    console.log(i);
}

// Exercise 3
// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)*/

function getAverageSpeed () {
    const km = prompt("Please provide kilometers.")
    const time = prompt("Please provide time in hours.")
    const kmph = km / time;

    if(km > 0 || time > 0) {
        alert(`Your average is ${kmph} km per hour.`)
    } else {
        return;
    }
}

getAverageSpeed();

