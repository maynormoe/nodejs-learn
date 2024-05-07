const express = require("express");

// 创建路由对象
const userRouter = express.Router();

// 定义路由映射关系
userRouter.get("/list", (request, response, next) => {
  response.json({
    message: "获取用户列表成功",
    code: 200,
  });
});

userRouter.get("/:id", (request, response, next) => {
  response.json({
    message: "获取用户信息成功" + request.params.id,
    code: 200,
  });
});

userRouter.post("/", (request, response, next) => {
  response.json({
    message: "添加用户成功",
    code: 200,
  });
});

userRouter.patch("/:id", (request, response, next) => {
  response.json({
    message: "修改用户成功" + request.params.id,
    code: 200,
  });
});

module.exports = userRouter;
