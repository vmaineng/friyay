import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DesktopSubNav } from "../components/DesktopSubNav";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const NAV_ITEMS = [
    {
      label: "Home",
    },
    {
      label: "New & Popular",
      children: [
        {
          label: "Documentaries",
          subLabel: "Figure out where to go next",
          href: "#",
        },
        {
          label: "International",
          subLabel: "Let's travel",
          href: "#",
        },
      ],
    },
    {
      label: "Movie",
      href: "#",
    },
    {
      label: "My List",
      href: "#",
    },
  ];

  return (
    <div>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Box
                      as="a"
                      p={2}
                      href={navItem.href ?? "/"}
                      fontSize={"sm"}
                      fontWeight={500}
                      color={linkColor}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                    >
                      {navItem.label}
                    </Box>
                  </PopoverTrigger>

                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
          </Stack>

          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              {/* Logo */}
            </Text>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"}>
              <Link to="/login">Log In</Link>
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
};
