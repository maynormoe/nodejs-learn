const fs = require("fs");

// 1.一次性读取和写入文件
// fs.readFile("./aaa.txt", (err, data) => {
//   fs.writeFile(
//     "./aaa_copy.txt",
//     data,
//     {
//       flag: "w+",
//     },
//     (err) => {
//       if (err) {
//         console.log("写入文件失败", err);
//       } else {
//         console.log("写入文件成功");
//       }
//     }
//   );
// });

// 方式二：创建可读流和可写流
const rs = fs.createReadStream("./foo.txt");
const ws = fs.createWriteStream("./foo_copy.txt");
// rs.on("data", (data) => {
//   ws.write(data);
// });

// rs.on("end", () => {
//   ws.close();
// });

// 在可读流和可写流中 建立一条管道
rs.pipe(ws);
