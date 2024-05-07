const express = require("express");

const app = express();

// app.use((request, response, next) => {
//   console.log(request.headers);
//   if (request.headers["content-type"] === "application/json") {
//     request.on("data", (data) => {
//       const jsonInfo = JSON.parse(data.toString());
//       request.body = jsonInfo;
//     });

//     request.on("end", (request, response) => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.use(express.json()); // express内置的中间件 解析客户端传来json数据
app.use(express.urlencoded({ extended: true })); // 解析客户端传来的urlencoded数据

app.post("/login", (request, response, next) => {
  console.log(request.body);
});

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
