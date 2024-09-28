class Alumno {
    nombre;
    numCuenta;
    grado;
    promedio;

    constructor(nombre,numCuenta, grado, promedio) {
        this.nombre = nombre;
        this.numCuenta = numCuenta;
        this.grado = grado;
        this.promedio = promedio;
    }
    showInfo() {
        console.log(`El alumno ${this.nombre} con la matricula ${this.numCuenta} estudia en ${this.grado} y tiene ${this.promedio} de promedio.`);
    }
}

let alumno1 = new Alumno('Carlos', 31729568, 'Cuarto', 9);
let alumno2 = new Alumno('Mario', 317297846, 'Quinto', 10);
let alumno3 = new Alumno('Miguel', 31729455, 'Tercero', 9);

console.log(alumno1);
console.log(alumno2);
console.log(alumno3);
