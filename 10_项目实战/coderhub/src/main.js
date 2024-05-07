const app = require("./app");
const { SERVER_PORT } = require("./config/server.js");
require("./utils/handle-error.js");

app.listen(SERVER_PORT, () => {
  console.log("服务启动成功喵~ 端口：" + SERVER_PORT);
});
