const express = require ("express");
const Entertainment = require("../models/Entertainment");
const { getMovie } = require("../controllers/entertainmentController");

const router = express.Router();

router.get("/", getEntertainments);

router.get("/:id", getMovie);

// router.post("/", createEntertainment);

// router.delete("/:id", deleteEntertainment);

// router.patch("/:id", updateEntertainment);

module.exports = router;