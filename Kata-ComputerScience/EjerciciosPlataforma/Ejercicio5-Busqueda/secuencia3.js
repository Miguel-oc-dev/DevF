function numeroMayor(arr){
    if(arr.length === 0) return null;

    return Math.max(...arr);
}

const inputArray = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log(numeroMayor(inputArray));