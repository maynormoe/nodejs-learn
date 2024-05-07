const commentService = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const res = await commentService.create(content, ctx.user.id, momentId);
    ctx.body = {
      code: 200,
      message: "评论成功",
      data: res,
    };
  }

  async reply(ctx, next) {
    const { id } = ctx.user;
    const { momentId, content, commentId } = ctx.request.body;
    const res = await commentService.reply(content, momentId, id, commentId);

    ctx.body = {
      code: 200,
      message: "回复成功",
      data: res,
    };
  }

  async detail(ctx, next) {}

  async list(ctx, next) {}

  async update(ctx, next) {}

  async remove(ctx, next) {}
}

module.exports = new CommentController();
