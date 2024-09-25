let myName = "Miguel";

console.log(myName.substring(3,5));


let saludo = "Hola a todos";

// startsWith() & endsWith() son funciones para indicarles a un arreglo con que palabra inicia o finaliza un string
console.log(saludo.startsWith("Hola"));
console.log(saludo.endsWith("todos"));

console.log(saludo.includes("a"));

let star = "*";

console.log(start.repeat(5));


console.log(saludo.padEnd(30, "*"));


// .slice()
let phoneNumber = "123456789";
let last4Numbers = phonenNumber.slice(-4);
let maskedNumber = last4Numbers.padStart(phoneNumber.length, "*");

console.log(maskedNumber);