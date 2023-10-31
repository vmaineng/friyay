import { AspectRatio, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export const Video = () => {
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
    </div>
  )
}
