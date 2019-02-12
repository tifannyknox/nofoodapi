'use strict'
const express = require('express');

const router = express.Router();
const controller = require('../controllers/product.controller');

let _crlt = new controller();

//Read
router.get('/', _crlt.get);

router.get('/:id', _crlt.getById);
//Create
router.post('/', _crlt.post);

router.put('/:id', _crlt.put);

router.delete('/:id', _crlt.delete);

module.exports = router;