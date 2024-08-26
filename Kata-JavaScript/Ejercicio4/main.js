/* Dado un input, mostrar la lista de números elevados al cuadrado.
Ejemplo:
Input = 4
Resultado:
1 elevado al cuadrado es 1
2 elevado al cuadrado es 4
3 elevado al cuadrado es 9
4 elevado al cuadrado es 16 */

function cuadrado(num) {
    for(let index = 1; index <= num; index++) {
        console.log(`${index} elevado al cuadrado es: ${index*index}`);
    }
}

let num = parseInt(prompt("Digite el total de numeros: "));
cuadrado(num);