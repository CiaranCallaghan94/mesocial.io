// dev
// module.exports = {
//   database: {
//     endpoint: "http://localhost:8000",
//     table: "MeSocialUsers",
//   },
//   region: "eu-west-1",
// };

// prod
module.exports = {
  database: {
    endpoint: "https://dynamodb.eu-west-1.amazonaws.com",
    table: "MeSocialUsers",
  },
  region: "eu-west-1",
};
