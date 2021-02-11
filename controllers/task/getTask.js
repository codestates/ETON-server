const {tasks, progresses, boards, sequelize} = require('../../models');


module.exports = {
    getAllTaskByBoard : async (req,res) => {
        console.log("GET ALL TASK BY BOARD! - req.query", req.query);

        let sql = `select tasks.id, tasks.title, tasks.description, boards.id as BoardID, progresses.id as ProgressId, progresses.title as progressTitle
                    from tasks
                    left join progresses
                        on tasks.progress_id = progresses.id
                    left join boards
                        on progresses.board_id = boards.id
                    where boards.id = ${req.query.board_id}`

        if (req.headers["authorization"]) {
            
            await sequelize.query(sql)
                .then(result => {
                    console.log("성공");
                    console.log(result[0]);
                    let taskList = {};
                    result[0].forEach(el => {
                        taskList[el.id] = {
                            id : el.id,
                            title : el.title,
                            description : el.description,
                            progressId : el.ProgressId,
                            progressTitle : el.progressTitle,
                            boardId : el.BoardID
                        }
                    })
                    // console.log("taskList : ", taskList);
                    res.status(200).send({message : "ok", taskList});
                })
                .catch(err => {
                    console.log("err : ", err);
                    res.status(404).send({message : "failed get data"})
                })

        }else{
            res.status(403).send({message : 'Invalid Access Token'});
        }
    },
    getAllTaskByUser : async (req,res) => {
        console.log("Get All Task by user - req.query : ", req.query);
        let sql = `select tasks.id, tasks.title, tasks.description, progresses.id as progressId, progresses.title as progressTitle, boards.id as boardId, boards.title as boardTitle, boards.admin_userid, users.id as userId, users.username
                    from tasks
                    left join progresses
                        on tasks.progress_id = progresses.id
                    left join boards
                        on progresses.board_id = boards.id
                    left join board_users 
                        on boards.id = board_users.board_id
                    left join users
                        on board_users.user_id = users.id
                    where users.id = ${req.query.user_id}`
        
        if (req.headers["authorization"]) {
            await sequelize.query(sql)
            .then(result => {
                console.log("성공~");
                console.log(result[0]);
                let taskList = [];
                result[0].forEach(el => {
                    let task = {
                        id : el.id,
                        title : el.title,
                        description : el.description,
                        progressId : el.progressId,
                        boardId : el.boardId,
                        boardTitle : el.boardTitle,
                        admin_userid : el.admin_userid,
                        userId : el.userId,
                        username : el.username
                    }
                    taskList.push(task);
                })
                res.status(200).send({message : "ok", taskList});
            })
            .catch(err => {
                console.log("err : ", err);
                res.status(404).send({message : "failed get data"})
            })
        }else{
            res.status(403).send({message : "Invalid Access Token"});
        }

    }
}