import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

export default app;
