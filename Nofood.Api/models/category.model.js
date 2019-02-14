'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    title: {trim: true, index: true, required: true, type: String},
    description: {type: String},
    photo: {type: String, required: true},
    active: {type: Boolean, required: true},
    dateCreate: {type: Date, default: Date.now}

}, {versionKey: false});

categoriaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dateCreate)
        this.dateCreate = agora;
    next();
});

module.exports = mongoose.model('Categoria', categoriaModel);