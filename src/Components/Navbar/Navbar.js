import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoader } from "../../Hooks/useLoader";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../Redux/UserApi/User";
import { setLogoutAuth } from "../../Redux/Slices/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // RTK QUERY API
  let [logout, state] = useLogoutMutation();
  //CUSTOME HOOK
  useLoader(
    state,
    { loading: "Logging Out Please Wait", success: "Logged Out Sucess" },
    () => {
      dispatch(setLogoutAuth());
      navigate("/sign-in");
    }
  );

  function logoutUser() {
    logout("logout");
  }
// CHAKRA UI HOOK FOR NAVBAR HAMBURGER MENU
  const { isOpen, onToggle } = useDisclosure();
  const user = useSelector((state) => state.userState);
  return (
    <>
      <Box zIndex={"3"} position="relative">
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
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {!user.isAuthenticated && (
              <>
                <Box display="flex" alignItems={"center"}>
                  <Link to="/sign-in">
                    <Button
                      as={"a"}
                      fontSize={"sm"}
                      fontWeight={400}
                      variant={"link"}
                      href={"#"}
                    >
                      Sign In
                    </Button>
                  </Link>
                </Box>

                <Link to="/sign-up">
                  <Button
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"green.400"}
                    _hover={{
                      bg: "green.300",
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {user.isAuthenticated && (
              <Button
                onClick={logoutUser}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                _hover={{
                  bg: "green.300",
                }}
              >
                Log out
              </Button>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}
// Desktop Navbar
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href}>
                <Text
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


// MOBILE NAVBAR
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

//INDIVIDUAL LINK ITEM ON NAVBAR
const MobileNavItem = ({ label, href }) => {
  const {  onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={"div"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link to={href}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Link>
      </Flex>
    </Stack>
  );
};

// NAV ITEMS ARRAY
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "My Resumes",
    href: "/my-resumes",
  },
];
