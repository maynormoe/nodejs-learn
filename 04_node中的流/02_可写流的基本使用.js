const fs = require("fs");

// 不适合写入大文件
// fs.writeFile(
//   "./bbb.txt",
//   "hello world",
//   {
//     encoding: "utf-8",
//   },
//   (err) => {
//     console.log("写入文件成功");
//   }
// );

const ws = fs.createWriteStream("./bbb.txt", {
  flags: "a+",
  start: 5,
});

ws.write(" hello world", (err) => {
  console.log("写入成功");
});

ws.on("close", () => {
  console.log("文件关闭");
});

// 写入完成后需要手动close
// ws.close();

// end  插入最后一段内容 关闭
ws.end("sb");
