/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

function precioHelado(topping){
    const precioBase = 50;
    const precioToppings = {
        "oreo" : 10,
        "kitkat" : 15,
        "brownie" : 20
    };

    if(precioToppings.hasOwnProperty(topping.toLowerCase())) {
        let precioFinal = precioBase + precioToppings[topping.toLowerCase()];
        alert(`El precio del helado con topping (${topping}) es: ${precioFinal} MXN.`);
    } else {
        alert(`Por el momento no contamos con el toping (${topingUsuario}), lo sentimos...`);
        alert(`El precio del helado sin toppping es de ${precioBase} MXN.`)
    }
}

const topingUsuario = prompt("Que topping desea para su helado?").toUpperCase();
precioHelado(topingUsuario);