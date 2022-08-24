const kelvin = document.getElementById("kelvin");
const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");

function farenheitToCelsius() {
   return Number(farenheit.value) -32 / 1.8;
}

function farenheitToKelvin() {
    return Number(farenheit.value - 32) / 1.8 + 273.15;
}

function celsiusToFarenheit() {
    return farenheit.value = ((Number(celsius.value) * 1.8)+32).toFixed(2);
}

function celsiusToKelvin() {
    return kelvin.value = (Number(celsius.value)+ 273.15).toFixed(2);
}

function kelvinToFarenheit() {
    return farenheit.value = Number((kelvin.value) - 273.15)*1.8)+32;
}

function kelvinToCelsius() {
    kelvin.value - 273.15;
}