/*Dado un input, mostrar un patrón de asteriscos en forma de escalera.
Ejemplo:
Input = 5
Resultado:
*
**
***
****
***** */

function escalera(num) {
    let asterisco = '';
    for(let index = 1; index <= num; index++) {
        asterisco += '*';
        console.log(asterisco);
    }
}

let num = parseInt(prompt("Digite el total de numeros: "));
escalera(num);