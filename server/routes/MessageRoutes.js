import express from "express";
const router = express.Router();
import { GetAllMessages } from "../controllers/MessagesController.js";

router.get("/", GetAllMessages);

module.exports = router;
