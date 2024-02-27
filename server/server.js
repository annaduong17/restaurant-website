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

// route handlers for users
app.post('/login', authController.getUser, (req, res) => {
  return res.status(201).json({ userId: res.locals.userId });
});

app.post('/register', authController.checkUser, authController.registerUser, authController.getUser, (req, res) => {
  return res.status(201).json({ userId: res.locals.userId });
});

// route handlers for reservations
app.post('/reservation', authController.postReservation, (req, res) => {
  return res.status(201).json({ reservationId: res.locals.reservationId });
});

app.delete('/reservation', authController.deleteReservation, (req, res) => {
  return res.status(200).send(`Your reservation for ${res.locals.dateTime} has been cancelled`);
})

// catch-all route handler 
app.use('*', (req, res) => {
  res.status(404).send('Page not found');
});

// global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});