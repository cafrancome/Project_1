var bodyParser = require('body-parser'),
    http = require('http'),
    express = require('express'),
    Router = express.Router(),
    Storage = require('../Storage'),
    io = require('socket.io');   

Router.get("/cities", (req, res) => {
    Storage.GetAllData()
        .then((response) => {
            var data = [];
            response.forEach(element => {                
                if(data.indexOf(element.Ciudad) < 0){
                    data.push(element.Ciudad)
                }
            });
            res.json(data)
        }).catch((err) => {
            res.sendStatus(500).json(err)
        })
})

Router.get('/types', (req, res) => {
    Storage.GetAllData()
    .then((response) => {
        var data = [];
        response.forEach(element => {                
            if(data.indexOf(element.Tipo) < 0){
                data.push(element.Tipo)
            }
        });
        res.json(data)
    }).catch((err) => {
        res.sendStatus(500).json(err)
    })
})

Router.get('/home', (req, res) => {
    Storage.GetAllData()
    .then((data) => {       
        res.json(data)
    }).catch((err) => {
        res.sendStatus(500).json(err)
    })
})

module.exports = Router;