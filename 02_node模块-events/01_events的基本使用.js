// events中的bus事件中线
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// 监听事件/发射事件

eventEmitter.on("code", () => {
  console.log("写代码");
});

setTimeout(() => {
  eventEmitter.emit("code");
}, 2000);

// eventEmitter.emit("code");
