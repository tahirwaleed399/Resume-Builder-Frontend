import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Achievements from '../../Components/FormComponents/Achievements/Achievements'
import BasicInfo from '../../Components/FormComponents/BasicInfo/BasicInfo'
import ContactDetails from '../../Components/FormComponents/ContactDetails/ContactDetails'
import Education from '../../Components/FormComponents/Education/Education'
import Skills from '../../Components/FormComponents/Skills/Skills'
import Stepper from '../../Components/FormComponents/Stepper/Stepper'
import WorkExperience from '../../Components/FormComponents/WorkExperience/WorkExperience'

const ResumeForm = () => {
  // getting resume state from redux
  const resume = useSelector((state) => state.resume);

  // form steps
  const [step, setStep] = useState(0);

  // Components to display step by step
const formSteps = {
  0 : <BasicInfo formValues={resume.basicInfo} setStep={setStep} step={step}></BasicInfo>,
  1 : <ContactDetails formValues={resume.contactDetails} setStep={setStep} step={step}></ContactDetails>,
  2 : <Education formValues={resume.education} setStep={setStep} step={step}></Education>,
  3 : <Skills  formValues = {resume.skills} setStep={setStep} step={step}></Skills>,
  4 : <WorkExperience formValues={resume.workExperience} setStep={setStep} step={step}></WorkExperience>,
  5 : <Achievements  formValues={resume.achievements} setStep={setStep} step={step}></Achievements>
}

    
  return (
    
    <Box >
      
      <Stepper formSteps={formSteps} step={step} setStep={setStep}></Stepper>
<div>fds</div>
      {
        formSteps[step]
      }
    </Box>

   
  )
}

export default ResumeForm;