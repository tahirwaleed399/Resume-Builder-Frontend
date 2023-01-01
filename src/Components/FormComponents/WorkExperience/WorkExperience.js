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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormOuter from "../FormOuter/FormOuter";
import * as yup from "yup";
import { useFormik } from "formik";
import { randomIdGenerator } from "../../../Utils/randomIdGenerator";
import { AiFillDelete } from "react-icons/ai";
import { setWorkExperienceArray } from "../../../Redux/Slices/resumeSlice";
import { useDispatch } from "react-redux";

// Form Data Schema to validate entered data by user

const workExperienceSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  role: yup.string().required("Role is required"),
  location: yup.string().required("location is required"),
  description: yup.string().required("Descripton is required"),
  startDate: yup.date().required("Start Date is required"), 
  endDate: yup.date().required("End Date is required"),
});

const WorkExperience = ({formValues,setStep,step}) => {
  const [workExperienceList, setWorkExperienceList] = useState(formValues??[]);
  const dispatch = useDispatch();
  let initalFormValues = {
    companyName: "",
    role: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
  };

  const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: workExperienceSchema,
    validateOnChange: true,
    onSubmit: submitForm,
  });

  function submitForm(result, {resetForm}) {
    // creating and temporary instance of array

    let tempWorkExperienceList = [
      ...workExperienceList,
      { ...result, id: randomIdGenerator() },
    ];
        // storing achievments array value to lcoal state

    setWorkExperienceList(tempWorkExperienceList);
        // storing achievments array value to redux store

    dispatch(setWorkExperienceArray(tempWorkExperienceList))
    resetForm();

  }
  function deleteWorkExperience(experienceId) {
    let tempWorkExperienceList = workExperienceList.filter(
      (workExperience) => workExperience.id !== experienceId
    );
    dispatch(setWorkExperienceArray(tempWorkExperienceList))
    setWorkExperienceList(tempWorkExperienceList);
  }
  return (
    <FormOuter>
      <>
        <Heading>Work Experience</Heading>

        <form onSubmit={formik.handleSubmit}>
          <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.companyName ? true : false}
          >
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              placeholder="Microsoft..."
              data-testid="companyName"
            />
            {formik.errors.companyName && (
              <FormErrorMessage>{formik.errors.companyName}</FormErrorMessage>
            )}
          </FormControl>   <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.role ? true : false}
          >
            <FormLabel>Role</FormLabel>
            <Input
              type="text"
              name="role"
              id="role"
              onChange={formik.handleChange}
              value={formik.values.role}
              placeholder="Frontend Developer"
              data-testid="role"
            />
            {formik.errors.role && (
              <FormErrorMessage>{formik.errors.role}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.location ? true : false}
          >
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              name="location"
              id="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              placeholder="America"
              data-testid="location"
            />
            {formik.errors.location && (
              <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
            )}
          </FormControl>  
          <FormControl
            my={2}
            isRequired
            isInvalid={formik.errors.description ? true : false}
          >
            <FormLabel>Description</FormLabel>
            <Textarea
          
              name="description"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="I was working as a developer there ...."
              data-testid="description"
            />
            {formik.errors.description && (
              <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
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
              value={formik.values.startDate}
              onChange={formik.handleChange}
              data-testid="startDate"
            />
            {formik.errors.startDate && (
              <FormErrorMessage>{formik.errors.startDate}</FormErrorMessage>
            )}
            <Text>End</Text>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              data-testid="endDate"
            />
            {formik.errors.endDate && (
              <FormErrorMessage>{formik.errors.endDate}</FormErrorMessage>
            )}
          </FormControl>
          <Button data-testid="submitWorkExperienceForm" type="submit" variant="outline" colorScheme={"green"}>
            Add
          </Button>
        </form>
        <VStack>
          {workExperienceList.map(({ id, companyName, role }) => {
            return (
              <Flex
              key={id ?? role}
                justifyContent={"space-between"}
                w="full"
                borderRadius={"md"}
                shadow={"lg"}
                py="2"
                px="2"
                my="3"
              >
                <HStack>
                  <Text fontWeight={"bold"}>{companyName}</Text>
                  <Text>({role})</Text>
                </HStack>
                <Button onClick={() => deleteWorkExperience(id)} colorScheme={"red"}>
                  <AiFillDelete></AiFillDelete>
                </Button>
              </Flex>
            );
          })}
        </VStack>
        <Button onClick={()=> setStep(parseInt(step , 10)+1)}  my={3} colorScheme={'green'} w='full'>Next</Button>
      </>
    </FormOuter>
  );
};

export default WorkExperience;
