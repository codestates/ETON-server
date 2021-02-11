var express = require("express");
const { post } = require("..");
var router = express.Router();

const controllers = require("../controllers");

//* POST /boards

router.get("/one", controllers.boards.boards.getBoardInfo);
router.get("/all", controllers.boards.boards.getAllBoard);

router.post("/", controllers.boards.boards.createNewBoard);

router.patch("/title", controllers.boards.patchBoard.modifyBoardTitle);

router.delete("/", controllers.boards.deleteBoard.deleteBoard);
// router.post("/signin/basic", controllers.basicLogin);

// router.post("/signin/social", controllers.socialLogin.callback)

// router.get("/signup/email", controllers.basicSignup.isEmailUnique)

// router.post("/signup", controllers.basicSignup.signUp)

// '/board/patchBoard'

module.exports = router;
