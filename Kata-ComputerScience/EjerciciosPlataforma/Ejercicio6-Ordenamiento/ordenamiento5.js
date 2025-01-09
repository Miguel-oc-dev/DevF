function ordenarPorDistancia(arr){
    return arr.sort((a, b) => {
        const distanciaA = Math.sqrt(a[0]**2 + a[1]**2); 
        const distanciaB = Math.sqrt(b[0]**2 + b[1]**2); 
        return distanciaA - distanciaB; 
    })
}


const inputArray = [[7, 3], [2, 2], [1, 0], [4, 3]];
console.log(ordenarPorDistancia(inputArray)); 