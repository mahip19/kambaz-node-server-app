import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
  function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  }

  function findModulesForCourse(courseId) {
    const { modules } = db;
    const modulesForCourse = modules.filter(
      (module) => module.course === courseId
    );
    console.log("in dao: modulesforcourss ", modulesForCourse);
    return modulesForCourse;
  }

  function deleteModule(moduleId) {
    const { modules } = db;
    db.modules = modules.filter((module) => module._id !== moduleId);
  }

  function updateModule(moduleId, moduleUpdates) {
    const { modules } = db;
    const module = modules.find((module) => module._id === moduleId);
    Object.assign(module, moduleUpdates);
    return module;
  }

  return {
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule,
  };
}
