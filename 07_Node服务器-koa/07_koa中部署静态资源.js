const Koa = require("koa");
const static = require("koa-static");

const app = new Koa();

app.use(static("./uploads"));
// app.use(static("./build"));

app.listen(8000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
