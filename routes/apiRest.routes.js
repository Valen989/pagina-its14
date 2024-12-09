const express = require('express');
const router = express.Router();

const mediciones = require('../public/jsons/datos');


router
    .get('/mediciones', (request, response) => {
    response.json(mediciones);
})


module.exports = router