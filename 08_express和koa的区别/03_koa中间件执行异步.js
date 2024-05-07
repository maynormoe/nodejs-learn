const koa = require("koa");
const axios = require("axios");

const app = new koa();

// 中间件
// 从上到下，依次执行 然后回到ctx body返回结果
app.use(async (ctx, next) => {
  console.log("koa");
  ctx.message = "hello";
  await next();

  // 返回结果
  ctx.body = ctx.message;
});

app.use(async (ctx, next) => {
  ctx.message += "bbb";
  console.log("koa2");
  // 如果执行的下一个中间件是一个异步函数·那么next默认不会等到中间件的结果就会执行下一步操作;
  //·如果我们希望等待下一个异步函数的执行结果那么需要在next函数前面加await
  await next();
});

app.use(async (ctx, next) => {
  console.log("koa3");
  const res = await axios.get("http://127.0.0.168000/user");
  ctx.message += res;
});

app.listen(7000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
