const fs = require("fs");

const ws = fs.createWriteStream("./foo.txt", {
  // mac上面是没有任何问题的
  //   flags: "a+",
  flags: "r+", // 读取和写入
  start: 2,
});

ws.write("test");
ws.close();
