function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

const inputArray = ["adios", "hola", "maximo", "uno", "despedida"];
console.log(ordenarPorLongitud(inputArray));