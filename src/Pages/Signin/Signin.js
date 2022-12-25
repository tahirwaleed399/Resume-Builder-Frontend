import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,

  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../Redux/UserApi/User";
import { useLoader } from "../../Hooks/useLoader";import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
export default function Signin() {
  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    signIn(values);
  };
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });


  const [signIn, state] = useSignInMutation();

  useLoader( state, {
    loading: "Signing In Please wait",
    success: "Congrats 🎉 you are Logged In",
  },()=>{
    console.log('call bakc called');
  navigate('/')
  });
  const formValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is Required")
      .email("Wrong Email Format"),
    password: yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: onFormSubmit,
  });
  return (
    <>
 

      {state.isLoading && <Loader></Loader>}
    
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
           <form   onSubmit={(e) => {
              e.preventDefault();

              formik.handleSubmit(e);
            }}>

           <Stack spacing={4}>
              <FormControl
                isRequired
                isInvalid={formik.errors.email ? true : false}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && (
                  <FormErrorMessage>
                    {formik.errors.email}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.errors.password ? true : false}
              >
                <FormLabel>Password</FormLabel>
                <Input
                autoComplete="on"
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && (
                  <FormErrorMessage>
                    {formik.errors.password}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to='/sign-up'><Text color={"blue.400"}>Not Have Account ?</Text></Link>
                </Stack>
                <Button
                type='submit'
                  colorScheme={'green'}

                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
           </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
