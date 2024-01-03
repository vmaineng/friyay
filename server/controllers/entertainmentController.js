const express = require('express');
const Entertainment = require('../models/Entertainment');

const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';
const apiUrl = baseUrl + '/discover/movie?sort_by=popularity.desc&'+ apiKey;
// const imgUrl = 
const searchUrl = baseUrl + '/search/movie?' + apiKey;

const getMovie = async (req, res, next) => {
    try {
       //passing in url, then fetch to /api/getMovie from clientside?
        const url = `${baseUrl}/trending/all/day?api_key=${apiKey}`;
        //https://api.themoviedb.org/3/trending/all/day?
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

// async function fetchMovieDetails(type) {
//     try {
//      
//       //  const apiKeyString = apiKey.toString();
//       const response = await fetch(
//         `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const movieDetailsData = await response.json();
//       const results = movieDetailsData.results;

//       console.log("Results:", results);
//       setMovieDetails(results);
//     } catch (error) {
//       console.error("Error", error);
//       setError("Error fetching movie details");
//     }
//   }