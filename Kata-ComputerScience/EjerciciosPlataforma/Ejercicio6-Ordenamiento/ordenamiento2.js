function ordenarASCII(arr){
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

const inputArray = ['b', 'h', 'w', 'e', 'a'];
console.log(ordenarPorAscii(inputArray)); 