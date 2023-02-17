import { Router } from "express";
import {
  createUser,
  getUser
} from "../controllers/user.controller.js";

const router = Router();

// Routes
router.post("/create", createUser);
router.get("/list", getUser);

export default router;
