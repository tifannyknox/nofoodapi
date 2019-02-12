'use strict'

function productController() {

}

productController.prototype.post = async (req, res) => {

};
productController.prototype.put = async (req, res) => {

};
productController.prototype.get = async (req, res) => {
    res.status(200).send('Listando produtos');
};
productController.prototype.getById = async (req, res) => {
    res.status(200).send(`id ${req.params.id}`);
};
productController.prototype.delete = async (req, res) => {

};

module.exports = productController;