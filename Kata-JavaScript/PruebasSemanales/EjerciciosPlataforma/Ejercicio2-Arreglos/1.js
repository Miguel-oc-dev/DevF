// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let arr = [];

for(let i = 0; i < 10; i++){
    let numero = Math.floor(Math.random() * 1000) + 1;
    arr.push(numero)
}

console.log(arr);
