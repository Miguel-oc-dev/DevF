/* 1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */

function dividirCola(colaOriginal) {
    let cola1 = [];
    let cola2 = [];

    for(let i = 0; i < colaOriginal.length; i++){
        if(i % 2 === 0) {
            cola1.push(colaOriginal[i]);
        } else {
            cola2.push(colaOriginal[i]);
        }
    }
    console.log("Cola original:", colaOriginal);
    console.log("Cola 1 (pares):", cola1);
    console.log("Cola 2 (nones):", cola2);

    return { cola1, cola2 };
}

const colores = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
dividirCola(colores);