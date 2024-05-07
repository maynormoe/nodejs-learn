const fs = require("fs");

// 一次性读取
// 缺点： 1.读取大文件时，会导致内存溢出
// 2.没有办法精准控制读取什么位置
// fs.readFile("./aaa.txt", (err, data) => {
//   if (err) {
//     console.log("读取文件失败", err);
//   } else {
//     console.log(data);
//   }
// });

// 流式读取

// 创建一个可读流 highWaterMark 每次读取的大小
// 读取可控
const rs = fs.createReadStream("./aaa.txt", { start: 5, highWaterMark: 2 });
rs.on("data", (data) => {
  console.log(data);
  console.log(data.toString());
  rs.pause();
  setTimeout(() => {
    rs.resume();
  }, 2000);
});

// 补充其他的事件监听
rs.on("open", (fd) => {
  console.log("文件打开", fd);
});

rs.on("end", () => {
  console.log("文件读取完毕");
});

rs.on("close", () => {
  console.log("文件关闭");
});
