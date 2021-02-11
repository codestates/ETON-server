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

module.exports = async (req, res) => {
  console.log("======req.query==========");
  console.log(req.query);
  console.log("=========================");
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    const { board_id } = req.query;
    console.log(board_id);

    let progressData = await progresses.findAll({
      where: { board_id },
      attributes: ["id", "title", "task_priority"],
    });

    console.log("======progressData==========");
    console.log(progressData);
    console.log("==================================");

    if (progressData.length === 0) {
      res.sendStatus(404);
    } else {
      let progressList = {};
      progressData.forEach((progress) => {
        progressList[progress.dataValues.id] = progress.dataValues;
      });

      console.log(progressList);
      res.status(200).send({ data: { progressList }, message: "Ok" });
    }
  }
};

//* 쿼리문
//select users.id, users.username from board_users left join users on board_users.user_id = users.id where board_id = 3;
