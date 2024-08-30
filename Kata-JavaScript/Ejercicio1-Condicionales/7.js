// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
let userResponse = prompt("Dame un dia de la semana").toUpperCase();

if (userResponse === "LUNES") {
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
} 