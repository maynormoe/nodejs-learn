const KoaRouter = require("@koa/router");

const userRouter = new KoaRouter({ prefix: "/users" });
const userController = require("../controller/user.controller.js");
const {
  validateUser,
  handlePassword,
} = require("../middleware/user.middleware.js");
const { verifyAuth } = require("../middleware/login.middleware.js");

/**
 * 创建用户
 */
userRouter.post("/", validateUser, handlePassword, userController.create);

userRouter.get("/avatar", verifyAuth, userController.showAvatarImage);

module.exports = userRouter;
