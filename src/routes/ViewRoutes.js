import { Router } from "express";

const router = Router();

router.get("/login", (_, res) => {
    res.render("login")
})

export default router;
