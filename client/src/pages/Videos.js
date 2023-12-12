import React, { useEffect, useState } from "react";
import { Video } from "../components/Video";



export const Videos = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails("movie");
  }, []);

  async function fetchMovieDetails(type) {
    try {
     
    //  const apiKeyString = apiKey.toString();
      const response = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const movieDetailsData = await response.json();
      const results = movieDetailsData.results;
  
      console.log('Results:', results);

    } catch (error) {
      console.error("Error", error);
      setError("Error fetching movie details");
    }
  }

  function deleteVideo(id) {
    const updatedVideos = movieDetails.filter((video) => video.id !== id);
    setMovieDetails(updatedVideos);
  }

  function updatedVideo(updatedVideo) {
    const updatedVideos = movieDetails.map((video) => {
      return video.id === updatedVideo.id ? updatedVideo : video;
    });
    setMovieDetails(updatedVideos);
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {movieDetails &&
        movieDetails.map((video) => (
          <Video
            key={video.id}
            video={video}
            deleteVideo={deleteVideo}
            updatedVideo={updatedVideo}
          />
        ))}
    </div>
  );
};
