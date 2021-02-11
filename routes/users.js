var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

router.post("/signin/basic", controllers.basicLogin);

//! 클라이언트 부분 추가
// router.get("/signin/github", controllers.socialLogin.logIntoGithub);
router.post("/signin/github/callback", controllers.socialLogin.callback);

router.post("/signup/email", controllers.basicSignup.isEmailUnique);

router.post("/signup", controllers.basicSignup.signup);

router.post("/signout", controllers.logout);

router.get("/userinfo", controllers.userInfo.getUserInfo);
router.put("/userinfo", controllers.userInfo.modifyUserInfo);
router.get("/refreshtokenrequest", controllers.refreshTokenRequest);

module.exports = router;
