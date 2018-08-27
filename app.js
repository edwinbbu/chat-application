//Imports
require('dotenv-extended').load();
var express = require('express');
var path = require('path');
var parser = require('body-parser')
var passport = require('passport');
var session = require('express-session');
var expressLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var morgan = require('morgan');
// basic setup
var app = express();
var db=require('./config/database.js');
var port = process.env.port;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))
app.use(expressLayouts);
app.use(morgan('dev'));

app.use(session({
    secret: 'Chat Application',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // flash messages


app.use(function (req, res, next) {
    res.locals.success = req.flash('success');
    res.locals.info = req.flash('info');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

var indexRouter = require('./routes/index.js');
var loginRouter = require('./routes/login.js');
var signupRouter = require('./routes/signup.js');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

var server = app.listen(port, function (error) {
    console.log('Server running on port ' + port);
});
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("new user connected");
    socket.username = "Anonymous";

    socket.on('change_username', (data) => {
        socket.username = data.username;
    })

    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', { message: data.message, username: socket.username });
    });
})

app.get('/', (req, res) => {
    res.render('index');
})