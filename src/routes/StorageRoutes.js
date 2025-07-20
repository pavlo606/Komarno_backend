import StorageController from "../controllers/StorageController.js";

import { Router } from "express";

const router = Router();

router.get("/download-image/:imagePath", StorageController.downloadImage);

export default router;
