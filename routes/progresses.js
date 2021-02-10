var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

router.get("/", controllers.progress.getProgressList);
// router.get

module.exports = router;
