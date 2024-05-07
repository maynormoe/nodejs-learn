const { DATA_ALREADY_EXISTS } = require("../config/error");
const labelService = require("../service/label.service");

class LabelController {
  async create(ctx, next) {
    // 获取内容
    const { name } = ctx.request.body;

    // 操作数据库存储name
    const res = await labelService.create(name);
    if (res.errno === 1062) {
      return ctx.app.emit("error", DATA_ALREADY_EXISTS, ctx);
    }
    ctx.body = {
      code: 200,
      message: "创建标签成功",
      data: res,
    };
  }

  async detail(ctx, next) {}

  async list(ctx, next) {}

  async update(ctx, next) {}

  async remove(ctx, next) {}
}

module.exports = new LabelController();
