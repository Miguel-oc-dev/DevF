let verduras = ['Manzana', 'Jitomate', 'Pedro'];

console.log(verduras[2]);

verduras[2] = 'Luigi';

console.log(verduras[2]);

console.log(verduras.length);


// Metodo para añadir y eliminar al final
verduras.push("Papa");
console.log(verduras);

verduras.pop();
console.log(verduras);

// Metodo para anñadir y eliminar al inicio
verduras.unshift('Calabaza');
console.log(verduras);

verduras.shift();
console.log(verduras);


// Ejemplo 2
let pasatiempos = "Videojuegos Leer Guitarra Series Programar";
let arregloPasatiempos = pasatiempos.split(" ");
console.log(arregloPasatiempos);

let newArregloPasatiempos = arregloPasatiempos.slice(1,4);
console.log(newArregloPasatiempos);

arregloPasatiempos.splice(2,1, "Musica");
console.log(arregloPasatiempos);

