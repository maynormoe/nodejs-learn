const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  // 相应方式 write
  response.write("hello");
  response.end("world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
