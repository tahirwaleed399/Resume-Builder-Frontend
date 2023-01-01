 import {  Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack,  Text, Tooltip, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import FormOuter from '../FormOuter/FormOuter'
import * as yup from 'yup';
import {AiFillDelete} from 'react-icons/ai'
import { useFormik } from 'formik'; 
import { randomIdGenerator } from '../../../Utils/randomIdGenerator';
import { useDispatch } from 'react-redux';
import { setSkillsArray } from '../../../Redux/Slices/resumeSlice';


// Form Data Schema to validate entered data by user
const skillsSchema = yup.object().shape({
  skill: yup
    .string()
    .required("Skill is required"),
  
});
 const Skills = ({formValues,setStep,step}) => {
  const [skills , setSkills]= useState(formValues??[]);
const [skillPercentage, setSkillPercentage] = useState(0);
const [showTooltip, setShowTooltip] = useState(false);
const dispatch = useDispatch();
  let initalFormValues = {
    skill : ""
  };
    const formik = useFormik({
    initialValues: initalFormValues,
    validationSchema: skillsSchema,
    validateOnChange: true,
    onSubmit: submitForm,
  });
  function submitForm(skillName,{resetForm}){
    // creating and temporary instance of array
    let tempSkills = [...skills , {...skillName , skillPercentage , id : randomIdGenerator()}];
    // storing array value to lcoal state

setSkills(tempSkills);
    // storing array value to redux store

dispatch(setSkillsArray(tempSkills))

resetForm();
  }
  function deleteSkill(skillId){
    let tempSkills = skills.filter((skill) => skill.id !== skillId);
    dispatch(setSkillsArray(tempSkills))
    setSkills(tempSkills)
  }
   return (
   <FormOuter>

    <>
    
    <Heading>Skills</Heading>

   <form onSubmit={formik.handleSubmit}> <FormControl isRequired my={3}  isInvalid={formik.errors.skill ? true : false}>
            <FormLabel>Skill</FormLabel>
            <Input
              type="text"
              name="skill"
              id="skill"
              onChange={formik.handleChange}
              value={formik.values.skill}
              colorScheme={"green"}
              placeholder="React Js"
            ></Input>
            {formik.errors.skill && (
              <FormErrorMessage>{formik.errors.skill}</FormErrorMessage>
            )}
          </FormControl>
          <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      my='5'
      colorScheme='green'
      onChange={(v) => setSkillPercentage(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
        25%
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
        50%
      </SliderMark>
      <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='green.300'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${skillPercentage}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
<Button type='submit' colorScheme={'green'} variant='outline' my='3'>Add</Button>
</form>


<VStack>
  
{
  skills.map(({skill, skillPercentage,id})=>{
    return (<Flex justifyContent={'space-between' } w='full' borderRadius={'md'}  shadow={'lg'} py='2' px='2' my='3'>
    <HStack><Text fontWeight={'bold'}>{skill}</Text>
    <Text>{skillPercentage}%</Text></HStack>
    <Button onClick={()=>deleteSkill(id)} colorScheme={'red'}><AiFillDelete></AiFillDelete></Button>
    </Flex>)
  })
}
</VStack>




   <Button onClick={()=>setStep(parseInt(step,10)+1)} w='full' colorScheme={'green'}>Next </Button> 




    </>
   </FormOuter>
   )
 }
 
 export default Skills