/**
 * @param {*} variable - valor
 *  @param {function} callback - funcion
*/

function identificarTipoDato(variable, callback){
    if(typeof callback !== "function"){
        throw new Error("El segundo argumento debe ser una funcion.");
    }

    const tipo = typeof variable;
    callback(tipo, variable);
}

// Callback que imprime el tipo y valor
function ejecutarIdentificacionConString(){
    identificarTipoDato("Hola Mundow", mostrarTipoDato);
}

function ejecutarIdentificacionConNumero(){
    identificarTipoDato(42, mostrarTipoDato);
}

function ejecutarIdentificacionConObjeto(){
    identificarTipoDato({ nombre: "Ana", edad: 30 }, mostrarTipoDato);
}

function ejecutarIdentificacionConBooleano(){
    identificarTipoDato(true, mostrarTipoDato);
}
