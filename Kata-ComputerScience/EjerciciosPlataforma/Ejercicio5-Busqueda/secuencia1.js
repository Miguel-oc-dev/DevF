function numeroFrecuente(arr) {
    if(arr.length === 0) return null;

    const frecuencia = new Map();
    let maxCount = 0;
    let masFrecuente = null;

    for(const num of arr) {
        const count = (frecuencia.get(num) || 0) + 1;
        frecuencia.set(num, count);

        if(count > maxCount) {
            maxCount = count;
            masFrecuente = num;
        }
    }

    return masFrecuente;
}

const inputArray = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
console.log(numeroFrecuente(inputArray));