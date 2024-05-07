const express = require("express");
const axios = require("axios");

const app = express();

app.use((req, res, next) => {
  console.log("express中间件1");
  req.msg = "hello";
  next();
  // res.end(req.msg);
});

app.use((req, res, next) => {
  req.msg += "bbb";
  console.log("express中间件2");
  next();
});

app.use(async (req, res, next) => {
  req.msg += "ccc";
  console.log("express中间件3");
  const resData = await axios.get("http://127.0.0.1:8000/users");
  req.msg += resData;
  // 只能在这里返回结果
  res.end(req.msg);
});

app.listen(9000, () => {
  console.log("express服务启动成功~ 端口:9000");
});
