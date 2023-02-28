import { Router } from "express";
import {
  getPets,
  createPet
} from "../controllers/pet.controller.js";

const router = Router();

// Routes
router.post("/create", createPet);
router.get("/list", getPets);

export default router;
