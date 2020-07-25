var AWS = require("aws-sdk");
const config = require("./config");

AWS.config.update({
  region: config.region,
  endpoint: config.database.endpoint,
});

var docClient = new AWS.DynamoDB.DocumentClient();
let _db = docClient;

function getDb() {
  return _db;
}

module.exports = {
  getDb,
};
