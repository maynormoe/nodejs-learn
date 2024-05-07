const koa = require("koa");
const KoaRouter = require("@koa/router");
const multer = require("@koa/multer");

const app = new koa();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

const uploadRouter = new KoaRouter({ prefix: "/upload" });

// 单个
uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = "上传成功~";
});

// 批量上传
uploadRouter.post("/photos", upload.array("photos", 10), (ctx, next) => {
  console.log(ctx.request.files);
  ctx.body = "上传成功~";
});

app.use(uploadRouter.routes());
app.use(uploadRouter.allowedMethods());

app.listen(8000, () => {
  console.log("koa服务启动成功~ 端口:8000");
});
