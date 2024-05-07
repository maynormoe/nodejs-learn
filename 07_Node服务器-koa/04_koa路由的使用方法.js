const Koa = require("koa");
const userRouter = require("./router/userRouter");

const app = new Koa();

// 注册路由
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("koa服务启动成功~ 端口:8000");
});
