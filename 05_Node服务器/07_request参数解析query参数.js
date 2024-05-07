const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((request, response) => {
  console.log("服务器被访问");
  // 参数一  query类型的参数
  // 解析url
  const urlSting = request.url;
  const urlInfo = url.parse(urlSting);

  // 解析query : offset=10&limit=10
  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);
  response.end("hello world");
  console.log(queryInfo);
});

server.listen(8000, () => {
  console.log("服务器启动成功 8000");
});
