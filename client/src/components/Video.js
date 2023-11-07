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
       <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
      <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
            
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
        {/* </Card>

      <Card maxW='sm'> */}
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
