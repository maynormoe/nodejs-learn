const koa = require("koa");

const app = new koa();

app.use((ctx, next) => {
  // 请求对象
  console.log(ctx.request); // koa封装
  console.log(ctx.req); // Node封装的请求对象
  // 响应对象
  console.log(ctx.response); // koa封装
  console.log(ctx.res); // Node封装的响应对象

  console.log(ctx.query);

  ctx.body = "Hello Koa";
  next();
});

app.use((ctx, next) => {
  console.log("中间件2执行了~");
  next();
});

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
