const buffer = new Buffer.from("Hello");
const buf2 = Buffer.from("你好");
console.log(buffer);
console.log("你好", buf2);

// 手动制定buffer编码
// 编码
const buf4 = Buffer.from("你好", "utf16le");
console.log(buf4);
// 解码
const str = buf4.toString("utf16le");
console.log(str);
