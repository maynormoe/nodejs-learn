const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (request, response, next) => {
  const { username, password } = request.body;

  // 对用户名和密码进行一些判断
  if (!username || !password) {
    next(-1001);
  } else if (username !== "admin" || password !== "password") {
    next(-1002);
  } else {
    response.json({
      message: "登录成功",
      code: 200,
      token: "ekfefd4545sfsdf4ty",
    });
  }
});

// 错误处理的中间件
app.use((errCode, req, res, next) => {
  const code = errCode;
  let message = "未知错误";
  switch (code) {
    case -1001:
      message = "用户名或密码不能为空";
      break;
    case -1002:
      message = "用户名或密码错误";
      break;
  }
  res.json({
    code,
    message,
  });
});

app.listen(8000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
