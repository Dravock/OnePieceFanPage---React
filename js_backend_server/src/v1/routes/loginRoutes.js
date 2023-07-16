const express = require("express");

const authenticate = require("../../middlewares/authenticate");
const authorize = require("../../middlewares/authorize");

const loginController = require("../../controllers/loginController");

const router = express.Router();


router.post("/",  loginController.postUserLogin);

router.post("/newUser",  loginController.createNewUser);


module.exports = router;