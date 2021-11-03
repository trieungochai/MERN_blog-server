import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Routed successfully");
});

export default router;
