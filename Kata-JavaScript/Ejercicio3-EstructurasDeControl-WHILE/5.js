// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

while (true) {
    let dia = prompt("Introduce un día de la semana:").toLowerCase();

    if (dia === "lunes") {
        alert("Es el inicio de la semana, ¡vamos con todo!");
    } else if (dia === "martes") {
        alert("Segundo día, sigue con ese ritmo.");
    } else if (dia === "miércoles") {
        alert("Mitad de semana, ¡ánimo!");
    } else if (dia === "jueves") {
        alert("Ya casi es viernes, no aflojes.");
    } else if (dia === "viernes") {
        alert("Último día laboral, ¡a darlo todo!");
    } else if (dia === "sábado") {
        alert("Es sábado, disfruta y relájate.");
    } else if (dia === "domingo") {
        alert("Ve a descansar.");
        break;
    } else {
        alert("Día no reconocido, intenta nuevamente.");
    }
}
