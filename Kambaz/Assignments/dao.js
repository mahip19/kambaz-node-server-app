import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function AssignmentsDao() {
  function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: assignment._id || uuidv4() };
    return model.create(newAssignment);
  }

  function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
  }

  function updateAssignment(assignmentId, assignmentUpdate) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdate });
  }

  function findAssignmentById(assignmentId) {
    return model.findById(assignmentId);
  }

  return {
    findAssignmentsForCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
    findAssignmentById,
  };
}
