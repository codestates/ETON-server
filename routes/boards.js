var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

//* POST /boards

router.get("/", controllers.boards.boards.getAllBoard);
router.post("/", controllers.boards.boards.createNewBoard);

router.patch("/:board_id", controllers.boards.patchBoard.modifyBoard);
// router.post("/signin/basic", controllers.basicLogin);

// router.post("/signin/social", controllers.socialLogin.callback)

// router.get("/signup/email", controllers.basicSignup.isEmailUnique)

// router.post("/signup", controllers.basicSignup.signUp)

module.exports = router;
