'use strict'

const mongoose = require('mongoose');
const categoria = mongoose.model('Categoria');

function categoryController() {

}

categoryController.prototype.post = async (req, res) => {
    let nova = new categoria(req.body);
    return nova.save();
};
categoryController.prototype.put = async (req, res) => {
    await categoria.findByIdAndUpdate(req.params.id, {$set: req.body});
    return categoria.findById(req.params.id);
};
categoryController.prototype.get = async (req, res) => {
    return categoria.find();
};
categoryController.prototype.getById = async (req, res) => {
    return categoria.findById(req.params.id);
};
categoryController.prototype.delete = async (req, res) => {
    return categoria.findByIdAndRemove(req.params.id);
};

module.exports = categoryController;