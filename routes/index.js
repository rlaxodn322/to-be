const express = require("express");
const router = express.Router(); //express에 라우터가 있음.
const taskApi = require("./task.api");

router.use("/tasks", taskApi); //tasks 으로 요청이 오면 task.api 쪽으로 바로 호출이 된다.

module.exports = router;
