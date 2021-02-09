const { users } = require("../../models");

module.exports = (req, res) => {
  console.log("======req.headers['authorization']===========");
  console.log(req.headers["authorization"]);
  console.log("=============================================");
  if (req.headers["authorization"]) {
    delete req.headers["authorization"];
    res.status(200).json({ data: null, message: "You're logged out." });
  } else {
    res.status(404).json({ data: null, message: "Not authorized." });
  }
};
