const dataInput = document.querySelectorAll(".data-input");
const createData = document.getElementById("submit");
const table = document.querySelector("tbody");
const form = document.querySelector("form");
const registrationInput = document.getElementById("reg-year");

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("btn-search");
let searchResultTxt = document.getElementById("search-result-txt");

/**************/

// Creation of dynamic input data every time
let tableDataRows = [];
function createVehicle(e) {
  let owner = document.getElementById("owner-name").value.toUpperCase();
  let registration = document.getElementById("reg-no").value.toUpperCase();
  let company = document.getElementById("vehicle-company").value.toUpperCase();
  let type = document.getElementById("vehicle-type").value.toUpperCase();
  let model = document.getElementById("vehicle-model").value.toUpperCase();
  let year = document.getElementById("reg-year").value;

  if (!owner || !registration || !company || !type || !model || !year) {
    e.preventDefault();
    return false;
  }

  function vehicle(registration, owner, company, model, type, year) {
    this.registration = registration;
    this.owner = owner;
    this.company = company;
    this.model = model;
    this.type = type;
    this.year = year;
  }

  let newVehicle = new vehicle(registration, owner, company, model, type, year);
  addTableRow(registration, owner, company, model, type, year);
  tableDataRows.push(newVehicle);
  form.reset();
  console.log(tableDataRows);
}

// Function for adding table row and contents.
function addTableRow(
  cell1value,
  cell2value,
  cell3value,
  cell4value,
  cell5value,
  cell6value
) {
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

function filterItem() {
  let myTable, tr, td, textValue;
  filterTxt = input.value.toUpperCase();
  myTable = document.getElementById("myTable");
  tr = myTable.querySelectorAll("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].querySelectorAll("td")[0];
    if (td) {
      textValue = td.textContent;
      if (textValue.toUpperCase().indexOf(filterTxt) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Function for searching vehicle data either by registration number or, owner.
function searchVehicleItem() {
  const searchInputTxt = tableDataRows.find(function (vehicleItem) {
    if (vehicleItem.owner === searchBox.value) {
      return true;
    }
    searchResultTxt.innerHTML = `The searched vehicle <strong>${vehicleItem.registration}</strong> is <strong>${vehicleItem.company} ${vehicleItem.model} (${vehicleItem.type})</strong> registered in <strong>${vehicleItem.year}</strong>. The owner is <strong>${vehicleItem.owner}</strong>.`;
  });
}

// Creating a table data row on both clicking the submit and pressing Enter on last input box.
createData.addEventListener("click", createVehicle);
registrationInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createVehicle();
  }
});

// Filtering the table by vehicle owner's name /**Experimental**
const input = document.getElementById("search--2");

// filtering the table data item
input.addEventListener("keyup", filterItem);

// searching the vehicle item
searchBtn.addEventListener("click", (e) => {
  searchVehicleItem();
});

searchBox.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    searchVehicleItem();
  } else return;
});
