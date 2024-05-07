const { OPTION_IS_NOT_ALLOW } = require("../config/error");
const permissionService = require("../service/permission.service");

const verifyPermission = async (ctx, next) => {
  const { id } = ctx.user;

  // 获取资源的name/id
  const keyName = Object.keys(ctx.params)[0];
  const resourceId = ctx.params[keyName];
  const resourceName = keyName.replace("Id", "");

  // 查询用户是否有修改资源的权限
  const isPermission = await permissionService.checkResource(
    resourceName,
    resourceId,
    id
  );
  if (!isPermission) {
    return ctx.app.emit("error", OPTION_IS_NOT_ALLOW, ctx);
  }
  await next();
};

module.exports = {
  verifyPermission,
};
