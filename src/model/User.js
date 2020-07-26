const db = require("../db");
const config = require("../config");

const User = function (username) {
  this.username = username;
  this.data = {};
  this.error = {
    isError: false,
    errorMessage: "",
  };
};

User.prototype.getUserData = function () {
  return new Promise((resolve, reject) => {
    var database = db.getDb();

    var params = {
      TableName: config.database.table,
      KeyConditionExpression: "UserName = :name",
      ExpressionAttributeValues: {
        ":name": this.username,
      },
    };

    database.query(params, (err, data) => {
      if (err) {
        this.data = {};
        this.error = {
          isError: true,
          errorMessage: err,
        };
        reject();
      } else {
        if (data.Items.length === 0) {
          this.data = {};
          this.error = {
            isError: true,
            errorMessage: "User does not exist",
          };
          reject();
        } else {
          this.data = data.Items[0];
          this.error = {
            isError: false,
            errorMessage: "",
          };
          resolve();
        }
      }
    });
  });
};

module.exports = User;
