import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }),
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }),
  });
};
