const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();

// const userRouter = express.Router();
// userRouter.get("/list", (request, response, next) => {
//   response.json({
//     message: "获取用户列表成功",
//     code: 200,
//   });
// });

// userRouter.get("/:id", (request, response, next) => {
//   response.json({
//     message: "获取用户信息成功" + request.params.id,
//     code: 200,
//   });
// });

// userRouter.post("/", (request, response, next) => {
//   response.json({
//     message: "添加用户成功",
//     code: 200,
//   });
// });

// userRouter.patch("/", (request, response, next) => {
//   response.json({
//     message: "修改用户成功",
//     code: 200,
//   });
// });

// 使用路由
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("express服务启动成功~ 端口:8000");
});
