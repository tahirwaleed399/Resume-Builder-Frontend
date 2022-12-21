import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormOuter from "../FormOuter/FormOuter";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import ImageInput from "../../ImageInput/ImageInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setBasicInfo, setContactDetails } from "../../../Redux/Slices/resumeSlice";

// Form Schema Created By Yup To Validate Entered User data
const contactDetailsSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone No is required")
    .min(8, "Phone No should atleast of 8 characters"),
    email: yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
  linkedin: yup
    .string(), 
    website: yup
    .string(),
});

const ContactDetails = ({step ,setStep,formValues}) => {
  const dispatch = useDispatch();
  
  let initalFormValues = {
    phone : formValues.phone,
    linkedin : formValues.linkedin,
    website : formValues.website,
    email : formValues.email,
  };
  const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: contactDetailsSchema,
    validateOnChange: true,
    onSubmit: submitForm,
  });
  function submitForm(values) {
    console.log("Contact details Form Info Form Submitted ");
    console.log(values);
    dispatch(setContactDetails({...values}))
    // setStep(step+1);
  }
  return (
    <FormOuter>
      <>
        <Heading>Contact Details</Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            my={3}
            isInvalid={formik.errors.phone ? true : false}
          >
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              name="phone"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              colorScheme={"green"}
              placeholder="+92 3336998773"
            ></Input>
            {formik.errors.phone && (
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired my={3}  isInvalid={formik.errors.email ? true : false}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              colorScheme={"green"}
              placeholder="example@gmail.com"
            ></Input>
            {formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
              <FormControl isRequired my={3}  isInvalid={formik.errors.website ? true : false}>
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              name="website"
              id="website"
              onChange={formik.handleChange}
              value={formik.values.website}
              colorScheme={"green"}
              placeholder="waleed.com"
            ></Input>
            {formik.errors.website && (
              <FormErrorMessage>{formik.errors.website}</FormErrorMessage>
            )}
          </FormControl>
              <FormControl isRequired my={3}  isInvalid={formik.errors.linkedin ? true : false}>
            <FormLabel>Linkedin</FormLabel>
            <Input
              type="text"
              name="linkedin"
              id="linkedin"
              onChange={formik.handleChange}
              value={formik.values.linkedin}
              colorScheme={"green"}
              placeholder="linkedin.com/in/tahirwaleed399"
            ></Input>
            {formik.errors.linkedin && (
              <FormErrorMessage>{formik.errors.linkedin}</FormErrorMessage>
            )}
          </FormControl>
    
          <Button type="submit" w="full" my={5} colorScheme={"green"}>
            Next
          </Button>
        </form>
      </>
    </FormOuter>
  );
};

export default ContactDetails;
