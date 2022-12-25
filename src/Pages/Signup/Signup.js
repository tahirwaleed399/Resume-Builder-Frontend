import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,

  Icon,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useFormik } from "formik";
import React, { useState,useEffect } from "react";

import { toast } from "react-toastify";
import { useSignUpMutation } from "../../Redux/UserApi/User";
import { useLoader } from "../../Hooks/useLoader";
import { Link } from "react-router-dom";import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";


const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function Signup() {
 const navigate = useNavigate();
  const onFormSubmit = (values) => {

    signUp(values )
  };
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUp , state]  = useSignUpMutation();
  useLoader( state , {loading :'Signing Up Please wait' , success : 'Congrats 🎉 you are registered'},()=>{
   navigate('/')
  });
  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name should atleast of 3 characters"),
    email: yup
    .string()
      .required("Email is Required")
      .email("Wrong Email Format"),
    password: yup.string().required('Password is Required').min(8, 'Password Should At least of 8 characters'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const formik = useFormik({
      initialValues: formValues,
      validationSchema: formValidationSchema,
      validateOnChange: true,
    onSubmit: onFormSubmit,
  });
  return (

  <>
  {
    state.isLoading && <Loader></Loader>
  }

    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            People Who Have Resume's
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, pink.400,green.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join Us
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
       
          </Stack>
          <Box
            as={"form"}
            onSubmit={(e) => {
              e.preventDefault();

              formik.handleSubmit(e);
            }}
            mt={10}
          >
            <Stack spacing={4}>
              <FormControl 
                isRequired
                isInvalid={formik.errors.name ? true : false}>
                
              <Input
                placeholder="Waleed Tahir"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name && (
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={formik.errors.email ? true : false}>

              <Input
                placeholder="tahirwaleed399@gmail.com"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
               {formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
              </FormControl>
              <FormControl   isRequired
            isInvalid={formik.errors.password ? true : false}>

              <Input
                placeholder="Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
               {formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
                </FormControl>
                <FormControl   isRequired
            isInvalid={formik.errors.confirmPassword ? true : false}>
                
              <Input
                placeholder="Confirm Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                />
               
                 {formik.errors.confirmPassword && (
              <FormErrorMessage>{formik.errors. confirmPassword}</FormErrorMessage>
            )}
                </FormControl>
                <Link to='/sign-in'><Text color={"blue.400"}>Already Have Account ?</Text></Link>
              <Button
                type="submit"
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, green.400,green.400)"
                color={"white"}
                _hover={{
            
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  </>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#48BB78" />
      <circle cx="244" cy="106" r="139" fill="#48BB78" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
