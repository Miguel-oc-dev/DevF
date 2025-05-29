/**
 * @param {string} mensaje - mensaje
 *  @param {function} callback - funcion
*/

function imprimirEnConsola(mensaje, callback) {
    if(typeof callback !== "function"){
        throw new Error("El segundo argumento debe ser una funcion.")
    }
    callback(mensaje);
};

function mostrarLog(msg){
    console.log("LOG: ", msg);
}

function mostrarInfo(msg){
    console.info("INFO: ", msg);
}

function mostrarWarn(msg){
    console.warn("WARN: ", msg);
}

function mostrarError(msg){
    console.error("ERROR: ", msg);
}