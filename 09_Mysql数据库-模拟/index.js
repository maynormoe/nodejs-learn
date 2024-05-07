const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "test",
});

const statement = `INSERT INTO products SET ?`;
const phoneJson = require("./phone.json");

phoneJson.forEach((phone) => {
  connection.query(statement, phone);
});
