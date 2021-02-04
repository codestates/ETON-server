const { users } = require('../../models');

require('dotenv').config();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

function logIntoGithub(req,res) {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user:email`
  res.redirect(url)
}

function callback(req, res) {
    console.log(req.body);

    axios.post('https://github.com/login/oauth/access_token', {
        client_id,
        client_secret,
        code: req.body.authorizationCode
      }, {
        headers: {
          accept: 'application/json',
          "content-type" : 'application/json'
        },
      }
    )
    .then(result => axios.get('https://api.github.com/user', {
        headers : {
            "authorization" : `token ${result.data.access_token}`,
            "accept" : "application/json",
            "content-type" : "application/json"
          }
        }
      )
    )
    .then(result => {
      console.log(`result.data = ${result.data}`)
      
      res.send(200).json({message: 'Ok'})
    })
    .catch(e => console.log(e))
}

module.exports = {callback, logIntoGithub};
