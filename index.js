const express = require('express');
const { Pool } = require('pg');

const app = express();

const port = process.env.PORT || 3000;

const pool = new Pool({
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'postgres',
 password: process.env.DB_PASSWORD || '12345',
 database: process.env.DB_NAME || 'app_db',
});

app.get('/', async (req,res) => {
 const result = await pool.query('SELECT NOW()');
 res.send(`PostgreSQL zamanı: ${result.rows[0].now}`);
});

app.listen(port, () => {
 console.log(`Sunucu ${port} portunda çalışıyor`);
});
