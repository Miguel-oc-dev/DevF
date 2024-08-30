// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
let userResponse = parseInt(prompt("Ingrese un numero: "))

if(userResponse % 2 == 0){
    console.log(`${userResponse} es divisible entre 2`);
} else{
    console.log(`${userResponse} no es divisible entre 2`);
    
}