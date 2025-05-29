/**
 *  @param {string} texto - Cadena
 *  @param {function} callback - funcion
*/

function ordenSuperior(texto, callback){
    if(typeof texto !== "string"){
        throw new Error("El primer argumento debe ser una cadena de texto");
    }
    if(typeof callback !== "function"){
        throw new Error("El segundo argumento debe ser una funcion");
    }

    const resultado = callback(texto);
    console.log("Resultado: ", resultado);
}


// Callbacks
function convertirAMinusculas(str) {
    return str.toLowerCase();
}

function convertirAMayusculas(str) {
    return str.toUpperCase();
}

// Funciones para los botones
function ejecutarMayusculas() {
  ordenSuperior("PejeLagarto", convertirAMayusculas); // PEJELAGARTO
}

function ejecutarMinusculas() {
  ordenSuperior("PejeLagarto", convertirAMinusculas); // pejelagarto
}