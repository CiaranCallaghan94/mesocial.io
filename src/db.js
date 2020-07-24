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

// Create Table
// aws dynamodb create-table --table-name MeSocialUsers --attribute-definitions AttributeName=UserName,AttributeType=S --key-schema AttributeName=UserName,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --endpoint-url http://localhost:8000

// Add User
// aws dynamodb put-item --table-name MeSocialUsers --item '{
//         "UserName": {"S": "ciarancallaghan"},
//         "PrimaryTitle": {"S": "Ciaran Callaghan"},
//         "SecondaryTitle": {"S": "@callo"},
//         "Bio": {"S": "I am the CEO of MeSocial.. Cloud Engineer and LOL Pro as side husstle!"},
//         "Verified": {"BOOL": true}}' --return-consumed-capacity TOTAL

// aws dynamodb put-item --table-name MeSocialUsers --item '{"UserName": {"S": "ciarancallaghan"}, "PrimaryTitle": {"S": "Ciaran Callaghan"}, "SecondaryTitle": {"S": "@callo"}, "Bio": {"S": "I am the CEO of MeSocial.. Cloud Engineer and LOL Pro as side husstle!"}, "Verified": {"BOOL": true}}' --return-consumed-capacity TOTAL --endpoint-url http://localhost:8000

// {
//   "TableName": "MeSocialUsers",
//   "Item": {
//       "UserName": {
//           "S": "ciarancallaghan",
//       },
//       "PrimaryTitle": {
//         "S": "Ciaran Callaghan",
//       },
//       "Bio": {
//         "S": "I am the CEO of MeSocial.. Cloud Engineer and LOL Pro as side husstle!",
//       },
//         "Verified": {
//           "BOOL": true,
//       }
//   }

// aws dynamodb put-item --cli-input-json "file://C:\Users\Ciaran Callaghan\Documents\Development\mesocial.io\localDynamo\User.json" --endpoint-url http://localhost:8000

// aws dynamodb scan --table-name MeSocialUsers --endpoint-url http://localhost:8000
