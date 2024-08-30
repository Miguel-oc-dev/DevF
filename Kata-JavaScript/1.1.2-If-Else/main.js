/* let numero1 = 10;
let numero2 = 100;

if(numero1 < numero2){
    console.log("numero1 es menor que numero2");
} else if(numero1 === numero2){
    console.log("Ambos números son iguales");
} else {
    console.log("numero2 es menor que numero1");
} */

/* let respuestaUsuario1 = prompt("Dame un color").toUpperCase();
let respuestaUsuario2 = prompt("Ahora dame otro color").toUpperCase();
if(respuestaUsuario1 === respuestaUsuario2){
    console.log("Tus colores son igules")
} else {
    console.log("Tus colores son diferentes")
} */

// let userResponse = prompt("Dame un dia de la semana").toUpperCase();

/*     if (userResponse === "LUNES") {
        console.log("Tengo flojera");
    } else if (userResponse === "MARTES") {
        console.log("Que apenas martes!");
    } else if (userResponse === "MIERCOLES") {
        console.log("Ya casi es viernes !");
    } else if (userResponse === "JUEVES") {
        console.log("Vamos planeando el fin");
    } else if (userResponse === "VIERNES") {
        console.log("Cuales son los planes ?");
    } else if (userResponse === "SABADO") {
        console.log("Sabadrinks ??");
    } else if (userResponse === "DOMINGO") {
        console.log("Descansamos o le seguimos?");
    } else {
        console.log(" Ese no es un dia de la semana");
    } */

/* switch(userResponse){
    case "LUNES": 
        console.log("Tengo flojera");
        break;
    case "MARTES":
        console.log("Que apenas martes!");
        break;
    case "MIERCOLES":
        console.log("Ya casi es viernes !");
        break;
    case "JUEVES":
        console.log("Vamos planeando el fin");
        break;
    case "VIERNES":
        console.log("Cuales son los planes ?");
        break;
    case "SABADO":
        console.log("Sabadrinks ??");
        break;
    case "DOMINGO":
        console.log("Descansamos o le seguimos?");
        break;
    default:
        console.log(" Ese no es un dia de la semana");
        break;
} */

        let usuarioVacuna = parseInt(prompt("Danos tu edad"));
        if (usuarioVacuna > 17 && usuarioVacuna <= 30){
            console.log("Te puedes vacunar");
        }else{
            console.log("No te puedes vacunar");
        } 