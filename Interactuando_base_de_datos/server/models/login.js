const mongoose = require('mongoose')

const Schema = mongoose.Schema

let LoginSchema = new Schema({
    nombre: {type: String, required: true},
    Apellido: {type: String, required: true},
    Edad: {type: Number, required: false},
    Sexo: {type: String, required: true, enum: ['M', 'F']},
    Identificacion: {type: String, required: true},
    UserName: {type: String, required: true},
    Password: {type: String, required: true, minlength:6}
})

let Login = mongoose.model('User', LoginSchema)

module.exports = Login
