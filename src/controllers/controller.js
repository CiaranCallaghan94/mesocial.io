const User = require("../model/User");

exports.renderHomePage = (req, res) => {
  res.status(200);
  res.render("index");
};

exports.renderUser = (req, res) => {
  const { uname: username } = req.params;
  const user = new User(username);
  console.log(username);
  // Creates User Object then gets UserData from DynamoDB
  user
    .getUserData()
    .then(() => {
      res.status(200);
      console.log(user.data);
      res.render("user", { user: user.data });
    })
    .catch(() => {
      res.status(404);
      res.render("userNotFound", { user: user.username });
      console.log(user.error.errorMessage);
    });
};
