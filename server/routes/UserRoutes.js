const router = require("express").Router();
import { SearchUsers, FindUser } from "../controllers/UserController.js";

router.get("/", SearchUsers);
router.get("/:userid", FindUser);

module.exports = router;
