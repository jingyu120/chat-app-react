import express from "express";
const router = express.Router();
import {
  UserLogin,
  UserRegistration,
  FindUser,
} from "../controllers/UserController.js";

router.post("/login", UserLogin);
router.post("/register", UserRegistration);
router.get("/user/:userid", FindUser);

module.exports = router;
