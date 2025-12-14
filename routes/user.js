const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsyc = require("../Utils/wrapAsyc");
const passport = require("passport");
const { saveRedirectUrl } = require("../midderware.js");

const userControllers = require("../controllers/users.js");

router.route("/signup")
.get(userControllers.renderSignupForm)
.post(wrapAsyc(userControllers.signup));

router.route("/login")
.get(userControllers.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",
    {failureRedirect:'/login',failureFlash:true}),userControllers.login);

router.get("/logout",userControllers.logout);

module.exports = router;