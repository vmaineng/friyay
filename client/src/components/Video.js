
import {
  AspectRatio,
  Card,
  CardHeader,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselItems,
// } from "chakra-framer-carousel";

export const Video = ( {video} ) => {



  // const images = [
  //   "https://www.youtube.com/embed/QhBnZ6NPOY0",
  //   "https://www.youtube.com/embed/QhBnZ6NPOY0",
  // ];

  return (
    <div>
      <Container maxW={"md"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column"}}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Card>
            {/* Heading for the title */}
            <Heading as={"h3"} fontSize={"xl"}>
              Naruto 
              {video.original_title}
            </Heading>
            {/* Description */}
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={"sm"}
            >
              Anime
            </Text>
          </Card>

          {/* {/* <Card>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Card> */}

          <Card maxW='sm'> 
            <AspectRatio maxW="560px" ratio={4/3}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
            
          </Card>
        </Stack>

        {/* <Carousel>
      <CarouselItems>
        {images.map((image, index) => {
          return (
            <CarouselItem index={index} key={image}>
              <Card index={index} image={image} />
            </CarouselItem>
          );
        })}
      </CarouselItems> */}
        {/* <Toolbar /> */}
        {/* </Carousel> */}
      </Container>
    </div>
  );
};
