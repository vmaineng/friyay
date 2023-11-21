const express = require('express');
const Entertainment = require('../models/Entertainment');

const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiKey;
// const imgUrl = 
const searchUrl = baseUrl + '/search/movie?' + apiKey;

const getMovie = async (req, res, next) => {
    try {
        const movieID = req.params.id;
        const endpoint = `movie/${movieID}`;
        const params = new URLSearchParams({api_key: apiKey});

        const url = `${baseUrl}${endpoint}?${params}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const movieDetails = await response.json();
        req.movieDetails = movieDetails;

      } catch (err) {
        res.status(404).send(`Error fetching movie details: ${err.message}`);
        next(err);
    }
}

module.exports = {
    getMovie,
};