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
    const board_id = req.query.board_id;
    let participantsData = await users.findAll({
      include: [
        {
          model: boards,
          where: { id: board_id },
          attributes: [],
        },
      ],
      attributes: ["id", "username"],
    });

    console.log("======participantsNumber==========");
    console.log(participantsData);
    console.log("==================================");

    if (participantsData.length === 0) {
      res.sendStatus(404);
    } else {
      let userList = participantsData.map(
        (participant) => participant.dataValues
      );
      console.log(userList);
      res.status(200).send({ data: { userList }, message: "Ok" });
    }
  }
};

//* 쿼리문
//select users.id, users.username from board_users left join users on board_users.user_id = users.id where board_id = 3;
