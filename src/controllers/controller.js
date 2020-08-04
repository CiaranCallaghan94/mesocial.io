const User = require("../model/User");

exports.renderHome = (req, res) => {
  res.status(200);
  res.render("index");
};

exports.renderCreateUser = (req, res) => {
  res.status(200);
  res.render("createUser");
};

exports.renderUser = (req, res) => {
  const { uname: username } = req.params;
  const user = new User(username);
  // Creates User Object then gets UserData from DynamoDB
  user
    .getUserData()
    .then(() => {
      res.status(200);
      res.render("user", { user: user.data });
    })
    .catch(() => {
      res.status(404);
      res.render("error", {
        statusCode: "400",
        errorMessage: "User not found: " + user.username,
      });
    });
};
