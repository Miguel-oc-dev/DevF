const express = require('express');
const axios = require('axios');
const app = express()
const PORT = 3000;

// Middleware para que express pueda leer JSON
app.use(express, json())

// Endpoints
app.get('/api/', (req, res) => {
    res.status(200).json({'mensaje': 'Mensaje correspondiente'});
});


app.get('/api/suma', (req, res) => {
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);

    if(isNaN(number1) || isNaN(number2)){
        return res.status(400).json({error: 'numero 1 y numero 2 deben de ser numeros validos'});
    }
    const resultado = number1 + number2
    res.status(200).json({resultado: resultado});
});


app.get('/api/usuario/:nombre', (req, res) => {
    const{nombre} = req.params;
    res.status(200).json({'usuario': nombre});
});


app.get('/api/swapi/:id', async(req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        res.status(200).json({ 'personaje': response.data });
    } catch (error) {
        if (error.response && error.response.status === 404) {
        return res.status(404).json({ error: 'Personaje no encontrado.' });
        }
        res.status(500).json({ error: 'Ocurrió un error al consultar la API de SWAPI.' });
    }
});


app.put('/api/body', (req, res) => {
    const body = req.body;
    res.status(200).json(body);
});


app.post('/api/suma-body', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'num1 y num2 deben ser números válidos.' });
    }

    const resultado = num1 + num2;
    res.status(200).json({ resultado: resultado });
});


app.delete('/api/delete/:id', (req, res) => {
    const{id} = req.params;

    if(id==='3'){
        res.status(200).json({ mensaje: `se ha eliminado el objeto con ID ${id}` });
    } else{
        res.status(404).json({ mensaje: `No se encontro el objeto con el ID especificado` }); 
    }
}); 


// Inicializacion del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})