// Arbol Binario 
class Node{
    constructor(data){
    this.data = data; 
    this.left = null; // Apunta al hijo izquierdo (inicialmente nulo)
    this.right = null; // Apunta al hijo derecho (iniclamente es nulo)
    }
}

class BinaryTree {
    constructor(){
        this.root = null; // Referencia al nodo raiz del arbol 
    }

    // Insertar un nuevo nodo en el arbol (RECURSIVO)
    insert(data){
        this.root = this._insertRecursive(this.root,data);
    }

    _insertRecursive(node,data){
        if(!node){ // Si el nodo actual es null, creamos un nuevo nodo
            return new Node(data); // Lo devolvemos
        }

        //Si el dato es menor, lo insertamos al subarbol izq
        if(data < node.data){
            node.left = this._insertRecursive(node.left, data)
        }else{//Si el dato es mayor o = lo insertamos en el subarbol derecho
            node.right = this._insertRecursive(node.right, data)
        }
        return node; // Devolvemos el nodo actual    
    }

    //Recorrido en orden (in-order) izq, raiz, der
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}

// Representar un arbol genealogico 
let familyTree = new BinaryTree();
familyTree.insert("Abuelo");
familyTree.insert("Padre");
familyTree.insert("Tio");
familyTree.insert("Hijo");
familyTree.insert("Hija");

console.log("Recorrido en orden del arbol genealogico:")
familyTree.inOrder();

// En la vida real:
// Arbol de desciones 
// Almacenar y organizar 
