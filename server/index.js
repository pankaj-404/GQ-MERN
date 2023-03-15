var express = require("express");
var colors = require("colors");
require("dotenv").config();
var { graphqlHTTP } = require("express-graphql");
// var { buildSchema } = require("graphql");

const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const connectDB = require("./config/db");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return "Hello world!";
//   },
// };

var app = express();
// * Connect to MongoDB
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server is running on port ${port}`));
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
