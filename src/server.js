import express from "express";
import cors from "cors";

import NewEventRouter from "./routes/NewEventsRoutes.js";
import PastEventRouter from "./routes/PastEventsRoutes.js";
import StorageRouter from "./routes/StorageRoutes.js";
import UserRouter from "./routes/UserRoutes.js"
import ViewRouter from "./routes/ViewRoutes.js"

const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

var corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/newevents", NewEventRouter);
app.use("/pastevents", PastEventRouter);
app.use("/storage", StorageRouter);
app.use("/user", UserRouter);
app.use("/view", ViewRouter)

app.listen(port, host, () => {
    console.log(`Example app listening on http://${host}:${port}/`);
});
