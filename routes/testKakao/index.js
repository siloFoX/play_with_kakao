const express = require("express");
const router = express.Router();

const controller = require("./testKakao.controller");

router.get('/', controller.main);

module.exports = router