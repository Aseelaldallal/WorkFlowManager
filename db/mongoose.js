const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Get promises from Node

mongoose.connect(
  process.env.WORKFLOW_DB_URI || "mongodb://localhost:27017/workFlowManager"
);

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

mongoose.connection.once("open", function() {
  console.log("Connected to DB");
});

module.exports = mongoose;
