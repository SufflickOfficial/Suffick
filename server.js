
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
