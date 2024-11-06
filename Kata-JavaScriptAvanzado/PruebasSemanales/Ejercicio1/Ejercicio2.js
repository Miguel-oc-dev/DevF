let respuestaUsuario1 = prompt("Dame un color: ").toUpperCase();
let respuestaUsuario2 = prompt("Dame otro color").toUpperCase();

while(respuestaUsuario1 !== "" || respuestaUsuario2 === "") {
    let respuestaUsuario1 = prompt("Dame un color: ").toUpperCase;
    let respuestaUsuario2 = prompt("Dame otro color").toUpperCase;

    if(respuestaUsuario1 === respuestaUsuario2) {
        console.log("Tus colores son iguales...");
    } else {
        console.log("Tus colores son diferentes");
        
    }
}

console.log("Fin del ciclo");
