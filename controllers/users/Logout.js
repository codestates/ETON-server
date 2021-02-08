const { users } = require('../../models');

module.exports = (req, res) => {
  // console.log('=====req.headers======')
  // console.log(req.headers)
  // console.log('=====================')
  console.log("======req.headers['authorization']===========")
  console.log(req.headers['authorization'])
  console.log('=============================================')
  if(req.headers['authorization'] && req.cookies.refreshToken) {
    delete req.headers['authorization']
    res.clearCookie('refreshToken');
    res.status(200).json({ data: null, message: "You're logged out." });
  } else {
    res.status(404).json({ data:null, message: "Not authorized."})
  }
}