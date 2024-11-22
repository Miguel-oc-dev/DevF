const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Configurar express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para obtener datos de los pokemones desde la PokeAPI
app.get('/api/pokemon/:id', async (req, res) => {
    const pokemonId = req.params.id;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
