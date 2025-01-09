class Contacto {
    constructor(nombre, apellidos, telefono){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    mostrarInfo(){
        return `${this.nombre} ${this.apellidos} - Tel: ${this.telefono}`;
    }
}

class ListaContactos {
    constructor(){
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre){
        return this.contactos.filter(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
    }
}

const contacto1 = new Contacto('Juan', 'Pérez', '123456789');
const contacto2 = new Contacto('María', 'Gómez', '987654321');
const contacto3 = new Contacto('Juan', 'Martínez', '456123789');

// Crear una instancia de ListaContactos
const lista = new ListaContactos();

// Agregar contactos a la lista
lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);
lista.agregarContacto(contacto3);

// Buscar un contacto por nombre
const contactosJuan = lista.buscarContactoPorNombre('Juan');
contactosJuan.forEach(contacto => {
    console.log(contacto.mostrarInfo());
});