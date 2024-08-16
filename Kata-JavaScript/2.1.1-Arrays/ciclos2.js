/** W H I L E **/

/*let i =  0;
let arr = [];

while(i <= 100) {
    arr.push(i);
    i+=5;
}

console.log(arr);



let numero = parseInt(prompt("Dame un numero: "));

while(numero < 300){
    numero += parseInt(prompt("Dame otro numero: "));
    console.log(numero);
}*/


/** D O - W H I L E **/

/*let numero = 0;

do {
    numero += parseInt(prompt("Dame un numero: "));
    console.log(numero);
    
} while(numero.length < 30);

console.log(numero.length);*/


/** F O R **/

let pasatiempos = "Videojuegos Leer Guitarra Series Programar Dormir";
let arregloPasatiempos = pasatiempos.split(" ");
console.log(arregloPasatiempos);

for(let i = 0; i < arregloPasatiempos.length; i ++) {
    console.log(arregloPasatiempos[i]);
    console.log(i);
    
}


let arr = ["Azul", "Rojo", "Amarillo", "Verde", "Beige", "Negro", "Blanco"];
console.log(arr);
for(let i = 0; i < arr.length; i ++) {

    console.log(arr[i]);
}

let contador = 0;
for(let index = 0; index <= 10; index++){
    contador = contador + index;
    console.log(contador);
}
