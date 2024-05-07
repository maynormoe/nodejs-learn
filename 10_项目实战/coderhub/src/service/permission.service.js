const connection = require("../app/database");

class PermissionService {
  async checkResource(resourceName, resourceId, userId) {
    const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?`;
    try {
      const [result] = await connection.execute(statement, [
        resourceId,
        userId,
      ]);
      return !!result.length;
    } catch (error) {
      console.log("查询资源权限时发生数据库错误", error);
    }
  }
}

module.exports = new PermissionService();
