const mongoose = require('mongoose');

//Create a Mongoose schema representing a character
const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is a required field']
    },
    species: {
        type: String,
        default: 'unknown species'
    },
    forceSensitive: {
        type: Boolean,
        default: false
    },
    homePlanet: {
        type: String,
        default: 'unknown origin'
    },
    notableQuote: {
        type: String,
        default: 'uh, hello?'
    }
});

const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;