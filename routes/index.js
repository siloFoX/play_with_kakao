var express = require("express");
var router = express.Router();

const main = require("./main");
const testKakao = require("./testKakao");

router.use('/', main);
router.use("/testKakao", testKakao);

module.exports = router;