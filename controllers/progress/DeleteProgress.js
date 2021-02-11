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
    const { board_id, progress_id, prg_priority } = req.query;
    let count = await progresses.count({ where: { id: progress_id } });
    console.log(count);
    if (count === 0) {
      res.status(404).send({ message: "The progress does not exist." });
    } else {
      let board = await boards.findOne({
        where: { id: board_id },
        attributes: ["id", "prg_priority"],
      });
      console.log("========================");
      console.log(board);
      console.log("=========================");

      let newVal = board.dataValues.prg_priority
        .split(",")
        .filter((el) => el !== String(progress_id))
        .join(",");

      console.log(newVal);

      board.update({ prg_priority: newVal });
      console.log("========================");
      console.log(board);
      console.log("=========================");

      tasks.destroy({ where: { progress_id } });
      progresses.destroy({ where: { id: progress_id } });

      res.status(200).send({
        id: progress_id,
        message: "Ok",
      });
    }
  }
};
