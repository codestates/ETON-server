const { isAuthorized } = require('../tokenFunctions');
const { users } = require('../../models');

function getUserInfo(req, res) {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    // return res.status(401).send("no token in req.headers['authorization']");
    return res.status(403).json({ data: null, message: 'Invalid access token.' });
  }
  const { email } = accessTokenData;
  users.findOne({ where: { email } })
    .then((data) => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.status(404).json({
          data: null,
          message: 'Access token has been tempered.',
        });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues }, message: 'Ok' });
    })
    .catch((err) => {
      console.log(err);
    })
};

async function modifyUserInfo(req, res) {
  const { id, email, password, username } = req.body
  let userInfo = await users.findOne({where: { id }})
  if(!userInfo) {
    res.status(404).json({message: "Not found."})
  } else {
    userInfo.email = email
    userInfo.password = password
    userInfo.username = username
    await userInfo.save()
    res.send(201).json({message: "Your info got modified."})
  }
}

module.exports = { getUserInfo, modifyUserInfo }