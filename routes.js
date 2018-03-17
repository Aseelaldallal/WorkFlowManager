const Project = require("./db/models/project");
const Workflow = require("./db/models/workflow");

module.exports = [
  {
    method: "GET",
    path: "/api/projects",
    handler: (req, h) => {
      Project.find({})
        .exec()
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  }
];
