const koa = require("koa");
const KoaRouter = require("@koa/router");
const fs = require("fs");

const app = new koa();

const userRouter = new KoaRouter({ prefix: "/user" });

userRouter.get("/", (ctx, next) => {
  // body的类型是stringo
  //   ctx.bdy = "user list data";
  // body的类型是Buffer
  //   ctx.body = Buffer.from("user list");
  // body的类型是Stream
  const readStream = fs.createReadStream("./uploads/1712651971202-bbb.jpg.png");
  ctx.type = "image/png";
  ctx.body = readStream;

  // body的类型是数据 array object
  ctx.status = 200;
  ctx.body = {
    code: 200,
    message: "用户列表",
    data: [
      {
        id: 1,
        name: "张三",
      },
      {
        id: 2,
        name: "李四",
      },
    ],
  };
  // body的值为null
  // 自动设置状态码为204
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("koa服务启动成功~ 端口:6000");
});
