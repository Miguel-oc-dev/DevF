/* 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, 
al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, 
si un dato ya está almacenado entonces la lista no cambia. */

class Lista {
    constructor() {
        this.datos = [];
    }
    insertar(dato) {
        if(!this.datos.includes(dato)) {
            this.datos.push(dato);
            console.log(`El dato "${dato}" se inserto correctamente `);
        }else {
            console.log(`El dato "${dato}" ya existe en la lista`);
        }
    }
    mostrar(){
        console.log("Lista actual: ", this.datos);
    }
}

const miLista = new Lista();
miLista.insertar(10);
miLista.insertar(20);
miLista.insertar(30);
miLista.mostrar();

