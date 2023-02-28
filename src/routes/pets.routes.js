import { Router } from "express";
import {
  getPet,
  getPets,
  createPet
} from "../controllers/pet.controller.js";

const router = Router();

// Routes
router.post("/create", createPet);
router.get("/list", getPets);
router.get("/:id_user", getPet);

export default router;
