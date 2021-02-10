const {
  users,
  boards,
  progresses,
  tasks,
  board_user,
  sequelize,
} = require("../../models");
const { QueryTypes } = require("sequelize");

const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require("../tokenFunctions");
const e = require("express");

module.exports = async (req, res) => {
  let accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    let { username } = req.query;
    let userData = await users.findOne({
      where: { username },
    });
    console.log(userData);
    if (!userData) {
      res
        .status(404)
        .send({ message: "There's no user or please submit correct name." });
    } else {
      let userInfo = userData.dataValues;
      delete userInfo.password;
      res.status(200).send({ data: { userInfo }, message: "ok" });
    }
  }
};

//* 쿼리문
//select users.id, users.username from board_users left join users on board_users.user_id = users.id where board_id = 3;
