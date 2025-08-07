import { Router } from "express";
import NewEventsController from "../controllers/NewEventsController.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";
import { requireAuth } from "../middleware/Auth.js";

const router = Router();

router.get("/", ErrorHandler, NewEventsController.getAllNewEvents);
router.get("/count/:newEventCount", ErrorHandler, NewEventsController.getCountNewEvents);
router.get("/:newEventId", ErrorHandler, NewEventsController.getOneNewEvent);
router.post("/", ErrorHandler, requireAuth, NewEventsController.createNewEvent);
router.patch("/:newEventId", ErrorHandler, requireAuth, NewEventsController.updateNewEvent);
router.delete("/:newEventId", ErrorHandler, requireAuth, NewEventsController.deleteNewEvent);

export default router;
