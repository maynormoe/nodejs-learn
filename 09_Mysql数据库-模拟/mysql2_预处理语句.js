const mysql2 = require("mysql2");

// 创建一个链接
const connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "test",
});

// 执行操作语句 操作数据库
const statement = `SELECT * FROM products WHERE price > ?`;

connection.execute(statement, [80], (err, res, fields) => {
  if (err) {
    console.log("查询失败", err);
    return;
  }
  console.log(res);
  console.log(fields);
});
