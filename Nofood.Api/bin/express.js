const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//route
const categoryRouter = require('../routes/category.route');
const productRouter = require('../routes/product.router');
//express
const app = express();
//JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

// Database
mongoose.connect(variables.Databse.connection);

//Configure route
app.use('/api/categoria', categoryRouter);
app.use('/api/produto', productRouter);

module.exports = app;