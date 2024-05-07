const connection = require("../app/database");

class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?)`;
    try {
      const [result] = await connection.execute(statement, [name]);
      return result;
    } catch (error) {
      console.log("创建标签失败", error);
      return error;
    }
  }

  async findLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name = ?`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new LabelService();
