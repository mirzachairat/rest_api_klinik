import { Router } from "express";
import {
  getJadwal,
  getJadwalAll,
  createJadwal
} from "../controllers/jadwal.controller.js";

const router = Router();

// Routes
router.post("/create", createJadwal);
router.get("/list", getJadwalAll);
router.get("/:id_user", getJadwal);


export default router;
