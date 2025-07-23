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
 res.send(`
  <html>
    <head>
      <title>PostgreSQL Bağlantı Testi</title>
      <style>
        body { font-family: Arial; background: #f0f0f0; padding: 50px; }
        .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px #ccc; max-width: 600px; margin: auto; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>✅ PostgreSQL Bağlantı Başarılı</h1>
      </div>
    </body>
  </html>
`);
});

app.listen(port, () => {
 console.log(`Sunucu ${port} portunda çalışıyor`);
});
