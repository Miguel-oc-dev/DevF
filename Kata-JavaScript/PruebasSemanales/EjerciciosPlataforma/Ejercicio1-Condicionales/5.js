//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
let num1 = parseInt(prompt("Ingrese el primer digito"))
let num2 = parseInt(prompt("Ingrese el segundo digito"))


if(num1 > num2){
    alert(`El numero ${num1} es el numero mayor`)
} else{
    alert(`El numero ${num2} es el numero mayor`)
}