let myObject = {
    atributo: "Mike",
    metodo: function() {
        console.log(this.propiedad);
    }
}

let newObject = Object.create(myObject);
let newObject2 = Object.create(newObject);

console.log(newObject.propiedad);
newObject.metodo();
console.log(newObject);
console.log(newObject2);

