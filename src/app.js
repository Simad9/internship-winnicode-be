import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
import Routes from "./routes/routes.js";

const require = createRequire(import.meta.url);
const swaggerDocument = require("../swagger.json");

const app = express();

dotenv.config();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Swagger Documentation Endpoints
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/", Routes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.get("*", (req, res) => {
  res.send("404 - Halaman tidak ada");
});

export default app;
