require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routes/users");
const boardRouter = require("./routes/boards");

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
<<<<<<< HEAD
    origin: ["http://localhost:3000", "http://192.168.0.10:3000"],
=======
    origin: [
      "https://eton-project.ga",
      "http://192.168.0.10:3000",
      "https://192.168.0.10:3000",
    ], //! 수정 요망
>>>>>>> d02a255b24ac66c93aa1549f423fdc7f8ea95d00
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("hey");
});

app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/boards", boardRouter);

app.listen(4000, () => console.log(`server runnning on 4000`));

module.exports = app;
