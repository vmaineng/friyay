import React, { useEffect, useState } from "react";
import { Video } from "../components/Video";

export const Videos = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

const fetchMovieDetails = async () => {
  try {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
  
    if (!response.ok) {
      throw new Error (`HTTP error! Status: ${response.status}`);
  }
  const movieDetailsData = await response.json();
  setMovieDetails(movieDetailsData);
  } catch (error) {
    console.error('Error', error);
    setError('Error fetching movie details');
  }
};

useEffect(() => {
  fetchMovieDetails();
}, []);


function deleteVideo(id) {
  const updatedVideos = movieDetails.filter((video) => video.id !== id);
  setMovieDetails(updatedVideos);
}

function updatedVideo(updatedVideo) {
  const updatedVideos = movieDetails.map((video) => {
    return video.id === updatedVideo.id ? updatedVideo : video;
  })
  setMovieDetails(updatedVideos)
}

  return (
    <div> {
      movieDetails && movieDetails.map((video) => (
        <Video 
        key = {video._id}
        video={video}
        deleteVideo= {deleteVideo}
        updatedVideo= {updatedVideo}
        />
      ))}
      </div>
  )
}
