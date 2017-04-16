//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongo DB
mongoose.connect('mongodb://localhost:27017/contactlist');

//On connection
mongoose.connection.on('connected', () => {
    console.log('Mongo DB connected succesfuly to 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error conncting Mongo DB');
    }

});

//port no
const port = 3000;

//adding middle ware
app.use(cors());

//body parser for parsing JSON
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

//Use route if client calls /api
app.use('/api', route);



//Callback port
app.listen(port, () => {
    console.log('Server started successfuly at port :' + port);
});