const { users } = require("../../models");

require("dotenv").config();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const axios = require("axios");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../tokenFunctions");

//* client 작성 부분? 아님 서버에서 해버리자
// function logIntoGithub(req, res) {
//   const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user`;
//   res.redirect(url);
// }

async function callback(req, res, next) {
  console.log(req.body.authorizationCode);
  const code = req.body.authorizationCode;
  try {
    console.log(req.body.authorizationCode);

    const githubToken = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id,
        client_secret,
        code,
      },
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    const githubData = await axios.get("https://api.github.com/user", {
      headers: {
        authorization: `token ${githubToken.data.access_token}`,
        accept: "application/json",
      },
    });
    console.log(githubData.data);
    const { login } = githubData.data;
    let exUser = await users.findOne({ where: { username: login } });
    if (!exUser) {
      exUser = await users.create({
        username: login,
      });
    }
    const accessToken = generateAccessToken(exUser.dataValues);
    const refreshToken = generateRefreshToken(exUser.dataValues);

    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
  } catch (e) {
    next(e);
  }
}

module.exports = { callback };
