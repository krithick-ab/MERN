// ---------------- SERVER.JS (FINAL WORKING VERSION) ----------------
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ----------------- SCHEMA + MODEL -----------------
const loginSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// ✔ IMPORTANT: force mongoose to use your real collection name "logincreds"
const LoginEntry =
  mongoose.models.LoginEntry ||
  mongoose.model("LoginEntry", loginSchema, "logincreds");
// ----------------------------------------------------

// ----------------- ROUTES -----------------
app.get("/", (req, res) => {
  res.send({ status: "ok", time: new Date().toISOString() });
});

// REGISTER
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email and password required" });

    // check if exists
    const already = await LoginEntry.findOne({ email });
    if (already)
      return res.status(400).json({ message: "email already exists" });

    // hash password
    const hash = await bcrypt.hash(password, 10);

    const user = new LoginEntry({ name, email, password: hash });
    await user.save();

    return res.json({ message: "user created", id: user._id });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    if (err.code === 11000)
      return res.status(400).json({ message: "email already exists" });

    return res.status(500).json({ message: "server error" });
  }
});

// LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await LoginEntry.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "invalid credentials" });

    return res.json({
      message: "login success",
      id: user._id,
      name: user.name
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ message: "server error" });
  }
});

// GET ENTRIES
app.get("/api/entries", async (req, res) => {
  try {
    const entries = await LoginEntry.find({}, { password: 0 })
      .sort({ createdAt: -1 })
      .lean();

    return res.json(entries);
  } catch (err) {
    console.error("ENTRIES ERROR:", err);
    return res.status(500).json({ message: "server error" });
  }
});
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
