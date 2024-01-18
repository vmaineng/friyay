import React, { useState } from "react";
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
  Collapse,
  Stack,
  useColorModeValue,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { useHistory } from 'react-router-dom'; // ! have to figure out why this doesn't work
import { ViewIcon } from "@chakra-ui/icons";


export const VideoHome = ({ video }) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onWatchNowClick = () => {
    setIsOpen(true)
  };

  const handleLogIin = () => {
    history.push('/login');
    setIsOpen(false);
  }
  
  const handleToggle = () => setShow(!show);

  return (
    <div>
      <Container maxW={"lg"} py={3} borderWidth='1px'>
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
              <Collapse startingHeight={20} in={show}>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={"sm"}
                >
                  {video.overview}
                </Text>
              </Collapse>
              <Button size="sm" onClick={handleToggle} mt="1rem">
                Show {show ? "Less" : "More"}
              </Button>
            </CardBody>
            <CardFooter>
              <HStack align="center" justify="center">
                <Button leftIcon={<ViewIcon />} colorScheme="blue" onClick={onWatchNowClick}>
                  Watch Now
                </Button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you a user already? If so, please log in
            {/* Add more content or customization as needed */}
          </ModalBody>
          <ModalFooter>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button onClick={handleLogIin}>Log in</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
              </HStack>
            </CardFooter>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
