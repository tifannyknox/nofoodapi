'use strict'

// const express = require('express');
// const bodyParser = require('body-parser');
const app = require('../Nofood.Api/bin/express');
const variables = require('../Nofood.Api/bin/configuration/variables');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extend: false}));
//
// let pessoas = [];
//



app.listen(3000, () => {
    console.log(`Api iniciada na porta ${variables.Api.port}`);
});