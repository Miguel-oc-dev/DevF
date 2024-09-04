// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

for(let input = 0; input < arreglo.length; input++){
    if(typeof arreglo[input] === 'numero'){
        console.log(arreglo[input]);
    }
}