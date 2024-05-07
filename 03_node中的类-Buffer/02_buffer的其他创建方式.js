const fs = require("fs");

// 创建一个Buffer对象
// 8个byte大小的Buffer内存空间
const buf1 = Buffer.alloc(8);
console.log(buf1);

// 手动对每个字节进行操作
console.log(buf1[0]);
console.log(buf1[1]);

buf1[0] = "m".charCodeAt();
buf1[1] = 0x66;

console.log(buf1.toString());
