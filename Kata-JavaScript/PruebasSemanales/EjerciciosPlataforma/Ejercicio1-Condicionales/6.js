// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
let num1 = parseInt(prompt("Ingrese el primer digito"))
let num2 = parseInt(prompt("Ingrese el segundo digito"))
let num3 = parseInt(prompt("Ingrese el tercer digito"))


if(num1 > num2 && num1 > num3){
    alert(`El numero ${num1} es el numero mayor`)
} else if(num2 > num1 && num2 > num3){
    alert(`El numero ${num2} es el numero mayor`)
} else if(num3 > num1 && num3 > num2){
    alert(`El numero ${num3} es el numero mayor`)
} else if(num1 === num2 && num1 > num3){
    alert(`Los numeros ${num1} y ${num2} son mayores e iguales`)
} else if(num1 === num3 && num1 > num2){
    alert(`Los numeros ${num1} y ${num3} son mayores e iguales`)
}else if(num2 === num3 && num2 > num1){
    alert(`Los numeros ${num2} y ${num3} son mayores e iguales`)
} else{
    alert(`Los tres numeros son iguales: ${num1}`)
}