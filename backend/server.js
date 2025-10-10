import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../backend/config/db.js";
import authRoutes from "../backend/routes/authRoutes.js";
import courseRoutes from "../backend/routes/courseRoutes.js";
import affiliateRoutes from "../backend/routes/affiliateRoutes.js";
import dashboardRoutes from "../backend/routes/dashboardRoutes.js";
import categoryRoutes from "../backend/routes/categoryRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("✅ Udemy Affiliate API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/affiliate", affiliateRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on port ${process.env.PORT}`)
);
