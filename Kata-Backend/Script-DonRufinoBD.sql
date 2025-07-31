-- Crear tablas
CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio NUMERIC(10,2),
    sku VARCHAR(50)
);

CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    calle VARCHAR(100),
    cp VARCHAR(10),
    colonia VARCHAR(100),
    ciudad VARCHAR(100)
);

CREATE TABLE ventas (
    id_venta SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES clientes(id_cliente),
    fecha_venta DATE DEFAULT CURRENT_DATE
);

CREATE TABLE detalle_venta (
    id_detalle SERIAL PRIMARY KEY,
    id_venta INT REFERENCES ventas(id_venta),
    id_producto INT REFERENCES productos(id_producto),
    cantidad INT
);


-- Productos
INSERT INTO productos (nombre, descripcion, precio, sku) VALUES
('Arroz', 'Arroz blanco 1kg', 14.50, 'SKU001'),
('Frijol', 'Frijol negro 1kg', 17.00, 'SKU002'),
('Aceite', 'Aceite vegetal 1L', 30.00, 'SKU003'),
('Azúcar', 'Azúcar refinada 1kg', 12.00, 'SKU004');

-- Clientes
INSERT INTO clientes (nombre, apellidos, email, telefono, calle, cp, colonia, ciudad) VALUES
('Juan', 'Pérez', 'juan@example.com', '5551234567', 'Calle 1', '64000', 'Centro', 'Monterrey'),
('María', 'García', 'maria@example.com', '5557654321', 'Calle 2', '77500', 'Zona Hotelera', 'Cancún'),
('Luis', 'Martínez', 'luis@example.com', '5550001111', 'Calle 3', '44100', 'Americana', 'Guadalajara'),
('Ana', 'López', 'ana@example.com', '5552223333', 'Calle 4', '64000', 'Obispado', 'Monterrey');

-- Ventas
INSERT INTO ventas (id_cliente, fecha_venta) VALUES
(1, '2025-07-01'),
(2, '2025-07-02'),
(1, '2025-07-03'),
(4, '2025-07-05');

-- Detalle de ventas
INSERT INTO detalle_venta (id_venta, id_producto, cantidad) VALUES
(1, 1, 5),
(1, 2, 12),
(2, 2, 3),
(2, 3, 1),
(3, 4, 15),
(4, 1, 1),
(4, 3, 2),
(4, 2, 1);
