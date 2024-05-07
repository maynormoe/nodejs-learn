const http = require("http");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  //   response.setHeader("Content-Type", "application/json;charset=utf-8");
  response.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
  });

  const list = [
    {
      name: "张三",
      age: 18,
    },
    {
      name: "张三",
      age: 18,
    },
  ];
  response.end(JSON.stringify(list));
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
