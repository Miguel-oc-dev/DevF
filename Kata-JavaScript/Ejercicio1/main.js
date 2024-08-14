/*En un banco, el criterio para ofrecer el nivel de tarjeta Standard, Gold, y Platinum depende del puntaje que tenga el cliente en el banco:
Standard: 0 - 150 puntos
Gold: 150 - 300 puntos
Platinum: 300 o más puntos

A partir de estos números de cuenta:
123456: 230 puntos
654321: 130 puntos
246810: 360 puntos

Determinar para qué tarjeta es elegible el cliente. 📊💳*/


let score = parseInt(prompt("Ingrese el puntuaje del cliente: "));

if(score < 150) {
    console.log("Standard");
} else if(score >= 150 && score < 300) {
    console.log("Gold");
} else if(score >= 300){
    console.log("Platinum")
} else {
    console.log("Ingrese un número mayor a 0...")
}