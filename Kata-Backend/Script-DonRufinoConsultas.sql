SELECT id_cliente FROM clientes WHERE ciudad = 'Monterrey';

SELECT id_producto, descripcion FROM productos WHERE precio < 15;

SELECT c.id_cliente, c.nombre, dv.cantidad, p.descripcion
FROM clientes c
JOIN ventas v ON c.id_cliente = v.id_cliente
JOIN detalle_venta dv ON v.id_venta = dv.id_venta
JOIN productos p ON dv.id_producto = p.id_producto
WHERE dv.cantidad > 10;

SELECT id_cliente, nombre
FROM clientes
WHERE id_cliente NOT IN (SELECT DISTINCT id_cliente FROM ventas);

SELECT c.id_cliente, c.nombre
FROM clientes c
JOIN ventas v ON c.id_cliente = v.id_cliente
JOIN detalle_venta dv ON v.id_venta = dv.id_venta
GROUP BY c.id_cliente, c.nombre
HAVING COUNT(DISTINCT dv.id_producto) = (SELECT COUNT(*) FROM productos);

SELECT c.id_cliente, c.nombre, SUM(dv.cantidad) AS total_productos
FROM clientes c
JOIN ventas v ON c.id_cliente = v.id_cliente
JOIN detalle_venta dv ON v.id_venta = dv.id_venta
GROUP BY c.id_cliente, c.nombre;

SELECT p.id_producto
FROM productos p
WHERE p.id_producto NOT IN (
    SELECT DISTINCT dv.id_producto
    FROM detalle_venta dv
    JOIN ventas v ON dv.id_venta = v.id_venta
    JOIN clientes c ON v.id_cliente = c.id_cliente
    WHERE c.ciudad = 'Guadalajara'
);

SELECT DISTINCT dv.id_producto
FROM detalle_venta dv
JOIN ventas v ON dv.id_venta = v.id_venta
JOIN clientes c ON v.id_cliente = c.id_cliente
WHERE c.ciudad = 'Monterrey'
INTERSECT
SELECT DISTINCT dv.id_producto
FROM detalle_venta dv
JOIN ventas v ON dv.id_venta = v.id_venta
JOIN clientes c ON v.id_cliente = c.id_cliente
WHERE c.ciudad = 'Cancún';

SELECT c.ciudad
FROM clientes c
JOIN ventas v ON c.id_cliente = v.id_cliente
JOIN detalle_venta dv ON v.id_venta = dv.id_venta
GROUP BY c.ciudad
HAVING COUNT(DISTINCT dv.id_producto) = (SELECT COUNT(*) FROM productos);
