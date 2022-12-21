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
  const resume = useSelector((state) => state.resume)
  const [step, setStep] = useState(0);

const formSteps = {
  0 : <BasicInfo formValues={resume.basicInfo} setStep={setStep} step={step}></BasicInfo>,
  1 : <ContactDetails formValues={resume.contactDetails} setStep={setStep} step={step}></ContactDetails>,
  2 : <Education setStep={setStep} step={step}></Education>,
  3 : <Skills setStep={setStep} step={step}></Skills>,
  4 : <WorkExperience setStep={setStep} step={step}></WorkExperience>,
  5 : <Achievements setStep={setStep} step={step}></Achievements>
}

    
  return (
    <div>
      
      <Stepper formSteps={formSteps} step={step} setStep={setStep}></Stepper>

      {
        formSteps[step]
      }
    </div>

   
  )
}

export default ResumeForm