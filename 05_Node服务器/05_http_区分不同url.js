const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  const url = request.url;

  if (url === "/login") {
    response.end("login");
  } else if (url === '/products') {
    response.end("商品列表");
  }
  response.end("hello world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
