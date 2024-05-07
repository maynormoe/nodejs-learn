const Koa = require("koa");
const path = require("path");

const bodyParser = require("koa-bodyparser");
const static = require("koa-static");

const registerRouters = require("../router");

const app = new Koa();

app.use(bodyParser());
app.use(static(path.resolve(__dirname, "../../uploads")));
registerRouters(app);

module.exports = app;

//653
