require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/checkout', (req, res) => {
  var {
    name,
    email,
    password,
    addline1,
    addline2,
    city,
    state,
    zip,
    phoneNum,
    ccNum,
    expDate,
    cvv,
    billZip
  } = req.body;

  var insert = `INSERT INTO responses (
    name,
    email,
    password,
    addline1,
    addline2,
    city,
    state,
    zip,
    phoneNum,
    ccNum,
    expDate,
    cvv,
    billZip
    ) VALUES (
      '${name}',
      '${email}',
      '${password}',
      '${addline1}',
      '${addline2}',
      '${city}',
      '${state}',
      '${zip}',
      '${phoneNum}',
      '${ccNum}',
      '${expDate}',
      '${cvv}',
      '${billZip}'
    )`

  db.query(insert, (err, response) => {
    if (err) throw (err);
    console.log('Response inserted!');
    res.redirect('/');
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
