/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

function reemplazar(pila, nuevo, viejo) {
    let pilaTemp = [];
    let reemplazado = false;

    console.log("Pila inicial: ", pila);
    
    while (pila.length > 0) {
        let elemento = pila.pop();

        if(elemento == viejo && !reemplazado) {
            pilaTemp.push(nuevo);
            reemplazado = true;
        } else {
            pilaTemp.push(elemento);
        }
    }

    while (pilaTemp.length > 0) {
        pila.push(pilaTemp.pop());
    }
    return pila;
}

const pila = [3,2,3,5,6,1,9,0,4,2,7,1]
console.log("Pila final: ", reemplazar(pila, 7,2));
