const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tinder para Habilidades API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
