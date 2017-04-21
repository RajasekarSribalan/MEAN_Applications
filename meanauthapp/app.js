const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
// Initialize express
const app = express();

// Initialize route
const users = require('./routes/users');

// Port Number
const port = 3000;

// Connect to Mongoose
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected',()=> {
  console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',()=> {
  console.log('Failed connecting to database '+config.database);
});

// CORS Middlware
app.use(cors());  

// Set Static Folder for GUI
app.use(express.static(path.join(__dirname,'public')));

// Body Parser Middlware
app.use(bodyparser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);

// Index Route
app.get('/',(req,res) =>{
  res.send('Invalid Endpoint');
});

// Start server
app.listen(port, ()=>{
  console.log("Server is running on port :"+port);
});
