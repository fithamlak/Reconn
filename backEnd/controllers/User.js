const User = require("../model/User");

const getUser = (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

const createUser = (req, res) => {
  const user = new User({
    userN: req.body.userN,
    pwd: req.body.pwd,
  });

  user.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

module.exports = {
  getUser,
  createUser,
};
