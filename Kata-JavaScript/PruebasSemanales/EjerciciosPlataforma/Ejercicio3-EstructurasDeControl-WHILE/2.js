// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = parseInt(prompt("Introduce el primer número entre 1 y 50: "));
let numero2 = parseInt(prompt("Introduce el segundo número entre 1 y 50: "));

let index = 1;
while (index <= 50) {
    if (index === numero1 || index === numero2) {
        alert(`${index} ¡Lotería!`);
    } else {
        alert(index);
    }
    index++;
}
