import { Router } from "express";
import NewEventsController from "../controllers/NewEventsController.js";

const router = Router();

router.get("/", NewEventsController.getAllNewEvents);
router.get("/:newEventId", NewEventsController.getOneNewEvent);
router.post("/", NewEventsController.createNewEvent);
router.patch("/:newEventId", NewEventsController.updateNewEvent);
router.delete("/:newEventId", NewEventsController.deleteNewEvent);

export default router;
