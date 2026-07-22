import { Router } from "express";
import { upload } from "../utils/fileUpload.js";
import ImagesController from "../controllers/ImagesController.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

const router = Router();

router.get("/geturl/:folder/:path", ImagesController.getImageURL);
router.get("/geturl/:folder", ImagesController.getAllImagesURL);
router.post("/upload/:folder", ErrorHandler, upload.single("file"), ImagesController.uploadImage);

export default router;
