const { resolve } = require("path/win32");
const pool = require("../models/user");
const reservationController = {};

function errorCreator(funcName, error) {
  return {
    log: `Express error handler caught ${funcName} error with message ${error.message}`, 
    status: 400, 
    message: { err: error.message },
  };
}

reservationController.postReservation = async (req, res, next) => {
  try {
    const { user_id, date, time, cardholder_name, card_type, card_number, exp_date, cvv_cvc, billing_address } = req.body;

    const insertCard = `INSERT INTO cards (cardholder_name, card_type, card_number, exp_date, cvv_cvc, billing_address) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`;

    const { rows: cardRows } = await pool.query(insertCard, [ cardholder_name, card_type, card_number, exp_date, cvv_cvc, billing_address ]);

    const card_id = cardRows[0]._id;

    const insertRes = `INSERT INTO reservations (date, time, card_id, user_id) VALUES($1, $2, $3, $4) RETURNING *;`;

    const { rows: resRows } = await pool.query(insertRes, [ date, time, card_id, user_id ]);

    res.locals.reservationId = resRows[0]._id;
    return next();

  } catch (error) {
    return next(errorCreator('postReservation', error));
  }
}

reservationController.deleteReservation = async (req, res, next) => {
  try {
    const { id } = req.body; 

    const getRes = `SELECT * FROM public.reservations WHERE _id = $1;`;
    const { rows } = await pool.query(getRes, [id]);
    const date = rows[0].date;
    const time = rows[0].time;

    const deleteRes = `DELETE FROM reservations WHERE _id = $1;`;
    await pool.query(deleteRes, [id]);

    res.locals = { date, time};
    return next();

  } catch (error ) {
    return next(errorCreator('deleteReservation', error));
  }
}

module.exports = reservationController;