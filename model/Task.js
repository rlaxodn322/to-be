const mongoose = require("mongoose");
const Schema = mongoose.Schema; //몽구스 스키마 부르기.

const taskSchema = Schema(
  {
    task: {
      type: String, //데이터 타입
      required: true, //필수값
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

//스키마는 작업지시서와 같다. 그러기에 모델을 생성해야한다.

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
