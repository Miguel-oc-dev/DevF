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

    peek() {
        return this.#stack[this.#stack.length - 1];
    }

    size() {
        return this.#stack.length;
    }

    print() {
        let printedStack = "";
        this.#stack.forEach((stackElement) => printedStack += `${stackElement}, `);
        console.log(printedStack);
    }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(8);
myStack.push(10);

console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());
console.log(myStack);

myStack.print();
