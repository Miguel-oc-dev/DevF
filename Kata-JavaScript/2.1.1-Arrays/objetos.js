let personas = [
    {
        nombre: "Diana",
        edad: 23, 
        esMayorDeEdad: true,
        pasatiempos: ['Videojuegos', 'Leer', 'Guitarra', 'Series', 'Programar'],
        estudios: "Licenciatura"
}, {
        nombre: "Miguel",
        edad: 21, 
        esMayorDeEdad: true,
        pasatiempos: ['Videojuegos', 'Leer', 'Guitarra', 'Series', 'Programar'],
        estudios: "Licenciatura"
    }
]

let {nombre, edad, esMayorDeEdad} = personas[0];

console.log(`Hola me llamo ${personas[0].nombre} y tengo ${edad} años`);
