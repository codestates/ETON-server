require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const privateKey = fs.readFileSync(process.env.KEY_PATH, "utf8");
const certificate = fs.readFileSync(process.env.CERT_PATH, "utf8");
const credentials = { key: privateKey, cert: certificate };
const usersRouter = require("./routes/users");
const boardRouter = require("./routes/boards");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("hey");
});
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/boards", boardRouter);

const HTTPS_PORT = process.env.HTTPS_PORT;
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(HTTPS_PORT, () =>
  console.log(`server runnning on ${HTTPS_PORT}`)
);

module.exports = httpsServer;
