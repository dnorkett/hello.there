const express = require('express');
const router = express.Router();
const Character = require('../model/Character');


//get a list of characters from the database
router.get('/api/characters', (req,res, next) => {    
    res.send({type: 'GET'});
});

//add a new character to the database
router.post('/api/characters', (req, res, next) => {    
    Character.create(req.body)
        .then(character => {
            res.send({character});
        }).catch(next);    
});

//update an existing character in the database
router.put('/api/characters/:id', (req,res, next) => {
    res.send({type: 'PUT'});
});

//delete a character from the database
router.delete('/api/characters/:id', (req,res, next) => {
    res.send({type: 'DELETE'});
});


module.exports = router;