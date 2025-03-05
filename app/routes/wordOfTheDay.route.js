import {
  getWordOfTheDay,
  wordforHalfHour,
} from "../controllers/wordOfTheDay.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getWordOfTheDay);
router.get("/halfhour", wordforHalfHour);

export default router;
