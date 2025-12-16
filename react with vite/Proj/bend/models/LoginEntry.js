import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const LoginEntry =
  mongoose.models.LoginEntry ||
  mongoose.model("LoginEntry", loginSchema, "logincreds");

export default LoginEntry;