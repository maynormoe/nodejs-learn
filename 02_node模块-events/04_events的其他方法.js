const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// eventEmitter.on("code", () => {});
// eventEmitter.on("code", () => {});
// eventEmitter.on("code", () => {});
eventEmitter.once("code", () => {
  console.log("写代码");
}); // 只监听执行一次

// 将事件监听添加到最前面
eventEmitter.prependListener("code", () => {
  console.log("写代码2");
});

eventEmitter.emit("code");
eventEmitter.emit("code");
eventEmitter.emit("code");

// 获取所有监听器的名称
// [ 'code' ]
console.log(eventEmitter.eventNames());

// 获取最大监听器个数
console.log(eventEmitter.getMaxListeners());

// 获取某个事件的监听器个数
console.log(eventEmitter.listenerCount("code"));

// 获取某一个事件获取的监听器函数
console.log(eventEmitter.listeners("code"));

// 移除所有的事件监听
// 在传递参数的情况下 只会移除传递参数的事件监听
// 不传递参数 移除所有
eventEmitter.removeAllListeners("code");
