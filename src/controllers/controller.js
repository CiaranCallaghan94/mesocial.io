const User = require("../model/User");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.renderUser = (req, res) => {
  const { uname: username } = req.params;
  const user = new User(username);
  user
    .getUserData()
    .then(() => res.render("user", { user: user.data }))
    .catch(() => res.send(user.error.errorMessage));
};
