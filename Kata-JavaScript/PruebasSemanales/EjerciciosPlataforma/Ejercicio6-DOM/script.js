const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
];

const vendedores = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
];


function registrarVentas() {
    vendedores.forEach(vendedor => {
        console.log(`Registrar ventas para ${vendedor.nombre}`);
        productos.forEach((producto, index) => {
            let cantidad;
            do {
            cantidad = prompt(`¿Cuántos ${producto.nombre} vendió ${vendedor.nombre}?`);
            if (isNaN(cantidad) || cantidad === "" || cantidad < 0) {
                alert("Por favor, ingrese un valor numérico válido.");
            }
        } while (isNaN(cantidad) || cantidad === "" || cantidad < 0);
            vendedor.ventas[index] = parseInt(cantidad);
        });
    });
}

function calcularResultados() {
    vendedores.forEach(vendedor => {
    vendedor.total = vendedor.ventas.reduce((acc, cantidad, index) => 
        acc + cantidad * productos[index].precio, 0);
    });
}

    console.clear();
    console.log("Resultados de ventas:");
    vendedores.forEach(vendedor => {
    console.log(`${vendedor.nombre}:`);
    vendedor.ventas.forEach((cantidad, index) => {
        console.log(`  - ${productos[index].nombre}: ${cantidad} vendidos`);
    });
    console.log(`  Total recaudado: $${vendedor.total}`);
    });
    console.log(mensaje);  