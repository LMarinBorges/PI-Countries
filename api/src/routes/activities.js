const { Router } = require("express");
const activityController = require("../controllers/activityController.js");

const router = Router();

router.get("/", activityController.listActivities);
router.post("/", activityController.createActivity);

module.exports = router;
