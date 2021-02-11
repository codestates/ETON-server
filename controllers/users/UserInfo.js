const {
  isAuthorized,
  generateAccessToken,
  sendAccessToken,
} = require("../tokenFunctions");
const { users } = require("../../models");

function getUserInfo(req, res) {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    // return res.status(401).send("no token in req.headers['authorization']");
    return res
      .status(403)
      .json({ data: null, message: "Invalid access token." });
  }
  const { email } = accessTokenData;
  users
    .findOne({ where: { email } })
    .then((data) => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.status(404).json({
          data: null,
          message: "Access token has been tempered.",
        });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues }, message: "Ok" });
    })
    .catch((err) => {
      console.log(err);
    });
}

async function modifyUserInfo(req, res) {
  const { username } = req.body;

  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(403).send({ message: "Invalid access token." });
  } else {
    const { id } = accessTokenData;
    console.log(accessTokenData);
    await users
      .update(
        {
          username: username,
        },
        {
          where: { id },
        }
      )
      .then(() =>
        res.status(200).send({
          id: id,
          message: "Your info got modified.",
        })
      );
  }
}

module.exports = { getUserInfo, modifyUserInfo };
