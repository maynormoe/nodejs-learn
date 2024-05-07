const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
} = require("../config/error");
const userService = require("../service/user.service");
const { md5Password } = require("../utils/md5-password");

const validateUser = async (ctx, next) => {
  // 验证一些逻辑  用户名或密码是否为空
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 判断name在数据库中是否存在
  const users = await userService.findUserByName(name);
  if (users.length) {
    return ctx.app.emit("error", NAME_ALREADY_EXISTS, ctx);
  }

  // 执行下一个中间件
  await next();
};

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

module.exports = {
  validateUser,
  handlePassword,
};
