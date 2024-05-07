const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const multer = require("multer");
const { request } = require("http");

const app = express();

app.use(express.json()); // express内置的中间件 解析客户端传来json数据
app.use(express.urlencoded({ extended: true })); // 解析客户端传来的urlencoded数据

// 第三方中间件
app.use(
  morgan("combined", { stream: fs.createWriteStream("./log/access.log") })
);

const formdata = multer();

app.post("/login", formdata.any(), (request, response, next) => {
  console.log(request.body);
  response.end("login post");
});

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
