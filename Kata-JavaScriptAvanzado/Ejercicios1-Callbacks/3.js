/**
 *  @param {number} number1 - Primer numero
 *  @param {number} number2 - funcion
 *  @param {function} callback - funcion
*/

function operar(number1, number2, callback){
    if(typeof callback !== "function"){
        throw new Error("El tercer argumento debe ser una funcion.");
    }

    if(typeof number1 !== "number" || typeof number2 !== "number"){
        throw new Error("Los dos primeros argumentos deben ser numeros.");
    }

    const resultado = callback(number1, number2);
    console.log(`Resultado: ${resultado}`);
}

// Operaciones como callbacks
function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if(b === 0){
        return "Error: Division por cero";
    }
    return a/b;
}

function ejecutarSuma() {
    operar(10, 5, sumar);
}

function ejecutarResta() {
    operar(10, 5, restar); 
}

function ejecutarMultiplicacion() {
    operar(10, 5, multiplicar); 
}

function ejecutarDivision() {
    operar(10, 5, dividir); 
}