const { UPLOAD_PATH } = require("../config/path.js");
const userService = require("../service/user.service.js");
const fs = require("fs");

// const secretKey = fs.readFileSync("../config/keys/public.key");
// const privateKey = fs.readFileSync("../config/keys/private.key");

class UserController {
  async create(ctx, next) {
    // 接收前端传来的信息
    const user = ctx.request.body;

    // user创建逻辑
    const res = await userService.create(user);
    ctx.body = {
      code: 200,
      message: "创建用户成功",
      data: res,
    };
  }

  async showAvatarImage(ctx, next) {
    // 获取登录用户id
    const { id } = ctx.user;

    // 获取对应的头像信息
    const avatarInfo = await userService.queryAvatarByUserId(id);

    // 读取头像所在的文件
    const { filename, mimetype } = avatarInfo;
    ctx.type = mimetype;
    ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`);
  }
}

module.exports = new UserController();

// 648
