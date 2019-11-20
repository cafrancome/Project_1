var express = require('express')
var GestionDatos = require('../Route')
var Router = express.Router()

Router.get('/getAllData', (req, res)=>{
    GestionDatos.GetAllData()
                .then((obj) => {
                    res.json(obj)
                }).catch((err) => {
                    res.sendStatus(500).json(err)
                })
})