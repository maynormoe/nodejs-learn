const multer = require("@koa/multer");

// 定义中间件
const uploadAvatar = multer({
  // dest: "./uploads",
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname + ".png");
    },
  }),
});

const handleAvatar = uploadAvatar.single("avatar");

module.exports = {
  handleAvatar,
};
