console.log("1");
console.log("2");

setTimeout(() => {
    console.log("3");
    
}, 3000)

console.log("4");

// El event loop reviisa el callstack y el task queue, unicamente si el callstack ya esta vacio, va a verificar si hay tareas pendientes


console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000)

for(let i = 0; i < 99999; i++){
    console.log(i);
}

/* EJEMPLO CALLBACK */

const ejemploCallback = (callback) => {
    callback
}

let multiplicacion = (a,b) => {
    console.log(a*b);
}

let suma = (a,b) => {
    console.log(a+b);
    
}

let resta = (a,b) => {
    console.log(a-b);
}

let division = (a,b) => {
    console.log(a/b);
}

ejemploCallback(multiplicacion)


/* EJERCICIO CALLBACKS */

const mensajeConsola = (mensaje) => {
    mensaje();
}

let msj = () => {
    console.log("Aviso");
}

mensajeConsola(msj);

/* EJERCICIO CALLBACKS II*/

// Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//              -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//              -> PEJELARTO

const cadena = (caracteres) => {
    caracteres();
}

let minus = (palabra) => {
    console.log(palabra.toLowerCase);
}

let mayus = (palabra) => {
    console.log(palabra.toUpperCase);
}

cadena(mayus, "Vicente");


/* EJERCICIO CALLBACKS III*/

//      Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//      EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//      mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

const arr = [900, 20, 947, 88]

const callback = (minutes) => {
    return minutes > 120;
}

const resultado = resultado.filter(arr);

console.log(resultado);





let nuevoArr = []

for(let i = 0; i < minutes.length; i++) {
    if(minutes[i] > 120) {
        nuevoArr.push(minutes[i])
    }
}

console.log(nuevoArr);
