const http = require("http");

const server = http.createServer((request, response) => {
  // request对象包含哪些信息
  // url
  console.log(request.url);
  // method
  console.log(request.method);
  // headers
  console.log(request.headers);
  console.log("服务器被访问");
  response.end("hello world");
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
