function numeroMenor(arr){
    if(arr.length === 0) return null;

    return Math.min(...arr);
}

const inputArray = [1,4,5,-1,-7,2,3,9];
console.log(numeroMenor(inputArray));