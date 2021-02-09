require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routes/users");
const boardRouter = require("./routes/boards");
const memberRouter = require("./routes/members");
const progressRouter = require("./routes/progresses");
const taskRouter = require("./routes/tasks");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.url}, ${req.method}`);
  next();
});

//! cors warning 발생 시 origin: "*" 필요
app.use(
  cors({
    origin: [
      "https://eton-project.ga",
      "http://192.168.0.10:3000",
      "https://192.168.0.10:3000",
      "http://localhost:3000",
      "https://localhost:3000",
    ], //! 수정 요망
    credentials: true,
    sameSite: "none",
  })
);

//! 서버 작동 테스트용. 배포 전 삭제
app.get("/", (req, res) => {
  res.json("hey");
});

app.use(cookieParser());

//* 라우터
app.use("/users", usersRouter);
app.use("/boards", boardRouter);
app.use("/boards/:board_id/member", memberRouter);
app.use("/boards/:board_id/progress", progressRouter);
app.use("/boards/:board_id/tasks", taskRouter);

app.listen(4000, () => console.log(`server runnning on 4000`));

module.exports = app;
