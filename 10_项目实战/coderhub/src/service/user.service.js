const connection = require("../app/database.js");
const formatDateTime = require("../utils/format-date.js");

class UserService {
  async create(user) {
    // 获取用户信息
    const { name, password } = user;
    // 解析sql
    const statement =
      "INSERT INTO user (name, password, create_at, update_at) VALUES (?, ?, ?, ?)";

    // 执行sql
    const res = await connection.execute(statement, [
      name,
      password,
      formatDateTime(new Date()),
      formatDateTime(new Date()),
    ]);
    return res;
  }

  async findUserByName(name) {
    const statement = "SELECT * FROM user WHERE name = ?";
    const [values] = await connection.execute(statement, [name]);
    return values;
  }

  async queryAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId]);
    return result[0];
  }

  async updateAvatarUrlById(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [avatarUrl, userId]);
    return result;
  }
}

module.exports = new UserService();
