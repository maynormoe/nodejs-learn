const express = require("express");

const app = express();

// 总结 当express接收到客户端的网络请求时 在所有中间件中开始匹配
//

// 通过use方法注册中间件是普通的中间件
// 通过use注册的中间件 无论什么请求方式都能匹配上
// 没有url验证
app.use((request, response, next) => {
  console.log("simple middleware");
  next(); // 继续执行下一个中间件
});

app.use((request, response, next) => {
  console.log("simple middleware");
  response.end("simple middleware2");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~ 9000");
});
