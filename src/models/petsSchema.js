const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petsSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo_animal: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    porte: {
        type: String,
        required: true
    },
    endereço_atual: {
        type: String,
        required: false,
    },
    telefone: {
        type: String,
        required: false,
    },
    
},

    { collection: 'pets' }

);

const pets = mongoose.model('pets', petsSchema);

module.exports =  pets