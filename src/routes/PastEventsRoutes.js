import { Router } from "express";
import PastEventsController from "../controllers/PastEventsController.js";

const router = Router();

router.get("/", PastEventsController.getAllPastEvents);
router.get("/:pastEventId", PastEventsController.getOnePastEvent);
router.post("/", PastEventsController.createPastEvent);
router.patch("/:pastEventId", PastEventsController.updatePastEvent);
router.delete("/:pastEventId", PastEventsController.deletePastEvent);

export default router;
