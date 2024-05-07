const mysql2 = require("mysql2");

const connectionPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "coderhub",
  connectionLimit: 5,
});

// 是否连接成功
connectionPool.getConnection((err, connection) => {
  // 判断错误信息
  if (err) {
    console.log("连接建立失败", err);
    return;
  }

  // 获取connection 尝试与数据库建立连接
  connection.connect((err) => {
    if (err) {
      console.log("建立数据库连接失败", err);
    } else {
      console.log("数据库连接成功");
    }
  });
});
const connection = connectionPool.promise();

module.exports = connection;
