const fs = require("fs");

// 冲文件中读取buffer
// fs.readFile("./aaa.txt", (err, data) => {
//   if (err) {
//     console.log("读取文件失败", err);
//   } else {
//     console.log(data);
//     data[0] = 100;
//     console.log(data.toString());
//   }
// });

fs.readFile("./bbb.jpg", (err, data) => {
  if (err) {
    console.log("读取文件失败", err);
  } else {
    console.log(data);
    // console.log(data.toString());
  }
});
