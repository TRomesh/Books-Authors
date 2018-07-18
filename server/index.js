const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();

// allow cross-origin request
app.use(cors());

// connect to mlab db
mongoose.connect(
  "mongodb://"+process.env.DB_USER+":"+process.env.DB_PASS+"@ds237641.mlab.com:37641/"+process.env.DB_NAME,
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
