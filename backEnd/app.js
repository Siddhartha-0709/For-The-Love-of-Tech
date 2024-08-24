import express from "express";
import cors from "cors";
import videoRouter from "./routes/video.routes.js";
import courseRouter from "./routes/course.routes.js";

const app = express();

app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/video",videoRouter);
app.use("/api/v1/course", courseRouter);


export default app