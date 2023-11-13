import React, { useEffect, useState } from "react";
import { Video } from "../components/Video";

export const Videos = () => {
  const [videoData, setVideoData] = useState([]);

useEffect(() => {
  const fetchVideos = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
    const json = await response.json();
    if (response.ok) {
      setVideoData(json)
      console.log(json)
    }
  };
  fetchVideos();
}, []);


function deleteVideo(id) {
  const updatedVideos = videoData.filter((video) => video.id !== id);
  setVideoData(updatedVideos);
}

function updatedVideo(updatedVideo) {
  const updatedVideos = videoData.map((video) => {
    return video.id === updatedVideo.id ? updatedVideo : video;
  })
  setVideoData(updatedVideos)
}

  return (
    <div> {
      videoData && videoData.map((video) => (
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
