const fs = require("fs");
// 保存客户端传递的内容到txt文件
const content = "这是客户端传递的内容";

// 文件写入

fs.writeFile(
  "./ccc.txt",
  content,
  {
    encoding: "utf-8",
    flag: "a", // 追加写入
  },
  (err) => {
    if (err) {
      console.log("写入文件错误", err);
    } else {
      console.log("写入文件成功");
    }
  }
);

//522
