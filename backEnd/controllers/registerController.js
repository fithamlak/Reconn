const User = require("../model/User");
const bcrypt = require("bcrypt");

{
  /*const createEntity = (req, res) => {
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
}; */
}

const handleNewUser = async (req, res) => {
  const { user, email, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user

    const result = await User.create({
      username: user,
      email: email,
      password: hashedPwd,
    });
    console.log(result);

    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
