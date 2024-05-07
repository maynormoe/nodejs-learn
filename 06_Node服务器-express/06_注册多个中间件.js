const express = require("express");

const app = express();

// app.get('path', 中间件1, 中间件2)
app.get(
  "/home",
  (request, response, next) => {
    console.log("中间件1");
    next();
  },
  (request, response, next) => {
    console.log("中间件2");
  },
  (request, response, next) => {
    console.log("中间件3");
  }
);

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
