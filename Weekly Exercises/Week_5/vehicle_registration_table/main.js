const dataInput = document.querySelectorAll(".data-input");
const createData = document.getElementById("submit");
const table = document.querySelector("tbody");
const form = document.querySelector("form");
const registrationInput = document.getElementById("reg-no");

/*****Inputs*****/
    let owner = document.getElementById("owner-name").value.toUpperCase();
    let registration = document.getElementById("reg-no").value.toUpperCase();
    let company = document.getElementById("vehicle-company").value.toUpperCase();
    let type =  document.getElementById("vehicle-type").value.toUpperCase();
    let model =  document.getElementById("vehicle-model").value.toUpperCase();
    let year =  document.getElementById("reg-year").value;

/**************/

function createVehicle(e) {
    if(owner !== "" && registration !== "" && company !== "" && type !== "" && model !== "" && year !== "") {
        e.preventDefault();
        
        function vehicle(owner, registration, company, type, model, year) {
        this.owner = owner;
        this.registration = registration;
        this.company = company;
        this.type = type;
        this.model = model;
        this.year = year;
    }
    let newVehicle = new vehicle(owner, registration, company, type, model, year);
    console.log(newVehicle);
    addTableRow(owner, registration, company, type, model, year);
    form.reset();
    }
}
    

createData.addEventListener("click", createVehicle);
registrationInput.addEventListener("keyup", (event)=> {
    if(event.key === "Enter") {
        createVehicle();
        addTableRow(owner, registration, company, type, model, year);
        form.reset();
    }
})

function addTableRow(cell1value, cell2value, cell3value, cell4value, cell5value, cell6value) {
    const tableRow = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");

    table.appendChild(tableRow);
    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableRow.appendChild(cell3);
    tableRow.appendChild(cell4);
    tableRow.appendChild(cell5);
    tableRow.appendChild(cell6);

    cell1.textContent = cell1value;
    cell2.textContent = cell2value;
    cell3.textContent = cell3value;
    cell4.textContent = cell4value;
    cell5.textContent = cell5value;
    cell6.textContent = cell6value;
}

