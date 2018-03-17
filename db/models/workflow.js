var mongoose = require("mongoose");

var WorkflowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  actions: [{ type: String }]
});

module.exports = mongoose.model("workflow", WorkflowSchema);
