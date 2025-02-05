import { getWordOfTheDay } from "../controllers/wordOfTheDay.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getWordOfTheDay);

export default router;
