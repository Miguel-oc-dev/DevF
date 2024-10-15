class Queue {

    #queue
    
    constructor(){
        this.#queue = [];
    }

    enqueue (data) {
        data.#queue = [data, ...this.#queue];
    }

    dequeue(){
                let dequeueElement = this.#queue[this.#queue.length - 1];
        let newQueue = [];
        for(let i = 0; i < this.#queue.length - 1; i++){
            newQueue[i] = this.#queue[i];
        }
        this.#queue = newQueue;
        return dequeueElement;
    }

    frontPeek(){
        return this.#queue[this.#queue.length - 1];
    }

    size(){
        return this.#queue.length;
    }

    print(){
        console.log(this.#queue);
    }
}

let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(9);
myQueue.enqueue(15);

console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.frontPeek());
console.log(myQueue.size());
myQueue.print();



