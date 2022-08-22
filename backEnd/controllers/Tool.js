const Tool = require("../model/Tool");

const getTool = (req, res) => {
  Tool.find((err, tools) => {
    if (err) {
      res.send(err);
    }
    res.json(tools);
  });
};

const createTool = (req, res) => {
  const tool = new Tool({
    TransformID: req.body.TransformID,
    tools: req.body.tools,
  });

  tool.save((err, entity) => {
    if (err) {
      res.send(err);
    }
    res.json(tool);
  });
};

const updateTool = (req, res) => {
  Tool.findOneAndUpdate(
    { _id: req.params.toolID },
    {
      $set: {
        TransformID: req.body.TransformID,
        tools: req.body.tools,
      },
    },
    { new: true },
    (err, Tool) => {
      if (err) {
        res.send(err);
      } else res.json(Tool);
    }
  );
};

const deleteTool = (req, res) => {
  Tool.deleteOne({ _id: req.params.transformID })
    .then(() => res.json({ message: "tool Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTool,
  createTool,
  updateTool,
  deleteTool,
};
