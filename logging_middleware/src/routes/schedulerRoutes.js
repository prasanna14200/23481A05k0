const express = require("express");

const router = express.Router();

const {
    getOptimizedSchedule
} = require("../controllers/schedulerController");

router.get("/optimize", getOptimizedSchedule);

module.exports = router;