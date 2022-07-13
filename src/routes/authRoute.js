const express = require("express");
const { auth } = require("../controllers/AuthController");
const authController = require("../controllers/AuthController");
const router = express.Router();

router.get("/login",authController.login)
router.get("/register",authController.register)
module.exports = router;
