const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  // 方式一
  //   response.statusCode = 403;

  // 方式二 设置header
  response.writeHead(403, {
    "Content-Type": "text/html",
  });
  response.end("hello world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
