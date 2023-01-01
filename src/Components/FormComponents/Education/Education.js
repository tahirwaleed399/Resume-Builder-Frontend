import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormOuter from "../FormOuter/FormOuter";
import * as yup from "yup";
import { useFormik } from "formik";
import { randomIdGenerator } from "../../../Utils/randomIdGenerator";
import { AiFillDelete } from "react-icons/ai";
import { setEducatonArray } from "../../../Redux/Slices/resumeSlice";
import { useDispatch } from "react-redux";

// Form Schema Created By Yup To Validate Entered User data
const educationSchema = yup.object().shape({
  title: yup.string().required("Achievement is required"),
  institute: yup.string().required("Institute is required"),
  startDate: yup.date().required("Start Date is required"),
  endDate: yup.date().required("End Date is required"),
});
const Education = ({formValues,setStep,step}) => {
  //setting an Array state for storing indvidual objects of every submissio
  const [educationList, setEducationList] = useState(formValues ?? []);
  const dispatch = useDispatch();
  let initalFormValues = {
    title: "",
    institute: "",
    startDate: "",
    endDate: "",
  };

  const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: educationSchema,
    validateOnChange: true,
    onSubmit: submitForm,
  });

  function submitForm(result, {resetForm}) {

    // creating and temporary instance of array
    let tempEducationList = [
      ...educationList,
      { ...result, id: randomIdGenerator() },
    ];
    // storing educationList array value to lcoal state

    setEducationList(tempEducationList);
    // storing educationList array value to redux store

    dispatch(setEducatonArray(tempEducationList))
    resetForm();

  }
  function deleteEducationItem(educationId) {
    let tempEducationList = educationList.filter(
      (education) => education.id !== educationId
    );
    dispatch(setEducatonArray(tempEducationList))
    setEducationList(tempEducationList);
  }
  return (
    <FormOuter>
      <>
        <Heading>Education</Heading>

        <form onSubmit={formik.handleSubmit}>
          <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.title ? true : false}
          >
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              id="title"
              data-testid='title'
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Schooling xyz"
            />
            {formik.errors.title && (
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.institute ? true : false}
          >
            <FormLabel>Intitute</FormLabel>
            <Input
              type="text"
              name="institute"
              id="institute"
              data-testid="institute"
              onChange={formik.handleChange}
              value={formik.values.institute}
              placeholder="Havard"
            />
            {formik.errors.institute && (
              <FormErrorMessage>{formik.errors.institute}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            my={2}
            isRequired
            isInvalid={
              formik.errors.startDate || formik.errors.endDate ? true : false
            }
          >
            <FormLabel>Time Period</FormLabel>
            <Text>Start</Text>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              data-testid='startDate'
              value={formik.values.startDate}
              onChange={formik.handleChange}
            />
            {formik.errors.startDate && (
              <FormErrorMessage>{formik.errors.startDate}</FormErrorMessage>
            )}
            <Text>End</Text>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              data-testid='endDate'
              value={formik.values.endDate}
              onChange={formik.handleChange}
            />
            {formik.errors.endDate && (
              <FormErrorMessage>{formik.errors.endDate}</FormErrorMessage>
            )}
          </FormControl>
          <Button  type="submit" data-testid='submitEducationForm' variant="outline" colorScheme={"green"}>
            Add
          </Button>
        </form>
        <VStack>
          {educationList.map(({ id, title, institute }) => {
            return (
              <Flex
              key={id ?? title}
                justifyContent={"space-between"}
                w="full"
                borderRadius={"md"}
                shadow={"lg"}
                py="2"
                px="2"
                my="3"
              >
                <HStack>
                  <Text fontWeight={"bold"}>{title}</Text>
                  <Text>({institute})</Text>
                </HStack>
                <Button onClick={() => deleteEducationItem(id)} colorScheme={"red"}>
                  <AiFillDelete></AiFillDelete>
                </Button>
              </Flex>
            );
          })}
        </VStack>
        <Button data-testid='next' onClick={()=> setStep(parseInt(step , 10)+1)}  my={3} colorScheme={'green'} w='full'>Next</Button>
      </>
    </FormOuter>
  );
};

export default Education;
