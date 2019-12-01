// Archivo principal seria el archivo principal de arraque  como el metodo main 
//Importacion de modulos
var bodyParser = require('body-parser'),
    http = require('http'),
    express = require('express'),
    socketio = require('socket.io'),
    path = require('path'),
    routes = require('./Routes');

// Variables Globales
var PORT = PORT = process.env.port || 8090,
    app_root = __dirname,
    app = express(),
    Server = http.createServer(app),
    io = socketio(Server);

//Configuracion de app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(app_root, '../public')))
app.use('/Routes', routes)

Server.listen(PORT, () => {
    console.log('El sevidor esta funcionando por el puerto: ' + PORT)
})

io.on('Connection', function (socket) {
    console.log('Nuevo usuario conectado, socket: ' + socket.id);

    socket.on('userJoin', (user) => {
        //Escuchar el evento user join
        socket.user = user;
        socket.broadcast.emit('userJoin', user);
    })
})