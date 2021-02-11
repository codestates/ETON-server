const {tasks} = require("../../models");

module.exports = {
    deleteTask : async (req,res) => {
        console.log("delete task! - req.query : ", req.query );

        if (req.headers["authorization"]) {
            await tasks.destroy({
                where : {id : req.query.task_id}
            })
            .then(result => {
                console.log("성공");
                res.status(200).send({message : "ok"})
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : "failed delete"})
            })
        }else{
            res.status(403).send({message : "Invalid access token"})
        }
    }
}