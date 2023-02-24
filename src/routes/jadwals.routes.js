import { Router } from "express";
import {
  getJadwal,
  createJadwal
} from "../controllers/jadwal.controller.js";

const router = Router();

// Routes
router.post("/create", createJadwal);
router.get("/list", getJadwal);

export default router;
