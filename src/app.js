import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import jadwalRoutes from "./routes/jadwals.routes.js";
import petRoutes from "./routes/pets.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/jadwal", jadwalRoutes);
app.use("/api/pet", petRoutes);

export default app;
