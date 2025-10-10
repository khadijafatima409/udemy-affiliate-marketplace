import express from "express";
import {
  getCourses,
  getCourseById,
  getCategories,
} from "../controllers/courseController.js";
const router = express.Router();

router.get("/", getCourses);
router.get("/categories", getCategories); // optional
router.get("/:id", getCourseById);

export default router;
