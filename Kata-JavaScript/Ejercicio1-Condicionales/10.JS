/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

function calcularPrograma(){
    alert("Bienvenido al programa de desarrollo de aplicaciones.")
    const opcion = parseInt(prompt("Opciones disponibles: \n 1.Course: $4,999 MXN. por mes \n 2.Carrera: $3,999 MXN. por mes \n 3.Master: $2,999 MXN. por mes \n Elige su opcion deseada(1, 2, 3)"));

    let precioMensual, duracion, nombreOpcion;

    if(opcion === 1){
        precioMensual = 4999;
        duracion = 2
        nombreOpcion =  "course";
    } else if(opcion === 2){
        precioMensual = 3999;
        duracion = 6
        nombreOpcion =  "carrera";
    } else if(opcion === 3){
        precioMensual = 2999;
        duracion = 12
        nombreOpcion =  "master";
    }else{
        alert("Opcion no valida...")
    }

    const opcionBeca = parseInt(prompt("Cuentas con una beca? \n Opciones disponibles: \n 1.Facebook: 20% de descuento \n 2.Google: 15% de descuento \n 3.Jesua: 50% de descuento  \n Elige su opcion(1, 2, 3)"));

    let descuento;

    if(opcionBeca === 1){
        descuento = 0.20;
    } else if(opcionBeca === 2){
        descuento = 0.15;
    } else if(opcionBeca === 3){
        descuento = 0.50;
    }else{
        alert("Opcion no valida...")
    }

    let precioFinal = precioMensual * (1 - descuento);
    let costoFinal = precioFinal * duracion;

    alert(`Has elegido el nivel ${nombreOpcion}`);
    if(descuento > 0){
        alert(`Con la beca aplicada, tu pago mensual es de: ${precioFinal.toFixed(2)} MXN.`);
    }else{
        alert(`Tu pago mensual es de: ${precioFinal.toFixed(2)} MXN.`)
    }
    alert(`El costo total por los ${duracion} meses es de: ${costoFinal.toFixed(2)} MXN.`);
}

calcularPrograma();

