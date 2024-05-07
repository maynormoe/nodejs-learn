const http = require("http");

// 创建一个http对应的服务器
const server = http.createServer((request, response) => {
  // request 对象中存储了本次客户端所有请求相关的信息
  // 请求的url
  // 请求的method
  // headers
  // 请求携带的数据
  // res对象用于给客户端返回结果
  response.end("hello world");
});

// 开启对应服务器 并且告知需要监听的端口号
// 监听端口 监听1024-666535之间的端口号
server.listen(8000, () => {
  console.log("服务器启动成功");
});
