const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  // 创建可写流
  const ws = fs.createWriteStream("./foo.png", {
    flags: "a+",
  });
  request.on("data", (data) => {
    console.log(data);
    ws.write(data);
  });

  request.on("end", () => {
    console.log("文件上传成功");
    ws.close();
    response.end("文件上传成功");
  });
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
