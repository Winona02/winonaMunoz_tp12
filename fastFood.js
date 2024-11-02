//declaro función calcularTotal (que me retorna un precio(number)) que despues uso como callback

function calcularTotal(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precio;

    switch (tipoHamburguesa) {
        case "carne":
            precio = 1800;
            break;
        case "pollo":
            precio = 1500;
            break;
        case "vegetariana":
            precio = 1200;
            break
        default:
            return "Tipo de Hamburguesa inválido. Selecciones 'carne', 'pollo' o 'vegetariana'.";
        };

    if (jamon) precio += 30; //t
    if (queso) precio += 25; //f
    if (salsaTomate) precio += 5;//f
    if (mayonesa) precio += 5;//t
    if (mostaza) precio += 5;//t
    if (tomate) precio += 15;//f
    if (lechuga) precio += 10;//t
    if (cebolla) precio += 10;//f

    return precio;
}

//declaro función fastFood la cual toma 3 argumentos (dos argumentos que son string(nombre y apellido) y otro argumento que es una función (calcularTotal)). Esta función(fastFood) va a declarar una variable(totalAPagar) para asignarle lo que retorna la función calcularTotal(lo que retorna es el precio). Por ultimo, la función(fastFood) va retornar una interpolacion (que contiene nombre, apellido y total a pagar)

function fastFood(nombre, apellido, callback) {
    let totalAPagar = callback;

    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${totalAPagar}`;
}

//llamo a la funcion fastFood y la guardo dentro de la variable mensaje.

let mensaje1 = fastFood("Winona", "Muñoz", calcularTotal("carne", true, false, false, true, true, false, true, false));
let mensaje2 = fastFood("Winona", "Muñoz", calcularTotal("pollo", true, true, true, true, true, true, true, true));
let mensaje3 = fastFood("Winona", "Muñoz", calcularTotal("vegetariana", false, false, false, false, false, false, false, false,));
let mensaje4 = fastFood("Winona", "Muñoz", calcularTotal("Carne", true, false, false, true, true, false, true, false));

// console.log(mensaje1);
// console.log(mensaje2);
// console.log(mensaje3);
// console.log(mensaje4);