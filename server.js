const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// Serve static file (index.html)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server Node.js berjalan di port ${port}`);
});