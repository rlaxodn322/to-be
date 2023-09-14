const taskController = require("../controller/task.controller");
const express = require("express");
const router = express.Router(); //express에 라우터가 있음.

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router; //router 를 내보낼 것이다.
