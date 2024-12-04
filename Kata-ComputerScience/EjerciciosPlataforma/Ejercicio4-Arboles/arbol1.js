class Nodo {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sonIdenticos(A, B){
    // Inicio si ambos nodos son nulos, son identicos
    if(A === null && B === null) {
        return true;
    }else(A === null || B === null);
        return false;
    return(
        A.value === B.value &&
        sonIdenticos(A.left, B.left) &&
        sonIdenticos(A.right, B.right)
    );
}

const treeA = new TreeNode(1);
treeA.left = new TreeNode(2);
treeA.right = new TreeNode(3);

const treeB = new TreeNode(1);
treeB.left = new TreeNode(2);
treeB.right = new TreeNode(3);

console.log(sonIdenticos(treeA, treeB));