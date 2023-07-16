const express = require("express");

const authenticate = require("../../middlewares/authenticate");
const authorize = require("../../middlewares/authorize");

const getDataController = require("../../controllers/getDataController");

const router = express.Router();


router.get("/",  getDataController.getAllData);

router.get("/:workoutId", getDataController.getOneData);


module.exports = router;