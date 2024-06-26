const { PORT } = require('../config.js');
const express = require('express');
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
  return res.status(201).json({ userId: res.locals.userId, firstName: res.locals.firstName, message: res.locals.message });
});

app.post('/register', authController.checkUser, authController.registerUser, authController.getUser, (req, res) => {
  return res.status(201).json({ userId: res.locals.userId, firstName: res.locals.firstName });
});

// route handlers for reservations
app.get('/reservations/:id', reservationController.getReservations, (req, res) => {
  return res.status(200).json(res.locals.reservations)
})
app.post('/reservations', reservationController.postReservation, (req, res) => {
  return res.status(201).json(res.locals.reservation);
});

app.delete('/reservations/:id', reservationController.deleteReservation, (req, res) => {
  return res.status(200).send(`Your reservation for ${res.locals.date} at ${res.locals.time} has been cancelled.`);
});

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