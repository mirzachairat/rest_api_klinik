import { Router } from "express";
import {
  createUser,
  getUser,
  getAllUser
} from "../controllers/user.controller.js";

const router = Router();

// Routes

router.get("/list", getAllUser);
router.post("/create", createUser);
router.post("/login", getUser);

export default router;
