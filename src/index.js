import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import mysql from 'mysql2/promise';
import path from 'path';
// Necesario en module
import { fileURLToPath } from 'url';

// Crear servidor
const server = express();

// Configurar servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Configurar servidor de archivos estáticos
// En ES Modules __dirname no existe.
// Lo reconstruimos a partir de import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticServerPath = path.join(__dirname, '../public');
server.use(express.static(staticServerPath));

// Arrancar servidor en un puerto
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// endpoints
