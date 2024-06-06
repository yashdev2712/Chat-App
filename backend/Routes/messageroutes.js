import express from "express";
const router = express.Router();
import { sendMessage } from "../Controllers/messageController.js"

router.post("/send/:id", sendMessage);

export default router;