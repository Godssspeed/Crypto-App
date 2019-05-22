require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");

const app = express();

app.use(json());

const { getInstruments } = require("./controller/controller");

const { SERVER_PORT } = process.env;

app.get("/api/getinstruments", getInstruments);

app.listen(SERVER_PORT || 4000, () => {
  console.log(`listening on ${SERVER_PORT}`);
});
