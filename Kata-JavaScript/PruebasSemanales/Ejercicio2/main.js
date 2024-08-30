function mostrarEstrellas(total){
    let estrellas = '';
    for(let i = 0; i < total; i ++){
        estrellas += '*';
    }
    console.log(estrellas);
}

let numeroEstrellas = parseInt(prompt("Digite el total de estrellas por observar: "));

if(numeroEstrellas > 0) {
    mostrarEstrellas(numeroEstrellas);
}else {
    console.log("Ingrese un numero valido...");
    
}