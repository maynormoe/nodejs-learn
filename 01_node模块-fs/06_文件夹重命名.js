const fs = require("fs");

// 文件夹重命名
// fs.rename("./code", "./kobe", (err) => {
//   if (err) {
//     console.log("重命名失败", err);
//   } else {
//     console.log("重命名成功");
//   }
// });

// 文件重命名

fs.rename("./kobe/abc.txt", "./kobe/def.txt", (err) => {
  if (err) {
    console.log("重命名失败", err);
  } else {
    console.log("重命名成功");
  }
});
