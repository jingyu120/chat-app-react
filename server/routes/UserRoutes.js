import express from "express";
const router = express.Router();
import { UserLogin, UserRegistration } from "../controllers/UserController.js";

router.get("/login", UserLogin);
router.put("/register", UserRegistration);

module.exports = router;
