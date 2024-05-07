const express = require("express");

// 创建express实例
const app = express();

// 给express创建的app传入一个回调函数
// 传入的回调函数就是个中间件

// 客户端访问url /login
app.post("/login", (request, response, next) => {
  // 处理login请求
  response.end("登录成功");
});

app.get("/home", (request, response) => {
  response.end("home data");
});

// 启动服务器 并且监听端口
app.listen(9000, () => {
  console.log("express服务器启动成功~ 9000");
});
