const express = require("express");
const router = express.Router();

const indexController = require("../controllers/IndexController");

router.get("/", indexController.home);
router.get("/sucesso", indexController.sucesso);

module.exports = router;
