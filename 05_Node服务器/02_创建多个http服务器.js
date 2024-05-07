const http = require("http");

// 创建一个服务器
const server1 = http.createServer((request, response) => {});

server1.listen(2000, () => {
  console.log("服务器1启动成功 端口2000");
});

// 创建一个服务器
const server2 = http.createServer((request, response) => {});

server2.listen(3000, () => {
  console.log("服务器2启动成功 端口3000");
});

// 创建第三个服务器
const server3 = new http.Server((request, response) => {});
server3.listen(4000, () => {
  console.log("服务器3启动成功 端口4000");
  ``;
});
