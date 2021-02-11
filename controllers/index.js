module.exports = {
  basicSignup: require("./users/BasicSignup"),
  basicLogin: require("./users/BasicLogin"),
  socialLogin: require("./users/SocialLogin"),
  userInfo: require("./users/UserInfo"),
  refreshTokenRequest: require("./users/RefreshTokenRequest"),
  logout: require("./users/Logout"),
  getBoards: require("./boards/boards"),
  /////////////////
  boards: require("./boards"),

  //* member, progress
  member: require("./member"),
  progress: require("./progress"),
};
