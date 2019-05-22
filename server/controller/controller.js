const axios = require("axios");

let db = [];

module.exports = {
  getInstruments: (req, res) => {
    axios.get("https://api.seedcx.com/instruments").then(response => {
      console.log(response.data.message);
      db = response.data.message;
      res.status(200).json(db);
    });
  }
};
