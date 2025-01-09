function extraccionDeLetras(arr) {
    return arr.filter(item => typeof item === 'string');
}

const inputArray = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
console.log(extractLetters(inputArray));
