import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  getProject,
  deleteProject,
  getProjectTasks,
} from "../controllers/project.controller.js";

const router = Router();

// Routes
router.post("/create", createProject);
router.get("/list", getProjects);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id", getProject);

router.get("/:id/tasks", getProjectTasks);

export default router;
