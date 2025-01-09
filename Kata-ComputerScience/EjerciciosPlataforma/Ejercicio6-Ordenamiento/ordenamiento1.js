function ordenarDescendente(arr){
    return arr.sort((a, b) => b - a);
}

const inputArray = [9, 3, 1, 6, 5, 88, -1, 2, 7];
console.log(ordenarDescendente(inputArray));