class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    obtenerPromedio(){
        const suma = this.calificacion.reduce((acc, cal) => acc + cal, 0);
        return suma / this.calificacion.length;
    }
}

class Salon {
    constructor(){
        this.alumnos = [];
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno);
    }

    ordenarPorPromedio(){
        this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }

    mostrarAlumnos(){
        this.alumnos.forEach(alumno => {
            console.log(`${alumno.nombre}: Promedio = ${alumno.obtenerPromedio()}`);
        });
    }
}



const alumno1 = new Alumno('Juan', [9, 8, 7, 10, 6]);
const alumno2 = new Alumno('María', [6, 5, 7, 8, 9]);
const alumno3 = new Alumno('Carlos', [10, 10, 10, 9, 8]);

// Crear una instancia de Salon
const salon = new Salon();

// Agregar alumnos al salón
salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);

// Ordenar alumnos por promedio
salon.ordenarPorPromedio();

// Mostrar alumnos ordenados por promedio
salon.mostrarAlumnos();