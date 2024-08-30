// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let numeros = [10,40,30,20,15,5];

// Se tiene que añadir una funcion para que junto a y b se comparen estos valores
numeros.sort(function(a,b) {
    /* Si a - b es negativo, a se considera menor que b y se coloca antes en el array.
    Si a - b es positivo, a se considera mayor que b y se coloca después.
    Si a - b es cero, no se cambia el orden entre a y b.*/
    return a - b;
});

console.log(numeros);
