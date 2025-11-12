import ModulesDao from "../Modules/dao.js";
export default function ModulesRoutes(app, db) {
  const dao = ModulesDao(db);
  const findModulesForCourse = (req, res) => {
    const { courseId } = req.params;
    const modules = dao.findModulesForCourse(courseId);
    //console.log("in routes: ", courseId, ": ", modules);
    res.json(modules);
  };

  const createModuleForCourse = (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = dao.createModule(module);
    console.log("newmodule in server: ", newModule);
    res.send(newModule);
  };

  const deleteModuleForCourse = (req, res) => {
    const { moduleId } = req.params;
    const status = dao.deleteModule(moduleId);
    res.send(status);
  };

  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = dao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  };

  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModuleForCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
}
