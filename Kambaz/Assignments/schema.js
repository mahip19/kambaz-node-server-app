import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    description: String,
    points: Number,
    dueDate: Date,
    availableFrom: Date,
    untilDate: Date,
    group: String,
    displayGradeAs: String,
    submissionType: String,
    assignTo: [String],
    onlineEntryOptions: [String],
  },
  { collection: "assignments" }
);

export default assignmentSchema;
