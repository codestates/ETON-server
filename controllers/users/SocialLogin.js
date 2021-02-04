const { users } = require('../../models');

require('dotenv').config();

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

console.log(`client_id: ${client_id}, client_secret: ${client_secret}`)

function logIntoGithub(req,res) {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user:email`
  res.redirect(url)
}
// https://github.com/login/oauth/authorize?client_id=ba16cbd9921edd657827
// https://localhost:4000/

//! client 부분 코드
// const socialSignUp = (e) => {
//   if(e.target.textContent.includes('GitHub')){
//       window.location.assign('https://github.com/login/oauth/authorize?client_id=${client_id}');
//   }
// }


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
    })
}
      // scope: 'user:email, read:user'
      //* 위 데이터에 redirect_uri, scope 필요함


//! 재현님 코드
//   axios.post('https://github.com/login/oauth/access_token', {
//     client_id : 창섭님꺼clientId,
//     client_secret : 창섭님꺼clientPassword,
//     code : req.body.authorizationCode
// },{
//     headers : {
//         "accept" : "application/json",
//         "content-type" : 'application/json'
//     }
// })
// .then(result => axios.get('https://api.github.com/user', {
//     headers : {
//         "authorization" : `token ${result.data.access_token}`,
//         "accept" : "application/json",
//         "content-type" : "application/json"
//     }
// }) )
// .then(result => {
//     console.log("$$$ : ", result.data);
// })

// function handleImages (req, res) {
//   if (!req.headres.authorization) {
//     res.status(403).send({
//       message: 'No permission to access resources.'
//     })
//     return;
//   }

//   res.status(200).send({})
// }

module.exports = {callback, logIntoGithub};
