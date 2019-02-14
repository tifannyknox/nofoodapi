'use strict'

require('../models/category.model');
const mongoose = require('mongoose');
const categoria = mongoose.model('Categoria');

function categoryController() {

}

categoryController.prototype.post = async (req, res) => {
    let modelo = new categoria(req.body);
    let resultado = await modelo.save();
    res.status(201).send(resultado);
};
categoryController.prototype.put = async (req, res) => {
    await categoria.findByIdAndUpdate(req.params.id, {$set: req.body});
    let categoriaEncontrada = await categoria.findById(req.params.id);
    res.status(202).send(categoriaEncontrada);
};
categoryController.prototype.get = async (req, res) => {
    let lista = await categoria.find();
    res.status(200).send(lista);
};
categoryController.prototype.getById = async (req, res) => {
    let categoriaEncontrada = await categoria.findById(req.params.id)
    res.status(200).send(categoriaEncontrada);
};
categoryController.prototype.delete = async (req, res) => {
    let deletado = await categoria.findByIdAndRemove(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoryController;