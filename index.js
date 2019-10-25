const express = require('express');
const app = express();
const PORT = 3000;

app.use('/*', (req, res) => {
    return res.status(500).json({ message: 'hello from the other side ~' });
});

app.listen(PORT, () => {
    console.log('=========');
    console.log('YEAHHHHH!');
    console.log('=========');
});