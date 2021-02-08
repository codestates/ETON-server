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

// function logIntoGithub(req, res) {
//   const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user`;
//   res.redirect(url);
// }

async function callback(req, res, next) {
  try {
    const code = req.body.authorizationCode;
    const githubToken = await axios
      .post(
        "https://github.com/login/oauth/access_token",
        {
          client_id,
          client_secret,
          code,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        console.log(`1: ${err}`);
      });

    console.log("====================");
    console.log(githubToken);
    console.log("====================");

    const githubData = await axios.get("https://api.github.com/user", {
      headers: {
        authorization: `token ${githubToken.access_token}`,
        accept: "application/json",
      },
    });

    console.log("****************************");
    console.log(githubData.data);
    console.log("****************************");

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

// function callback(req, res, next) {
//   axios
//     .post(
//       "https://github.com/login/oauth/access_token",
//       {
//         client_id,
//         client_secret,
//         code: req.body.authorizationCode,
//       },
//       {
//         headers: {
//           accept: "application/json",
//           "content-type": "application/json",
//         },
//       }
//     )
//     .then((result) =>
//       axios.get("https://api.github.com/user", {
//         headers: {
//           authorization: `token ${result.data.access_token}`,
//           accept: "application/json",
//           "content-type": "application/json",
//         },
//       })
//     )
//     .then((result) => {
//       console.log("$$$ : ", result.data);
//       const username = result.data.login;
//       return users.findOne({ where: { username } });
//     })
//     .then((res) => {
//       if (!res) {
//         exUser = users.create({
//           username,
//         });
//       }
//       const accessToken = generateAccessToken(exUser.dataValues);
//       const refreshToken = generateRefreshToken(exUser.dataValues);

//       sendRefreshToken(res, refreshToken);
//       sendAccessToken(res, accessToken);
//     })
//     .catch((e) => {
//       next(e);
//     });
// }

module.exports = { callback };
