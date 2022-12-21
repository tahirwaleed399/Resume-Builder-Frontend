import { Container } from '@chakra-ui/react'
import React from 'react'
import styles from './Stepper.module.css'
const Stepper = ({formSteps , step , setStep}) => {
  return (
   <Container maxW={'container.lg'}>
     <div className={styles.stepper}>
<div className={styles.line}></div>
{
    Object.keys(formSteps).map((key , index)=>{
      
        return (<div onClick={()=>setStep(key)} className={styles.step + ` ${parseInt(step,10) === parseInt(index,10) ? styles.activeStep :''}`} key={key}>
          <span>  {parseInt(key,10) + 1}</span>
        </div>)
    })
}

</div>
   </Container>
  )
}

export default Stepper