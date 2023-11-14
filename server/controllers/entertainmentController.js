const express = require('express');
const Entertainment = require('../models/Entertainment');

const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

const getMovie = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).setHeader("Content-type", "application/json").json(oneUser);
      } catch (err) {
        res.status(404).send(`Error fetching movie details: ${err.message}`);
        next(err);
    }
}