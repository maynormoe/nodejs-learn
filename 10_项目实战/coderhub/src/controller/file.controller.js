const fileService = require("../service/file.service");
const userService = require("../service/user.service");

class FileController {
  async uploadAvatar(ctx, next) {
    console.log(ctx.request.file);
    // 获取图片信息
    const { filename, mimetype, size } = ctx.request.file;
    const { id } = ctx.user;

    // 将图片信息进行存储
    const res = await fileService.create(filename, mimetype, size, id);

    // 将图片地址信息保存到user表
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/${filename}`;
    const result = await userService.updateAvatarUrlById(avatarUrl, id);
    ctx.body = {
      code: 200,
      message: "上传头像成功",
      url: avatarUrl,
    };
  }
}

module.exports = new FileController();
