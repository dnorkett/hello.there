const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Loads sensitive credentials and settings from .env file to process.env
dotenv.config();

app.get('/', function(req, res) {
    res.send('test')
});






//Listen 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));