function getOrderNumber (orderLength) {
    let orderTxt = document.querySelector(".orderNumberTxt");
    let orderNumber = "";
    let numberSet = "0123456789";

    for(let i = 0; i < orderLength; i++) {
        orderNumber += numberSet.charAt(Math.random()*numberSet.length);
    }

    console.log(orderNumber);
    orderTxt.innerHTML = orderNumber;
}
