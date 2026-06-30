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

// Conexión con la base de datos
const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
  });

  console.log(
    `Conexión establecida con la base de datos (identificador = ${connection.threadId})`,
  );

  return connection;
};

// endpoints
server.get('/api/projects', async (req, res) => {
  let connection;
  try {
    const sql = 'SELECT * FROM projects';

    connection = await getConnection();
    const [results] = await connection.query(sql);
    console.log(results);

    res.status(200).json({
      success: true,
      results: results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

server.post('/api/projects', async (req, res) => {});

server.get('/api/projects/:id', async (req, res) => {});
