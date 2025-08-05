import { Router } from "express";
import NewEventsController from "../controllers/NewEventsController.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";
import { requireAuth } from "../middleware/Auth.js";

const router = Router();

router.get("/", ErrorHandler, NewEventsController.getAllNewEvents);
router.get("/count/:newEventCount", NewEventsController.getCountNewEvents);
router.get("/:newEventId", NewEventsController.getOneNewEvent);
router.post("/", requireAuth, NewEventsController.createNewEvent);
router.patch("/:newEventId", requireAuth, NewEventsController.updateNewEvent);
router.delete("/:newEventId", requireAuth, NewEventsController.deleteNewEvent);

export default router;
