import model from "./model.js";
export default function EnrollmentsDao(db) {
  async function findCoursesForUser(userId) {
    console.log("Finding courses for user:", userId);
    const enrollments = await model.find({ user: userId });
    console.log("Found enrollments:", enrollments);

    const enrollmentsWithCourses = await model
      .find({ user: userId })
      .populate("course");
    console.log("Populated enrollments:", enrollmentsWithCourses);

    return enrollmentsWithCourses.map((enrollment) => enrollment.course);
  }
  async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  }
  function enrollUserInCourse(userId, courseId) {
    return model.create({
      user: userId,
      course: courseId,
      _id: `${userId}-${courseId}`,
    });
  }
  function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
  }
  function unenrollAllUsersFromCourse(courseId) {
    return model.deleteMany({ course: courseId });
  }

  return {
    findCoursesForUser,
    findUsersForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse,
    unenrollAllUsersFromCourse,
  };
}
