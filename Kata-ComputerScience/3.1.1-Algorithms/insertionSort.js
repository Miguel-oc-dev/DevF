const myArr = [0,3,9,2,1,11];

const insertionSort = (arr) => {
    for(let step = 1; step < arr.length; step++){
        let key = arr[step];
        let j = step - 1;
        while(j >= 0 && key < arr[j]){
            arr[j + 1] = arr[j];
            j--;
            console.log(arr);
        }
        arr[j + 1] = key;
        console.log(arr);
    }
    return arr;
}


console.log(insertionSort(myArr));