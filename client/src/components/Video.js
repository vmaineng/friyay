import { AspectRatio, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Carousel from "framer-motion-carousel";

export const Video = () => {
  
  const colors = ["#f90", "#ef0", "#e0f"];

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

      <Carousel>
      {[1, 2, 3, 4].map((item, i) => (
      <img
        draggable="false"
        src={`./${item}.jpg`}
        key={i}
        width="100%"
        alt=""
      />
    ))}
      </Carousel>
    </div>
  )
}
