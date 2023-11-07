import {
  AspectRatio,
  Card,
  CardHeader,
  Container,
  Heading,
  Text,
  Stack,
  CardBody,
  CardFooter,
  useColorModeValue,
} from "@chakra-ui/react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselItems,
// } from "chakra-framer-carousel";

export const Video = () => {
  const images = [
    "https://www.youtube.com/embed/QhBnZ6NPOY0",
    "https://www.youtube.com/embed/QhBnZ6NPOY0",
  ];

  return (
    <div>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Card
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"lg"}
            p={8}
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
              content: `""`,
              w: 0,
              h: 0,
              borderLeft: "solid transparent",
              borderLeftWidth: 16,
              borderRight: "solid transparent",
              borderRightWidth: 16,
              borderTop: "solid",
              borderTopWidth: 16,
              borderTopColor: useColorModeValue("white", "gray.800"),
              pos: "absolute",
              bottom: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {/* Heading for the title */}
            <Heading as={"h3"} fontSize={"xl"}>
              Naruto
            </Heading>
            {/* Description */}
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={"sm"}
            >
              Anime
            </Text>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Card>

          <Card>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Card>
        </Stack>

        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </CardBody>
        </Card>

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
