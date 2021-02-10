const { boards } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = {
  getAllBoard : async (req,res) => {
    console.log("hihi GET ALL BOARD!");
    console.log(req.headers);

    if (req.headers["authorization"]) {
      let allBoardsInfo = await boards.findAll();
      // console.log("allBoards : ",allBoards);
      let resAllBoardsInfo = [];
      allBoardsInfo.forEach(el => {
        // console.log("zz : ", el.dataValues);
        let eachBoardInfo = {
          id : el.id,
          title : el.title,
          admin_userid : el.admin_userid,
          prg_priority : el.prg_priority
        };
        resAllBoardsInfo.push(eachBoardInfo);
      });

      res
        .status(200)
        .send({
          message : 'ok',
          data : {
            boardList : resAllBoardsInfo
          }
        })
    }


  },

  createNewBoard : async (req,res) => {
    // if (req.headers["authorization"]) {
    //   let newBoardInfo = await boards.create({
    //     admin_userid : 1,
    //     title : 'test'
    //   })

    //   console.log("newBoardInfo : ",newBoardInfo);
    // }

  }
}
