const http = require('http'),
    path = require('path'),
    Routing = require('./routes/Routes.js')
    express= require('express'),
    bodyParser = require('body-parser'),    
    mongoose = require('mongoose');

//Puerto
const PORT = 8082
//Manejo de Rutas del servidor
const app = express()

//Cadena de conexion Base de datos MongoDb
var url = "mongodb://localhost:27017/Zero"
// Conexion base de datos
mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{ console.log('Conexion establecida con la base de datos')})
.catch((error) => { console.log(error)})

//Creacion del servidor
const Server = http.createServer(app)
//Configuracion del servidor
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client'))
app.use('/users', Routing)

// Ejecucion del Servidor
Server.listen(PORT, function() {
    console.log('El servidor esta escuchando por el puerto: ' + PORT)
})

