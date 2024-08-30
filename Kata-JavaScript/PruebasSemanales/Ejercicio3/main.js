/* Dado un input, hacer la suma del número que el usuario haya decidido.
Ejemplo:
Input = 10
Resultado = 55 (1+2+3+4+5...+10)*/

function sumaNumeros(n) {
    let suma = 0;
    for(let index = 0; index <= n; index ++) {
        suma += index;
    }
    return suma;
}

let numero = parseInt(prompt("Digite la suma del número requerido: "));
let resultado = sumaNumeros(numero);

console.log(`El resultado de la suma es de: ${resultado}`);

