var express = require("express");
var router = express.Router();

const controllers = require("../controllers");

// console.log(controllers);

router.get("/", controllers.member.getAllMemberInfo);
router.get("/userinfo", controllers.member.getMemberInfo);
// router.post("/", controllers.member.addMember);
// router.post("/", controllers.member.deleteMember);

module.exports = router;

// getAllMemberInfo
// getMemberInfo
