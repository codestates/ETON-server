const { users } = require('../../models');

module.exports = (req, res) => {
  // console.log('=====req.headers======')
  // console.log(req.headers)
  // console.log('=====================')
  // console.log("======req.headers['accesstoken']===========")
  // console.log(req.headers['accesstoken'])
  // console.log('=============================================')
  if(req.headers['accesstoken'] && req.cookies.refreshToken) {
    delete req.headers['accesstoken']
    res.clearCookie('refreshToken');
    res.json({ data: null, message: "You're logged out." });
  } else {
    res.status(404).json({data:null, message: "Not authorized."})
  }
}