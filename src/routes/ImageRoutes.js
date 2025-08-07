import { Router } from "express";
import ImagesController from "../controllers/ImagesController.js";

const router = Router();

router.get("/geturl/:folder/:path", ImagesController.getImageURL);
router.get("/geturl/:folder", ImagesController.getAllImagesURL);

export default router