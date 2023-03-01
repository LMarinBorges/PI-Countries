const { Country } = require("../db.js");

exports.listCountries = (req, res) => {
  res.send("UNIMPLEMENTED: GET /countries");
};

exports.findCountries = (req, res) => {
  res.send("UNIMPLEMENTED: GET /countries/name?q=...");
};

exports.getCountry = (req, res) => {
  res.send("UNIMPLEMENTED: GET /countries/:countryId");
};
