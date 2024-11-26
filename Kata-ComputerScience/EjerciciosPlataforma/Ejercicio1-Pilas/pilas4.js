/* 4.- Un almacén tiene capacidad para apilar “n” contenedores. 
Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, 
deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. */

function retirarContenedor(almacen, idContenedor) {
    let pilaTemporal = [];

    console.log("Estado inicial: ", almacen);
    
    while (almacen.length > 0) {
        let contenedor = almacen.pop();
        if (contenedor === idContenedor) {
            console.log(`Contenedor ${idContenedor} retirado.`);
            break;
        } else {
            pilaTemporal.push(contenedor);
        }
    }

    while (pilaTemporal.length > 0) {
        almacen.push(pilaTemporal.pop());
    }

    console.log("Estado final del almacén:", almacen);
}

let almacen = [1,2,3,4,5];
retirarContenedor(almacen, 3)