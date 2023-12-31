import React, { useEffect, useState } from "react";

import { Heading, Text, Stack, Flex, Box} from "@chakra-ui/react";

export const Videos = () => {
  const [movieDetailsData, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchMovieDetails("movie");
  // }, []);

  // async function fetchMovieDetails(type) {
  //   try {
  //     const apiKey = "918992ef6f0881ce99691d25e55dcc00";
  //     //  const apiKeyString = apiKey.toString();
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const movieDetailsData = await response.json();
  //     const results = movieDetailsData.results;

  //     console.log("Results:", results);
  //     setMovieDetails(results);
  //   } catch (error) {
  //     console.error("Error", error);
  //     setError("Error fetching movie details");
  //   }
  // }

  function deleteVideo(id) {
    const updatedVideos = movieDetailsData.filter((video) => video.id !== id);
    setMovieDetails(updatedVideos);
  }

  function updatedVideo(updatedVideo) {
    const updatedVideos = movieDetailsData.map((video) => {
      return video.id === updatedVideo.id ? updatedVideo : video;
    });
    setMovieDetails(updatedVideos);
  }

  return (
    <div>
      <Stack mt='5' mb='5' spacing={0} align={"center"}>
        <Heading>Trending Movies</Heading>
        <Text>Watch the latest on demand right now</Text>
      </Stack>
      {error && <p>{error}</p>}
      <Flex
      direction={{ base: 'column', md: 'row' }}
      overflowX="auto"
    >
      {movieDetailsData &&
        movieDetailsData.map((video) => (
          <Box p={4} >
          {/* <Video
            key={video.id}
            video={video}
            deleteVideo={deleteVideo}
            updatedVideo={updatedVideo}
          /> */}
          </Box>
        ))}
        </Flex>
    </div>
  );
};
