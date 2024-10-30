function rentarCar(tipoDeVehiculo, diasDeAlquiler, sillaBebe) {
    let costoDiario;

    if (tipoDeVehiculo == "compacto") {
        costoDiario = 14000;
    } else if (tipoDeVehiculo == "mediano"){
        costoDiario == 17000;
    } else if (tipoDeVehiculo == "camioneta") {
        costoDiario = 28000;
    }else{
        return "Tipo de vehículo inválido. Ingrese 'compacto', 'mediano' o 'camioneta'.";
    }

    let costoTotal = costoDiario * diasDeAlquiler;
    if (sillaBebe == "si") {
        costoTotal = (costoDiario + 1200) * diasDeAlquiler;
    } else if (sillaBebe == "no") {
        costoTotal = costoTotal;
    } else {
        return "Debe ingresar una respuesta válida. Ingrese 'si' o 'no'.";
    }

    let mensaje = "Estimado cliente: en base al tipo de vehículo " + tipoDeVehiculo + " alquilado, considerando los " + diasDeAlquiler + " días utilizados, el monto total a pagar es de $" + costoTotal;

    if (sillaBebe == "si") {
        mensaje += ", incluyendo el costo de la silla para bebé."
    }

    return mensaje;
}

// console.log(rentarCar("compacto", 3,"si"));
// console.log(rentarCar("compacto", 3,"no"));
// console.log(rentarCar("mediano", 3,"si"));
// console.log(rentarCar("mediano", 3,"no"));
// console.log(rentarCar("camioneta", 3,"si"));
// console.log(rentarCar("camioneta", 3,"no"));
// console.log(rentarCar("Compacto", 3,"si"));
// console.log(rentarCar("compacto", 3,""));