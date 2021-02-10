const { boards } = require('../../models');

module.exports = {
    modifyBoardTitle : async (req,res) => {
        console.log("modifyBoardTitle! - req.body : ", req.body);
        console.log("modifyBoardTitle! - req.query : ", req.query);

        if (req.headers["authorization"]) {

            await boards.update(
                {
                    title : req.body.title
                },
                {
                    where : {id : req.query.board_id}
                }
            )
            .then(result => {
                console.log("성공!");
                res.status(200).send({message :"Ok"});
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(403).send({message : 'Not Found.'});
            })

        }else{
            res.status(403).send({message : "Invalid access token."});
        }

    }
}