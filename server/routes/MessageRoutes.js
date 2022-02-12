import express from "express";
const router = express.Router();
// import { UserLogin, UserRegistration } from "../controllers/UserController.js";

// router.post("/login", UserLogin);
// router.post("/register", UserRegistration);
router.get("/", GetAllMessages);

module.exports = router;
