const connection = require("../app/database");
const { connect } = require("../app/database");
const formatDateTime = require("../utils/format-date");

class MomentService {
  async create(content, userId) {
    const statement = `INSERT INTO moment (content, user_id, create_at, update_at) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [
      content,
      userId,
      formatDateTime(new Date()),
      formatDateTime(new Date()),
    ]);
    return result;
  }

  async queryList(offset, limit) {
    const statement = `SELECT 
  m.id id, m.content content, m.create_at createAt, m.update_at updateAt,
  JSON_OBJECT('id', u.id, 'name',u.name, 'avatar', u.avatar_url, 'createAt',u.create_at, 'updateAt',u.update_at) user,
	(SELECT COUNT(id) FROM comment WHERE comment.moment_id = m.id) commentCount,
	(SELECT COUNT(*) FROM moment_label WHERE moment_label.moment_id = m.id) labelCount
  FROM moment m LEFT JOIN user u ON u.id = m.user_id
  LIMIT ? OFFSET ?`;
    try {
      const [result] = await connection.execute(statement, [
        String(limit),
        String((offset - 1) * limit),
      ]);
      return result;
    } catch (error) {
      console.log("查询动态列表时发生数据库错误", error);
    }
  }

  async queryById(id) {
    const statement = `
    SELECT 
  m.id id, m.content content, m.create_at createAt, m.update_at updateAt,
  JSON_OBJECT('id', u.id, 'name',u.name,'avatar', u.avatar_url, 'createAt',u.create_at, 'updateAt',u.update_at) user,
	(
	 SELECT 
	 JSON_ARRAYAGG(
		  JSON_OBJECT(
			'id', c.id, 'content', c.content, 'commentId', c.comment_id,
			'user', JSON_OBJECT('id', cu.id, 'name', cu.name)
			)
	  )	 FROM comment c
		LEFT JOIN user cu ON c.user_id = cu.id
		WHERE c.moment_id = m.id
	) comments,
	(
	  JSON_ARRAYAGG(
		  JSON_OBJECT(
			'id', l.id, 'name', l.name
			)
	  )	
	) labels,
	(SELECT COUNT(id) FROM comment WHERE comment.moment_id = m.id) commentCount,
	(SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
  FROM moment m 
	LEFT JOIN user u ON u.id = m.user_id
	LEFT JOIN moment_label ml ON ml.moment_id = m.id
	LEFT JOIN label l ON l.id = ml.label_id
	where m.id = ?
	GROUP BY m.id
    `;
    try {
      const [result] = await connection.execute(statement, [String(id)]);
      return result;
    } catch (error) {
      console.log("查询动态详情时发生数据库错误", error);
    }
  }

  async update(id, content) {
    const statement = `UPDATE moment SET content=?, update_at=? WHERE id = ?`;
    try {
      const [result] = await connection.execute(statement, [
        content,
        formatDateTime(new Date()),
        String(id),
      ]);
      return result;
    } catch (error) {
      console.log("更新动态时发生数据库错误", error);
    }
  }

  async delete(id) {
    const statement = "DELETE FROM moment WHERE id = ?";
    try {
      const [result] = await connection.execute(statement, [String(id)]);
      return result;
    } catch (error) {
      console.log("删除动态时发生数据库错误", error);
    }
  }

  async hasLabel(momentId, labelId) {
    console.log("hasLabel", momentId, labelId);
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result[0];
  }

  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?)`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }
}

module.exports = new MomentService();
