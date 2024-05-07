const fs = require("fs");
// 读取文件 获取文件夹仲的文件字符串
// fs.readdir("./ddd", (err, files) => {
//   if (err) {
//     console.log("读取文件夹失败", err);
//   } else {
//     console.log("读取文件夹成功", files);
//   }
// });

// 读取文件夹 并获取文件夹中的信息
// fs.readdir("./ddd", { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.log("读取文件夹失败", err);
//   } else {
//     files.forEach((item) => {
//       if (item.isDirectory()) {
//         console.log("文件夹", item.name);
//       } else {
//         console.log("文件", item.name);
//       }
//     });
//   }
// });

// 递归读取文件夹中所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log("读取文件夹失败", err);
    } else {
      files.forEach((item) => {
        if (item.isDirectory()) {
          readDirectory(path + "/" + item.name);
        } else {
          console.log("文件", item.name);
        }
      });
    }
  });
}

readDirectory("./ddd");
