const EventEmitter = require("events");

function handleListenEvent(name) {
  console.log("监听到事件", name);
}

const eventEmitter = new EventEmitter();
eventEmitter.on("listen", handleListenEvent);

setTimeout(() => {
  eventEmitter.emit("listen", "maynor");

  eventEmitter.off("listen", handleListenEvent);
  setTimeout(() => {
    eventEmitter.emit("listen");
  }, 1000);
}, 2000);
