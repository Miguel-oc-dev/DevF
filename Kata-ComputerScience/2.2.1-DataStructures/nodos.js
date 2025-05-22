// Estructura de datos Nodo
class Node {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}
//Funciones auxiliares

function sonArbolesIdenticos(arbolA, arbolB){
    //Caso base: Ambos arboles son nulos (vacios)
    if(arbolA === null && arbolB === null){ // and
        return true;
    }

    //Uno de los arboles es nulo y el otro no 
    if(arbolA === null || arbolB === null){ // or 
        return false;
    }

    //Comprobamos los valores de los nodos raiz y recursivamente los subarboles
    return (
        arbolA.valor === arbolB.valor && sonArbolesIdenticos(arbolA.izquierdo, arbolB.izquierdo) && sonArbolesIdenticos(arbolA.derecho, arbolB.derecho)
    );
}

function copiarArbol(arbolOriginal){


    return nuevoArbol;
}

function visualizarNodosEnNivel(arbol, nivel){

    return visualizarNodosEnNivel(arbol.izquierdo, nivel -1)
    return visualizarNodosEnNivel(arbol.derecho, nivel -1)


}

function contarHojas(arbol){
    //Caso base 


    return contarHojas(arbol.izquierdo) + contarHojas(arbol.derecho);
}

// Estructura de datos BinaryTree
class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    // Insertar un nodo en el árbol (puedes implementar diferentes métodos de inserción según tus necesidades)
    insertar(valor) {
        this.raiz = this._insertarRecursivo(this.raiz, valor);
    }

    _insertarRecursivo(nodoActual, valor) {
        if (nodoActual === null) {
            return new Node(valor);
        }

        if (valor < nodoActual.valor) {
            nodoActual.izquierdo = this._insertarRecursivo(nodoActual.izquierdo, valor);
        } else if (valor > nodoActual.valor) {
            nodoActual.derecho = this._insertarRecursivo(nodoActual.derecho, valor);
        }

        return nodoActual;
    }

     // 1. Determinar si dos árboles binarios son idénticos
        sonIdenticos(otroArbol) {
        //Implementa codigo
        return (sonArbolesIdenticos(this.raiz, otroArbol.raiz))
        
    }

    // 2. Obtener una copia del árbol binario
    copiar() {
        //Implementa codigo
    }

    // 3. Visualizar los nodos en un nivel específico
    visualizarNivel(nivel) {
        //Implementa codigo
    }

    // 4. Contar el número de hojas en el árbol binario
    contarHojas() {
        //Implementa codigo
    }
}
