const koa = require("koa");
const KoaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const multer = require("@koa/multer");

const app = new koa();

app.use(bodyParser());
const formParser = multer();

const userRouter = new KoaRouter({ prefix: "/example" });

/**
 * 1.get params /:id
 * 2.get query ?id=1
 * 3.post json {name: 'example'}
 * 4.x-www-form-urlencoded
 * 5.post: formdata
 */

// params
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `用户id为${id}`;
});
// query
userRouter.get("./", (ctx, next) => {
  const query = ctx.query;
  ctx.body = `用户的query信息${JSON.stringify(query)}`;
});

// json
userRouter.post("/", (ctx, next) => {
  console.log(ctx.request.body, ctx.req.body);
  ctx.body = "用户的body信息";
});

// post/urlencoded

userRouter.post("/uled", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的urlencoded信息";
});

//post/formdata

userRouter.post("/formdata", formParser.any(), (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的formdata信息";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
