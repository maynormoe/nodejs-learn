const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("express中间件1");
  req.msg = "hello";
  next();
  res.end(req.msg);
});

app.use(async (req, res, next) => {
  req.msg += "bbb";
  console.log("express中间件2");
  next();
});

app.use((req, res, next) => {
  req.msg += "ccc";
  console.log("express中间件3");
});

app.listen(9000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
