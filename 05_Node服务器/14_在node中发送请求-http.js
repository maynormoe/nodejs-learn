const http = require("http");

// 发送get请求
http.get("http://localhost:8000", (response) => {
  response.on("data", (data) => {
    console.log(data.toString());
  });
});

// 发送post请求
const options = {
  hostname: "localhost",
  port: 8000,
  path: "/login",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = http.request(options, (response) => {
  response.on("data", (data) => {
    console.log(data.toString());
  });
});
// 必须条用end方法 表示写入内容完成
req.end();
