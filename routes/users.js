var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

//* POST /users/signin/basic

router.post("/signin/basic", controllers.basicLogin);

<<<<<<< HEAD
//! 클라이언트 부분 추가
// router.get("/signin/github", controllers.socialLogin.logIntoGithub);
router.post("/signin/github/callback", controllers.socialLogin.callback);

router.get("/signup/email", controllers.basicSignup.isEmailUnique);
=======
router.get("/signin/github/callback", controllers.socialLogin.callback);

router.post("/signup/email", controllers.basicSignup.isEmailUnique);
>>>>>>> d02a255b24ac66c93aa1549f423fdc7f8ea95d00

router.post("/signup", controllers.basicSignup.signup);

router.post("/signout", controllers.logout);

router.get("/userinfo", controllers.userInfo.getUserInfo);
router.post("/userinfo", controllers.userInfo.modifyUserInfo);
router.get("/refreshtokenrequest", controllers.refreshTokenRequest);

module.exports = router;
