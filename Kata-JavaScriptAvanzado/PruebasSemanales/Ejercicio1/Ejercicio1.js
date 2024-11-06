let pasatiempos = "Videojuegos Leer Guitarra Series Programar";
let arregloPasatiempos = pasatiempos.split(" ");
console.log(arregloPasatiempos);

let newArregloPasatiempos = arregloPasatiempos.slice(1,4);
console.log(newArregloPasatiempos);

arregloPasatiempos.splice(2,1, "Musica");
console.log(arregloPasatiempos);
