const { users } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log('=================')
  console.log(req.body)
  console.log('=================')
  users.findOne({
    where: {
      email,
      password,
    },
  })
    .then((data) => {
      console.log('=================')
      console.log(data)
      console.log('=================')
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.json({ data: null, message: 'not authorized' });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      const refreshToken = generateRefreshToken(data.dataValues);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
