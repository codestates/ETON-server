const { users } = require('../../models');

require('dotenv').config();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');


function callback(req, res) {
    console.log(req.body);

    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token`,
      headers: {
        accept: 'application/json',
      },
      data: {
        client_id,
        client_secret,
        code: req.body.authorizationCode
      }
    }).then((res) => {
      accessToken = res.data.access_token;
      res.status(200).json({ accessToken: accessToken })
    }).catch(e => {
      res.status(404)
    })
  }

// function handleImages (req, res) {
//   if (!req.headres.authorization) {
//     res.status(403).send({
//       message: 'No permission to access resources.'
//     })
//     return;
//   }

//   res.status(200).send({})
// }

module.exports = {callback};
