class Stack{

    // Se usa "#" para usar solamente este atributo dentro de la clase
    #stack

    constructor(){
        this.#stack = [];
    }

    push(data) {
        this.#stack = [...this.#stack, data];
    }

    pop() {
        let popedElement = this.#stack[this.#stack.length - 1];
        let newStack = [];
        for(let i = 0; i < this.#stack.length - 1; i++){
            newStack[i] = this.#stack[i];
        }
        this.#stack = newStack;
        return popedElement;
    }
}