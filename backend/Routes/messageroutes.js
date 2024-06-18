import express from "express";
const router = express.Router();
import { sendMessage, getMessages } from "../Controllers/messageController.js";
import protectRoute from "../Middleware/middleware.js"

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
