const connection = require("../app/database");
const formatDateTime = require("../utils/format-date");

class commentService {
  async create(content, userId, momentId) {
    const statement = `INSERT INTO comment (content, user_id, moment_id, create_at, update_at) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [
      content,
      userId,
      momentId,
      formatDateTime(new Date()),
      formatDateTime(new Date()),
    ]);
    return result;
  }

  async reply(content, momentId, userId, commentId) {
    const statement = `INSERT INTO comment (content, user_id, moment_id, comment_id, create_at, update_at) VALUES (?, ?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [
      content,
      userId,
      momentId,
      commentId,
      formatDateTime(new Date()),
      formatDateTime(new Date()),
    ]);
    return result;
  }
}

module.exports = new commentService();
