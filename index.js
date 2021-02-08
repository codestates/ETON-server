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
app.use(
  cors({
    origin: "*", //! cors warning 발생 시 필요
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("hey");
});

app.use(cookieParser());

//! aws deploy만을 위한 것
// app.get("/", (req, res) => {
//   res.send("Did it!");
// });

app.use("/users", usersRouter);
app.use("/boards", boardRouter);

app.listen(4000, () => console.log(`server runnning on 4000`));

module.exports = app;
