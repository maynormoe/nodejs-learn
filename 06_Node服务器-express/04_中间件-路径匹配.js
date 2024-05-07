const express = require("express");

const app = express();

// 不会对method进行x=限制
app.use("/home", (request, response, next) => {
  response.end("match home path");
});

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
