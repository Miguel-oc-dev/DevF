// Resultados de ejecucion
console.log("---Todo en Pila de Ejecucion---");
console.log(1);
console.log(2);
console.log(3);


// Sengundo
console.log("---El 2 y 3 van a la Cola de ejecucion---");
console.log(1);

setTimeout(() => {
    return console.log(2);  
}, 3000);

setTimeout(() => {
    return console.log(3);
}, 2000);

console.log(4);


// Tercero
console.log("---Simulacion de Cuello de botella---");
console.log(1);

setTimeout(() => {
    return console.log(2);  
}, 2000);
for(let index = 0; index < 9999999; index++);
console.log(3);


