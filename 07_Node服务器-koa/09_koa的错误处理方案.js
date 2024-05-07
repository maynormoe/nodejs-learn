const koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new koa();

const userRouter = new KoaRouter({ prefix: "/user" });

userRouter.get("/", (ctx, next) => {
  let Auth = false;
  if (Auth) {
    ctx.body = "用户页面";
  } else {
    ctx.app.emit("error", -1001, ctx);
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

//独立文件 error-handle.js
app.on("error", (code, ctx) => {
  let errCode = code || 500;
  let message = "";
  switch (errCode) {
    case -1001:
      message = "用户未登录";
      break;
    case -1002:
      message = "用户未授权";
      break;
    case -1003:
      message = "用户未找到";
      break;
  }

  const body = {
    code: errCode,
    message: message,
  };
  ctx.body = body;
});

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
