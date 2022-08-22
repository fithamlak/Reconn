const Tempo = require("../model/Tempo");

const getTempo = (req, res) => {
  Tempo.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const createTempo = (req, res) => {
  const tempo = new Tempo({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
  });

  tempo.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

module.exports = {
  getTempo,
  createTempo,
};
