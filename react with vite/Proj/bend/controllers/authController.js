import bcrypt from "bcryptjs";
import LoginEntry from "../models/LoginEntry.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email and password required" });

    const already = await LoginEntry.findOne({ email });
    if (already)
      return res.status(400).json({ message: "email already exists" });

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
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await LoginEntry.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "invalid credentials" });

    return res.json({
      message: "login success",
      id: user._id,
      name: user.name,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ message: "server error" });
  }
};

export const getEntries = async (req, res) => {
  try {
    const entries = await LoginEntry.find({}, { password: 0 })
      .sort({ createdAt: -1 })
      .lean();

    return res.json(entries);
  } catch (err) {
    console.error("ENTRIES ERROR:", err);
    return res.status(500).json({ message: "server error" });
  }
};