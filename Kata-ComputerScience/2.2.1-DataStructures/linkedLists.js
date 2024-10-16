class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = new LinkedListNode("Dummy")) {
        this.head = head;
    }

    appendNode(){
        let currentNode = this.head;
        while(currentNode){
                currentNode = currentNode.next;
        }
        currentNode.next = new LinkedListNode(data);
    }
}

let firstNode = new LinkedListNode(7);
let myLinkedList = new LinkedList(head);
myLinkedList.appendNode(5);
myLinkedList.appendNode(8);
myLinkedList.appendNode(10);

let currentNode = myLinkedList.head;
let sumaDeNodos = 0;

while(currentNode){
    sumaDeNodos += currentNode.data;
    currentNode = currentNode.next;
}

console.log(sumaDeNodos);
