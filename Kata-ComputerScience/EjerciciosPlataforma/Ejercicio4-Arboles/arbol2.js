class NodoArbol {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function copiar(arbolA){
    if(arbolA === null){
        return null;
    }

    const newNodo = new NodoArbol(arbolA.value);

    newNodo.left = copiaArbolBinario(arbolA.left);
    newNodo.right = copiaArbolBinario(arbolA.right);

    return newNodo;
}


const treeA = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeB = copyBinaryTree(treeA);

console.log(treeB);