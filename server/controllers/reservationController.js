const pool = require("../models/user");
const reservationController = {};

function errorCreator(funcName, error) {
  return {
    log: `Express error handler caught ${funcName} error with message ${error.message}`, 
    status: 400, 
    message: { err: error.message },
  };
}
reservationController.getReservations = async (req, res, next) => {
  try {
    const { id } = req.params;

    const getReservations = `SELECT * FROM reservations WHERE user_id = $1;`

    const { rows } = await pool.query(getReservations, [id]);

    res.locals.reservations = rows;
    console.log(res.locals.reservations);
    return next();
    
  } catch (error) {
    return next(errorCreator('getReservations', error));
  }
}
reservationController.postReservation = async (req, res, next) => {
  try {
    const { user_id, date, time, num_of_guests, time_indicator } = req.body;

    const insertRes = `INSERT INTO reservations (date, time, num_of_guests, time_indicator, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *;`;

    const { rows } = await pool.query(insertRes, [ date, time, num_of_guests, time_indicator, user_id ]);

    res.locals.reservation = rows[0];
  
    return next();

  } catch (error) {
    return next(errorCreator('postReservation', error));
  }
}

reservationController.deleteReservation = async (req, res, next) => {
  try {
    const { id } = req.params; 

    const getRes = `SELECT * FROM public.reservations WHERE _id = $1;`;
    const { rows } = await pool.query(getRes, [id]);
    const date = rows[0].date;
    const time = rows[0].time;

    console.log(rows);

    const deleteRes = `DELETE FROM reservations WHERE _id = $1;`;
    await pool.query(deleteRes, [id]);

    res.locals = { date, time};
    return next();

  } catch (error ) {
    return next(errorCreator('deleteReservation', error));
  }
}

module.exports = reservationController;