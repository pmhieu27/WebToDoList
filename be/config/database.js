require("dotenv").config();
const mysql = require("mysql2");

const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

// const connection = mysql.createConnection({
//   host: db_host,
//   port: db_port,
//   user: db_user,
//   password: db_password,
//   database: db_name,
// });

const connection = mysql.createPool({
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_password,
  database: db_name,
  connectionLimit: 10, // Adjust the connection limit as needed
  waitForConnections: true,
  queueLimit: 0, // No limit on the queue length
});

module.exports = connection;
