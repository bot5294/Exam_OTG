const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const adminRoutes = require('./routes/adminRoutes');
const apiRoutes = require('./routes/apiRoutes');
const examRoutes = require('./routes/examRoutes');
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
console.log('@app.js');
app.use('/', loginRoutes);
app.use('/user', userRoutes);
app.use('/admin',adminRoutes);
app.use('/api',apiRoutes);
app.use('/exam',examRoutes);


module.exports = app;
