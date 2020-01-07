var LoginData = require('../models/login.js')

module.exports.Authentication = function (_UserName, _password) {       
    LoginData.findOne({UserName:_UserName, Password: _password}).exec(function(err, doc){
        if (err) {
            
        }        
    })
}