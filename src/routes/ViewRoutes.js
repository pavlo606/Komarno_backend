import { Router } from "express";
import { requireAuthRedirect, AuthRedirect } from "../middleware/Auth.js";

const router = Router();

router.get("/login", AuthRedirect, (_, res) => {
    res.render("login")
})

router.get("/newevents", requireAuthRedirect, (_, res) => {
    res.render("newEvents")
})

router.get("/pastevents", requireAuthRedirect, (_, res) => {
    res.render("pastEvents")
})

router.get("/", requireAuthRedirect, (_, res) => {
    res.render("index")
})


export default router;
