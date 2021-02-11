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
  console.log(req.body);

  let accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    let { board_id, user_id } = req.body;

    let participant = await board_user.findOne({
      where: { board_id, user_id },
    });
    console.log("******************************");
    console.log(participant);
    console.log("******************************");
    if (participant) {
      res
        .status(404)
        .send({ message: "The user's already a member of the project." });
    } else {
      board_user.create({ board_id, user_id });
      res
        .status(201)
        .send({ id: user_id, message: "The user was added to the project." });
    }
  }
};
