const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  USER_PASSWORD_ERROR,
  UNAUTHORIZATION,
  OPTION_IS_NOT_ALLOW,
  DATA_ALREADY_EXISTS,
} = require("../config/error.js");

app.on("error", (err, ctx) => {
  let code = 0;
  let message = "";
  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      message = "用户名或密码不能为空";
      break;
    case NAME_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已存在";
      break;
    case USER_DOES_NOT_EXISTS:
      code = -1003;
      message = "用户不存在";
      break;
    case USER_PASSWORD_ERROR:
      code = -1004;
      message = "用户名或密码错误";
      break;
    case UNAUTHORIZATION:
      code = 403;
      message = "未授权";
      break;
    case OPTION_IS_NOT_ALLOW:
      code = 405;
      message = "没有操作该资源的权限";
      break;
    case DATA_ALREADY_EXISTS:
      code = -1005;
      message = "数据已存在";
      break;
    default:
      code = -1;
      message = "未知错误";
  }
  ctx.body = {
    code,
    message,
  };
});
