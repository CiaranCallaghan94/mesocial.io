const axios = require("axios");

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
    const url = "http://localhost:3001/" + this.username;
    const query = axios
      .get(url)
      .then((response) => {
        this.data = response.data;
        this.error = {
          isError: false,
          errorMessage: "",
        };
        resolve();
      })
      .catch((errorMessage) => {
        this.data = {};
        this.error = {
          isError: true,
          errorMessage: errorMessage,
        };
        reject();
      });
  });
};

module.exports = User;
