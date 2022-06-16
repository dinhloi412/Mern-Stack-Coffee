const Users = require("../models/userModel");
const Payments = require("../models/paymentModels");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "the email already exits" });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "the password is at 6 characters long." });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = await new Users({
        name,
        email,
        password: passwordHash,
      });
      await newUser.save();
      const accessToken = createAccessToken({ id: newUser._id });
      const refreshToken = createRefreshToken({ id: newUser._id });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        sameSite: "strict",
      });
      res.json({ msg: "Register Success", refreshToken, newUser });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User doesn't exits" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });
      const accessToken = createAccessToken({ id: user._id });
      const refreshToken = createRefreshToken({ id: user._id });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        sameSite: "strict",
      });
      res.json({ msg: "Login Successful", accessToken });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: "/" });
      return res.json({ msg: "logout" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  refreshToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshToken;
      if (!rf_token) {
        return res.status(400).json({ msg: "Please login or Register" });
      }
      jwt.verify(rf_token, process.env.REFRESH_T0KEN_SECRET, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: "Please login or Register" });
        }
        const accessToken = createAccessToken({ id: user.id });

        res.json({ user, accessToken, rf_token });
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  addCart: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id);
      if (!user) return res.status(400).json("User doesn't exits");
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          cart: req.body.cart,
        }
      );
      return res.json({ msg: "Added to cart" });
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
  history: async (req, res) => {
    try {
      const history = await Payments.find({ user_id: req.user.id });

      res.json(history);
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_T0KEN_SECRET, {
    expiresIn: "7d",
  });
};
module.exports = userCtrl;
