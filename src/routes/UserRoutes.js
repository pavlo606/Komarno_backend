import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

const router = Router();

router.post("/login", ErrorHandler, UserController.login);

router.get("/logout", ErrorHandler, UserController.logout)

export default router;
