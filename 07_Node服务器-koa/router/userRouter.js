const KoaRouter = require("@koa/router");

const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  ctx.body = "用户列表";
});

userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `用户id为${id}`;
});

userRouter.post("/", (ctx, next) => {
  ctx.body = "创建用户成功";
});

userRouter.patch("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `修改用户id为${id}成功`;
});

userRouter.delete("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = `删除用户id为${id}成功`;
});

module.exports = userRouter;
