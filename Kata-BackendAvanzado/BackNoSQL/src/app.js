import express from 'express';
import connectDB from './config/db.js';
import {port, uri} from './config/constants.js';
import healthCheckRoutes from './routes/healthCheckRoutes.js'

connectDB();

const app = express();

app.use(express.json());
app.use(uri, healthCheckRoutes);

const PORT = port || 5000;
app.listen(PORT, console.log(`Servidor corriendo en http://localhost:${PORT}${uri}`))