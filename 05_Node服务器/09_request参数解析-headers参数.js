const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  console.log(request.headers);
  request.setEncoding("utf-8");
  // 读取token cookie session
  const token = request.headers["authorization"];
  console.log(token);
  // 参数一  body类型的参数
  // request 对象本质上是一个可读流
  let isLogin = false;
  request.on("data", (data) => {
    const loginInfo = JSON.parse(data);
    if (loginInfo.username === "admin" && loginInfo.password === "admin") {
      isLogin = true;
    } else {
      isLogin = false;
    }
  });
  request.on("end", () => {
    if (isLogin) {
      response.end("login success");
    } else {
      response.end("login fail");
    }
  });
});

server.listen(8000, () => {
  console.log("服务器启动成功 8000");
});
