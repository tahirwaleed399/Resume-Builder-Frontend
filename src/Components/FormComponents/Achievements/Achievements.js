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
import { AiFillDelete } from "react-icons/ai";
import { useFormik } from "formik";
import { randomIdGenerator } from "../../../Utils/randomIdGenerator";
import { useDispatch } from "react-redux";
import { setAchievementsArray } from "../../../Redux/Slices/resumeSlice";

// Form Data Schema 
const achievementSchema = yup.object().shape({
  achievement: yup.string().required("Achievement is required"),
});
const Achievements = ({ formValues, setStep, step }) => {
  //setting an Array state for storing indvidual objects of every submission
  const [achievements, setAchievements] = useState(formValues);
  const dispatch = useDispatch();
  let initalFormValues = {
    achievement: "",
  };
  // formik is used for error handling
  const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: achievementSchema,
    validateOnChange: true,
    onSubmit: submitForm,
  });
  function submitForm(achievement, { resetForm }) {
    // creating and temporary instance of array
    let tempAchievements = [
      ...achievements,
      { ...achievement, id: randomIdGenerator() },
    ];
    // storing achievments array value to lcoal state

    setAchievements(tempAchievements);
    // storing achievments array value to redux store
    dispatch(setAchievementsArray(tempAchievements));

    resetForm();
  }
  function deleteAchievement(skillId) {
    let tempAchievements = achievements.filter(
      (achievement) => achievement.id !== skillId
    );
    // storing achievments array value to redux store

    dispatch(setAchievementsArray(tempAchievements));
    // storing achievments array value to lcoal state

    setAchievements(tempAchievements);
  }
  return (
    <FormOuter>
      <>
        <Heading>Achievements</Heading>

        <form onSubmit={formik.handleSubmit}>
          
          <FormControl
            isRequired
            my={3}
            isInvalid={formik.errors.skill ? true : false}
          >
            <FormLabel>Achievement</FormLabel>
            <Input
              type="text"
              name="achievement"
              id="achievement"
              onChange={formik.handleChange}
              value={formik.values.achievement}
              colorScheme={"green"}
              placeholder="Award in coding"
            ></Input>
            {formik.errors.achievement && (
              <FormErrorMessage>{formik.errors.achievement}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" colorScheme={"green"} variant="outline" my="3">
            Add
          </Button>
        </form>

        <VStack>
          {achievements.map(({ achievement, id }) => {
            return (
              <Flex
                justifyContent={"space-between"}
                w="full"
                borderRadius={"md"}
                shadow={"lg"}
                py="2"
                px="2"
                my="3"
              >
                <HStack>
                  <Text fontWeight={"bold"}>{achievement}</Text>
                </HStack>
                <Button
                  onClick={() => deleteAchievement(id)}
                  colorScheme={"red"}
                >
                  <AiFillDelete></AiFillDelete>
                </Button>
              </Flex>
            );
          })}
        </VStack>

        <Button
          onClick={() => setStep(parseInt(step, 10) + 1)}
          w="full"
          colorScheme={"green"}
        >
          Next{" "}
        </Button>
      </>
    </FormOuter>
  );
};

export default Achievements;
