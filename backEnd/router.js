const {
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
} = require("./controllers/Entity");

const {
  getProcedure,
  createProcedure,
  updateProcedure,
  deleteProcedure,
} = require("./controllers/Procedure");

const {
  getTool,
  createTool,
  updateTool,
  deleteTool,
} = require("./controllers/Tool");

const {
  getTransform,
  createTransform,
  updateTransform,
  deleteTransform,
} = require("./controllers/Transform");
const authController = require("./controllers/authController");

const { getTempo, createTempo } = require("./controllers/Tempo");

const registerController = require("./controllers/registerController");
const refreshTokenController = require("./controllers/refreshTokenController");
const logoutController = require("./controllers/logoutController");
const usersController = require("./controllers/usersController");
const ROLES_LIST = require("./config/roles_list");
const verifyRoles = require("./middleware/verifyRoles");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/entities", getEntity);
router.post("/entities", createEntity);
router.put("/entities/:entityID", updateEntity);
router.delete("/entities/:entityID", deleteEntity);

//router.get("/procedures", getProcedure);
//router.post("/procedure", createProcedure);
//router.put("/procedures/:procedureID", updateProcedure);
//router.delete("/entities/:procedureID", deleteProcedure);

router.get("/transforms", getTransform);
router.post("/transforms", createTransform);
router.put("/transforms/:transformID", updateTransform);
router.delete("/transforms/:transformID", deleteTransform);

router.post("/tempos", createTempo);
router.get("/tempos", getTempo);

router.post("/register", registerController.handleNewUser);
router.post("/auth", authController.handleLogin);
router.post("/refresh", refreshTokenController.handleRefreshToken);
router.post("/logout", logoutController.handleLogout);
router.get(
  "/users",

  usersController.getAllUsers
);
router.delete(
  "/users",
  verifyRoles(ROLES_LIST.Admin),
  usersController.deleteUser
);
router.get("/users:id", verifyRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;
