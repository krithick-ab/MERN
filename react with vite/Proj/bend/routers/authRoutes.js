import express from "express";
import { registerUser, loginUser, getEntries } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/entries", getEntries);

export default router;