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
  console.log("======req.body==========");
  console.log(req.body);
  console.log("=========================");

  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    const { board_id, progress_id, title } = req.body;
    // let count = await progresses.count({ where: { board_id, title } });
    // console.log(count);
    // if (count > 0) {
    //   res
    //     .status(409)
    //     .send({ message: "The progress already exists on the board." });
    // } else {
    //   let progressInfo = await progresses.findOne({
    //     where: { id: progress_id },
    //     attributes: ["id", "title"],
    //   });
    //   progressInfo.update({ title });
    //   res.sendStatus(200);
    // }

    let progressInfo = await progresses.findOne({
      where: { id: progress_id },
      attributes: ["id", "title"],
    });
    if (progressInfo) {
      progressInfo.update({ title });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
};

//* 쿼리문
//select users.id, users.username from board_users left join users on board_users.user_id = users.id where board_id = 3;
