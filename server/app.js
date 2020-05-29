const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


//Middleware
//General middleware
app.use(express.static('react/publicz/'))
app.use(bodyParser.json());
app.use(routes);

//Error handling middleware
app.use((err, req, res, next) => {    
    res.status(422)
    res.send({error: err.message})
});


//Establish connection to MongoDB
mongoose.connect(process.env.DB_CONNECT, 
                { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, 
                () => console.log('Connected to MongoDB'));


//Listen 
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
