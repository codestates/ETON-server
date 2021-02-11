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
  console.log(req.body);
  console.log("=========================");
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    const { board_id, progress_id, prg_priority } = req.body;
    let board = await boards.findOne({ where: { id: board_id } });
    if (!board) {
      res.sendStatus(404);
    } else {
      board.update({ prg_priority });
      res.sendStatus(200);
    }
  }
};
