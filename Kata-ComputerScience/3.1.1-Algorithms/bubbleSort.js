let arr = [8,3,6,1,12,0,4,7,90,56];

const bubbleSort = (arr) => {
    let counter = 0;
    for(let step = 0; i < arr.length; step++){
        for(let i = 0; i < arr.length - (1 + step); i++){
            console.log(arr);
            if(arr[i] > arr[i+1]) {
                let aux = arr[i];
                arr[i] = arr[i+1];
                arr[i + 1] = aux;
            }
            counter++;
            console.log(counter);
        }
    }
    return arr;
}

console.log(bubbleSort(arr));
