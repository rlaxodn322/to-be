const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const app = express();

app.use(bodyParser.json()); //req.body 를 쉽게 불러올 수 있다.
app.use("/api", indexRouter); ///api/tasks 가 불려지면 index 로 가고 index로 가면 task.api로 간다.

const mongoURI = `mongodb://127.0.0.1:27017/to`;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
