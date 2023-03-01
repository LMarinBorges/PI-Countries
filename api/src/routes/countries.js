const { Router } = require("express");
const countryController = require("../controllers/countryController.js");

const router = Router();

router.get("/", countryController.listCountries);
router.get("/name", countryController.findCountries);
router.get("/:countryId", countryController.getCountry);

module.exports = router;
