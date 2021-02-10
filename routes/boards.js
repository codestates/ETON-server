var express = require("express");
const { post } = require("..");
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

// '/board/patchBoard'



module.exports = router;
