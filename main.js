import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import posts from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
