var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

router.get("/boards", controllers.task.getTask.getAllTaskByBoard);
router.get("/user", controllers.task.getTask.getAllTaskByUser);

router.post("/", controllers.task.postTask.createTask);

router.patch("/", controllers.task.patchTask.modifyTask);

router.patch("/vertical", controllers.task.patchTask.modifyTaskOrderInProgress);

router.patch("/horizontal", controllers.task.patchTask.modifyTaskProgressOrder);

router.delete("/", controllers.task.deleteTask.deleteTask);

module.exports = router;
