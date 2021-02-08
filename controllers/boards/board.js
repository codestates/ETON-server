const { boards } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = async (req, res) => {
  
  let boardData = boards.findAll()
  boards.findAll({
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
