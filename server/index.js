const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

// connect to mlab db
mongoose.connect(
  "mongodb://tenant:tenant123@ds237641.mlab.com:37641/playlistdb",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

// add middleware to check if a request is for graphql or not
app.use("/graphql", expressGraphQL({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening to port : 4000");
});
