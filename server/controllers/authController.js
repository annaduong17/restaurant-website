const pool = require("../models/user");
const bcrypt = require('bcrypt');
const authController = {};

function errorCreator(funcName, error) {
  return {
    log: `Express error handler caught ${funcName} error with message ${error.message}`, 
    status: 400, 
    message: { err: error.message },
  };
}

authController.checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const checkUser = `SELECT * FROM public.users WHERE email = $1;`;
    const { rows } = await pool.query(checkUser, [email]);

    if (!rows.length) {
      return next();
    } else {
      return res.status(200).json({ success: false });
    }

  } catch (error) {
    return next(errorCreator('checkUser', error));
  }
}

authController.getUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const queryString = `SELECT * FROM public.users WHERE email = $1;`;
    const { rows } = await pool.query(queryString, [email]);

    console.log(rows[0].password);

    if (rows.length) {
      const valid = await bcrypt.compare(password, rows[0].password);
      console.log(valid);

      if (valid) {
        res.locals.userId = rows[0]._id;
        res.locals.firstName = rows[0].first_name;
      }
    }
    return next();

  } catch (error) {
    return next(errorCreator('getUser', error));
  }
}

authController.registerUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const pwHash = await bcrypt.hash(password, salt);
    const insertUser = `INSERT INTO public.users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`;
    const params = [first_name, last_name, email, pwHash];
    const { rows } = await pool.query(insertUser, params);
    if (rows.length) {
      res.locals.userId = rows[0]._id;
      res.locals.firstName = rows[0].first_name;
    }

    return next();
  } catch (error) {
    return next(errorCreator('registerUser', error));
  }
}

module.exports = authController;