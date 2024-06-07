import express from 'express'
import {getUserForSideBar} from "../Controllers/userController.js"
import protectRoute from '../Middleware/middleware.js';

const router = express.Router();

router.get("/", protectRoute,getUserForSideBar);

export default router;
