const Entity = require("../model/Entity");

const getEntity = (req, res) => {
  Entity.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const createEntity = (req, res) => {
  const entity = new Entity({
    id: req.body.id,
    title: req.body.title,
    sentnse: req.body.sentnse,
    ID: req.body.ID,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
  });

  entity.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const updateEntity = (req, res) => {
  Entity.findByIdAndUpdate(
    { _id: req.params.entityID },
    {
      $set: {
        title: req.body.title,
        senetnse: req.body.senetnse,
        ID: req.body.ID,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
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

const deleteEntity = (req, res) => {
  Entity.deleteOne({ _id: req.params.entityID })
    .then(() => res.json({ message: "Entity Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
};
