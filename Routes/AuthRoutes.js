const { register, login } = require("../controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddlewares");

const router = require("express").Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
