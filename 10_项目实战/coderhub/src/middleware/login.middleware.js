const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  USER_PASSWORD_ERROR,
  UNAUTHORIZATION,
} = require("../config/error");
const { PUBLIC_KEY } = require("../config/screct");
const userService = require("../service/user.service");
const { md5Password } = require("../utils/md5-password");
const jsonwebtoken = require("jsonwebtoken");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 判断name和password是否为空
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 查询用户是否存在
  const users = await userService.findUserByName(name);
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", USER_DOES_NOT_EXISTS, ctx);
  }
  // 查询密码是否正确
  if (user.password !== md5Password(password)) {
    return ctx.app.emit("error", USER_PASSWORD_ERROR, ctx);
  }

  // 将用户信息挂载到ctx上
  ctx.user = user;

  await next();
};

const verifyAuth = async (ctx, next) => {
  // 从请求头中取出token
  try {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace("Bearer ", "");

    if (!token) {
      return ctx.app.emit("error", UNAUTHORIZATION, ctx);
    }
    // 根据token解析出用户信息
    const res = await jsonwebtoken.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    // 查询用户是否存在
    const users = await userService.findUserByName(res.name);
    if (users.length === 0) {
      return ctx.app.emit("error", UNAUTHORIZATION, ctx);
    }
    // 将用户信息挂载到ctx上
    ctx.user = res;
    await next();
  } catch (error) {
    console.log(error);
    if (error) {
      return ctx.app.emit("error", UNAUTHORIZATION, ctx);
    }
  }
};

module.exports = {
  verifyLogin,
  verifyAuth,
};
