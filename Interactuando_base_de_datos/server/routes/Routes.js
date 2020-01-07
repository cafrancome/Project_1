const Router = require('express').Router();
const Login = require('../models/login.js');
// const UserControl = require('../controller/LoginController');

Router.post('/login', function (req, res) {
    let _UserName = req.body.user,
        _Password = req.body.pass;

        Login.findOne({
        UserName: _UserName,
        Password: _Password
    }).exec(function (err, doc) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })  
})

module.exports = Router