export class Alumno {
  constructor(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.materias = [];
    this.calificaciones = {};
  }

  inscribirMateria(materia) {
    if (!this.materias.includes(materia)) {
      this.materias.push(materia);
      this.calificaciones[materia] = null;
    }
  }

  asignarCalificacion(materia, calificacion) {
    if (this.materias.includes(materia)) {
      this.calificaciones[materia] = calificacion;
    }
  }

  obtenerPromedio() {
    const calificaciones = Object.values(this.calificaciones).filter(c => c !== null);
    if (calificaciones.length === 0) return 0;
    const total = calificaciones.reduce((acc, curr) => acc + curr, 0);
    return (total / calificaciones.length).toFixed(2);
  }
}
