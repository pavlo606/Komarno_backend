import { Router } from "express";
import ImagesController from "../controllers/ImagesController.js";

const router = Router();

router.get("/geturl/:path", ImagesController.getImageURL);

export default router