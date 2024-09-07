// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let calif = parseFloat(prompt("Ingrese su calificacion (1 - 10): "));

if(calif >= 1 && calif <= 10){
    if(calif === 10){
        alert("Exelente!")
    } else if (calif === 9){
        alert("OK")
    } else if (calif >= 6 && calif <= 8){
        alert("Regular")
    } else if (calif < 6){
        alert("Reprobado")
    }
} else{
    alert("La calificacion debe de estar entre 1 y 10...")
}