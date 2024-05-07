const fs = require("fs");

// 同步读取文件
// const res = fs.readFileSync("./abc.txt", {
//   encoding: "utf-8",
// });
// console.log(res);
// console.log("后续代码");

// 异步读取 回调函数
// fs.readFile(
//   "./abc.txt",
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (err) {
//       console.log("读取文件错误", err);
//       return err;
//     } else {
//       console.log("异步读取文件成功", data);
//     }
//   }
// );

// console.log("后续代码");

// 异步读取 Promise
fs.promises
  .readFile("./abc.txt", {
    encoding: "utf-8",
  })
  .then((data) => {
    console.log(data);
    console.log("后续代码");
  })
  .catch((err) => {
    console.log(err);
  });
