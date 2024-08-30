// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
let numGanador = parseInt(prompt("Ingrese su numero de cliente: "));

if(numGanador === 1000){
    alert('Felicidades! Ganaste un premio');
} else if(numGanador < 1000 || numGanador > 1000){
    alert('Sigue intentando...')
} else {
    alert('Ingrese su numero de cliente...')
}