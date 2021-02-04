const { users } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

function isEmailUnique(req, res) {
  console.log('====req.body==========')
  console.log(req.body)
  console.log('===================')
  let { email } = req.body
  users.count({
    where: { email }
  }).then(count => {
    if(count === 0) {
      res.status(200).json({message: "You can use this email."})
    } else {
      res.status(409).json({ message: "This email's already registered." })
    }
  })
}

async function signup(req, res){
  if (Object.keys(req.body).length < 3) {
    res.status(409).send("Please fill every field")
  } else {
    console.log('====req.body==========')
    console.log(req.body)
    console.log('===================')
    let { username, email, password } = req.body;
    let exUser = await users.findOne({
      where: { email }
    });
    if (exUser) {
      res.status(409).send({ message: "This email's already registered." });
    } else {
      await users.create({
        username,
        email,
        password,
      })
      res.status(201).json({ data: null, message: 'Your sign-up completed' })
    }
  }
}

module.exports = {isEmailUnique, signup}