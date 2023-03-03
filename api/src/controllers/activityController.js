const { badRequest, created } = require("../helpers/response.js");
const asyncHandler = require("../helpers/asyncHandler.js");
const { Activity, CountryActivities } = require("../db.js");
const validator = require("../validators/activity.js");

exports.listActivities = asyncHandler(async (_req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

exports.createActivity = asyncHandler(async (req, res) => {
  const errors = validator(req.body);
  if (errors.length > 0) return badRequest(res, errors);
  const { name, difficulty, duration, season, countries } = req.body;
  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await CountryActivities.bulkCreate(
    countries.map((value) => ({
      CountryIsoCode: value,
      ActivityId: activity.id,
    }))
  );
  created(res, activity);
});
