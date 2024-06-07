import express from "express";
const router = express.Router();
import { sendMessage, getMessage } from "../Controllers/messageController.js";
import protectRoute from "../Middleware/middleware.js"

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
