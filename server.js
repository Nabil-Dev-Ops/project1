const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 80;

// Konfigurasi Sambungan ke Database PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'nabil_user',
  password: process.env.DB_PASSWORD || 'secretpassword123',
  database: process.env.DB_NAME || 'homelab_db',
  port: 5432,
});

// Semak dan bina jadual (Table) dalam DB jika belum wujud
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS visitors (
        id SERIAL PRIMARY KEY,
        visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Jadual database sedia digunakan!');
  } catch (err) {
    console.error('❌ Gagal bina jadual DB:', err);
  }
}

initDB();

// Route Utama Web App
app.get('/', async (req, res) => {
  try {
    // 1. Simpan rekod pelawat baharu ke dalam Database
    await pool.query('INSERT INTO visitors DEFAULT VALUES');

    // 2. Kira jumlah pelawat daripada Database
    const result = await pool.query('SELECT COUNT(*) FROM visitors');
    const totalVisitors = result.rows[0].count;

    // 3. Paparkan ke skrin browser
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Project 1 - Node + Postgres</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
          .card { background: white; padding: 30px; display: inline-block; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
          h1 { color: #2c3e50; }
          .count { font-size: 48px; color: #27ae60; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Project 1 Connected to PostgreSQL!</h1>
          <p>Laman web ini telah berjaya membaca & menulis data ke Database.</p>
          <hr>
          <h2>Jumlah Pelawat (Total Visits):</h2>
          <div class="count">${totalVisitors}</div>
          <p><small>Refresh page ini untuk tengok nombor menaik dalam DB!</small></p>
        </div>
      </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('❌ Error menyambung ke Database PostgreSQL');
  }
});

app.listen(port, () => {
  console.log(`Server Node.js berjalan di port ${port}`);
});