class Animal {
    nombre;
    edad;
    color;

    constructor(nombre, edad, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }

    showInfo(){
        console.log(`El ${this.especie} ${this.nombre} tiene ${this.edad} años y es de color ${this.color}`);
    }
}

class Gato extends Animal {
    constructor(nombre, edad, color) {
        super(this.nombre, this.edad, this.color);
        this.especie = "Gato"
    }
    cazar(animal){
        console.log(`El gato ${this.nombre} cazó un ${animal.especie}`);
    }

    hacerRuido(){
        console.log("Miauuuuuuu");
    }
}

class Perro extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad, color);
        this.especie = "Perro"
    }
    dormir(){
        console.log(`El perro ${this.nombre} esta durmiendo`);
        
    }
    
    hacerRuido() {
        console.log("Woof");
    }
}

class Perro extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad, color);
        this.especie = "Raton"
    }

    hacerRuido() {
        console.log("Squeak");
    }
}


let apolo = new Gato("Apolo", 3, "Blanco");
let vicente = new Perro("Vicente", 1, "Atigrado");
let ratonGenerico = new Raton("Ratonciti", 1, "Gris");

console.log(apolo);

apolo.showInfo();
vicente.showInfo();
ratonGenerico.showInfo();

apolo.cazar(ratonGenerico);
vicente.dormir();

apolo.hacerRuido();
vicente.hacerRuido();
ratonGenerico.hacerRuido();
