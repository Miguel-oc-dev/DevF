const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para obtener la lista de Pokémon
app.get('/api/pokemon', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los Pokémon' });
    }
});

// Ruta para obtener la información de un Pokémon específico
app.get('/api/pokemon/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los detalles del Pokémon' });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
