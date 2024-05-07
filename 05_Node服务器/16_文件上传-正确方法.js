const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  request.setEncoding("binary");

  const binary = request.headers["content-type"]
    .split("; ")[1]
    .replace("boundary=", "");
  console.log("服务器被访问");
  let formData = "";

  request.on("data", (data) => {
    console.log(data);
    formData += data;
  });

  request.on("end", () => {
    console.log(formData);
    const imageType = "image/jpeg";
    const imageTypePosition = formData.indexOf(imageType) + imageType.length;
    let imageData = formData.substring(imageTypePosition);

    // imageData开始会有俩空格
    imageData = imageData.replace(/^\s\s*/, "");

    // 替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${binary}--`));

    // 将imageData的数据存储到文件中
    fs.writeFile("./bar.png", imageData, "binary", (err) => {
      if (!err) {
        console.log("上传成功");
      }
    });

    console.log("文件上传成功");
    response.end("文件上传成功");
  });
});

server.listen(8000, () => {
  console.log("服务器启动成功");
});
