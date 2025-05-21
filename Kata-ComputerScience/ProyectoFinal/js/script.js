
class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = parseInt(edad);
        this.calificaciones = [];
        this.grupo = null;
    }

    agregarCalificacion(nota) {
        this.calificaciones.push(parseFloat(nota));
    }

    promedio() {
        if (this.calificaciones.length === 0) return 0;
        return this.calificaciones.reduce((a, b) => a + b) / this.calificaciones.length;
    }
}

class Grupo {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
        alumno.grupo = this.nombre;
    }

    promedioGrupo() {
        if (this.alumnos.length === 0) return 0;
        return this.alumnos.reduce((acc, a) => acc + a.promedio(), 0) / this.alumnos.length;
    }
}

const alumnos = [];
const grupos = [];

const formAlta = document.getElementById("form-alta");
const formClase = document.getElementById("form-clase");
const formBusqueda = document.getElementById("form-busqueda");
const listaAlumnos = document.getElementById("lista-alumnos");

formAlta.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;

    const alumno = new Alumno(nombre, apellidos, edad);
    alumno.agregarCalificacion((Math.random() * 10).toFixed(2)); // Nota aleatoria
    alumnos.push(alumno);
    renderAlumnos(alumnos);
    formAlta.reset();
});

formClase.addEventListener("submit", (e) => {
    e.preventDefault();
    const claseNombre = document.getElementById("clase").value;
    const alumnoNombre = document.getElementById("alumno-clase").value;
    let grupo = grupos.find(g => g.nombre === claseNombre);

    if (!grupo) {
        grupo = new Grupo(claseNombre);
        grupos.push(grupo);
    }

    const alumno = alumnos.find(a => a.nombre.toLowerCase() === alumnoNombre.toLowerCase());
    if (alumno) {
        grupo.agregarAlumno(alumno);
        alert(`Alumno ${alumno.nombre} inscrito en ${claseNombre}`);
    } else {
        alert("Alumno no encontrado");
    }
    formClase.reset();
});

document.getElementById("btn-buscar").addEventListener("click", () => {
    const nombre = document.getElementById("buscar-nombre").value.toLowerCase();
    const apellido = document.getElementById("buscar-apellido").value.toLowerCase();

    const resultado = alumnos.filter(a =>
        a.nombre.toLowerCase().includes(nombre) &&
        a.apellidos.toLowerCase().includes(apellido)
    );
    renderAlumnos(resultado);
});

document.getElementById("ordenar-asc").addEventListener("click", () => {
    const ordenados = [...alumnos].sort((a, b) => a.promedio() - b.promedio());
    renderAlumnos(ordenados);
});

document.getElementById("ordenar-desc").addEventListener("click", () => {
    const ordenados = [...alumnos].sort((a, b) => b.promedio() - a.promedio());
    renderAlumnos(ordenados);
});

document.getElementById("ordenar-edad").addEventListener("click", () => {
    const ordenados = [...alumnos].sort((a, b) => a.edad - b.edad);
    renderAlumnos(ordenados);
});

function renderAlumnos(lista) {
    listaAlumnos.innerHTML = "";
    lista.forEach(a => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3>${a.nombre} ${a.apellidos}</h3>
        <p>Edad: ${a.edad}</p>
        <p>Calificación promedio: ${a.promedio().toFixed(2)}</p>
        <p>Grupo: ${a.grupo || "Sin grupo"}</p>
        `;
        listaAlumnos.appendChild(div);
    });
}
