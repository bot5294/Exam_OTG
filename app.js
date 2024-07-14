const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();
// Middleware
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  };


app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', loginRoutes);
app.use('/user', userRoutes);


module.exports = app;
