/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

function calcularTotalPago() {
    let tipoVehiculo = parseInt(prompt("Introduce el numro de vehículo: \n 1.Coche \n 2.Moto \n 3.Autobus"));
    let precioKilometro;

    if (tipoVehiculo === 1) {
        precioKilometro = 0.20;
    } else if (tipoVehiculo === 2) {
        precioKilometro = 0.10;
    } else if (tipoVehiculo === 3) {
        precioKilometro = 0.50;
    } else {
        console.log("Tipo de vehículo no válido.");
        return;
    }

    let kmsRecorridos = parseFloat(prompt("Introduce los kilómetros recorridos: "));
    let litrosConsumidos = parseFloat(prompt("Introduce la cantidad de litros consumidos: "));

    // Calcular el cargo extra por litros consumidos
    let cargoExtra;
    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
        cargoExtra = 5;
    } else if (litrosConsumidos > 100) {
        cargoExtra = 10;
    } else {
        console.log("Cantidad de litros consumidos no válida.");
        return;
    }

    // Calcular el total a pagar
    let totalPagar = (precioKilometro * kmsRecorridos) + cargoExtra;

    // Mostrar el total a pagar
    alert(`El total a pagar es: $${totalPagar.toFixed(2)} MXN`);
}

// Ejecutar el programa
calcularTotalPago();
