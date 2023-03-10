import {

  Button,
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
} from "@chakra-ui/react";
import ImageInput from "../../ImageInput/ImageInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setBasicInfo } from "../../../Redux/Slices/resumeSlice";

// Form Schema Created By Yup To Validate Entered User data
const basicInfoSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should atleast of 3 characters"),
  title: yup
    .string()
    .required("Title is required")
    .min(4, "Title should atleast of 4 characters"),
  summary: yup
    .string()
    .required("Summary is required")
    .min(5),
});

const BasicInfo = ({step ,setStep,formValues}) => {
  const dispatch = useDispatch();
  const submitForm = (values)=>{

       // sending user to next step
       setStep(step+1);
    // storing BAsic Information values to redux store
    dispatch(setBasicInfo({...values,gender,profile}))
 
  }
  // Field Values that cannot be handled by formik and yup
  const [profile, setProfile] = useState(formValues?.profile ?? "");
  const [gender, setGender] = useState(formValues?.gender ?? "male");
  
  // initial values of those fields that can be validate by formik and yup
  let initalFormValues = {
    name: formValues?.name?? "",
    title: formValues?.title ?? "",
    summary: formValues?.summary ?? "",
  };
  const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: basicInfoSchema,
    validateOnChange: true, 
    onSubmit: submitForm,
  });

  return (
    <FormOuter>
      <>
        <Heading>Basic Info</Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            my={3}
            isInvalid={formik.errors.name ? true : false}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              colorScheme={"green"}
              placeholder="Waleed Tahir"
              data-testid="name"
            ></Input>
            {formik.errors.name && (
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            )}
          </FormControl>{" "}
          <FormControl isRequired my={3}  isInvalid={formik.errors.title ? true : false}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              colorScheme={"green"}
              placeholder="Mern Stack devloper"
              data-testid="title"
            ></Input>
            {formik.errors.name && (
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl  isRequired my={3}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup   
              name="gender"
              id="gender"
              onChange={(e)=>setGender(e)}
              value={gender}
          
           colorScheme={"green"} >
              <Radio  value="male">
                Male
              </Radio>
              <Radio mx={2} value="female">
                Female
              </Radio>
            </RadioGroup>
          
          </FormControl>
          <FormControl  isInvalid={formik.errors.summary ? true : false} isRequired my={3}>
            <FormLabel>Summary</FormLabel>
            <Textarea  name="summary"
              id="summary"
              data-testid="summary"
              onChange={formik.handleChange}
              value={formik.values.summary}  placeholder="I am working as a React js Developer..."></Textarea>
            {formik.errors.name && (
              <FormErrorMessage>{formik.errors.summary}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired my={3}>
            <FormLabel>Select Your Image</FormLabel>
            <ImageInput image={profile} setImage={setProfile}></ImageInput>
          </FormControl>
          <Button data-testid="submitBasicForm" type="submit" w="full" my={5} colorScheme={"green"}>
            Next
          </Button>
        </form>
      </>
    </FormOuter>
  );
};

export default BasicInfo;
