import {
  AspectRatio,
  Box,
  Card,
  Button,
  CardHeader,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  Tag,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselItems,
// } from "chakra-framer-carousel";

export const Video = ({ video }) => {
  return (
    <div>
      <Container maxW={"md"} py={3} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Box>
            {/* Heading for the title */}
            <Box>
            <Image src={`https://image.tmdb.org/t/p/w300/${video.poster_path}`} alt='poster' borderRadius='xl' objectFit='cover' mx='auto'/>
            <Heading as={"h4"} fontSize={"xl"}>
              {video.title}
            </Heading>
            <HStack mt="5" spacing="3" ml="5">
              <Tag variant="outline">{video.media_type}</Tag>
            </HStack>
            {/* Description */}
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={"sm"}
            >
              {video.overview}
            </Text>
            <Button colorScheme="blue">Watch Now</Button>
            </Box>
          </Box>

          {/* {/* <Card>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Card> */}
          

       
        </Stack>
      </Container>
    </div>
  );
};
