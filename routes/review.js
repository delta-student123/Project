const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../Utils/wrapAsyc.js");
const ExpressError = require("../Utils/Express.Error.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn, isReviewAuthor} = require("../midderware.js");

const reviewControllers = require("../controllers/reviews.js");

//Reviews
//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewControllers.createReviws));

//Delete Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewControllers.destroyReview));

module.exports = router;