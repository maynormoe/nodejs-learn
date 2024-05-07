const express = require("express");

const app = express();

app.post("/login", (request, response, next) => {
  // 设置状态码
  response.status(666);
  response.json({
    code: 0,
    message: "登录nm呢",
    list: [
      { name: "zs", age: 18 },
      { name: "ls", age: 20 },
    ],
  });
});

app.listen(8000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
