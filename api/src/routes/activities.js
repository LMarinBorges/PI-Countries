const { Router } = require("express");
const activityController = require("../controllers/activityController.js");

const router = Router();

router.get("/", activityController.listActivities);
router.get("/", activityController.createActivity);

module.exports = router;
