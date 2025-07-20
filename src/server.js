import express from "express";

import NewEventRouter from "./routes/NewEventsRoutes.js"
import PastEventRouter from "./routes/PastEventsRoutes.js"
import StorageRouter from "./routes/StorageRoutes.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/newevents", NewEventRouter)
app.use("/pastevents", PastEventRouter)
app.use("/storage", StorageRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
