const mysql = require("mysql2/promise");

// const connection = mysql.createConnection({
//   host: db_host,
//   port: db_port,
//   user: db_user,
//   password: db_password,
//   database: db_name,
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Adjust the connection limit as needed
  waitForConnections: true,
  queueLimit: 0, // No limit on the queue length
});

module.exports = connection;
