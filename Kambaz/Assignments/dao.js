import { v4 as uuidv4 } from "uuid";

export default function AssignmentsDao(db) {
  // assignments for course
  function findAssignmentsForCourse(courseId) {
    const { assignments } = db;
    return assignments.filter((assignment) => assignment.course === courseId);
  }
  // create
  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  }
  // delete
  function deleteAssignment(assignmentId) {
    const { assignments } = db;
    db.assignments = assignments.filter(
      (assignment) => assignment._id !== assignmentId
    );
  }
  // update
  function updateAssignment(assignmentId, assignmentUpdate) {
    const { assignments } = db;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdate);
    return assignment;
  }

  return {
    findAssignmentsForCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}
