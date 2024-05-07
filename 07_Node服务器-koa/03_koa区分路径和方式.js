const koa = require("koa");

const app = new koa();

// 手动区分
app.use((ctx, next) => {
  console.log(ctx.path);
  if (ctx.path === "/users") {
    if (ctx.method === "GET") {
      ctx.body = "用户列表";
    } else if (ctx.method === "POST") {
      ctx.body = "创建用户成功";
    }
  } else if (ctx.path === "/home") {
    ctx.body = "首页";
  }
});

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
