let COLORES = ['ROJO', 'AMARILLO', 'VERDE']
const semaforoImg = document.querySelector('#semaforoInicial')
const estadoSemaforo = document.querySelector('#estadoSemaforo')

function semaforoLuz() {
    const color = COLORES.pop()
    console.log(color)

    if (!COLORES.length)
    COLORES = ['ROJO', 'AMARILLO', 'VERDE']
    semaforoImg.src = "img/"+color+".png"

    // Se añade esta linea para que cambie el contenido del texto y coincida con la imagen
    estadoSemaforo.innerText = "Luz " + color.charAt(0) + color.slice(1).toLowerCase();
    return color
}

const intervalID = setInterval(semaforoLuz, 3500)


