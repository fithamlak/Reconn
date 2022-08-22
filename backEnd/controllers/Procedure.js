const Procedure = require("../model/Procedure");

const getProcedure = (req, res) => {
  Procedure.find((err, procedures) => {
    if (err) {
      res.send(err);
    }
    res.json(procedures);
  });
};

const createProcedure = (req, res) => {
  const procedure = new Procedure({
    TransformID: req.body.TransformID,
    ToolSelected: req.body.ToolSelected,
    procedure: req.body.procedure,
    example: req.body.example,
    resource: req.body.resource,
  });

  procedure.save((err, procedure) => {
    if (err) {
      res.send(err);
    }
    res.json(procedure);
  });
};

const updateProcedure = (req, res) => {
  Procedure.findOneAndUpdate(
    { _id: req.params.procedureID },
    {
      $set: {
        TransformID: req.body.TransformID,
        ToolSelected: req.body.ToolSelected,
        procedure: req.body.procedure,
        example: req.body.example,
        resource: req.body.resource,
      },
    },
    { new: true },
    (err, Procedure) => {
      if (err) {
        res.send(err);
      } else res.json(Procedure);
    }
  );
};

const deleteProcedure = (req, res) => {
  Procedure.deleteOne({ _id: req.params.procedureID })
    .then(() => res.json({ message: " procedure Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getProcedure,
  createProcedure,
  updateProcedure,
  deleteProcedure,
};
