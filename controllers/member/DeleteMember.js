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
  console.log(req.query);
  let accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    let { board_id, user_id } = req.query;
    let count = await board_user.count({
      where: { board_id, user_id },
    });
    console.log(count);
    if (count === 0) {
      res
        .status(404)
        .send({ message: "The user isn't a member of the project" });
    } else {
      let participant = await board_user.findOne({
        where: { board_id, user_id },
      });
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      console.log(participant);
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      participant.destroy();
      res
        .status(200)
        .send({ message: "The member was removed from the project." });
    }
  }
};
