import { AspectRatio, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import {
//   Carousel,
//   CarouselItem,
//   CarouselItems,
// } from "chakra-framer-carousel";

export const Video = () => {
  
  const images = ["https://www.youtube.com/embed/QhBnZ6NPOY0", "https://www.youtube.com/embed/QhBnZ6NPOY0"];

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <AspectRatio maxW='560px' ratio={1}>
            <iframe
              title='naruto'
              src='https://www.youtube.com/embed/QhBnZ6NPOY0'
              allowFullScreen
            />
          </AspectRatio>
        </CardBody>
      </Card>

      <Card maxW='sm'>
        <CardBody>
          <AspectRatio maxW='560px' ratio={1}>
            <iframe
              title='naruto'
              src='https://www.youtube.com/embed/QhBnZ6NPOY0'
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
    </div>
  )
}
