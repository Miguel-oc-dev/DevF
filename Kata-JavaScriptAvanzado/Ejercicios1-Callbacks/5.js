/**
 *  @param {number[]} tiempoEnMinutos - Primer numero
 *  @param {function} callback - funcion
*/

function filtrarTiemposLargos(tiemposEnMinutos, callback){
    if(!Array.isArray(tiemposEnMinutos)){
        throw new Error("El primer argumento debe ser un arreglo");
    }

    if(typeof callback !== "function"){
        throw new Error("El segundo argumento debe ser una funcion.");
    }

    const resultado = tiemposEnMinutos.filter(minutos => minutos > 120);
    callback(resultado);
}

// Callback que muestra el nuevo arreglo
function mostrarArray(array) {
    console.log("Tiempos mayores a 2 horas:", array);
}

// Función para el botón
function ejecutarFiltroTiempos() {
    const tiempos = [120, 80, 200, 100];
    filtrarTiemposLargos(tiempos, mostrarArray); // [200]
}