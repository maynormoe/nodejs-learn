const KoaRouter = require("@koa/router");

const labelRouter = new KoaRouter({ prefix: "/label" });

const { verifyAuth } = require("../middleware/login.middleware");
const { create } = require("../controller/label.controller");

labelRouter.post("/", verifyAuth, create);

module.exports = labelRouter;
