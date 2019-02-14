'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    name: {trim: true, index: true, required: true, type: String},
    description: {type: String},
    price: {type: Number, required: true},
    photo: {type: String, required: true},
    active: {type: Boolean, required: true},
    dateCreate: {type: Date, default: Date.now}

}, {versionKey: false});

produtoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dateCreate)
        this.dateCreate = agora;
    next();
});

module.exports = mongoose.model('Produto', produtoModel);