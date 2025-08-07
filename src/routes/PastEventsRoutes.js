import { Router } from "express";
import PastEventsController from "../controllers/PastEventsController.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

const router = Router();

router.get("/", ErrorHandler, PastEventsController.getAllPastEvents);
router.get("/count/:pastEventCount", ErrorHandler, PastEventsController.getCountPastEvents);
router.get("/:pastEventId", ErrorHandler, PastEventsController.getOnePastEvent);
router.post("/", ErrorHandler, PastEventsController.createPastEvent);
router.patch("/:pastEventId", ErrorHandler, PastEventsController.updatePastEvent);
router.delete("/:pastEventId", ErrorHandler, PastEventsController.deletePastEvent);

export default router;
