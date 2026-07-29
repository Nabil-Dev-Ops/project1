const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 80;

// Serve fail-fail statik
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'view', 'index.html');
    const publicIndexPath = path.join(__dirname, 'public', 'index.html');
    
    // Semak jika index.html wujud
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.send('<h1>🚀 Server Node.js Berjalan!</h1><p>Fail index.html belum di-copy ke folder /app.</p>');
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});