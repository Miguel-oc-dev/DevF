class Persona{
    //Se encarga de inicializar mi objeto (se asegura que tenga lo necesario)
    constructor(nombre, apellidos, peso, edad, sexo){
        // Propiedades = Caracteristicas principales
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.peso = peso;
        this.edad = edad;
        this.sexo = sexo;
        // Clave: Valor
        }

        //Metodos 
        personaHablando(){
            console.log("Hola me llamo " + this.nombre);
        }

        personaCaminando(){
            console.log("Estoy caminando");
        }
    }

//Crear nuestros objetos - Crear una instancia de Persona(clase)
const persona1 = new Persona("Ana", "Gutierrez", 57, 23, "Femenino");
const persona2 = new Persona("Diego", "Lechuga", 67, 21, "Masculino");

//Ejecutar acciones 
persona1.personaHablando();
persona2.personaHablando();

//Herencia - con la palabra reservada extends 
class Estudiante extends Persona{
    constructor(nombre, apellidos, edad, sexo, matricula, promedio){
        super(nombre, apellidos, edad, sexo) // Heredo atributos
        this.matricula = matricula;
        this.promedio = promedio;
    }

    estudiar(){
        console.log(this.nombre + " esta estudiando.")
    }
}

//Instancia de tipo estudiante (crear mi objeto)
const estudiante1 = new Estudiante("Fiorella", "Lopez", 19, "Femenino", "123HSB", 9.3);
const estudiante2 = new Estudiante("Sebastian", "Gallardo", 22, "Masculino", "456WER", 8.7);

//Metodos
estudiante1.estudiar(); //Ocupando un metodo de la clase estudiante
estudiante2.personaHablando(); // Ocupando un metodo heredado
console.log(estudiante1.matricula); // Notacion punto, accedo a sus atributos

//Subclase profesor
class Profesor extends Persona{
    constructor(nombre, apellidos, sexo, materia, grado){
        super(nombre, apellidos, sexo)
        this.materia = materia; 
        this.grado = grado;
    }

    //Metodo enseñar (las subclases lo van a sobreescribir) - Poliformismo
    enseñar(){
        throw new Error("El metodo debe ser implementado en la subclase")
    }
}

class ProfesorMatematicas extends Profesor{
    constructor(nombre, apellidos, sexo, materia, grado){
        super(nombre, apellidos, sexo, materia, grado) // Lo que se hereda de la superclase 
    }

    
    //Sobreescribimos el metodo
    enseñar(){
        console.log("El profesor/profesora " + this.nombre + " enseña en el aula de clases");
    }
}

class ProfesorMusica extends Profesor{
    constructor(nombre, apellidos, sexo, materia, grado, instrumento){
        super(nombre, apellidos, sexo, materia, grado)
        this.instrumento = instrumento;
    }

    //Sobreescribimos el metodo
    enseñar(){
        console.log("El profesor/profesora " + this.nombre + " enseña en el teatro de la escuela " + this.instrumento);
    }
}

//Instancia de nuestras clases 

const profesor1 = new ProfesorMatematicas("Laura", "Arano", "Femenino", "Ecuaciones Diferenciales", "Maestria");
const profesor2 = new ProfesorMusica("Jorge", "Botero", "Masculino", "Musica Avanzada", "Licenciatura en Artes", "Piano");

// Aplicando el pilar del polimorfismo
profesor1.enseñar();
profesor2.enseñar();
//Metodos heredados de la superclase Persona
profesor1.personaHablando();
profesor2.personaCaminando();