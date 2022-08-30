const inputCustName = document.querySelector("#customer-name");
const inputCustEmail = document.querySelector("#customer-email");
const inputCustAddress = document.querySelector("#customer-address");

const orderCustDetail = document.querySelector(".customer-details-2");

const toppingItem = document.querySelectorAll(".item-toppings");

const deliveryHeader = document.querySelector("#delivery");
const deliveryOption = document.querySelectorAll(".delivery option");
const hiddenDiv =  document.querySelector(".hidden-address");
const mainTable = document.querySelector("table");
const orderTable = document.querySelector(".table-body");

const cardRadio = document.querySelectorAll(".radio-pizza");
const orderBtn = document.querySelector("#order");

const custDetail = document.querySelectorAll(".personal-detail");

const payBtn = document.getElementById("pay");


////////////////////////////////////////////////////////////////////////
for(let i = 0; i < cardRadio.length; i++) { // Adding the name and value of pizza to order table
    cardRadio[i].addEventListener("click", () => {
        if(cardRadio[i].id == "pizza-2") {
            addRow("Pizza for 2", 7.50)
            console.log(cardRadio[i].value)
        } else if (cardRadio[i].id == "pizza-4") {
            addRow("Pizza for 4", 10.50)
        } else if (cardRadio[i].id == "pizza-6") {
            addRow("Pizza for 6", 12.50)
        } else if (cardRadio[i].id == "pizza-8") {
            addRow("Pizza for 8", 15.50)
        } else return;

        if(mainTable.classList.contains("hide")) {
            mainTable.classList.remove("hide")
        } else return;

        document.querySelector(".order-subheader").textContent = "Order Details";
    })
}

let toppingCount = 0; // Counting the topping, input of extra value and inserting to table
        for(let i = 0; i < toppingItem.length; i++) {
        toppingItem[i].addEventListener("change", () => {
            toppingCount++;
            console.log(toppingCount);

            if(toppingCount > 4) {
                toppingItem[i].value = 1;
                console.log(toppingItem[i].value);
            }

            addRow(toppingItem[i].name, toppingItem[i].value);
        })
}

deliveryHeader.addEventListener("change", ()=> {
   if(deliveryHeader.options[deliveryHeader.selectedIndex].textContent === "Home Delivery" && hiddenDiv.classList.contains("hide")) {
    hiddenDiv.classList.remove("hide");
    console.log("found it")
   }
});


orderBtn.addEventListener("click", (e) => { //On Order button click!
    e.preventDefault();

    orderCompanyDetail();

    orderCustDetail.innerHTML = 
    `<p><strong>Customer Details:</strong><p>
    <p>${inputCustName.value}</p>
    <p>${inputCustEmail.value}<p>
    <p>${inputCustAddress.value}</p>`;

    getOrderNumber(6);

    getNameAndValue();
    
    // Calculating the total of all number  values.
    let totalSum = document.getElementById("total-amount"); 

    orderTable,sumVal = 0;

    for( let i = 0; i < orderTable.rows.length; i++) {
        sumVal += Number(orderTable.rows[i].cells[1].innerHTML)
    }

    totalSum.textContent = ` ${sumVal}€`;
    payBtn.textContent = `Proceed to pay ${sumVal}€`;

    //Hide paybutton 
    if(payBtn.classList.contains("hide")) { 
        payBtn.classList.remove("hide")
    } else return;

    //show total text
    if(document.getElementById("total-txt").classList.contains("hide")) {
        document.getElementById("total-txt").classList.remove("hide")
    }else return;

    console.log(deliveryOption.textContent);

})

/////// FUNCTIONS ////////

function orderCompanyDetail() {
    document.querySelector(".section-order-number").innerHTML = 
    `<h2>Yum-Yum Pizzeria Oy</h2>
    <p>Kallionkatu 10, 00500 Helsinki</p>
    <h3 class="order-number">Order#: <span class="orderNumberTxt"></span></h3>`;
}

function getOrderNumber (orderLength) { // Fetching a random order number
    let orderTxt = document.querySelector(".orderNumberTxt");
    let orderNumber = "";
    let numberSet = "0123456789";

    for(let i = 0; i < orderLength; i++) {
        orderNumber += numberSet.charAt(Math.random() *  numberSet.length);
    }
    orderTxt.innerHTML = orderNumber;
}

function addRow(cellOneValue, cellTwoValue) { // Adding row to a table
    const tableRow = document.createElement("tr");
    const cellOne = document.createElement("td");
    const cellTwo = document.createElement("td");

    orderTable.appendChild(tableRow);
    tableRow.appendChild(cellOne);
    tableRow.appendChild(cellTwo);

    cellOne.textContent = cellOneValue;
    cellTwo.textContent = cellTwoValue;
}

function getNameAndValue() {
    let itemValue = Number(deliveryHeader.options[deliveryHeader.selectedIndex].value);
    let text = deliveryHeader.options[deliveryHeader.selectedIndex].textContent;
    return addRow(text, itemValue);
}