// ---------------- SERVER.JS (FINAL WORKING VERSION) ----------------
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";

dotenv.config({ path: 'e:\\mern_intern\\react with vite\\Proj\\bend\\.env' });

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

import authRoutes from "./routers/authRoutes.js";

// ----------------- ROUTES -----------------
app.get("/", (req, res) => {
  res.send({ status: "ok", time: new Date().toISOString() });
});

app.use("/api", authRoutes);
// ----------------------------------------------------

// ---------------- MONGODB CONNECTION ----------------
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("❌ FATAL: MONGO_URI missing in .env");
  process.exit(1);
}

mongoose.set("strictQuery", false);

(async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected!");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
})();