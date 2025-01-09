class NodoArbol {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function obtenNodo(arbol, n){
    if(arbol === null) {
        return [];
    }

    if(n === 0) {
        return [arbol.value];
    }

    const leftNodes = getNodes(arbol.left, n - 1);
    const rightNodes = getNodes(arbol.right, n - 1);

    return[...leftNodes, ...rightNodes];
}

const arbol = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(getNodesAtLevel(arbol, 0)); // [1]
console.log(getNodesAtLevel(arbol, 1)); // [2, 3]
console.log(getNodesAtLevel(arbol, 2)); // [4, 5, 6, 7]