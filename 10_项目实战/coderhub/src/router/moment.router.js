const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  list,
  detail,
  update,
  remove,
  createLabel,
} = require("../controller/moment.controller");
const { verifyPermission } = require("../middleware/premission.middleware");
const { verifyLabelExists } = require("../middleware/label.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);

momentRouter.post(
  "/:momentId/label",
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  createLabel
);

momentRouter.get("/", list);

momentRouter.get("/:momentId", detail);

momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);

momentRouter.delete("/:momentId", verifyAuth, verifyPermission, remove);

module.exports = momentRouter;
