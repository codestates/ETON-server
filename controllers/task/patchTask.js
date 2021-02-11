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

        // {
        //     task_id : #움직인 태스크카드 번호,
        //     source : {
        //        progress_id : #출발지 번호,
        //        task_priority : 업데이트된 순서
        //     },
        //     target : {
        //        progress_id : #도착지 번호,
        //        task_priority : 업데이트된 순서
        //     },
        //   }

        if (req.headers["authorization"]) {
            await tasks.update({                                    //1.출발지의 정보들 부터 먼저 바꿔준다.
                progress_id : req.body.target.progress_id
            },{
                where : {id : req.body.task_id}
            }).then(result => {
                progresses.update({
                    task_priority : req.body.source.task_priority
                },{
                    where : {id : req.body.source.progress_id}
                })
                .then(result => {                                   //2.도착지의 정보들을 바꿔준다.
                    progresses.update({
                        task_priority : req.body.target.task_priority
                    },{
                        where : {id : req.body.target.progress_id}
                    })
                    .then(result => {
                        console.log("성공!");
                        res.status(200).send({message : 'ok'});
                    })
                })
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