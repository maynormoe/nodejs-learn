const fs = require("fs");

// 打开文件
fs.open("./cde.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return err;
  }

  console.log("文件描述符", fd);

  // 可以根据文件描述符读取文件
  fs.fstat(fd, (err, stat) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log("文件信息", stat);
    // 读取后关闭文件
    fs.close(fd);
  });
});
