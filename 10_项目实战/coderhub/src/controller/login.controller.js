const jsonwebtoken = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config/screct");

class LoginController {
  async sign(ctx, next) {
    // 获取用户信息
    const { id, name } = ctx.user;
    const payload = { id, name };

    // 生成token
    try {
      const token = await jsonwebtoken.sign(payload, PRIVATE_KEY, {
        expiresIn: 60 * 60 * 24,
        algorithm: "RS256",
      });
      console.log(token);
      // 返回token
      ctx.body = {
        code: 200,
        message: "登录成功",
        data: {
          token,
          userInfo: {
            id,
            name,
          },
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new LoginController();

//651
