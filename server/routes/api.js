const express = require('express');
const router = express.Router();
const Character = require('../model/Character');


//get a list of characters from the database
router.get('/api/characters', (req,res, next) => {    
    Character.find({})
        .then(characters => res.send(characters));
});

//get a specific character from the database based on _id
router.get('/api/characters/:id', (req,res, next) => {    
    Character.find({_id : req.params.id})
        .then(character => res.send(character))
        .catch(next);
        
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
    Character.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => Character.findOne({_id: req.params.id}))        
        .then(character => {
            res.send(character)
        }).catch(next);
});

//delete a character from the database
router.delete('/api/characters/:id', (req,res, next) => {
    Character.findByIdAndRemove({_id: req.params.id})
        .then((character) => {
            res.send(character);
        }).catch(next);   
});


module.exports = router;