const { PORT } = require('../config.js');
const express = require('express');
const pg = require('postgres');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authController = require('./controllers/authController');
const reservationController = require('./controllers/reservationController');

const app = express(); 

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route handlers 

// catch-all route handler 

// global error handler 

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});