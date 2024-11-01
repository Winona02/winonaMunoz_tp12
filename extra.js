
function upperConverter(texto) {
    console.log("Esta función recibe un string en minúscula y lo cambia a mayúsculas");
    return texto.toUpperCase();
    
}

// console.log(upperConverter("hola"));


function dataType(dato) {
    console.log("Esta función muestra qué tipo de dato es el parámetro dado");
    return typeof dato;
}

// console.log(dataType("chau")); //devuelve que es un string
// console.log(dataType(123)); //devuelve que es un number

function dogAge(edadHumana) {
    return edadHumana * 7;
}

// console.log("Edad perruna: ",dogAge(5));

function hourPrice(salarioMensual, cantidadDias, cantidadHoras) {
    return (salarioMensual / cantidadDias) / cantidadHoras;
}

// console.log("El valor de una hora de trabajo es: $", hourPrice(300000, 24, 8));


module.exports = {upperConverter, dataType, dogAge, hourPrice}