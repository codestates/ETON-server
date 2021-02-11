const {tasks, progresses} = require("../../models");

module.exports = {
    createTask : async (req, res) => {
        console.log("Create Task = req.body : ", req.body);

        if (req.headers["authorization"]) {

            await tasks.create({
                title : req.body.title,
                progress_id : req.body.progress_id
            })
            .then(result => {
                console.log("성공");
                console.log(result);
                res.status(201).send({message : "ok", id : result.dataValues.id})
            })
            .catch(err => {
                console.log("err : ", err);
                res.send(404).send({message : 'create error'})
            })

        }else{
            res.status(403).send({message : "Invalid access token."})
        }
    }
}