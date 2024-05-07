const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  const url = request.url;
  const method = request.method;

  if (url === "/login") {
    if (request.method === "POST") {
      response.end("login");
    } else {
      response.end("method not allowed");
    }
  } else if (url === "/products") {
    response.end("商品列表");
  }
  response.end("hello world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
