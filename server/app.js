const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/api');
const bodyParser = require('body-parser');


//Create a new express app
const app = express();


//Middleware
app.use(bodyParser.json());
app.use(routes);

//Error handling middleware
app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422)
    res.send({error: err.message})
});


//Loads sensitive credentials and settings from .env file to process.env
dotenv.config();


//Establishes connection to MongoDB
mongoose.connect(process.env.DB_CONNECT, 
                { useNewUrlParser: true, useUnifiedTopology: true }, 
                () => console.log('Connected to MongoDB'));


//Listen 
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
