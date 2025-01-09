class NodoArbol {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function sonIdenticos(arbolA, arbolB){
    if(arbolA === null && arbolB === null){
        return true;
    }

    if(arbolA === null || arbolB === null){
        return false;
    }

    return(
        arbolA.value === arbolB.value &&
        sonIdenticos(arbolA.left, arbolB.left) &&
        sonIdenticos(arbolA.right, arbolB.right)
    );
}


const treeA = new NodoArbol(1, new NodoArbol(2), new NodoArbol(3));
const treeB = new NodoArbol(1, new NodoArbol(2), new NodoArbol(3));
const treeC = new NodoArbol(1, new NodoArbol(2), new NodoArbol(4));


console.log(sonIdenticos(treeA, treeB)); 
console.log(sonIdenticos(treeA, treeC));