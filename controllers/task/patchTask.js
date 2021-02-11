const {tasks, progresses} = require("../../models");

module.exports = {
    modifyTask : async (req, res) => {
        console.log("modify Task! - req.body : ", req.body);

        if (req.headers["authorization"]) {

            await tasks.update({
                title : req.body.title,
                description : req.body.description
            },{
                where : {id : req.body.task_id}
            })
            .then(result => {
                console.log("성공");
                // console.log(result);
                res.status(200).send({message : 'ok'})
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : 'updated failed'})
            })
        }else{
            res.status(403).send({message : 'Invalid access token.'})
        }
    },
    modifyTaskOrderInProgress : async(req, res) => {

        console.log('modifyTaskOrderInProgress : req.body : ', req.body);

        if (req.headers["authorization"]) {
            await progresses.update({
                task_priority : req.body.task_priority
            },{
                where : {id : req.body.progress_id}
            })
            .then(result => {
                console.log("성공!");
                res.status(200).send({message : 'ok'})
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : 'failed patch'});
            })
        }else{
            res.status(403).send({message : "Invalid access token"});
        }
    },
    modifyTaskProgressOrder : async(req, res) => {
        
        console.log('modifyTaskProgressOrder : req.body : ', req.body);

        if (req.headers["authorization"]) {
            await tasks.update({
                progress_id : req.body.progress_id
            },{
                where : {id : req.body.task_id}
            })
            .then(result => {
                console.log("성공");
                res.status(200).send({message : 'Ok'})
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : "failed patch"});
            })
        }else{
            res.status(403).send({message : "Invalid access token"});
        }
    }
}