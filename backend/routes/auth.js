import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
// const bcrypt = require("bcryptjs");


const authRouter = express.Router();

authRouter.post("/Signup", async function (req, res) {
  const { name, email, username, phoneNumber, password, confirmPassword } =
    req.body;
  if (!password || !confirmPassword || password != confirmPassword) {
    res
      .status(400)
      .json({ message: "Password and ConfirmPassword should match ." });
  }
  if (!name || !email || !phoneNumber || !username) {
    res.status(400).json({ message: "Fill all the required fields." });
  }
  const existingUser = await User.find({
    $or: [{ email: email }, { phoneNumber }, { username }],
  });
  if (existingUser && existingUser.length) {
    res.status(400).json({ message: "User already exists." });
    return;
  }
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);
  const user = await User.create({
    name,
    email,
    username,
    phoneNumber,
    password: hashPassword,
  });
  res.status(201).json(user);
});

authRouter.post("/login", async function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Fill all the required fields." });
  }
  const existingUser = await User.findOne({
    username: username,
  });

  if (!existingUser) {
    res.status(400).json({ message: "User doesn't exist." });
    return;
  }
  const matchPassword = await bcrypt.compare(password, existingUser.password);
  if(!matchPassword){
    res.status(400).json({ message: "Incorrect Credentials." });
  }
  res.status(201).json(existingUser);
});

export default authRouter;
