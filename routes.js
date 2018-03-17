const Project = require("./db/models/project");
const Workflow = require("./db/models/workflow");

module.exports = [
  {
    method: "GET",
    path: "/api/projects",
    handler: (request, h) => {
      console.log("REQUEST");
      return Project.find().exec();
    }
  },
  {
    method: "POST",
    path: "/api/projects",
    handler: (request, h) => {
      const project = new Project();
      project.title = request.payload.title;
      return project.save();
    }
  },
  {
    method: "GET",
    path: "/api/projects/{projectID}",
    handler: (request, h) => {
      return Project.find({ _id: request.params.projectID })
        .populate("workflows")
        .exec();
    }
  },
  {
    method: "POST",
    path: "/api/projects/{projectID}",
    handler: (request, h) => {
      const workflow = new Workflow();
      workflow.title = request.payload.title;
      workflow.actions = request.payload.actions.split(",");
      return workflow.save().then(savedWorkflow => {
        return Project.findOneAndUpdate(
          { _id: request.params.projectID },
          { $push: { workflows: savedWorkflow } },
          { new: true }
        );
      });
    }
  }
];
