import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const FormOuter = ({children}) => {
  return (
    <Box margin={10}>

<Container maxW={'container.sm'} shadow='lg' borderRadius={'md'} padding={5}>

<Box>
    {children}
</Box>

</Container>


    </Box>
  )
}

export default FormOuter