function suma(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

console.log(suma("5", "20"));

function saludo(numbre) {
    console.log(`Holaa ${nombre}`);
}

let nombre = prompt("Dime tu nombre: ");
saludo(nombre);






const sumaEnFlecha = (num1, num2) => parseInt(num1) + parseInt(num2);


const generadorDeMensajes = (nombre) => `Holaa ${nombre}`;

const nocheODia = (hora) => {
    if(hora > 12){
        return "Es el horario de la tarde/noche"
    } else {
        return "Es el horario de la madrugada/mañana"
    }
}

const oneLineNocheDia = (hora) => hora > 12 ? "Es el horario de tarde/noche" : "Es el horario de la madrugada/mañana"

let primeraSuma = sumaEnFlecha(5,3);
let segundaSuma = sumaEnFlecha(5,3);

sumaEnFlecha(5,3);

console.log(generadorDeMensajes("Miguel"));

console.log(nocheODia(3));
