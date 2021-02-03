const { users } = require('../../models');

module.exports = (req, res) => {
  console.log('=====req.headers======')
  console.log(req.headers)
  console.log('=====================')
  console.log('======req.headers.accessToken===========')
  console.log(req.headers.accessToken)
  console.log('=============================================')

  if (!req.cookies.refreshToken)
    res.status(400).json({data: null, message: 'not authorized'});
  else {
    res.clearCookie('refreshToken');
    res.json({ data: null, message: 'ok' });
  }
}