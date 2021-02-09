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

async function callback(req, res, next) {
  try {
    console.log(req.body);

    const githubToken = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id,
        client_secret,
        code: req.body.authorizationCode,
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
    const { email } = githubData.data.user;
    const exUser = await users.findOne({ where: { email } });
    if (!exUser) {
      await users.create({
        email,
      });
    }
    const accessToken = generateAccessToken(exUser.dataValues);
    // const refreshToken = generateRefreshToken(data.dataValues)

    // sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
  } catch (e) {
    next(err);
  }
}

module.exports = { callback };
