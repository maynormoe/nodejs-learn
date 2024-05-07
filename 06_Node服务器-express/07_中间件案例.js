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

app.use(express.json()); // express内置的中间件 解析json数据

app.post("/login", (request, response, next) => {
  console.log(request.body);
});

app.listen(8000, () => {
  console.log("express服务器启动成功~ 8000");
});
