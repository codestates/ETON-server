const { tasks, progresses } = require("../../models");

module.exports = {
  createTask: async (req, res) => {
    console.log("Create Task = req.body : ", req.body);

    if (req.headers["authorization"]) {
      await tasks
        .create({
          title: req.body.title,
          description: req.body.description,
          progress_id: Number(req.body.progress_id),
        })
        .then((result) => {
          console.log("@@@", result);
          let newTaskId = result.dataValues.id;
          progresses
            .findOne({
              attributes: ["id", "title", "task_priority"],
              where: { id: result.dataValues.progress_id },
            })
            .then((result) => {
              console.log("###", result);
              console.log("newTaskId : ", newTaskId);
              let newOrder = String(newTaskId);
              if (result.task_priority !== "") {
                newOrder = "," + newOrder;
              }
              progresses
                .update(
                  {
                    task_priority: result.task_priority + newOrder,
                    // task_priority : [...result.task_priority, String(newTaskId)]
                  },
                  {
                    where: { id: result.dataValues.id },
                  }
                )
                .then((result) => {
                  console.log("성공!");
                  console.log(result);
                  res.status(200).send({ id: newTaskId, message: "ok" });
                });
            });
          // progresses.update({
          //     task_priority :
          // },{
          //     whrere : {id : result.dataValues.progress_id}
          // })
        })
        .catch((err) => {
          console.log("err : ", err);
          res.send(404).send({ message: "create error" });
        });
    } else {
      res.status(403).send({ message: "Invalid access token." });
    }
  },
};
