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
const db = require("../../models");

module.exports = async (req, res) => {
  console.log("======req.body==========");
  console.log(req.body);
  console.log("=========================");
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    const { board_id, title } = req.body;
    // let [newProgressData, created] = await progresses.findOrCreate({
    //   where: { board_id, title },
    //   attributes: ["id"],
    // });

    // console.log("=========================");
    // console.log(newProgressData);
    // console.log("=========================");
    // console.log(created);
    // console.log("=========================");

    let newProgressData = await progresses.create({ board_id, title });
    console.log("================");
    console.log(newProgressData);
    console.log("================");
    let progress_id = newProgressData.dataValues.id;

    let board = await boards.findOne({ where: { id: board_id } });
    if (
      board.dataValues.prg_priority === "" ||
      board.dataValues.prg_priority === null
    ) {
      board.update({
        prg_priority: "" + progress_id,
      });
    } else {
      board.update({
        prg_priority: board.dataValues.prg_priority + "," + progress_id,
      });
    }
    console.log("=========================");
    console.log(board);
    console.log("=========================");

    res.status(201).send({
      id: progress_id,
      message: "ok",
    });
  }
};

//* 쿼리문
//select users.id, users.username from board_users left join users on board_users.user_id = users.id where board_id = 3;
