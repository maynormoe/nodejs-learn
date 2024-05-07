const fs = require("fs");

// 创建文件夹

fs.mkdir("./ddd", (err) => {
  if (err) {
    console.log("创建文件夹失败", err);
  } else {
    console.log("创建文件夹成功");
  }
});
