/* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen */

function camino(recorrido) {
    console.log("Recorrido de ida: ");
    console.log(recorrido.join(" -> "));
    
    const regreso = [...recorrido].reverse();

    console.log("Recorrido de regreso: ");
    console.log(regreso.join(" -> "));
}

const recorrido = ["Quintana Roo", "Tabasco", "Veracruz", "Tamaulipas", "Nuevo Leon"];
camino(recorrido);