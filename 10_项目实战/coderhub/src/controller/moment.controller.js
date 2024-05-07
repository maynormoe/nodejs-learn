const momentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 获取动态内容
    const { content } = ctx.request.body;

    // 动态是谁发布的
    const { id } = ctx.user;
    // 将动态相关 的数据保存到数据库
    const res = await momentService.create(content, id);

    ctx.body = {
      code: `200`,
      message: `动态发表成功`,
      data: res,
    };
  }

  async detail(ctx, next) {
    // 获取动态id
    const { momentId } = ctx.params;
    // 从数据库中查询这条动态
    const res = await momentService.queryById(momentId);
    ctx.body = {
      code: 200,
      message: "查询成功",
      data: res,
    };
  }

  async list(ctx, next) {
    const { offset, limit } = ctx.query;
    const res = await momentService.queryList(offset, limit);
    ctx.body = {
      code: 200,
      message: "查询列表成功",
      data: res,
    };
  }

  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;

    // 更新数据库
    const res = await momentService.update(momentId, content);
    ctx.body = {
      code: 200,
      message: "修改动态成功",
      data: res,
    };
  }

  async remove(ctx, next) {
    const { momentId } = ctx.params;

    const res = await momentService.delete(momentId);

    ctx.body = {
      code: 200,
      message: "删除动态成功",
      data: res,
    };
  }

  async createLabel(ctx, next) {
    const { momentId } = ctx.params;
    const { labels } = ctx;
    try {
      for (const label of labels) {
        const isExist = await momentService.hasLabel(momentId, label.id);
        if (!isExist) {
          // 不存在插入label
          await momentService.addLabel(momentId, label.id);
        }
      }
      ctx.body = {
        code: 200,
        message: "添加标签成功",
      };
    } catch (err) {
      console.log(err);
      ctx.body = {
        code: -1005,
        message: "添加标签失败",
      };
    }
  }
}

module.exports = new MomentController();
