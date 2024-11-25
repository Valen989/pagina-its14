const express = require('express');
const router = express.Router();

const mediciones = require('../public/jsons/datos');


router
    .get('/mediciones', (request, response) => {
    response.json(mediciones);
})

    .get('/temp', (req, res) => { //cuando recibe un get activa esta función
let temp_alea = Math.random().toFixed(2) * 50; //genera número aleatorio de 0 a 50 y reduce a 1 decimal el resultado
    res.json({ "message": temp_alea })
}) //El parámetro req representa la petición (request) Y el parámetro res representa la respuesta (response)
    .get('/volt', (req, res) => {
let volt_alea = Math.random().toFixed(2) * 230; //genera número aleatorio de 0 a 230 y reduce a 1 decimal el resultado
    res.json({ "message": volt_alea })
})
    .post('/medicion', (request, response) => {
    const medicion = request.body; //obtenemos el json completo que llega en el cuerpo del mensaje (request)
mediciones.push(medicion);
    response.json({"registro cargado ": medicion.id}); //responde con el ID recibido en el cuerpo del mensaje (request).
    console.log(medicion); //imprimo en el servidor el valor cargado
})

    .delete('/delete/:id', (request, response) => {
    const {id} = request.params; // con {id} se filtra el valor que tiene la clave id
mediciones.pop(id) //utilizo el metodo pop para eliminar el objeto del arrays
    response.json({"elemento eliminado": id})
    console.log("DELETE: ", id)
})

    .put('/medicion/:id', (request, response) => {
    const id = request.params.id; // con params.id} se filtra el valor que se recibe por parametro en la peticion
    const indice = mediciones.findIndex(dato => dato.id == id); //se realiza una busqueda en el json por la clave id para captar el indice
    if (indice){
    const datos_body = request.body;
    mediciones[indice].valor_corriente = datos_body.valor_corriente
    mediciones[indice].valor_temp = datos_body.valor_temp
    mediciones[indice].valor_volt = datos_body.valor_volt
    mediciones[indice].valor_luz = datos_body.valor_luz
    response.json({"mensaje": "la id que se modificó es " + id})
    }
    else{
    response.status(404).json({error: "Id no encontrada" }); //en caso de estar vacio devuelvo al front mensaje
    }
    });




module.exports = router