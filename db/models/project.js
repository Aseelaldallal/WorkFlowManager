var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  workflows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "workflow"
    }
  ]
});

module.exports = mongoose.model("project", ProjectSchema);
