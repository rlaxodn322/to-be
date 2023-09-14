const Task = require("../model/Task");

const taskController = {}; //객체

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: "Success", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};
taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v");
    res.status(200).json({ status: "Success", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.body.id);
    if (!task) {
      throw new Error("App can not find the task");
    }
    const fileds = Object.keys(req.body);
    fileds.map((item) => (task[item] = req.body[item]));
    await task.save();
    res.status(200).json({ status: "Success", data: task });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};
taskController.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.body.id);
    res.status(200).json({ status: "Success", data: task });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

module.exports = taskController;
