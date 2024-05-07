const koa = require("koa");

const app = new koa();

// 中间件
// 从上到下，依次执行 然后回到ctx body返回结果
app.use((ctx, next) => {
  console.log("koa");
  ctx.message = "hello";
  next();

  // 返回结果
  ctx.body = ctx.message;
});

app.use((ctx, next) => {
  ctx.message += "bbb";
  console.log("koa2");
  next();
});

app.use((ctx, next) => {
  ctx.message += "ccc";
  console.log("koa3");
  next();
});

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
