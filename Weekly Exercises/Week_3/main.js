const kelvin = document.getElementById("kelvin");
const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");

function farenheitToCelsius() {
   return celsius.value = Number(farenheit.value) - 32 / 1.8;
}

function farenheitToKelvin() {
    return kelvin.value = Number(farenheit.value - 32) / 1.8 + 273.15;
}

function celsiusToFarenheit() {
    return farenheit.value = ((Number(celsius.value) * 1.8)+32).toFixed(2);
}

function celsiusToKelvin() {
    return kelvin.value = (Number(celsius.value)+ 273.15).toFixed(2);
}

function kelvinToFarenheit() {
    return farenheit.value = Number((kelvin.value) - 273.15)*1.8+32;
}

function kelvinToCelsius() {
    return celsius.value = Number(kelvin.value) - 273.15;
}

/* Margit's solution

** in html oninput = tempConverter(this.id, this.value);
        onchange = tempConverter(this.id, this.value);

const tempConverter = (id, val) => {
    val = parseFloat(val);

    const farenheit = document.querySelector("#farenheit");
    const celsius= document.querySelector("#celsius");
    const kelvin = document.querySelector("#kelvin");

    *** IF statements **

    if(id == "farenheit") {
        (value for cel and kel)
    }else if (id == "celsius") {
        (value for far and kel)
    } else if(id == "kelvin") {
        (value for cel and far)
    } else {
        return;
    }

} */