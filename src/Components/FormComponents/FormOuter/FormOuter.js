import { Box, Container } from '@chakra-ui/react'
import React from 'react'
// This Component is just an frame for every form component USING DRY 😂

const FormOuter = ({children}) => {
  
  return (
  
  
     <Box  margin={10}>

<Container bg='white' maxW={'container.sm'} shadow='lg' borderRadius={'md'} padding={5}>

<Box>
    {children}
</Box>

</Container>


    </Box>

   
   
  )
}

export default FormOuter