const { boards } = require("../../models");

module.exports = {
    deleteBoard : async (req,res) => {
        console.log("DELETE BOARD! - req.query : ", req.query);
        if (req.headers["authorization"]) {
            await boards.destroy({
                where : {id : req.query.board_id}
            })
            .then(result => {
                // console.log("성공!");
                // console.log(result);
                res.status(200).send({message : 'ok'})
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : 'failed'})
            })
        }else{
            res.status(403).send({message : "Invalid access token."})
        }
    }
}
