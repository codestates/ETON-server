var express = require('express');
var router = express.Router();

const controllers = require("../controllers");

//* POST /users/signin/basic

router.post("/signin/basic", controllers.basicLogin);

router.get("/signin/github/callback", controllers.socialLogin.callback)

router.get("/signup/email", controllers.basicSignup.isEmailUnique)

router.post("/signup", controllers.basicSignup.signup)

router.post("/signout", controllers.logout)

router.get("/userinfo", controllers.userInfo.getUserInfo);
router.post("/userinfo", controllers.userInfo.modifyUserInfo);
router.get("/refreshtokenrequest", controllers.refreshTokenRequest);

module.exports = router;