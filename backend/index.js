const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;


app.get('/',  (req, res) => {
    res.send('Backend Server working!');
});



app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`);
    await connectDB();
});