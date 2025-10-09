import express from "express";
import { getCourses, getCourseById } from "../controllers/courseController.js";

const router = express.Router();
router.get("/", getCourses);
router.get("/:id", getCourseById);
export default router;
