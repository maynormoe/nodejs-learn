const koa = require("koa");

const app = new koa();

// 注册中间件
// koa的中间件接收两个参数，第一个参数是ctx，第二个参数是next
app.use((ctx, next) => {
  console.log("中间件执行了~");
  ctx.body = "Hello Koa";
});

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
