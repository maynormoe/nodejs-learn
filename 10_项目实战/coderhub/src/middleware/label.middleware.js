const labelService = require("../service/label.service");

const verifyLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const newLabels = [];
  for (const label of labels) {
    const result = await labelService.findLabelByName(label);
    console.log("result", result);
    const labelObj = { name: label };
    if (result) {
      // 获取label的id
      labelObj.id = result.id;
    } else {
      // 插入新标签
      const insertResult = await labelService.create(label);
      labelObj.id = insertResult.insertId;
    }
    newLabels.push(labelObj);
  }
  // 所有label [{name: '标签1', id: 1}, {name: '标签2', id: 2}]
  ctx.labels = newLabels;

  await next();
};

module.exports = {
  verifyLabelExists,
};
