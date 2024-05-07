const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  response.end("hello world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
