const Transform = require("../model/transform");

const getTransform = (req, res) => {
  Transform.find((err, transforms) => {
    if (err) {
      res.send(err);
    }
    res.json(transforms);
  });
};

const createTransform = (req, res) => {
  const transform = new Transform({
    title: req.body.title,
    sentense: req.body.sentense,
    name: req.body.name,
    ID: req.body.ID,
    inputEntity: req.body.inputEntity,
    outputEntity: req.body.outputEntity,
    reverseFlag: req.body.reversFlag,
    usedTool: req.body.usedTool,
    description: req.body.description,
  });

  transform.save((err, transform) => {
    if (err) {
      res.send(err);
    }
    res.send(transform);
  });
};

const updateTransform = (req, res) => {
  Transform.findOneAndUpdate(
    { _id: req.params.transformID },
    {
      $set: {
        title: req.body.title,
        sentense: req.body.sentense,
        name: req.body.name,
        ID: req.body.ID,
        inputEntity: req.body.inputEntity,
        outputEntity: req.body.outputEntity,
        revers: req.body.revers,
        usedTool: req.body.usedTool,
        description: req.body.description,
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.json(data);
    }
  );
};

const deleteTransform = (req, res) => {
  Transform.deleteOne({ _id: req.params.transformID })
    .then(() => res.json({ message: " transform Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTransform,
  createTransform,
  updateTransform,
  deleteTransform,
};
