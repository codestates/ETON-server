var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

router.get("/", controllers.progress.getProgressList);
router.post("/", controllers.progress.createProgress);
router.put("/title", controllers.progress.modifyProgressTitle);
router.put("/order", controllers.progress.modifyProgressOrder);
router.delete("/", controllers.progress.deleteProgress);

// router.get

module.exports = router;
