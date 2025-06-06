
-- Tabla: Categoria
CREATE TABLE Categoria (
    id_categoria SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla: Pieza
CREATE TABLE Pieza (
    id_pieza SERIAL PRIMARY KEY,
    codigo_pieza VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(100),
    color VARCHAR(50),
    precio NUMERIC(10, 2),
    id_categoria INTEGER REFERENCES Categoria(id_categoria)
);

-- Tabla: Proveedor
CREATE TABLE Proveedor (
    id_proveedor SERIAL PRIMARY KEY,
    codigo_proveedor VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(100),
    direccion VARCHAR(150),
    ciudad VARCHAR(100),
    provincia VARCHAR(100)
);

-- Tabla: Suministro (relación entre Proveedor y Pieza)
CREATE TABLE Suministro (
    id_suministro SERIAL PRIMARY KEY,
    id_proveedor INTEGER REFERENCES Proveedor(id_proveedor),
    id_pieza INTEGER REFERENCES Pieza(id_pieza),
    fecha DATE NOT NULL,
    cantidad INTEGER NOT NULL
);

-- Tabla: Marca
CREATE TABLE Marca (
    id_marca SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla: Modelo
CREATE TABLE Modelo (
    id_modelo SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    precio NUMERIC(10, 2),
    descuento NUMERIC(10, 2),
    potencia_fiscal VARCHAR(50),
    cilindrada VARCHAR(50),
    id_marca INTEGER REFERENCES Marca(id_marca)
);

-- Tabla: Caracteristica
CREATE TABLE Caracteristica (
    id_caracteristica SERIAL PRIMARY KEY,
    nombre VARCHAR(100)
);

-- Tabla: EquipamientoSerie
CREATE TABLE EquipamientoSerie (
    id_modelo INTEGER REFERENCES Modelo(id_modelo),
    id_caracteristica INTEGER REFERENCES Caracteristica(id_caracteristica),
    PRIMARY KEY (id_modelo, id_caracteristica)
);

-- Tabla: Extra
CREATE TABLE Extra (
    id_extra SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    precio NUMERIC(10, 2)
);

-- Tabla: ExtraModelo
CREATE TABLE ExtraModelo (
    id_modelo INTEGER REFERENCES Modelo(id_modelo),
    id_extra INTEGER REFERENCES Extra(id_extra),
    PRIMARY KEY (id_modelo, id_extra)
);

-- Tabla: Concesionario
CREATE TABLE Concesionario (
    id_concesionario SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(150),
    ine VARCHAR(50)
);

-- Tabla: ServicioOficial
CREATE TABLE ServicioOficial (
    id_servicio SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(150),
    ine VARCHAR(50),
    id_concesionario INTEGER REFERENCES Concesionario(id_concesionario)
);

-- Tabla: Automovil (stock)
CREATE TABLE Automovil (
    bastidor VARCHAR(50) PRIMARY KEY,
    id_modelo INTEGER REFERENCES Modelo(id_modelo),
    ubicacion VARCHAR(50), -- 'concesionario' o 'servicio'
    id_concesionario INTEGER REFERENCES Concesionario(id_concesionario),
    id_servicio INTEGER REFERENCES ServicioOficial(id_servicio)
);

-- Tabla: Vendedor
CREATE TABLE Vendedor (
    id_vendedor SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    ine VARCHAR(50),
    direccion VARCHAR(150)
);

-- Tabla: Venta
CREATE TABLE Venta (
    id_venta SERIAL PRIMARY KEY,
    bastidor VARCHAR(50) REFERENCES Automovil(bastidor),
    id_vendedor INTEGER REFERENCES Vendedor(id_vendedor),
    id_servicio INTEGER REFERENCES ServicioOficial(id_servicio),
    precio_final NUMERIC(10, 2),
    forma_pago VARCHAR(50), -- 'contado' o 'financiera'
    fecha_entrega DATE,
    matricula VARCHAR(20),
    es_stock BOOLEAN
);

-- Tabla: VentaExtra
CREATE TABLE VentaExtra (
    id_venta INTEGER REFERENCES Venta(id_venta),
    id_extra INTEGER REFERENCES Extra(id_extra),
    precio NUMERIC(10, 2),
    PRIMARY KEY (id_venta, id_extra)
);
