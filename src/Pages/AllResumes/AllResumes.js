import { Button, Card, CardBody, CardFooter, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { useLoader } from '../../Hooks/useLoader';
import { useDeleteResumeMutation, useGetResumesQuery } from '../../Redux/ResumeApi/ResumeApi';
import { setFullResume } from '../../Redux/Slices/resumeSlice';
// all resumes user saved will show here
const AllResumes = () => {
    const {data , isLoading ,  isSuccess, error , isError} = useGetResumesQuery();
    const [deleteResume , deleteResumeState] = useDeleteResumeMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useLoader(deleteResumeState , {loading : "Wait deleting" , success:"Deleted Successfully"}, ()=>{navigate('/')})

    function viewResume(resume){
        dispatch(setFullResume(resume));
        navigate('/templates');
    }    
    function delResume(resume){
        deleteResume(resume.id);
    }
if(isLoading){
    return <div data-testid="loading">Loading</div>
}
if(isError){
    return <div data-testid="error">{error}</div>
}
// if there are no saved resumes
if(data.data.length === 0){
    return <Heading>No Resume Saved</Heading>
}
// if request is success
  if(isSuccess === true) {
    return (
        <Container maxW={'container.xl'}>
    
    <Flex flexWrap={'wrap'} gap={5} justifyContent='center' alignItems='center' my={5} w='full' >
        {data &&
            data.data.map((resume)=><Card key={resume._id} data-testid="resume" bg='white' width='xs'>
            <CardBody>
              <Text fontSize={'md'} fontWeight='bold' textTransform={'uppercase'}>{resume.basicInfo.title}</Text>
              <Text fontSize={'sm'} my={2}>{resume.basicInfo.name}</Text>
              <Flex my={3}>
                  <Button colorScheme={'red'} onClick={()=>delResume(resume)}>Delete</Button>
                  <Button onClick={()=>viewResume(resume)} colorScheme={'green'} variant='outline' mx={3}>View</Button>
              </Flex>
            </CardBody>
           
          </Card>)
        }
    
    
    </Flex>
    
        </Container>
      )
  }
}

export default AllResumes;