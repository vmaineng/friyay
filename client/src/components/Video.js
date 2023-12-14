import {
  Box,
  Card,
  Button,
  CardHeader,
  CardFooter,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  Tag,
  Stack,
  useColorModeValue,
  CardBody,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";


export const Video = ({ video }) => {
  return (
    <div>
      <Container maxW={"md"} py={3} overflow="scroll" >
        <Stack
          direction={{ base: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Box>
            {/* Heading for the title */}
            <Box>
              <Card>
                <Image
                  src={`https://image.tmdb.org/t/p/w300/${video.poster_path}`}
                  alt="poster"
                  borderRadius="xl"
                  objectFit="cover"
                  mx="auto"
                />

                <CardHeader>
                  <Heading as={"h4"} fontSize={"xl"}>
                    {video.title}
                  </Heading>
                </CardHeader>

                <HStack mt="5" spacing="3" ml="5">
                  <Tag variant="outline">{video.media_type}</Tag>
                </HStack>

                {/* Description */}
                <CardBody>
                  <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.600", "gray.400")}
                    fontSize={"sm"}
                  >
                    {video.overview}
                  </Text>
                </CardBody>
                <CardFooter>
                  <HStack align="center" justify="center">
                <Button leftIcon={<ViewIcon />} colorScheme="blue">Watch Now</Button>
                </HStack>
                </CardFooter>
              </Card>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
