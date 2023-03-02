const { Op } = require("sequelize");
const { Country } = require("../db.js");
const asyncHandler = require("../helpers/asyncHandler.js");
const { notFound } = require("../helpers/response.js");

exports.listCountries = asyncHandler(async (req, res) => {
  const countries = await Country.findAll();
  res.json(countries);
});

exports.findCountries = asyncHandler(async (req, res) => {
  const { q } = req.query;
  const countries = await Country.findAll({
    where: { name: { [Op.iLike]: `%${q}%` } },
  });
  if (countries.length === 0)
    return notFound(res, "No countries found that match query.");
  return res.json(countries);
});

exports.getCountry = asyncHandler(async (req, res) => {
  const { countryId } = req.params;
  const country = await Country.findByPk(countryId, {
    include: "activities",
  });
  if (country === null) return notFound(res, "Country not found.");
  res.json(country);
});
