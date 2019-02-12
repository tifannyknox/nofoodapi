'use strict'

function categoryController() {

}

categoryController.prototype.post = async (req, res) => {

};
categoryController.prototype.put = async (req, res) => {

};
categoryController.prototype.get = async (req, res) => {
    res.status(200).send('Funcionando');
};
categoryController.prototype.getById = async (req, res) => {
    res.status(200).send(`id ${req.params.id}`);
};
categoryController.prototype.delete = async (req, res) => {

};

module.exports = categoryController;