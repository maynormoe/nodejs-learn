const express = require("express");

const app = express();

// 解析query
app.get("/home/list", (request, response, next) => {
  console.log(request.query);
  response.end("honmelist");
});

// 解析params
app.get("/home/:id", (request, response, next) => {
  response.end(`解析到的参数是: ${request.params.id}`);
});

app.listen(8000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
