const express = require("express");

const app = express();

app.use(express.static("./uploads"));

app.listen(8000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
