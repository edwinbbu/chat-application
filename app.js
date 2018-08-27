//Imports
require('dotenv-extended').load();
var express = require('express');
var path = require('path');
var parser = require('body-parser')

// basic setup
var app = express();

var port = process.env.port;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))

var server=app.listen(port, function (error) {
    console.log('Server running on port ' + port);
});
var io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log("new user connected");
    socket.username = "Anonymous";
    
    socket.on('change_username',(data)=>{
        socket.username=data.username;
    })

    socket.on('new_message',(data)=>{
    io.sockets.emit('new_message', {message: data.message, username:socket.username});
    });
})

app.get('/',(req,res)=>{
    res.render('index');
})