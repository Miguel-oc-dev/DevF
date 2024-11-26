/* 1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]. */

function extraccion(pila, cantidad){
    if(cantidad > pila.length) {
        console.log("La cantidad supera el número de elementos en la pila.");
        return[];
    }

    return pila.slice(0, cantidad);
}

const resultado = extraccion(
    ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'],
    4
);

console.log(resultado);

