const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), email VARCHAR(50), password VARCHAR(20), addline1 VARCHAR(30), addline2 VARCHAR(20), city VARCHAR(20), state CHAR(2), zip VARCHAR(5), phoneNum VARCHAR(10), ccNum VARCHAR(19), expDate DATE, cvv VARCHAR(3), billZip VARCHAR(5));"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
