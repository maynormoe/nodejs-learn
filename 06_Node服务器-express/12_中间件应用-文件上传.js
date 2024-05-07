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

const upload = multer({
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, "./uploads");
    },
    filename: (request, file, callback) => {
      callback(null, Date.now() + "-" + file.originalname + ".png");
    },
  }),
});

app.post("/login", (request, response, next) => {
  console.log(request.body);
  response.end("login post");
});

app.post("/upload", upload.single("image"), (request, response, next) => {
  console.log(request.file);
  response.end("文件上传成功");
});

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
