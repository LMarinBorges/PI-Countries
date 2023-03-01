const { Router } = require("express");
const countriesRouter = require("./countries.js");
const activitiesRouter = require("./activities.js");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
